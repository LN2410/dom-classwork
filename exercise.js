//exercise 3 When a user clicks the "ALERT" button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
const button = document.querySelectorAll(".btn")

let buttonArray = Array.from(button)

buttonArray.map((el) => {
    el.addEventListener("click", () => {
    alert("Hello World")
})
})

//Exersise 4 - When a user clicks the "Add some text" button, a new paragraph should be added below the buttons that says "Read more below."
// function myFunction() {

//     let addTextButton = document.createElement("p");
//     let text = document.createTextNode("Read more below");
//     addTextButton.appendChild(text);
//     document.getElementById("section").appendChild(addTextButton);

// }

// const buttonTwo = document.getElementById("btn")

// buttonTwo.addEventListener("click", myFunction)



//option two of doing exercise 4

const buttonTwo = document.getElementById("btn")

buttonTwo.addEventListener("click", () => {
    let addTextButton = document.createElement("p");
    let text = document.createTextNode("Read more below");
    addTextButton.appendChild(text);
    document.getElementById("section").appendChild(addTextButton);

})

//exercise 5 change all links to be bigger
const links = document.getElementById("link")
links.addEventListener("click", large)

function large() {

    Array.from(document.getElementsByTagName("a")).forEach(element => {
        element.style.fontSize = "30px";
    });
}