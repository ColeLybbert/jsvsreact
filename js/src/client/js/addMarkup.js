import { renderList } from "./renderList";

export const addMarkup = async (newMarkupList) => {
    let ul = document.getElementById('list');
    ul.innerHTML = "";
    let newList = await renderList(newMarkupList);
    newList.forEach(newListItem => {
        console.log(newListItem);
        ul.appendChild(newListItem);
    });
}