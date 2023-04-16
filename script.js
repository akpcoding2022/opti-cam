const form = document.querySelector('form');
const date = document.querySelector('#date');
date.value = new Date().toISOString().slice(0, 10);
const name = document.querySelector('#name');
const age = document.querySelector('#age');
const male = document.querySelector('#male');
const female = document.querySelector('#female');
const abha = document.querySelector('#abha');
const photo = document.querySelector('#photo');
const list = document.querySelector('#list');

function openDialog() {
    var src = event.target.src;
    var dialog = document.getElementById('dialog');
    var dialogContent = document.getElementById('dialog-content');
    const img = document.createElement('img');
    img.src = src
    dialogContent.appendChild(img)
    dialog.show();
}

function closeDialog() {
    var dialog = document.getElementById('dialog');
    var dialogContent = document.getElementById('dialog-content');
    dialogContent.innerHTML = "";
    dialog.close();
}

function clear() {
    name.value = null;
    age.value = undefined;
    male.checked = true;
    abha.value = null;
    photo.value = null;
}

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const itemDate = date.value;
    const itemName = name.value.trim()
    const itemGender = male.checked ? "Male" : female.checked ? "Female" : "Not Selected";
    const itemAge = age.value;
    const itemAbha = abha.value;
    const itemPhoto = photo.files.length ? URL.createObjectURL(photo.files[0]) : undefined;
    if (!itemDate || !itemName || !itemAge || !itemPhoto) {
        alert('Please fill in all fields!');
        return;
    }

    const item = document.createElement('li');
    const img = document.createElement('img');
    img.src = itemPhoto;
    img.kk = itemPhoto;
    img.alt = itemName;
    img.height = "40";
    img.width = "40";
    img.onclick = openDialog
    item.appendChild(img);

    const content = document.createElement('div');
    content.innerHTML = `<div class="name">${itemName.toUpperCase()}</div>
                      <div class="age">${itemGender} / ${itemAge}years</div>
                      <div class="age">ABHA:${itemAbha}</div>
                      <div class="date">${new Date(itemDate).toString().substring(0, 15)}</div> 
                      `;
    item.appendChild(content);

    const button = document.createElement('button');
    button.textContent = 'Delete';
    button.addEventListener('click', function () {
        item.remove();
    });
    item.appendChild(button);
    list.appendChild(item)
    clear();
});
