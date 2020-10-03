"use strict";
/*********************************************************************
 ***
 *Original Author: Patraic Kelly                                       *
 *Date Created:9/4/2020                                               *
 *Version:                                                             *
 *Date Last Modified:9/4/2020                                         *
 *Modified by:                                                         *
 *Modification log:                                                    *
 ***
 ******************************************************************** */

var $ = function(id) { return document.getElementById(id); };

var toggle = function() {
  var link = this;                             // the clicked a tag
  var h2 = link.parentNode;                    // h2 tag that contains a tag     
  var div = h2.nextElementSibling;  

  // toggle div visibility by adding or removing a class
  if (div.hasAttribute("class")) { 

    div.removeAttribute("class");
      //div.className = "";
  } else { 

    div.setAttribute("class", "open");
    //  div.className = "open";
  } 
};

window.onload = function() {
  // get the a tags
  var faq = $("faq");
  var linkElements = faq.getElementsByTagName("a");
  
  // attach event handler for each a tag	    
  for (var i = 0; i < linkElements.length; i++ ) {
    linkElements[i].onclick = toggle;
  }    
};
  