import api,{login} from '../services/api/index'
import * as weapp from './weapp';
export default async function(e, cb){
    let userInfo = wx.getStorageSync('user_info');
    let detail = e.detail
    // 拒绝授权
    if( !detail.encryptedData ){
        wx.showModal({
            showCancel: false,
            content: '请允许获取用户信息！'
        })
        return
    }
    let res=await checkSession();
    let data = {
        encryptedData: detail.encryptedData,
        iv: detail.iv,
        rawData: detail.rawData,
        signature: detail.signature
    }   
    console.log("userInfo",userInfo)
    
    if( true||!userInfo ){
        userInfo = e.detail.userInfo
        api.userinfo(data).then((res)=>{
            console.log('11userinfo',data,res)
            if( res.success ){
                userInfo.oss_headimgurl=res.result.result.oss_headimgurl
                wx.setStorageSync('user_info', userInfo);
                cb&&cb(userInfo)
            }else{
                wx.showModal({
                    content: res.msg,
                    showCancel: false
                })
            }
        });
    }else{
        cb&&cb(userInfo)
    } 

        
    
}

function checkSession(){
    return new Promise(function(resolve, reject) {
        wx.checkSession({
            success: ()=>{
                resolve(0);      
            },
            fail: ()=>{
                login().then(()=>{
                    resolve(1);
                });
            }
        })
    })
}