var x = document.getElementById("form");
var createform = document.createElement('form');
	createform.setAttribute("action","php/contact_me.php");
	createform.setAttribute("method", "post");
x.appendChild(createform);

var heading = document.createElement('h2');
	heading.innerHTML = "Contact Form ";
createform.appendChild(heading);

var line = document.createElement('hr');
createform.appendChild(line);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var namelabel = document.createElement('label');
	namelabel.innerHTML = "Name: ";
createform.appendChild(namelabel);

var inputelement= document.createElement('input');
	inputelement.setAttribute("type", "text");
	inputelement.setAttribute("name", "dname");
createform.appendChild(inputelement);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var emaillabel = document.createElement('label');
	emaillabel.innerHTML = "Email: ";
createform.appendChild(emaillabel);

var emailelement = document.createElement('input');
	emailelement.setAttribute("type", "text")
	emailelement.setAttribute("name", "demail")
createform.appendChild(emailelement);

var emailbreak = document.createElement('br');
createform.appendChild(emailbreak);

var messagelabel = document.createElement('label');
	messagelabel.innerHTML = "Message: ";
createform.appendChild(messagelabel);

var textareaelement = document.createElement('textarea');
	textareaelement.setAttribute("name", "dmessage");
createform.appendChild(textareaelement);

var messagebreak = document.createElement('br')
createform.appendChild(messagebreak);

var submitelement = document.createElement('input');
	submitelement.setAttribute("type", "submit");
	submitelement.setAttribute("name", "dsubmit");
	submitelement.setAttribute("value", "Submit");
createform.appendChild(submitelement);