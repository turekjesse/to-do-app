// selectors
const addBtn = document.getElementById("add-item")
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

// event listeners
itemInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        e.preventDefault()        
        addBtn.click()
    }
}, false)

itemList.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
    }
}, false)