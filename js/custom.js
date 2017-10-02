// Init Materialize Select
$(document).ready(function() {
	$('select').material_select();
});

// Preview data
var firstNameInput      = document.getElementById('first-name-input');
var lastNameInput       = document.getElementById('last-name-input');
var emailInput          = document.getElementById('email-input');
var jobTitleInput       = document.getElementById('job-title-input');
var departmentSelect    = document.getElementById('department-select');
var copyButton          = document.getElementById('copyButton');

/* document.getElementById('first-name-prev').innerHTML     = firstNameInput.value;
document.getElementById('last-name-prev').innerHTML      = lastNameInput.value;
document.getElementById('email-prev').innerHTML          = emailInput.value;
document.getElementById('job-title-prev').innerHTML      = jobTitleInput.value; */

function firstNamePrev() {
	document.getElementById('first-name-prev').innerHTML = firstNameInput.value;
	document.getElementById('first-name-copy').innerHTML = firstNameInput.value;
}

function lastNamePrev() {
	document.getElementById('last-name-prev').innerHTML  = lastNameInput.value;
	document.getElementById('last-name-copy').innerHTML  = lastNameInput.value;
}

function emailPrev() {
	document.getElementById('email-prev').innerHTML      = emailInput.value;
	document.getElementById('email-copy').innerHTML      = emailInput.value;
}

function jobTitlePrev() {
	document.getElementById('job-title-prev').innerHTML  = jobTitleInput.value;
	document.getElementById('job-title-copy').innerHTML  = jobTitleInput.value;
}

function departmentPrev() {
    document.getElementById('department-prev').innerHTML = 
    departmentSelect.options[departmentSelect.selectedIndex].text;
}

function checkForInput() {
    var inputFields = 
      firstNameInput.value 
      && lastNameInput.value 
      && emailInput.value 
      && jobTitleInput.value 
      && departmentSelect.value;
	
	if(inputFields !== '') {
		copyButton.classList.remove('disabled');
	} else {
		copyButton.classList.add('disabled');
	}
}

/*????
function validateForm()
{
  var fields = ["name, phone", "compname", "mail", "compphone", "adres", "zip"]

  var i, l = fields.length;
  var fieldname;
  for (i = 0; i < l; i++) {
    fieldname = fields[i];
    if (document.forms["register"][fieldname].value === "") {
      alert(fieldname + " can not be empty");
      return false;
    }
  }
  return true;
}*/

// console.log(firstNameInput.value);

// Clipboard function
//new Clipboard('.btn-flat');
/*new Clipboard('.btn-flat', {
    text: function() {
			var htmlBlock = document.querySelector('.copy-to-clipboard');
			return htmlBlock.innerHTML;
    }
});*/