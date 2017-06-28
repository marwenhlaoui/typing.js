function Typing(string,type_speed=100,blink_speed=300,backspace_speed=100,mainspanid="text",blinkerid="blinker"){
   return function(){
      let sin=string;
      let sout="";
      let mainspan=document.getElementById(mainspanid);
      let time_order=0;
      let blinkercontrol;
      function startblinker(){
          blinkercontrol=setInterval(function(){
                            let blinker=document.getElementById(blinkerid);
                            if(blinker.style.visibility==""){
                                    blinker.style.visibility="hidden";
                            }
                           else{
                                    blinker.style.visibility="";
                            }
                           },blink_speed);
      }
     function stopblinker(){
              clearInterval(blinkercontrol);
              let blinker=document.getElementById(blinkerid);
              blinker.style.visibility="";

     }
for(let i=0;i<sin.length+1;i++){

     if(sin[i]=="~"){
      let pause_det=calctime(i);
      pause(i,pause_det[1]);
      i=pause_det[0];

     }
     else if(sin[i]=="@"){

       next_line(i);

     }
     else if(sin[i]=="*"){
     let sen_back=wordsreplace(i)
       back_space(i,sen_back[1],backspace_speed);
       i=sen_back[0];
     }
     else if(sin[i]==undefined){

         setTimeout(function(){
         startblinker()
       },time_order);
     }
     else{

       put(i)


     }


}

function calctime(a){
  a++;
  let int=""
  while(sin[a]!="~"){
   int=int+sin[a];
   a++;


  }
  let time=Number(int);
  return [a,time]

}
function wordsreplace(a){
  a++;
  let line=""
  while(sin[a]!="*"){
   line=line+sin[a];
   a++;

  }
  return [a,line]

}


function back_space(a,text,speed){
  let ln=text.length-1;
  let ac=a-1;

  while(ln>=0){

      time_order=time_order+speed;

   if(text[ln]==sin[ac]){
    if(text[ln]=="@"){



     setTimeout(function(){

            console.log("why2");
           sout=sout.substring(0, sout.length -4);
           mainspan.innerHTML=sout;
            },time_order)

 }



  else{
                   setTimeout(function(){


                  console.log(text[ln]+" "+sout);
                   sout=sout.substring(0, sout.length - 1);
                   mainspan.innerHTML=sout;
   },time_order)}

  }

  ln--;
  ac--;



}

}




function next_line(a){
  setTimeout(function(){
     sout=sout+"<br>";
       mainspan.innerHTML=sout;


     },time_order)


}
function pause(a,time){
  setTimeout(function(){
   startblinker();
 },time_order)
 setTimeout(function(){
  stopblinker();
},time_order+time)
time_order=time_order+time;
}



function put(a){
time_order=time_order+(type_speed)
setTimeout(function(){
   sout=sout+sin[a];
     mainspan.innerHTML=sout;
   },time_order)

  }







}

}
