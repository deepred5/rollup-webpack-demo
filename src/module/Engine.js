import { util } from '../util/index';

export class Engine {
    constructor(appid) {
        this.id = util.generateId();
        this.appid = appid;
        this.init();
    }

    init() {
        console.log('开始监听小程序啦~~~');
    }
}