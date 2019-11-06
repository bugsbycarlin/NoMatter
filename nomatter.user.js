// ==UserScript==
// @name         NoMatter
// @namespace    http://amazon.com
// @version      1.0
// @description  This doesn't matter.
// @author       bugsby
// @match        http*://*.amazon.com/*
// ==/UserScript==

(function() {
  function noMatter(className){
    var elements = document.getElementsByClassName(className);
    for (var i = 0; i < elements.length; i++) {
        var useless = document.createElement("span");
        useless.innerHTML = "None of this matters.";
        elements[i].parentNode.insertBefore(useless, elements[i]);
    }
  }

  noMatter("a-section");

})();

