import request from "./request.js";
import * as weapp from '../weapp';
import appConfig from '../../common/app_config'

let api={}; 
api.login=function(data){
    let header = {
        'appid': appConfig.appid
    }
    data.scene = appConfig.scene
    return request('miniapp/api/login/login', data, 'POST', true, header);
}
// 注册会员接口
api.registerMember = function (data, isShowLoading = true) {
    return apiRequest('event20190401/api/index/regist-member', data, "POST", isShowLoading);
}
// 注册会员接口
api.registerMember2 = function (data, isShowLoading = true) {
    return apiRequest('event20190401/api/index/regist-member2', data, "POST", isShowLoading);
}
// 获取手机号码
api.loginPhonenumber = function (data, isShowLoading = true) {
    return apiRequest('miniapp/api/login/phone-number', data, "POST", isShowLoading);
}
//提交用户信息
api.userinfo = function(data, isShowLoading=true){
    return apiRequest('miniapp/api/login/user-info',data,"GET",isShowLoading);
}
// 扫码
api.scan = function(data,isShowLoading=false){
    return apiRequest('miniapp/api/qr/scan',data,"GET",isShowLoading);
}
//首页
api.home = function(isShowLoading=true){
    return apiRequest('miniapp/api/home',{},"GET",isShowLoading);
}
//留言内容
api.comment = function(data, isShowLoading=false){
    return apiRequest('miniapp/api/vote-activity/comment',data,"GET",isShowLoading);
}
//投票
api.vote = function(data, isShowLoading=true){
    return apiRequest('miniapp/api/vote-activity/vote',data,"GET",isShowLoading);
}
//点赞
api.voted = function(data, isShowLoading=false){
    return apiRequest('miniapp/api/vote-activity/voted',data,"POST",isShowLoading);
}
//加载更多留言
api.subcomments = function(data, isShowLoading=true){
    return apiRequest('miniapp/api/vote-activity/sub-comments',data,"GET",isShowLoading);
}
//本期PK
api.voteActivity = function(data, isShowLoading=false){
    return apiRequest('miniapp/api/vote-activity',data,"GET",isShowLoading);
}
//评论列表
api.commentsList = function(data, isShowLoading=false){
    return apiRequest('miniapp/api/vote-activity/comments-list',data,"GET",isShowLoading);
}
//往期PK
api.oldList = function(data, isShowLoading=true){
    return apiRequest('miniapp/api/vote-activity/old-list',data,"GET",isShowLoading);
}

//话题列表
api.topic = function(data, isShowLoading=false){
    return apiRequest('miniapp/api/post/topic-list',data,"GET",isShowLoading);
}
//话题详细
api.topicdetail = function(data, isShowLoading=true){
    return apiRequest('miniapp/api/post/topic',data,"GET",isShowLoading);
}
//参与话题内容列表
api.topiclist = function(data, isShowLoading=false){
    return apiRequest('miniapp/api/post/list',data,"GET",isShowLoading);
}
//话题post
api.topicPostadd = function(data, isShowLoading=false){
    return apiRequest('miniapp/api/post/add',data,"POST",isShowLoading);
}
//topic点赞
api.topicvote = function(data, isShowLoading=true){
    return apiRequest('miniapp/api/post/vote',data,"POST",isShowLoading);
}

//话题参与人评论信息
api.postContent = function(data, isShowLoading=true){
    return apiRequest('miniapp/api/post/content',data,"GET",isShowLoading);
}
//话题参与人评论列表
api.postCommentslist = function(data, isShowLoading=true){
    return apiRequest('miniapp/api/post/comments-list',data,"GET",isShowLoading);
}
//话题参与人评论点赞
api.postVote = function(data, isShowLoading=true){
    return apiRequest('miniapp/api/post/vote',data,"GET",isShowLoading);
}
//话题参与人被评论
api.postComment = function(data, isShowLoading=true){
    return apiRequest('miniapp/api/post/comment',data,"GET",isShowLoading);
}

//获取阿里OSS签名
api.uploadSign = function(data, isShowLoading=false){
    return apiRequest('miniapp/api/upload-sign',data,"GET",isShowLoading);
}

