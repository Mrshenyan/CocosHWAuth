import {HuaweiIdAuthParamsHelper, HuaweiIdAuthManager} from '@hmscore/hms-jsb-account'; 
const {ccclass, property} = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {


    start () {
    }

    onClickIDToken(){
        // 构造参数 
        let signInOption = new HuaweiIdAuthParamsHelper().setIdToken().setProfile().build();
        // HuaweiIdAuthManager.getAuthApi方法返回huaweiIdAuth对象，调用huaweiIdAuth.getSignInIntent方法 
        HuaweiIdAuthManager.getAuthApi().getSignInIntent(signInOption).then((result)=>{ 
            // 登录成功，获取用户的华为帐号信息 
            console.info("signIn success"); 
            console.info(JSON.stringify(result)); 
            console.info("ID Token:" + result.data.idToken); 
        }).catch((error)=>{ 
            //登录失败 
            console.error("signIn fail"); 
            console.error(JSON.stringify(error)); 
        });

    }

    onClickAuthCode(){
        // 构造参数 
        let signInOption = new HuaweiIdAuthParamsHelper().setAuthorizationCode().setProfile().build();
    
        // HuaweiIdAuthManager.getAuthApi方法返回huaweiIdAuth对象，调用huaweiIdAuth.getSignInIntent方法 
        HuaweiIdAuthManager.getAuthApi().getSignInIntent(signInOption).then((result)=>{ 
            // 登录成功，获取用户的华为帐号信息 
            console.info("signIn success"); 
            console.info(JSON.stringify(result)); 
            console.info("昵称:" + result.data.displayName); 
            console.info("头像url:" + result.data.photoUriString); 
        }).catch((error)=>{ 
            //登录失败 
            console.error("signIn fail"); 
            console.error(JSON.stringify(error)); 
        });
    }

    onClickSilentSignIn(){
        // 构造参数 
        let signInOption = new HuaweiIdAuthParamsHelper().setAuthorizationCode().setAccessToken().setIdToken().setId().setProfile().build();
        // HuaweiIdAuthManager.getAuthApi方法返回huaweiIdAuth对象，调用huaweiIdAuth.silentSignIn方法 
        HuaweiIdAuthManager.getAuthApi().silentSignIn(signInOption).then((result)=>{ 
            //登录成功，获取用户的华为帐号信息 
            console.info("signIn success"); 
            console.info("昵称:" + result.data.displayName); 
            console.info("头像url:" + result.data.photoUriString); 
            console.info(JSON.stringify(result)); 
        }).catch((error)=>{ 
            //登录失败 
            console.error("signIn fail"); 
            console.error(JSON.stringify(error)); 
        });
    }

    onClickSignOut(){
        // HuaweiIdAuthManager.getAuthApi方法返回huaweiIdAuth对象，调用huaweiIdAuth.signOut方法 
        HuaweiIdAuthManager.getAuthApi().signOut().then((result)=>{ 
            //帐号退出成功 
            console.info("signOut success"); 
            console.info(JSON.stringify(result)); 
        }).catch((error) => { 
            //帐号退出失败 
            console.error("signout fail"); 
            console.error(JSON.stringify(error)); 
        });
    }

    onClickCancleAuth(){
        // HuaweiIdAuthManager.getAuthApi方法返回huaweiIdAuth对象，调用huaweiIdAuth.cancelAuthorization方法 
        HuaweiIdAuthManager.getAuthApi().cancelAuthorization().then((result)=>{ 
            //帐号取消授权成功 
            console.info("cancelAuthorization success"); 
            console.info(JSON.stringify(result)); 
        }).catch((error) => { 
            //帐号取消授权失败 
            console.error("cancelAuthorization fail"); 
            console.error(JSON.stringify(error)); 
        });
    }

    onClickCall(){
        jsb.reflection.callStaticMethod('org/cocos2dx/javascript/AppActivity','TestJSCallJava','()V')
    }
    
}
