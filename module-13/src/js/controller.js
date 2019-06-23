
export default class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.on("add", this.addListItem.bind(this));
        this.view.on("remove", this.delListItem.bind(this));
    }

    addListItem(value) {
        const item = this.model.addBookmark(value);
        this.view.addBookmark(item);
    }

    delListItem(id) {
        this.model.delBookmark(id);
        this.view.delBookmark(id);
    }
}