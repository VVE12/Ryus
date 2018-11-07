// слайд 1

var modal = document.getElementById('imagemodalone');

var img = document.getElementById('myimgone');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("captionone");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("imagecloseone")[0];

span.onclick = function() { 
    modal.style.display = "none";
}

// слайд 2

var modal = document.getElementById('imagemodaltwo');

var img = document.getElementById('myimgtwo');
var modalImg = document.getElementById("img02");
var captionText = document.getElementById("captiontwo");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("imageclosetwo")[0];

span.onclick = function() { 
    modal.style.display = "none";
}

// слайд 3

var modal = document.getElementById('imagemodalthree');

var img = document.getElementById('myimgthree');
var modalImg = document.getElementById("img03");
var captionText = document.getElementById("captionthree");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("imageclosethree")[0];

span.onclick = function() { 
    modal.style.display = "none";
}

// слайд 4

var modal = document.getElementById('imagemodalfour');

var img = document.getElementById('myimgfour');
var modalImg = document.getElementById("img04");
var captionText = document.getElementById("captionfour");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("imageclosefour")[0];

span.onclick = function() { 
    modal.style.display = "none";
}