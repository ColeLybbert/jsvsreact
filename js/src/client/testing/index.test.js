/**
 * @jest-environment jsdom
 */

import { addItem } from "../js/addItem";
import { removeItem } from "../js/removeItem";
import { renderList } from "../js/renderList";

describe('Todo List Tests', () => {
  test('addButton adds forminput to list', async () => {
    let list = ["Dishes", "Laundry"];
    let formInputValue = "Shower";
    let output = await addItem(list, formInputValue);
    expect(output).toEqual(["Dishes", "Laundry", "Shower"]);
  });
  test('Remove Button removes checked tasks from list', async () => {
    let list = ["Dishes", "Laundry"]
    let formInputValue = "Laundry";
    let output = await removeItem(list, formInputValue);
    expect(output).toEqual(["Dishes"]);
  });
  test('Output proper list markup after add or remove todo', async () => {
    let list = ["Dishes", "Laundry"];
    let output = await renderList(list);
    expect(output.length).toBe(2);
  })
});
