let count = 1;
function printBegining(){
  if (count == 1){
    document.getElementById("begining").src = "begining1.jpg"
    var text = document.getElementById('text-begining');
    let name = prompt("What's your name?");
    var str = 'Hi ' + name +'! Where are you going?'
    var arr = [];
    for(var i=0;i<str.length;i++){
      arr.push(str[i])
    }
    var text1 = '';
    var num = 0;
    var timer = setInterval(function (){
      if(num < arr.length){
        text1 += arr[num];
        text.innerHTML = text1
        num++;
      } else {
        clearInterval(timer)
      }
    },50)
    count = count + 1
  } else if(count == 2) {
    document.getElementById("begining").src = "begining2.jpg"
    document.getElementById("text-begining").style.top = "210px";
    var text = document.getElementById('text-begining');
    var str = "I'm going to get my Eleme."
    var arr = [];
    for(var i=0;i<str.length;i++){
      arr.push(str[i])
    }
    var text1 = '';
    var num = 0;
    var timer = setInterval(function (){
      if(num < arr.length){
        text1 += arr[num];
        text.innerHTML = text1
        num++;
      } else {
        clearInterval(timer)
      }
    },50)
    count = count + 1
  } else if(count == 3){
    document.getElementById("begining").src = "begining2.jpg"
    document.getElementById("text-begining").style.top = "180px";
    var text = document.getElementById('text-begining');
    var str = "I've been working for the whole morning in the classroom. I'm so tired."
    var arr = [];
    for(var i=0;i<str.length;i++){
      arr.push(str[i])
    }
    var text1 = '';
    var num = 0;
    var timer = setInterval(function (){
      if(num < arr.length){
        text1 += arr[num];
        text.innerHTML = text1
        num++;
      } else {
        clearInterval(timer)
      }
    },50)
    count = count + 1
  } else if(count == 4){
    document.getElementById("begining").src = "corridor.jpg"
    document.getElementById("text-begining").style.fontSize = "50px";

    document.getElementById("text-begining").style.top = "300px";
    document.getElementById("text-begining").style.left = "600px";

    var text = document.getElementById('text-begining');
    var str = "5 mins later..."
    var arr = [];
    for(var i=0;i<str.length;i++){
      arr.push(str[i])
    }
    var text1 = '';
    var num = 0;
    var timer = setInterval(function (){
      if(num < arr.length){
        text1 += arr[num];
        text.innerHTML = text1
        num++;
      } else {
        clearInterval(timer)
      }
    },50)
    count = count + 1
} else if(count == 5){
  document.getElementById("begining").src = "classroom.JPG"

  let removeNextButton = document.getElementById("nextButton");
  removeNextButton.remove();
  let removeText = document.getElementById("text-begining");
  removeText.remove();
}
}

let count1 = 1;
function printClassroom() {
  if (count1 == 1) {
    var text = document.getElementById('text-classroom');
    document.getElementById("text-classroom").style.backgroundColor = "white";
    document.getElementById("text-classroom").style.left = "200px";
    document.getElementById("text-classroom").style.top = "350px";
    document.getElementById("begining").src = "classroom-omg.jpg";



    var str = "***? What's going on here?"
    var arr = [];
    for(var i=0;i<str.length;i++){
      arr.push(str[i])
    }
    var text1 = '';
    var num = 0;
    var timer = setInterval(function (){
      if(num < arr.length){
        text1 += arr[num];
        text.innerHTML = text1
        num++;
      } else {
        clearInterval(timer)
      }
    },50)
    count1 = count1 + 1

  }
}
