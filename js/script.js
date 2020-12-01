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
        //get li element
        let deleteEle = e.target.parentNode.parentNode.parentNode
        
        //get ul element
        let pNode = deleteEle.parentElement
        // console.log(pNode)
        // console.log(deleteEle)

        //remove the child element li from its parent element(ul)
        pNode.removeChild(deleteEle)
        
    }


    //add or remove class strike from the li item
    function strikeItem(e) {
        let strikeEle = e.target.parentNode

        let pNode = strikeEle.parentNode

        if (pNode.className == 'strike' ) {           
            pNode.classList.remove('strike')
            e.target.classList.toggle('fade-out')
            console.log(e.target.className)

        }
        else{
            pNode.classList.add('strike')
            e.target.classList.toggle('fade-out')
            console.log(e.target.className)
        }   
    }

    //clear all lists when clear button is clicked
    clear.addEventListener('click', () => {
        ul.innerHTML = ''
        input.value = ''
    })

})

