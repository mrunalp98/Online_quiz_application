//Quiz
function startQuiz()
{  
    var myObj;
    var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            var data= JSON.parse(this.responseText);
            myObj = data;
        
    var txt ="";
    console.log(myObj.length);
      
    var template =[];
    var opt; 
    var num= 1; 
    var ans=[];
    var x ;
    for (index = 0; index < myObj.length ; index++) {
        ans=[];
        num=1;
        for ( var i in myObj[index].options)
        {
            opt =  myObj[index].options[i];
            ans.push(
                `<label class="container">
                  <input type="radio" name="question${index+1}" value="${num}">
                  ${opt.id} :
                  ${opt.option}
                  <span class="checkmark"></span>
                </label><br>`
              );
            num += 1;
        }
        template.push(
            `<div class="components" id="quizComponent${index+1}"><div class="ques"  name="questions${index+1}">${index + 1} . ${myObj[index].name}</div>
            <div class="options" name="options${index+1}"> ${ans.join('')} </div></div>`
          );
      }
    document.getElementById('build').innerHTML = template.join('');
}
    
};
xmlhttp.open("GET", "data.json", true);
xmlhttp.send();

}
startQuiz();

// Review Answers
function reviewAnswers(){

  var radioButtons, checkedRadio;
  var allRadioButtons;
  var element, divElement , node, bodyElement;
  var isCheckedRadio=false;
  var txt="";
  var num=1;
  var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        var data= JSON.parse(this.responseText);
        myObj = data;
      
  for (index = 0; index < myObj.length ; index++) {
    divName = "question" + num.toString();
    radioButtons = document.getElementsByName(divName);
    allRadioButtons = radioButtons.length;
    isCheckedRadio = false;
    for (var i = 0; i < allRadioButtons; i++) {
        if (radioButtons[i].checked) {
            isCheckedRadio = true;   
        }
    }
    if(isCheckedRadio)
    {
        txt += "Q" + num.toString() + " . Answered\n";
    }
    else{
      txt += "Q" + num.toString() + " . Not Answered\n"
    }
    num += 1;
  }
  alert(txt);
}
    
};
xmlhttp.open("GET","data.json", true);
xmlhttp.send(); 

}


// Result

function checkAnswers(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        var data= JSON.parse(this.responseText);
        myObj = data;
     var temp;
     var num=1 , score=0;
     var  divName= "";
     var correctAns=[];
     var radioButtons, checkedRadio;
     var allRadioButtons;
     var isCheckedRadio = false;
    for(var j =0 ; j < myObj.length; j++)
    {
        correctAns[j]=0;
    }

    for (index = 0; index < myObj.length ; index++) {
        divName = "question" + num.toString();
        radioButtons = document.getElementsByName(divName);
        allRadioButtons = radioButtons.length;
        isCheckedRadio = false;
        for (var i = 0; i < allRadioButtons; i++) {
            if (radioButtons[i].checked) {
                checkedRadio = i + 1 ;
                isCheckedRadio =true;
            }
        }
        if( isCheckedRadio  && myObj[index].answer === checkedRadio.toString()){
            score += 1;
            correctAns[index] = 1;
        }
        num += 1;
    }
    alert("You have answered " +  score  + " out of 5 questions correctly");
    showResults.apply(null,correctAns);
    }
        
    };
    xmlhttp.open("GET", "data.json", true);
    xmlhttp.send(); 
 }


 function showResults(){
 
     var template =[];
     var node, para, element;
     console.log(arguments);
     var score = 0;
     for(i=0;i<arguments.length ; i++)
          score += arguments[i];
     var element ;
     element = document.getElementById("result");
     element.innerHTML = `<p class='results' align='center'>Your score : ${score.toString()}</p>`;
     element = document.getElementById("btn");
     element.parentNode.removeChild(element);
     element = document.getElementById("review");
     element.parentNode.removeChild(element);
    for(var j =0 ; j< myObj.length; j++)
    {  
        elementName = "quizComponent" + (j+ 1).toString();
        if(arguments[j] ==0){
            document.getElementById(elementName).style.color="red";
        }
        else{
            document.getElementById(elementName).style.color="green";
        }
        para = document. createElement("p");
        node = document.createTextNode("Explanation : " + myObj[j].explanation);
        para.appendChild(node);
       
        element = document. getElementById(elementName);
        element. appendChild(para);
    }
    document.getElementById("reload").innerHTML = "<i>Reload your page to load the quiz again </i>";

 }
