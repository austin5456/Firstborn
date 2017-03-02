"use strict";

// defining the vars by ID
var btn = document.getElementById("pst");
var list = document.getElementById("users");
var textArea = document.getElementById("txt");
var usertxtid = document.getElementById("usertxt");

// clearSpace = Is called at the end of "myFunc" to clear the values of textarea + input (usernm +comnt)
var clearSpace = function() {
    textArea.value = "";
    usertxtid.value = "";
};

/* (main comment) :
create "li"-> add "p"-> add textnode->get input from textarea value.
attach the "li" with its tail to the "ul" in the comment section

(username):
 crate "span" -> assign the span a CLASS-> add textnode -> get node input from username value.
 insert "span BEFORE the text from the main comment text -> css will make it pretty.
 (else):
if ul has more than 6 lines do not post, instead alert.
*/
function Myfunc() {

    if (list.childElementCount < 6) {

        var usertxt = document.getElementById("usertxt").value;
        var spn = document.createElement("span");
        var nd = document.createTextNode(usertxt);
        var paragraph = document.createElement("p");
        var innertxt = textArea.value;
        var tnode = document.createTextNode(innertxt);
        var element = document.createElement("li");
        spn.setAttribute("class", "un");
        element.appendChild(paragraph).appendChild(tnode);
        element.insertBefore(spn, paragraph).appendChild(nd);
        document.getElementById("users").appendChild(element);
        clearSpace();
    }

    else {

        alert("Comment section is full.");
    }
}
var attRemoval = function () {

    this.className = "";
};

//make sure there is an input in the username area, if not add class .error(changes colors).
function userCheck() {

    if (usertxtid.value == "") {
        usertxtid.setAttribute("class", "error");
        usertxtid.addEventListener("click", attRemoval);
    }

    else {
        Myfunc();
    }
}

btn.addEventListener("click", userCheck);

