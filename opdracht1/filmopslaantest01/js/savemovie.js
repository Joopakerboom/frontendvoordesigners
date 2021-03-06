/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var sectionBlur = document.querySelector('section:nth-of-type(1) div:nth-of-type(2)'); 
var sectionConfirm = document.querySelector('section:nth-of-type(1)>div:nth-of-type(1)'); 
var addedToList = document.querySelector('section>div:nth-of-type(2) button'); 
var button = document.getElementById("addtolistbutton");
var closeButton = document.getElementById("removefromlistbutton"); 
var addedToListNumber = document.querySelector('header nav>img'); 


var listAdd = function () {
	sectionBlur.classList.add('bluranimation');
    sectionConfirm.classList.toggle('confirmanimation');
    
    setTimeout(function(){ 
    sectionBlur.classList.remove('bluranimation');
    sectionConfirm.classList.remove('confirmanimation');
}, 5000);
    
    setTimeout(function(){ 
    button.style.display = 'none';
    closeButton.style.display = 'block';
}, 2000);
    
    document.getElementById("addedremoved").innerHTML = "Added to your list";
    document.getElementById("addedremoved").style.backgroundImage = "url(images/addedcheck.svg)";
    
    addedToListNumber.classList.remove('removedfromlistanimation');
    addedToListNumber.classList.add('addedtolistanimation');
    
    console.log ("added to list");
};

button.addEventListener('click', listAdd);

var listRemove = function () {
	sectionBlur.classList.toggle('bluranimation');
    sectionConfirm.classList.toggle('confirmanimation');
    
    setTimeout(function(){ 
    sectionBlur.classList.remove('bluranimation');
    sectionConfirm.classList.remove('confirmanimation');
}, 5000);
    
    setTimeout(function(){ 
     button.style.display = 'block';
    closeButton.style.display = 'none';
}, 2000);
   
    document.getElementById("addedremoved").innerHTML = "Removed from your list";
    document.getElementById("addedremoved").style.backgroundImage = 'none';
    
    addedToListNumber.classList.remove('addedtolistanimation');
    addedToListNumber.classList.add('removedfromlistanimation');
    
    console.log ("removed from list");
};

closeButton.addEventListener('click', listRemove);

