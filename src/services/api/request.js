import AppConfig from "../../common/app_config";
import wepy from 'wepy'
import * as weapp from '../weapp';
export default async function request(url, params={}, method="POST", isShowError=true,header={},dataType='json') {
    let data={
        url: AppConfig.serverPath + AppConfig.apiPath + url,
        data: params,
        method: method,
        dataType: 'json',
        header:Object.assign({
            'content-type': 'application/json' 
        },header)
    }
    let res;
    try{
        res=await wepy.request(data);
    }catch(e){
        console.log("系统忙，请重试！",e)
        wx.showModal({
            title: '',
            content: '系统忙，请重试！',
            showCancel:false,
        })
        wx.hideLoading()
    }
    res=res.data;
    
    // if(!res.success&&isShowError&&res.errcode!=9001){
    //     wx.showModal({
    //         title: '',
    //         content: res.msg,
    //         showCancel:false,
    //     })
    // }
    return res;
}
