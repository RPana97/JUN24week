let listItems = document.querySelectorAll('#list li'); //selects all li elements in the id list
listItems.forEach(item => {                            //loops through each list item to change apples to granny smith
    if (item.textContent === 'Apples'){
        item.textContent = 'Granny Smith Apples';
    }
});
listItems.forEach (item =>{                            //loops through each list to remove oat milk
    if (item.textContent === 'Oat Milk'){
        item.remove();
    }
});

let Kombucha = document.createElement('li');           //creates new li
Kombucha.innerHTML = "Kombucha";
let list = document.querySelector ('#list');           //appends kombucha to list
list.appendChild (Kombucha);

list.textContent = ('');                               //clears the list contents

let newItemlist = ['protein bars', 'almonds', 'peanut butter'];  //creates an array
newItemlist.forEach (item =>{
    let listed = document.createElement('li');         //creates a new li element for each item
    listed.textContent = item; 
    list.appendChild (listed);
});

Array.from (document.querySelectorAll('#list li')).forEach(item =>{ //converts items to an array then loops through each and adds important class to almonds
if (item.textContent === 'almonds') {
    item.classList.add ('important');
}
});
