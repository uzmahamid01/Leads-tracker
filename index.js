let myLeads = []
//let and const to declare variables
//const cant be reassigned 
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("list-el")

console.log(ulEl)

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    //clear the input field
    inputEl.value = ""
    renderLeads()

})


function renderLeads() {
    let listItems = ""

    for (let i = 0; i < myLeads.length; i++) {
        // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
        //create the element
        // const li = document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.append(li)
        // listItems += `<a target='_black' href="${myLeads[i]}"><li>${myLeads[i]}</li></a>`;  
        listItems += `
        <li>
            <a target='_blank' href="${myLeads[i]}">${myLeads[i]}</a>
        </li>`; 

    }
    ulEl.innerHTML = listItems
    
}



