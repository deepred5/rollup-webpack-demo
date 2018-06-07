import { Engine } from './module/Engine';

let monitor = null;

export default {
    init: function (appid) {
        if (!appid || monitor) {
            return;
        }
        monitor = new Engine(appid);
    }
}