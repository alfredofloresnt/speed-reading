
var totWords=countWords();
var timer;
function startReading(){
  var cText = "";
  var count=0;
  var speed=document.getElementById('Speed').value;
  cText = document.getElementById('MyText').value;
  var cWords=[];
  var chunks=document.getElementById('Chunks').value;
  var stentence=[];
  var word="";
  totWords=countWords();


  //// Separate Words ////
  for (var i=0; i<=cText.length;i++){
    if (cText[i]!=' ' && i!=cText.length){
      word+=cText[i];
    }
    else{
      count++;
      cWords[count-1]=word;
      word="";
    }
  }

  //// Update Estimated Time ////
  document.getElementById('Time').innerHTML = estimateTime();

  //// Set Words in Array ////
  var cont=0;
  word="";
  for (var i=1; i<=(cWords.length);i++){
    word+=cWords[i-1]+" ";
    //console.log(i);
    if (i%chunks==0){
      stentence[cont]=word;
      cont++;
      word="";
    }
    else if (i>=cWords.length-(cWords.length%chunks)){
      console.log(cWords.length-(cWords.length%chunks));
      stentence[cont]=word;
      cont++;

      word="";
    }
  }
  console.log(stentence);

  //// Write Text ////
  var c=0;
  clearInterval(timer);
  timer=setInterval(function(){
    document.getElementById('ShowText').innerHTML = stentence[c];
    c++;
    if (c>=stentence.length){
      clearInterval(timer);
    }
  },(60000/speed)*chunks)

  }

function estimateTime(){
  var speed=document.getElementById('Speed').value;
  totWords=countWords();
  var estimateTimeText = document.getElementById('Time').innerHTML = ((totWords/speed)*60).toFixed(2) + ' sec';
  return estimateTimeText;
}

function countWords(){
  var test = document.getElementById('MyText').value;
  var tot=0;
  for (var i=0; i<=test.length;i++){

   if (test[i]!=' ' && i!=test.length){

   }
   else{
     tot++;
   }
  }
  return tot;
}
