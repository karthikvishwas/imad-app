//counter code
var button=document.getElementById('counter');


button.onclick=function(){
  
  //create a request object
  var request= new XMLHttpRequest();
  //capture the responce and store it in a variable
  request.onreadystatechange=function (){
      if(request.readystate===XMLHttpRequest.DONE){
          //take actionn
          if(request.status===200){
            var counter =  request.responceText;
             var span=document.getElementById('count');
             span.innerHTML=counter.toString();
          }
      }
      // nt done yet
  };
 //make the request
 request.open('GET','http://karthikelc6.imad.hasura-app.io/counter',true);
 request.send(null);
};