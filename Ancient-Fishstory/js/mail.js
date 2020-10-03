"use strict";

/*********************************************************************
 ***
 *Original Author: Patraic Kelly                                       *
 *Date Created:9/4/2020                                               *
 *Version:                                                             *
 *Date Last Modified:9/4/2020                                         *
 *Modified by:PK                                                       *
 *Modification log: Added mail js placeholder                             *
 *** ******************************************************************** */



var $ = function (id) {
		return document.getElementById(id);
};

var signUp = function () {
	var emailAddress1 = $("email_address1").value;
	var emailAddress2 = $("email_address2").value;
	var firstName = $("first_name").value;
	var isValid = true;

	if (emailAddress1 == "") {
		$("email_address1_error").firstChild.nodeValue = "Please enter an email.";
		isValid = false;
	} else {
		$("email_address1_error").firstChild.nodeValue = "";
	}

	if (emailAddress2 == "") {
		$("email_address2_error").firstChild.nodeValue = "This field is required.";
		isValid = false;
	} else if (emailAddress1 != emailAddress2) {
		$("email_address2_error").firstChild.nodeValue = "Please re-enter the same address."
			"This entry must equal first entry.";
		isValid = false;
	} else {
		$("email_address2_error").firstChild.nodeValue = "";
	}

	// validate the first name entry
	if (firstName == "") {
		$("first_name_error").firstChild.nodeValue = "This field is required.";
		isValid = false;
	} else {
		$("first_name_error").firstChild.nodeValue = "";
	}

	// submit the form if all entries are valid
	if (isValid) {
		$("email_form").submit();
	}
};

window.onload = function () {
	$("join_list").onclick = signUp;
	$("email_address1").focus();
};