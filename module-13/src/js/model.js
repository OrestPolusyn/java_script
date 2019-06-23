const uuidv1 = require("uuid/v1");

import * as storage from "../services/storage";

export default class Model {
    constructor() {
        this.items = this.getBookmark();
    }

    getBookmark() {
        return storage.get();
    }

    addBookmark(value) {
        const obj = {
            id: uuidv1(),
            url: value
        };


        this.items.unshift(obj);
        storage.set(this.items);
        return obj;
    }

    delBookmark(id) {
        this.items = this.items.filter(el => el.id !== id);
        storage.set(this.items);
    }
}