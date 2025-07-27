const form = document.getElementById("addForm");
const itemList = document.querySelector("#items");
const searchInput = document.getElementById("filter");

form.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
searchInput.addEventListener("input", filterItems)

function filterItems() {
    const searchItem = searchInput.value.toLowerCase();
    const items = itemList.querySelectorAll("li")
    items.forEach(item => {
        const itemName = item.firstChild.textContent.toLowerCase();
        if (itemName.indexOf(searchItem) !== -1) {
            item.style.display = "flex"
        } else {
            item.style.display = "none"
        }
    })

}

// remove item
function removeItem(e) {
    if (e.target.classList.contains("delete")) {
        if (confirm("Are you sure?")) {
            const li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// add item
function addItem(e) {
    e.preventDefault();

    const itemValue = document.getElementById("item").value;
    console.log(itemValue)

    // create new li element
    const li = document.createElement("li");

    // add class to li
    li.className = "list-group-item";

    // append text node to li
    li.appendChild(document.createTextNode(" " + itemValue + " "))

    // create delete btn
    const deleteBtn = document.createElement("button");

    // add class to btn
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";

    // append text node to btn
    deleteBtn.appendChild(document.createTextNode("X"))

    // append btn to li
    li.appendChild(deleteBtn)

    // append li to ul
    itemList.appendChild(li)
}
