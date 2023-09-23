// selectors
const itemInput = document.getElementById("item-input")
const itemList = document.getElementById("item-list")

// functions

const addItem = () => {
    if (itemInput.value !== "") {
        let li = document.createElement("li")
        let span = document.createElement("span")
        li.innerHTML = itemInput.value
        itemList.appendChild(li)
        li.appendChild(span)
        itemInput.value = ""
    }
}
