// select tags
let inputStor = document.getElementById('input');
let btnCall = document.getElementById('btn');
let addUll = document.getElementById("addUl")
    // button click event
btnCall.addEventListener('click', addItems);

// ---- use innerHTML to add Chapter -------
function addItems() {
    // catch input value

    let inputValue = inputStor.value;
    console.log(inputValue);

    // on input alert
    if (inputValue == "") {
        alert('Nathing is hare input again')
    } else {
        // create Element

        let addli = document.createElement("li");
        addli.innerHTML =
            `<h3 id='h3' class="flex-grow-1 d-inline-flex p-2">${inputValue}</h3>
        <button onclick="removeEle(this)" type="button" class="btn btn-danger float-end">Remove</button>
        <button onclick="editEle(this)" type="button" class="btn btn-warning float-end me-lg-3">Edit</button>`;
        addli.className = ('list-group-item');
        addli.setAttribute('id', 'moveing');
        let appenlist = addUll.appendChild(addli);
    }
}
// --- Edit function----
function editEle(currElement) {
    let createInput = document.createElement('input');
    let previEle = currElement.previousElementSibling;
    let previEle2 = previEle.previousElementSibling;

    if (currElement.textContent == 'Edit') {

        console.log(previEle.previousElementSibling);
        currElement.textContent = 'Done';

        createInput.type = ('input');
        createInput.id = ('input2');
        createInput.className = ('form-control mb-3');
        // createInput.placeholder = inputStor.value;
        createInput.value = 'New text';
        currElement.parentElement.replaceChild(createInput, previEle.previousElementSibling);
    } else {
        let newInpurVal = document.getElementById('input2')
        let newInpurValue = newInpurVal.value;
        currElement.textContent = 'Edit';
        let newTextTag = document.createElement('h3');
        newTextTag.className = 'flex-grow-1 d-inline-flex p-2';
        newTextTag.textContent = newInpurValue;
        currElement.parentElement.replaceChild(newTextTag, previEle.previousElementSibling);
    }
}
// // remove function

function removeEle(currElement) {
    currElement.parentElement.remove();
}

// ---- use create Element to add Chapter 1 But edit now work -------

// function addItems() {
//     // catch input value
//     let inputValue = inputStor.value;
//     console.log(inputValue);

//     // on input alert
//     if (inputValue == "") {
//         alert('Nathing is hare input again')
//     } else {
//         // create Element
//         let addli = document.createElement("li");
//         addli.textContent = inputValue;
//         addli.className = ('list-group-item');
//         addli.setAttribute('id', 'moveing');
//         let appenlist = addUll.appendChild(addli);

//         // create remove button
//         let btn2 = document.createElement('button');
//         btn2.textContent = 'Remove';
//         // create class
//         btn2.setAttribute('class', 'btn btn-primary float-end');
//         addli.appendChild(btn2)

//         // btn2.setAttribute('id', 'onRemove');
//         btn2.setAttribute('onclick', 'removeEle(this)');

//         // let callRemoveFun = onRemove.addEventListener('click', removeEle);
//     }

// }
// //remove function
// function removeEle(currElement) {
//     currElement.parentElement.remove();
// }

// 2 bug '' value work & placeholder