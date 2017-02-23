/**
 * Controller
 * @return
 */

export default class extends THINK.Controller {
    //构造方法
    init(http){
        //调用父类构造方法
        super.init(http);

        this.UserModel = THINK.model('Home/User',{});
    }
    //URI定位到该控制器,如果该控制器不存在某个方法时自动调用
    __empty(){
        return this.json('can\'t find action');
    }
    //控制器默认方法
    async indexAction () {
        //let users = await this.UserModel.add({username: 'ls', password: '123'});
        //console.log('......', users);
        // return this.display();
        return this.redirect('http://127.0.0.1:8080')
    }

    async loginAction () {
        let username = this.param('username');
        let password = this.param('password');

        let checkLogin = await this.UserModel.where({username: username, password: password}).count();

        if (checkLogin > 0) {
            let userInfo = {username: username, logintime: +new Date};
            this.session('user', userInfo);
            return this.success('成功', userInfo)
        } else {
            return this.fail('用户名或密码不正确')
        }
    }
}