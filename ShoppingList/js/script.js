// console.dir(document);

// const odd = document.querySelector('li:nth-child(odd)');
// const even = document.querySelector('li:nth-child(even)');


// for (let i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = '#ccc';
    
// }

const form = document.querySelector('#addForm');
const itemList = document.querySelector('#items');
const filter = document.querySelector('#filter');


form.addEventListener('submit', addItem);

//Delete evenet
itemList.addEventListener('click', removeItem);

filter.addEventListener('keyup', filterItem);

//add item
function addItem(e) {
    e.preventDefault();

    //Get input value
    const newItem = document.querySelector('#item').value;

    //Create new li element
    const li = document.createElement('li');
    //Add class
    li.className = 'list-group-item list-group-item-light';
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //Create delete button element
    const deleteBtn = document.createElement('button');

    //Add class to delete button
    deleteBtn.className= 'btn btn-light btn-sm float-right delete';

    //Append text node
    deleteBtn.appendChild(document.createTextNode('X'))

    //Append button to li
    li.appendChild(deleteBtn);

    //Append li to list
    itemList.appendChild(li);
}

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        const li = e.target.parentElement;
        itemList.removeChild(li);
    }
}

function filterItem(e) {
    const text = e.target.value.toLowerCase();

    const items = itemList.getElementsByTagName('li');

    Array.from(items).forEach(function(item){
        const itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
}