
import EventEmitter from "../services/event-emitter";

export default class View extends EventEmitter {
    constructor() {
        super();
        this.list = document.querySelector(".list");
        this.form = document.querySelector(".js-form");
        this.inputUrl = this.form.querySelector('input[type="url"]');

        this.form.addEventListener("submit", this.handleAdd.bind(this));

    }

    handleAdd(event) {
        event.preventDefault();

        const { value } = this.inputUrl;
        if (value === "") return;
        this.emit("add", value);
    }

    createBookmark(obj) {
        console.log(obj);

        const listItem = document.createElement("li");
        listItem.classList.add("list-item");
        listItem.dataset.id = obj.id;


        const link = document.createElement("a");
        link.href = obj.url;
        link.textContent = obj.url;

        const button = document.createElement("button");
        button.classList.add("delete");
        button.classList.add("close-btn");
        button.dataset.action = "del";
        button.setAttribute("title", "удалить");

        listItem.append(link, button);
        this.appendEventListners(listItem);
        return listItem;
    }
    addBookmark(obj) {
        const item = this.createBookmark(obj);

        this.form.reset();
        this.list.appendChild(item);
    }
    appendEventListners(item) {
        const removeBtn = item.querySelector('[data-action="del"]');
        removeBtn.addEventListener("click", this.handleRemove.bind(this));
    }
    handleRemove({ target }) {
        const parent = target.closest(".list-item");
        this.emit('remove', parent.dataset.id);
    }

    delBookmark(id) {
        const item = this.list.querySelector(`[data-id="${id}"]`);
        this.list.removeChild(item);
    }
}