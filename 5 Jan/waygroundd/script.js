/* ===== AUTH ===== */
function login(){
  let u=username.value;
  let p=password.value;
  if(!u||!p) return alert("Fill all fields");
  localStorage.setItem("user",u);
  location.href="quiz.html";
}

function signup(){
  if(!su_user.value||!su_pass.value) return alert("Fill all fields");
  alert("Signup successful");
  location.href="login.html";
}

/* ===== PROTECT QUIZ ===== */
if(location.pathname.includes("quiz")){
  if(!localStorage.getItem("user")) location.href="login.html";
}

/* ===== QUIZ DATA ===== */
let questions=[
 {q:"HTML stands for?",o:["Hyper Text Markup Language","High Text","Hyperlinks"],a:0},
 {q:"CSS used for?",o:["Logic","Styling","Database"],a:1},
 {q:"JS keyword?",o:["int","var","define"],a:1},
 {q:"JSON parse?",o:["parse()","JSON.parse()","toObj()"],a:1},
 // add more if you want
];

let i=0,time=60,attempted=0,correct=0,wrong=0,answered=false;

function loadQ(){
  answered=false;
  question.innerText=questions[i].q;
  options.innerHTML="";
  questions[i].o.forEach((op,idx)=>{
    let d=document.createElement("div");
    d.className="option";
    d.innerText=op;
    d.onclick=()=>checkAns(d,idx);
    options.appendChild(d);
  });
}

function checkAns(el,idx){
  if(answered) return;
  answered=true;
  attempted++;
  let ca=questions[i].a;
  options.children[ca].classList.add("correct");
  if(idx===ca) correct++; else {wrong++; el.classList.add("wrong")}
  stats.innerText=`Attempted:${attempted} | Correct:${correct} | Wrong:${wrong}`;
}

function nextQ(){
  if(!answered) return alert("Select an option");
  i++;
  if(i<questions.length) loadQ();
  else showResult();
}

function showResult(){
  quizBox.classList.add("hidden");
  resultBox.classList.remove("hidden");
  result.innerHTML=`
  Total:${questions.length}<br>
  Attempted:${attempted}<br>
  Correct:${correct}<br>
  Wrong:${wrong}<br>
  Score:${Math.round(correct/questions.length*100)}%
  `;
}

if(typeof question!=="undefined") loadQ();

/* ===== TIMER ===== */
setInterval(()=>{
  if(typeof timer==="undefined") return;
  if(time>0){time--;timer.innerText="⏱ "+time}
  else showResult();
},1000);
