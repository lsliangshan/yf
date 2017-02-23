'use strict';

exports.__esModule = true;

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Controller
 * @return
 */

exports.default = class extends THINK.Controller {
    //构造方法
    init(http) {
        //调用父类构造方法
        super.init(http);

        this.UserModel = THINK.model('Home/User', {});
    }
    //URI定位到该控制器,如果该控制器不存在某个方法时自动调用
    __empty() {
        return this.json('can\'t find action');
    }
    //控制器默认方法
    indexAction() {
        var _this = this;

        return (0, _asyncToGenerator3.default)(function* () {
            //let users = await this.UserModel.add({username: 'ls', password: '123'});
            //console.log('......', users);
            // return this.display();
            return _this.redirect('http://127.0.0.1:8080');
        })();
    }

    loginAction() {
        var _this2 = this;

        return (0, _asyncToGenerator3.default)(function* () {
            let username = _this2.param('username');
            let password = _this2.param('password');

            let checkLogin = yield _this2.UserModel.where({ username: username, password: password }).count();

            if (checkLogin > 0) {
                let userInfo = { username: username, logintime: +new Date() };
                _this2.session('user', userInfo);
                return _this2.success('成功', userInfo);
            } else {
                return _this2.fail('用户名或密码不正确');
            }
        })();
    }
};