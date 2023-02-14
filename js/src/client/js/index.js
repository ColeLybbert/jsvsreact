let addButton = document.getElementById('addButton');
let formInput = document.getElementById('formInput');
let ul = document.getElementById('list');

let list = [];

document.addEventListener('DOMContentLoaded', () => {
    addButton.addEventListener('click', async (e) => {
        e.preventDefault();
        //await this since it has operations
        await toggleItem( formInput.value, true);
        renderList(list);
    })
});
// params : 
// toggleItem : item to add or remove from global array
// addItem : boolean, true to add, false to remove above item
const toggleItem=(toggleItem,addItem)=>{
    //if boolean is true, add something to array, else remove it
    if(addItem){
       return list.push(toggleItem);
    }else{
        return list = list.filter(listItem=>{return listItem !== toggleItem});
        }
}
//render UI from global array
const renderList=()=>{
    //clear the UL element of all LIs
    ul.innerHTML = '';
    //iterate the global list, cast single item as "listItem"
    list.map(listItem=>{
        //create li
        let li = document.createElement('li');
        //change its context
        li.innerHTML = listItem;
        //add delete button
        let deleteButton = document.createElement('button');
        //give it a UNIQUE id it can reference later
        deleteButton.id = listItem;
        //make it not retarded looking
        deleteButton.innerHTML = 'X';
        //add event listener to button so it does stuff, pass it event
        deleteButton.addEventListener('click',async(e)=>{
            //remove item if clicked from global array
            toggleItem(listItem,false);
            //target the parent of the button (the LI) and destroy it
            e.target.parentElement.remove();
        });
        //append delete to li
        li.appendChild(deleteButton);
        //append li to UL
        ul.appendChild(li);
    })
}