var username = document.getElementById("username");
var contact = document.getElementById('contact');
var demo = document.getElementById("btnAdd");
var icon = document.getElementById('icon');

demo.addEventListener("click",addTask,false);



function addTask(){
	var userVal = username.value;
	var conta = contact.value;

	// alert(userVal + "---------" + conta);


	var Tr = document.createElement('tr');
		var Sl_td = document.createElement('td');
		var Name_td = document.createElement('td');
		var contact_td = document.createElement('td');
 		var actions_td = document.createElement('td');

 		Name_td.innerText = userVal;
 		contact_td.innerText = conta;
 		
 	Tr.appendChild(Sl_td);
 	Tr.appendChild(Name_td);
 	Tr.appendChild(contact_td);
 	Tr.appendChild(actions_td);


 	console.log(Tr);

 	// get Name and Contact
 	// tr, td-sl, td-name, td-contact, td-actions(button-edit-icon, button-delete-icon);



 }
 