//产品列表
api.productList = function(data, isShowLoading=true){
    return apiRequest('miniapp/api/product/list',data,"GET",isShowLoading);
}
//产品信息
api.productInfo = function(data, isShowLoading=true){
    return apiRequest('miniapp/api/product/info',data,"GET",isShowLoading);
}
//产品留言列表
api.productComments = function(data, isShowLoading=true){
    return apiRequest('miniapp/api/product/comments',data,"GET",isShowLoading);
}
//产品留言POST
api.productPostComment = function(data, isShowLoading=true){
    return apiRequest('miniapp/api/product/comment',data,"post",isShowLoading);
}
//产品留言内容点赞
api.productCommentlLike = function(data, isShowLoading=true){
    return apiRequest('miniapp/api/product/comment-like',data,"post",isShowLoading);
}

//获取验证码
api.getCode = function(data, isShowLoading=true){
    return apiRequest('miniapp/api/sms/code',data,"GET",isShowLoading);
}
//提交用户信息
api.userReg = function(data, isShowLoading=true){
    return apiRequest('miniapp/api/user/reg',data,"POST",isShowLoading);
}
//获取用户信息
api.userInfo = function(data, isShowLoading=true){
    return apiRequest('miniapp/api/user/info',data,"GET",isShowLoading);
}
//编辑用户信息
api.userEditinfo = function(data, isShowLoading=true){
    return apiRequest('miniapp/api/user/edit-info',data,"POST",isShowLoading);
}

//任务列表
api.pointChannel = function(data, isShowLoading=true){
    return apiRequest('miniapp/api/point/channel',data,"POST",isShowLoading);
}

//邀请小程序二维码
api.userQr = function(data, isShowLoading=true){
    return apiRequest('miniapp/api/user/qr',data,"GET",isShowLoading);
}

//文章列表
api.articleList = function(data, isShowLoading=true){
    return apiRequest('miniapp/api/article/list',data,"GET",isShowLoading);
}
//文章阅读
api.articleRead = function(data, isShowLoading=false){
    return apiRequest('miniapp/api/article/read',data,"GET",isShowLoading);
}
//文章详细页
api.articleContent = function(data, isShowLoading=true){
    return apiRequest('miniapp/api/article/content',data,"GET",isShowLoading);
}

//商城列表
api.skuList = function(data, isShowLoading=true){
    return apiRequest('miniapp/api/sku/list2',data,"GET",isShowLoading);
}
//积分兑换
api.skuExchange = function(data, isShowLoading=true){
    return apiRequest('miniapp/api/sku/exchange',data,"GET",isShowLoading);
}
// 兑换记录
api.userExchangelist = function(data, isShowLoading=true){
    return apiRequest('miniapp/api/user/exchange-list',data,"GET",isShowLoading);
}
// 新手赠送能量
api.pointFirst = function(data, isShowLoading=false){
    return apiRequest('miniapp/api/point/first',data,"GET",isShowLoading);
}
// 积分日志
api.userPointlog = function(data, isShowLoading=true){
    return apiRequest('miniapp/api/user/point-log',data,"GET",isShowLoading);
}

// 徽章
api.achievements = function(data, isShowLoading=false){
    return apiRequest('miniapp/api/user/achievements',data,"GET",isShowLoading);
}

