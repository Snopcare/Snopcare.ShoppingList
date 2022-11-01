var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul"); 
var litems = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}
function createListElement() {

	// Function to create list items
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

  // Function to create the delete button and eventlistener to delete LI and button when clicked
	var btn = document.createElement("button");
     	btn.appendChild(document.createTextNode("Delete"));
 		li.appendChild(btn);
 		btn.addEventListener('click', function deleteliandbtn(event) {
 			li.remove();
 		})

// Eventlistener with function to line-through the created listitems
	li.addEventListener('click', function LitemsClick(event) {
		li.classList.toggle('done');

})
}
// Function which adds the Delete button and what happens if clicked = is deleted.
function addDelBtn(parentNode) {
		var delBtn = parentNode.appendChild(document.createElement('button'));
		delBtn.innerHTML = 'Delete';
		delBtn.onclick = function(){
			this.parentElement.remove();
}}
// Function which adds a list item after clicking the button
function addListAfterClick() {
if (inputLength() > 0 ) {
	createListElement();
	}
}
// Function which adds a list item after clicking enter, in JS key code for enter is 13.
function addListAfterKeypress(event) {
if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

// Eventlistener with function to line-through the existing line items in the html file.
litems.forEach(item => {
  item.addEventListener('click', function ExistingLitemsClick(event) {
    item.classList.toggle('done');
  });
});

// Loop used to add delbtn everytime there is a new lineitem.
for(var i=0; i<litems.length; i++) {
	addDelBtn(litems[i]);
}