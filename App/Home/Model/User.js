'use strict';

exports.__esModule = true;
/**
 * Model
 * @return
 */
exports.default = class extends THINK.Model {
    init(name, config) {
        super.init(name, config);

        // 是否开启迁移(migrate方法可用)
        //this.safe = true;
        // 数据表字段信息
        this.fields = {
            id: {
                type: 'Integer',
                size: 20,
                primaryKey: true,
                index: true
            },
            username: {
                type: 'text',
                size: 20,
                unique: true,
                required: true
            },
            password: {
                type: 'text',
                size: 20,
                unique: true,
                required: true
            }
        };
        // 数据验证
        this.validations = {};
        // 关联关系
        this.relation = {};
    }
};