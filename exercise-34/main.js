
const list =document.querySelector('#list')

function add(){
    const newList=document.createElement('li')
    newList.textContent = ('new item');
    list.appendChild(newList)

}

function remove(){
    if (list.lastChild) {
        list.removeChild(list.lastChild);
        
    }
    else{
        alert("have no reset")
    }
}