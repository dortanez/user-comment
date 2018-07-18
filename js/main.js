function submission() {

	var name = document.getElementById("nameInput").value;
	var comment = document.getElementById("commentInput").value;

	var newH2 = document.createElement("h2")
	var myH2 = document.createTextNode("Username:" + " " + name)
	newH2.appendChild(myH2)

	var newP = document.createElement("p")
	var myP = document.createTextNode("Comment:" + " " + comment)
	newP.appendChild(myP)

	var toDiv = document.getElementById("submit")
	toDiv.appendChild(newH2)
	toDiv.appendChild(myP)


}