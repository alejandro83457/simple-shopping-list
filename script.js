const submitBtn = document.querySelector(".submit-button");
const inputBox = document.querySelector("input");
const list = document.querySelector(".list");

submitBtn.onclick = () => {
    // Creating list item.
    let listItem = document.createElement("li");
    let listButton = document.createElement("button");

    // Adding event handler for delete button.
    // Note that it deletes its parent nuking itself in the process.
    listButton.textContent = "Delete";
    listButton.onclick = () => listButton.parentElement.remove();

    // Set list item text and append it to out list.
    listItem.textContent = inputBox.value;
    listItem.appendChild(listButton);
    list.appendChild(listItem);

    // Clears and focuses for next input.
    inputBox.value = "";
    inputBox.focus();
};
