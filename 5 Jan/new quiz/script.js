let questions = [
  {
    q: "What does HTML stand for?",
    o: ["Hyper Text Markup Language","High Text Machine","Hyperlinks Text"],
    a: 0
  },
  {
    q: "Which is not a JS framework?",
    o: ["React","Angular","Django"],
    a: 2
  }
];

let index = 0;
let time = 60;

function login(){
  window.location.href="quiz.html";
}

function loadQ(){
  let q = questions[index];
  document.getElementById("question").innerText = q.q;
  let optBox = document.getElementById("options");
  optBox.innerHTML = "";
  q.o.forEach((opt,i)=>{
    let b = document.createElement("button");
    b.innerText = opt;
    optBox.appendChild(b);
  });
  document.getElementById("progressBar").style.width =
    ((index+1)/questions.length)*100 + "%";
}

function nextQ(){
  index++;
  if(index < questions.length){
    loadQ();
  } else {
    alert("Quiz Completed 🎉");
  }
}

setInterval(()=>{
  if(time>0){
    time--;
    document.getElementById("timer").innerText="⏱ "+time;
  }
},1000);

loadQ();
