let listItems = document.querySelectorAll('#list li');
listItems.forEach(item => {
    if (item.textContent === 'Apples'){
        item.textContent = 'Granny Smith Apples';
    }
});
listItems.forEach (item =>{
    if (item.textContent === 'Oat Milk'){
        item.remove();
    }
});

let Kombucha = document.createElement('li');
Kombucha.innerHTML = "Kombucha";
let list = document.querySelector ('#list');
list.appendChild (Kombucha);

list.textContent = ('');

let newItemlist = ['protein bars', 'almonds', 'peanut butter'];
newItemlist.forEach (item =>{
    let listed = document.createElement('li');
    listed.textContent = item; 
    list.appendChild (listed);
});

Array.from (document.querySelectorAll('#list li')).forEach(item =>{
if (item.textContent === 'almonds') {
    item.classList.add ('important');
}
});
