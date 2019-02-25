class wxStorageManager {
    constructor (key) {
        this.key = key;
    }
    getData () {
        let list = wx.getStorageSync(this.key);
        if (!list) {
            list = [];
        }
        return list;
    }
    unshiftData (data = {}) {
        const list = this.getData();
        list.unshift(data);
        this.save(list);
    }
    hasData (field, value) {
        const list = this.getData();
        for (var i = 0; i < list.length; i++) {
            if (list[i][field] === value) {
                return true;
            }
        }
        return false;
    }
    removeData (field, value) {
        const list = this.getData();
        for (let i = 0; i < list.length; i++) {
            if (list[i][field] === value) {
                list.splice(i, 1);
                break;
            }
        }
        this.save(list);
    }
    save (data) {
        wx.setStorage({
            key: this.key,
            data
        })
    }
}

export {wxStorageManager}