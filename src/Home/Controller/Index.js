/**
 * Controller
 * @return
 */

export default class extends THINK.Controller {
    //构造方法
    init(http){
        //调用父类构造方法
        super.init(http);
    }
    //URI定位到该控制器,如果该控制器不存在某个方法时自动调用
    __empty(){
        return this.json('can\'t find action');
    }
    //控制器默认方法
    indexAction () {
        // return this.display();
        return this.redirect('http://127.0.0.1:8080')
    }

    loginAction () {
        let username = this.param('username');
        let password = this.param('password');

        if (username == 'ls' && password == '123') {
            return this.json(true)
        } else {
            return this.json(false)
        }
    }
}