import { toggleItem } from "./toggleItem";
import { renderList } from "./renderList";

let addButton = document.getElementById('addButton');
let formInput = document.getElementById('formInput');
export let list = [];

document.addEventListener('DOMContentLoaded', () => {
    addButton.addEventListener('click', async () => {
        event.preventDefault();
        let formInputValue = formInput.value; 
        let newMarkupList = await toggleItem(list, formInputValue, true);
        renderList(newMarkupList);
    })
});

export const resetArray = async (newMarkupList) => {
    list = newMarkupList;
}