// 生成海报
api.createPoster = function(data, isShowLoading=true){
    return apiRequest('event20190401/api/index/create-poster',data,"GET",isShowLoading);
}
// 用户信息
api.getCampaignUserInfo = function(data, isShowLoading=true){
    return apiRequest('event20190401/api/index/get-campaign-user-info',data,"GET",isShowLoading);
}
/*
*
*  5月份活动接口
*
*/
// 获取用户信息
api.getCampaignUserInfoMay = function(data, isShowLoading=true){
    return apiRequest('event20190509/api/microapp/get-campaign-user-info',data,"GET",isShowLoading);
}
// 生成海报
api.createPosterMay = function(data, isShowLoading=true){
    return apiRequest('event20190509/api/microapp/create-poster',data,"GET",isShowLoading);
}
// 会员注册
api.registMemberMay = function(data, isShowLoading=true){
    return apiRequest('event20190509/api/microapp/regist-member',data,"POST",isShowLoading);
}
// 发起者 会员注册
api.registMemberMay2 = function(data, isShowLoading=true){
    return apiRequest('event20190509/api/microapp/regist-member2',data,"POST",isShowLoading);
}
// 发起人 获取手机号验证自己是否是会员
api.isMember = function(data, isShowLoading=true){
    return apiRequest('event20190509/api/microapp/is-member',data,"POST",isShowLoading);
}
// 参与人 获取手机号验证自己是否是会员
api.isMemberInvitation = function(data, isShowLoading=true){
    return apiRequest('event20190509/api/microapp/is-member4-invitation',data,"POST",isShowLoading);
}
/*
*
*  6月份活动接口
*
*/
// 获取用户信息
api.getCampaignUserInfoJune = function(data, isShowLoading=true){
    return apiRequest('event20190611/api/microapp/get-campaign-user-info',data,"GET",isShowLoading);
}
// 生成海报
api.createPosterJune = function(data, isShowLoading=true){
    return apiRequest('event20190611/api/microapp/create-poster',data,"GET",isShowLoading);
}
// 会员注册
api.registMemberJune = function(data, isShowLoading=true){
    return apiRequest('event20190611/api/microapp/regist-member',data,"POST",isShowLoading);
}
// 发起者 会员注册
api.registMemberJune2 = function(data, isShowLoading=true){
    return apiRequest('event20190611/api/microapp/regist-member2',data,"POST",isShowLoading);
}
// 发起人 获取手机号验证自己是否是会员
api.isMemberJune = function(data, isShowLoading=true){
    return apiRequest('event20190611/api/microapp/is-member',data,"POST",isShowLoading);
}
// 参与人 获取手机号验证自己是否是会员
api.isMemberJuneInvitation = function(data, isShowLoading=true){
    return apiRequest('event20190611/api/microapp/is-member4-invitation',data,"POST",isShowLoading);
}
// 纪录中奖用户的联系方式接口
api.recordWinJune = function(data, isShowLoading=true){
    // event20190509/api/taobao/record-member-rank-info
    return apiRequest('event20190611/api/microapp/record-member-rank-info',data,"POST",isShowLoading);
}
/*
*
*  7月份活动接口
*
*/
api.getCampaignUserInfoJuly = function(data, isShowLoading=true){
    return apiRequest('event20190708/api/microapp/get-campaign-user-info',data,"GET",isShowLoading);
}
// 生成海报
api.createPosterJuly = function(data, isShowLoading=true){
    return apiRequest('event20190708/api/microapp/create-poster',data,"GET",isShowLoading);
}
// 会员注册
api.registMemberJuly = function(data, isShowLoading=true){
    return apiRequest('event20190708/api/microapp/regist-member',data,"POST",isShowLoading);
}
// 发起者 会员注册
api.registMemberJuly2 = function(data, isShowLoading=true){
    return apiRequest('event20190708/api/microapp/regist-member2',data,"POST",isShowLoading);
}
// 发起人 获取手机号验证自己是否是会员
api.isMemberJuly = function(data, isShowLoading=true){
    return apiRequest('event20190708/api/microapp/is-member',data,"POST",isShowLoading);
}
// 参与人 获取手机号验证自己是否是会员
api.isMemberJulyInvitation = function(data, isShowLoading=true){
    return apiRequest('event20190708/api/microapp/is-member4-invitation',data,"POST",isShowLoading);
}
// 纪录中奖用户的联系方式接口
api.recordWinJuly = function(data, isShowLoading=true){
    // event20190509/api/taobao/record-member-rank-info
    return apiRequest('event20190708/api/microapp/record-member-rank-info',data,"POST",isShowLoading);
}
/*
*
*  8月份活动接口
*  endTime 8-31
*/
api.getCampaignUserInfoAug = function(data, isShowLoading=true){
    return apiRequest('event20190805/api/microapp/get-campaign-user-info',data,"GET",isShowLoading);
}
// 生成海报
api.createPosterAug = function(data, isShowLoading=true){
    return apiRequest('event20190805/api/microapp/create-poster',data,"GET",isShowLoading);
}
// 会员注册
api.registMemberAug = function(data, isShowLoading=true){
    return apiRequest('event20190805/api/microapp/regist-member',data,"POST",isShowLoading);
}
// 发起者 会员注册
api.registMemberAug2 = function(data, isShowLoading=true){
    return apiRequest('event20190805/api/microapp/regist-member2',data,"POST",isShowLoading);
}
// 发起人 获取手机号验证自己是否是会员
api.isMemberAug = function(data, isShowLoading=true){
    return apiRequest('event20190805/api/microapp/is-member',data,"POST",isShowLoading);
}
// 参与人 获取手机号验证自己是否是会员
api.isMemberAugInvitation = function(data, isShowLoading=true){
    return apiRequest('event20190805/api/microapp/is-member4-invitation',data,"POST",isShowLoading);
}
// 纪录中奖用户的联系方式接口
api.recordWinAug = function(data, isShowLoading=true){
    // event20190509/api/taobao/record-member-rank-info
    return apiRequest('event20190805/api/microapp/record-member-rank-info',data,"POST",isShowLoading);
}
/*
*
*  9月份活动接口
*  Time 9.19--9.29 24:00 
*/
api.getCampaignUserInfoSep = function(data, isShowLoading=true){
    return apiRequest('event20190909/api/microapp/get-campaign-user-info',data,"GET",isShowLoading);
}
// 生成海报
api.createPosterSep = function(data, isShowLoading=true){
    return apiRequest('event20190909/api/microapp/create-poster',data,"GET",isShowLoading);
}
// 会员注册
api.registMemberSep = function(data, isShowLoading=true){
    return apiRequest('event20190909/api/microapp/regist-member',data,"POST",isShowLoading);
}
// 发起者 会员注册
api.registMemberSep2 = function(data, isShowLoading=true){
    return apiRequest('event20190909/api/microapp/regist-member2',data,"POST",isShowLoading);
}
// 发起人 获取手机号验证自己是否是会员
api.isMemberSep = function(data, isShowLoading=true){
    return apiRequest('event20190909/api/microapp/is-member',data,"POST",isShowLoading);
}
// 参与人 获取手机号验证自己是否是会员
api.isMemberSepInvitation = function(data, isShowLoading=true){
    return apiRequest('event20190909/api/microapp/is-member4-invitation',data,"POST",isShowLoading);
}
// 纪录中奖用户的联系方式接口
api.recordWinSep = function(data, isShowLoading=true){
    // event20190509/api/taobao/record-member-rank-info
    return apiRequest('event20190909/api/microapp/record-member-rank-info',data,"POST",isShowLoading);
}
/*
*
*  11月份活动接口
*  Time 9.19--9.29 24:00 
*/
api.getCampaignUserInfoNov = function(data, isShowLoading=true){
    return apiRequest('event20191102/api/microapp/get-campaign-user-info',data,"GET",isShowLoading);
}
// 生成海报
api.createPosterNov = function(data, isShowLoading=true){
    return apiRequest('event20191102/api/microapp/create-poster',data,"GET",isShowLoading);
}
// 会员注册
api.registMemberNov = function(data, isShowLoading=true){
    return apiRequest('event20191102/api/microapp/regist-member',data,"POST",isShowLoading);
}
// 发起者 会员注册
api.registMemberNov2 = function(data, isShowLoading=true){
    return apiRequest('event20191102/api/microapp/regist-member2',data,"POST",isShowLoading);
}
// 发起人 获取手机号验证自己是否是会员
api.isMemberNov = function(data, isShowLoading=true){
    return apiRequest('event20191102/api/microapp/is-member',data,"POST",isShowLoading);
}
// 参与人 获取手机号验证自己是否是会员
api.isMemberNovInvitation = function(data, isShowLoading=true){
    return apiRequest('event20191102/api/microapp/is-member4-invitation',data,"POST",isShowLoading);
}
// 纪录中奖用户的联系方式接口
api.recordWinNov = function(data, isShowLoading=true){
    // event20190509/api/taobao/record-member-rank-info
    return apiRequest('event20191102/api/microapp/record-member-rank-info',data,"POST",isShowLoading);
}
/*
*
*  12月份活动接口
*  Time 9.19--9.29 24:00 
*/
api.getCampaignUserInfoDec = function(data, isShowLoading=true){
    return apiRequest('event202001/api/microapp/get-campaign-user-info',data,"GET",isShowLoading);
}
// 生成海报
api.createPosterDec = function(data, isShowLoading=true){
    return apiRequest('event202001/api/microapp/create-poster',data,"GET",isShowLoading);
}
// 会员注册
api.registMemberDec = function(data, isShowLoading=true){
    return apiRequest('event202001/api/microapp/regist-member',data,"POST",isShowLoading);
}
// 发起者 会员注册
api.registMemberDec2 = function(data, isShowLoading=true){
    return apiRequest('event202001/api/microapp/regist-member2',data,"POST",isShowLoading);
}
// 发起人 获取手机号验证自己是否是会员
api.isMemberDec = function(data, isShowLoading=true){
    return apiRequest('event202001/api/microapp/is-member',data,"POST",isShowLoading);
}
// 参与人 获取手机号验证自己是否是会员
api.isMemberDecInvitation = function(data, isShowLoading=true){
    return apiRequest('event202001/api/microapp/is-member4-invitation',data,"POST",isShowLoading);
}
// 纪录中奖用户的联系方式接口
api.recordWinDec = function(data, isShowLoading=true){
    // event20190509/api/taobao/record-member-rank-info
    return apiRequest('event202001/api/microapp/record-member-rank-info',data,"POST",isShowLoading);
}



