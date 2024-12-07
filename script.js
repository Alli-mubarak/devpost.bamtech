const quizContainer = document.querySelector(".quiz-question");
const answers = document.querySelector(".answers");
const scoreInput = document.getElementById("score");
const totalQuestions = document.getElementById("total");

totalQuestions.innerHTML = quizContainer.children.length -1;
let isCorrect ;
let score = 0;
function choose(me){
    isCorrect = false;
    answers.children[0].style.borderColor = "transparent";
    answers.children[1].style.borderColor = "transparent";
    answers.children[2].style.borderColor = "transparent";
    answers.children[3].style.borderColor = "transparent";
    setTimeout(()=>{
    me.style.borderColor = "grey";
},200)
}
function correct(me){
    isCorrect = true;
    answers.children[0].style.borderColor = "transparent";
    answers.children[1].style.borderColor = "transparent";
    answers.children[2].style.borderColor = "transparent";
    answers.children[3].style.borderColor = "transparent";
    setTimeout(()=>{
    me.style.borderColor = "grey";
},200)
}
function submit(){
    if(isCorrect){
        score++
    }
quizContainer.removeChild(quizContainer.children[0]);
console.log(score);
scoreInput.innerHTML = score;
}







const postBox = document.querySelector("#posts");
    
    const refresh = document.getElementById("refresh");
function loadPosts(){
    fetch('http://192.168.159.199:100/posts')
    .then(res=> res.text())
    .then(data =>(
        postBox.innerHTML = data
    ))
    .catch(error =>{
        postBox.innerHTML=`Unable to connect to server, reload page!`;
    })
}
loadPosts();
function updateClock(){
 var now=new Date();
 var hours= now.getHours();
 var minutes=now.getMinutes();
 var seconds=now.getSeconds();
 var day=now.getDate();
 var month=now.getMonth()+1;
 var year=now.getFullYear();
 
 hours= hours < 10 ? '0' + hours:hours;
 minutes= minutes < 10 ? '0'+ minutes:minutes;
 seconds=seconds < 10 ? '0' + seconds:seconds;
 month= month < 10 ? '0' + month:month;
 day= day < 10 ? '0' + day:day;
 
 var time=hours + ':' + minutes + ':' + seconds ;
 var date= day + "/" + month + "/" + year;
 
 document.querySelector('.time').innerHTML= time;
 document.querySelector('.date').innerHTML= date;
}
setInterval(()=>{
    updateClock();
},1000);