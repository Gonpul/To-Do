
//We Create our variable
let myForm = document.getElementById('myForm');
let getValue = document.getElementById('getValue');
let myList = document.getElementById('myList');


myForm.addEventListener("submit", (element) =>{

 
        element.preventDefault()
        // alert("Thanks for clicking the form")
        //console.log(getValue.value);
        createItem(getValue.value)
    
  
})

function createItem(x){

    //This is my Self code.. The Condition
    if(getValue.value == ""){

    }else{
        let myUL = `<li>${x} <button onclick="deleteItem(this)" id="insideBtn">Delete</button></li>`
        myList.insertAdjacentHTML("beforeend", myUL);
    
        //After Submiting The Item, Clear The Input Field
        getValue.value = "";
        //After You clear the input, make it to focus directly.
        getValue.focus();
    }   
}

//To Delete The Item if You done with the task
function deleteItem(elementToDelete){
    elementToDelete.parentElement.remove();
}