/*-- 活动接口--*/
// 信息
api.campaignGameInfo = function(data, isShowLoading=true){
    return apiRequest('event20180522/api/game/info',data,"GET",isShowLoading);
}
// 上传图片
api.campaignGameUpload = function(data, isShowLoading=false){
    return apiRequest('event20180522/api/game/upload',data,"GET",isShowLoading);
}
// 获取上传图片信息
api.campaignGameWork = function(data, isShowLoading=false){
    return apiRequest('event20180522/api/game/work',data,"GET",isShowLoading);
}
// 助力
api.campaignGameVote = function(data, isShowLoading=true){
    return apiRequest('event20180522/api/game/vote',data,"POST",isShowLoading);
}
// 抽奖
api.campaignGameExchange = function(data, isShowLoading=true){
    return apiRequest('event20180522/api/game/exchange',data,"GET",isShowLoading);
}
// 提交信息
api.campaignGamePrizeinfo = function(data, isShowLoading=true){
    return apiRequest('event20180522/api/game/prize-info',data,"POST",isShowLoading);
}
// 奖品信息
api.campaignGamePrizelist = function(data, isShowLoading=true){
    return apiRequest('event20180522/api/game/prize-list',data,"POST",isShowLoading);
}


/*-- 开团API --*/
// 信息
api.groupInfo = function(data, isShowLoading=true){
    return apiRequest('miniapp/api/groupon/info',data,"GET",isShowLoading);
}
// 创建团
api.groupCreateteam = function(data, isShowLoading=true){
    return apiRequest('miniapp/api/groupon/create-team',data,"POST",isShowLoading);
}
// 团信息
api.groupTeaminfo = function(data, isShowLoading=true){
    return apiRequest('miniapp/api/groupon/team-info',data,"GET",isShowLoading);
}
// 加入团
api.groupTeamjoin = function(data, isShowLoading=true){
    return apiRequest('miniapp/api/groupon/join',data,"POST",isShowLoading);
}
// 开团列表
api.groupTeamlist = function(data, isShowLoading=true){
    return apiRequest('miniapp/api/groupon/team-list',data,"GET",isShowLoading);
}
// 我的团
api.groupMyteam = function(data, isShowLoading=true){
    return apiRequest('miniapp/api/groupon/my-team',data,"GET",isShowLoading);
}
// 团信息
api.groupMemberinfo = function(data, isShowLoading=true){
    return apiRequest('miniapp/api/groupon/member-info',data,"GET",isShowLoading);
}
// 立即支付
api.groupContinuepay = function(data, isShowLoading=true){
    return apiRequest('miniapp/api/groupon/continue-pay',data,"GET",isShowLoading);
}
// formId提交
api.formId = function(data, isShowLoading=false){
    return apiRequest('miniapp/api/form/add',data,"POST",isShowLoading);
}
// 获取能量
api.grouponPoint = function(data, isShowLoading=false){
    return apiRequest('miniapp/api/groupon/point',data,"Get",isShowLoading);
}





