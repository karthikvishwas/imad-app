console.log('Loaded!');
//Change the text of the main-text div
var element=document.getElementById('main-text');
element.innerHTML ='New value';

//move th image
var img=document.getElementById('img');
img.onclick=function (){
 img.style.marginLeft='100ps';
};