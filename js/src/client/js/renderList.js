import { removeItem } from "./removeItem";
import { toggleItem } from "./toggleItem";

export const renderList = async (newMarkupList) => {
    console.log(newMarkupList);
    let ul = document.getElementById('list');
    ul.innerHTML = "";
    newMarkupList.forEach(listItem => {
        let li = document.createElement('li');
        let deleteButton = document.createElement('button');
        let a = document.createElement('a');
        deleteButton.appendChild(a);
        a.innerHTML = "Delete";
        li.innerHTML = listItem;
        li.appendChild(deleteButton);
        ul.appendChild(li);
        deleteButton.addEventListener('click', () => {
            confirm('Want to Delete?');
            toggleItem(newMarkupList, listItem, false);
            li.remove();
        })
    });
    return newMarkupList
}