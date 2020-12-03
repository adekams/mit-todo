const form = document.querySelector('form')
const input = document.querySelector('#input')
const btn = document.querySelector('#btn')

const deleteBtn = document.querySelectorAll('.delete')
const editBtn = document.querySelectorAll('.edit')
const strikeBtn = document.querySelectorAll('.check')

const clear = document.querySelector('.clear-list')
const container = document.querySelector('.container')
let ul = document.querySelector('ul')


form.addEventListener('submit', e => {
    e.preventDefault();
    
    //add a new li item to the ul
    function addItem(item){
        item = input.value
        let li = document.createElement('LI')
        li.innerHTML = `
        <h4>
            <span class='item-name'>${item}</span>
            <span class='options'>
                <i class="far fa-check-circle check"></i> 
                <i class="far fa-edit edit"></i> 
                <i class="far fa-times-circle delete"></i>   
            </span>
        </h4>    
        `
        ul.appendChild(li)
        input.value = ''
    }
    
    //if input value is empty or null
    if (!input.value) {        
        alert('Input cannot be empty')
    }

    else {
        addItem()       
    }

    ul.addEventListener('click', option)
    
    function option(e) {
        // console.log(e.target.className)
        if (e.target.classList.contains('delete')) {
        //    console.log(e) 
           deleteItem(e)
        }
        else if (e.target.classList.contains('check')) {
            // console.log(e) 
            strikeItem(e)
        }

        
    }


    //delete the li item when it's delete icon is clicked
    function deleteItem(e) {
        //get li element and remove the li element
        let deleteEle = e.target.parentNode.parentNode
        let deleted = deleteEle.parentNode
        
        deleted.remove()       
    }


    //add or remove class strike from the li item
    function strikeItem(e) {
        let striked = e.target.parentNode
        let strikedOut = striked.parentNode

        if (e.target.classList.contains('check')) {           
            strikedOut.classList.toggle('strike')
            e.target.classList.toggle('fade-out')
        }  
    }

    //clear all lists when clear button is clicked
    clear.addEventListener('click', () => {
        ul.innerHTML = ''
        input.value = ''
    })

})

