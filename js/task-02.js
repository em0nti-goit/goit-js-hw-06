const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

function createListContent(arr) {
  return arr.map((elem) => {
    let node = document.createElement("li");
    node.className = "item";
    node.textContent = elem;
    return node;
  });
}

const list = document.querySelector("#ingredients");
list.append(...createListContent(ingredients));