var loginPromis;
async function apiRequest(url, params={}, method="POST", isShowLoading=true, isShowError=true){
    if(isShowLoading) {
        wx.showLoading({
            title:'加载中',
            mask:true
        });
    }
    let res;
    let userInfo=wx.getStorageSync('userInfo');
    console.log('userInfo', userInfo)
    if(!userInfo){
        if(!loginPromis){        
            loginPromis=login(url, params, method, isShowError);
        }
        userInfo=await loginPromis;
    }
    
    let header={
        'authorization':'Bearer '+userInfo.token,
        'appid':appConfig.appid
    }
    if(!loginPromis){
        loginPromis=null; 
    }
    

    res=await request(url, params, method, isShowError,header);
    if(res.errcode==9001||res.errcode==41002||res.errcode==41001||res.errcode==41008){
        wx.removeStorageSync('userInfo');
        res=await apiRequest(url, params, method, isShowLoading, isShowError);
    } 

    if( res.errcode==41009 ){
        wx.removeStorageSync('user_info');
        wx.hideLoading()
        wx.navigateTo({
            url: 'login'
        })
        return {}
    }
    if(isShowLoading){
        wx.hideLoading();
    }
    return res;
}

export async function login(url, params, method, isShowError){
    let res=await weapp.login();
    res=await api.login(res);
    console.log("login")
    try {
        wx.setStorageSync('userInfo', res.result);
    } catch (e) {    

    }
    // res=await apiRequest(url, params, method, isShowError);
    return res.result;
}

export default api;
