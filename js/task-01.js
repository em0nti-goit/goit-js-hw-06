const categoriesRef = document.querySelector("#categories");
const itemsRef = categoriesRef.querySelectorAll(".item");

console.log(`Number of categories: ${itemsRef.length}\n\n`);

function makeCategoryLog(refs) {
  for (const ref of refs) {
    const headerRef = ref.querySelector("h2");
    const categoriesItems = ref.querySelector("ul").children;
    console.log(
      `Category: ${headerRef.textContent}\nElements: ${categoriesItems.length}\n\n`
    );
  }
}

makeCategoryLog(itemsRef);
