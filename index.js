// const root = document.getElementById('root')
const root = document.querySelector('#root')
const action = document.getElementById('action')
const addBtn = document.getElementById('addBtn')

const strList =['str1', 'str2', 'str3', 'str4', 'str5']

const div = document.createElement('div');
const ol = document.createElement('ol');
// const li = document.createElement('li');
// const li2 = document.createElement('li');
// const p = document.createElement('p');
// const p2 = document.createElement('p');
const removeBtn = document.createElement('button')

strList.forEach((item, index)=>{
const li = document.createElement('li');
const p = document.createElement('p');
if(index % 2===0 && index !==0) li.classList.add('listItem')

p.innerText=item

li.appendChild(p)
ol.appendChild(li)
})

// p.innerText= 'paragraf';
// p2.innerText= 'paragraf2';
removeBtn.innerText= 'remove';

// removeBtn.setAttribute('id', 'removeBtn')
removeBtn.id = 'removeBtn'

// li.appendChild(p)
// li2.appendChild(p2)
// ol.appendChild(li)
// ol.appendChild(li2)
div.appendChild(ol)
root.appendChild(div)
action.appendChild(removeBtn)

li.classList.add('listItem')
li2.classList.add('listItem')

const toggClass = (option) => {
if(option === 'add'){
    root.classList.add('pColor')
}else{
    root.classList.remove('pColor')
}
}

addBtn.addEventListener('click', ()=>{
    toggClass('add')
})
removeBtn.addEventListener('click', ()=>{
    toggClass()
})


