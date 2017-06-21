/**
 * Created by admin on 2017/6/21.
 */
export default  stop = {
    bind: function () {
        // mousedown， mousemove， 和 mouseup
        const defaultEvents = ['start', 'move', 'end'];

        var keys = [];
        if (!keys.length) keys = [].concat(defaultEvents);

        this.events = [];
        keys.forEach(key => {
            var event = 'touch' + key;
            this.events.push(event);
            this.el.addEventListener(event, stopDefault);
        });
    },
    unbind: function () {
        this.events.forEach(event => {
            this.el.removeEventListener(event, stopDefault);
        });
    }
}

function stopDefault(e) {
    e.preventDefault();
}

function stopPropagation(e) {
    e.stopPropagation();
}