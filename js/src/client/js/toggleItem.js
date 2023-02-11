export const toggleItem = async (list, formInputValue, addItem) => {
    if (addItem) {
        list.push(formInputValue);
    } else {
        let newList = list.filter(listItem => listItem !== formInputValue);
        list = {...newList};
        console.log(list);
    }
    return list;
}