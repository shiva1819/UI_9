var username = document.getElementById("username");
var contact = document.getElementById('contact');
var demo;
var icon = document.getElementById('icon');
var taskCount = document.getElementById('taskCount');

demo = document.getElementById("btnAdd")

demo.addEventListener("click",addTask,false);
editfn();
deletefn();

function addTask(){


	var userVal = username.value;
	var conta = contact.value;

	var CharregEx = /^[a-zA-Z]+$/;
	var NoregEx = /^[0-9]+$/;

	// if(CharregEx.test(userVal)){
	// 	alert('OKay..')
	// }else{
	// 	alert('nope...');
	// }

	// return false;

	if(!CharregEx.test(userVal)){
		alert('Please enter a valid Name...');
		
	}else if(!NoregEx.test(conta)){
		alert('Please enter a valid Contact...');
	}
	else{
	// alert(userVal + "---------" + conta);


	var Tr = document.createElement('tr');
		var Sl_td = document.createElement('td');
		Sl_td.innerText = 2;
		var Name_td = document.createElement('td');
		var contact_td = document.createElement('td');
 		var actions_td = document.createElement('td');

 		Name_td.innerText = userVal;
 		contact_td.innerText = conta;
 		
 	Tr.appendChild(Sl_td);
 	Tr.appendChild(Name_td);
 	Tr.appendChild(contact_td);
 	Tr.appendChild(actions_td);


 	var Edit = document.createElement('button');
 		Edit.setAttribute('type', 'button');
 		Edit.setAttribute('class', 'edit mrBtn');	
 		Edit.innerHTML = "<i class='fa fa-pencil-square'></i>"

 		// var editClass = document.getElementsByClassName('edit');
 		// editClass.onclick = function(){
 		// 	editfn(thi);
 		// }


 	var Del = document.createElement('button');
		Del.setAttribute('type', 'button');
 		Del.setAttribute('class', 'delete');
 		Del.innerHTML = '<i class="fa fa-trash"></i>';

		actions_td.appendChild(Edit);
		actions_td.appendChild(Del);  		



 	console.log(Tr);

 	taskCount.appendChild(Tr);

 	// get Name and Contact
 	// tr, td-sl, td-name, td-contact, td-actions(button-edit-icon, button-delete-icon);

 	editfn();
 	deletefn();

 	username.value = "";
 	contact.value = "";

 	}

 }
var btnupdate = document.getElementById('btnupdate');
function editfn(){
 	var editClass = document.getElementsByClassName('edit');
 	for(var i = 0; i < editClass.length; i++ ){
 		// console.log(edit[i]);
 		editClass[i].onclick = function(){
 			// debugger
 			var editNameVal = this.parentNode.parentNode.children[1];
 			// var slNo = this.parentNode.parentNode.children[0];
 			var ContactVal = this.parentNode.parentNode.children[2];
 				username.value = editNameVal.innerText;
 				contact.value = ContactVal.innerText;		
 				btnupdate.style.display = 'block';
 				btnAdd.style.display = 'none';
 				debugger
 				btnupdate.onclick = function(){
 					editNameVal.innerText = username.value;
 					ContactVal.innerText = contact.value;
					// 	empty the input values and Get add Button back.
 				}
 		}
 	}
}

function deletefn(){
 	var delClass = document.getElementsByClassName('delete');
 	for(var i = 0; i < delClass.length; i++ ){
 		// console.log(edit[i]);
 		delClass[i].onclick = function(){
 			var removeTR = this.parentNode.parentNode;
 				taskCount.removeChild(removeTR);
 			console.log(this.parentNode.parentNode);
 		}
 	}
}
 