document.getElementById("searchInput").addEventListener("keyup", function(event) {
    let searchQuery = event.target.value.toLowerCase();
    let allNamesDOMCollection = document.getElementsByClassName('name');
    
    for (let counter = 0; counter < allNamesDOMCollection.length; counter++) {
        const currentName = allNamesDOMCollection[counter].textContent.toLowerCase();
        
        if (currentName.includes(searchQuery)) {
            allNamesDOMCollection[counter].style.display = "block";
        } else {
            allNamesDOMCollection[counter].style.display = "none";
        }
    }
});
const addbtn = document.getElementById("addBtn")
const addName = document.querySelector("#addName")
const namesList = document.querySelector("#results")

function addNewName(){
const newName = document.createElement('li')
newName.innerHTML = addName.value
newName.classList.add("name")
namesList.appendChild(newName)
}


addbtn.addEventListener('click', ()=>{
    addNewName()
})
  
  
  
