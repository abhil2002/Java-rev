/* ================= QUIZ DATA ================= */
const questions = [
  {
    q: "What does HTML stand for?",
    o: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlinks and Text Markup",
      "Home Tool Markup Language"
    ],
    a: 0
  },
  {
    q: "Which HTML tag is used to create a hyperlink?",
    o: ["<link>", "<a>", "<href>", "<url>"],
    a: 1
  },
  {
    q: "Which CSS property controls the text size?",
    o: ["font-style", "text-size", "font-size", "text-style"],
    a: 2
  },
  {
    q: "Which symbol is used for comments in JavaScript?",
    o: ["<!-- -->", "//", "#", "/* */"],
    a: 1
  },
  {
    q: "Which method is used to select an element by ID in JavaScript?",
    o: [
      "getElementByClass",
      "querySelectorAll",
      "getElementById",
      "getElementsByName"
    ],
    a: 2
  },
  {
    q: "Which is NOT a JavaScript framework or library?",
    o: ["React", "Angular", "Vue", "Django"],
    a: 3
  },
  {
    q: "Which CSS layout is best for building one-dimensional layouts?",
    o: ["Grid", "Flexbox", "Float", "Position"],
    a: 1
  },
  {
    q: "What does JSON stand for?",
    o: [
      "Java Source Object Notation",
      "JavaScript Object Notation",
      "Java Syntax Object Network",
      "JavaScript Structured Object"
    ],
    a: 1
  },
  {
    q: "Which keyword is used to declare a constant in JavaScript?",
    o: ["var", "let", "const", "static"],
    a: 2
  },
  {
    q: "Which HTTP status code means 'Not Found'?",
    o: ["200", "301", "403", "404"],
    a: 3
  }
];


/* ================= STATE ================= */
let index = 0;
let score = 0;
let attempted = 0;
let time = 60;
let timerInterval;

/* ================= LOGIN ================= */
function login() {
  window.location.href = "quiz.html";
}

/* ================= LOAD QUESTION ================= */
function loadQ() {
  const q = questions[index];

  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");

  // Reset animation
  questionEl.classList.remove("question");
  void questionEl.offsetWidth; // reflow trick
  questionEl.classList.add("question");

  questionEl.innerText = q.q;
  optionsEl.innerHTML = "";

  q.o.forEach((opt, i) => {
    const div = document.createElement("div");
    div.className = "option";
    div.innerText = opt;

    div.onclick = () => selectOption(div, i);

    optionsEl.appendChild(div);
  });

  updateProgress();
}

/* ================= OPTION SELECT ================= */
function selectOption(element, selectedIndex) {
  const correctIndex = questions[index].a;
  const options = document.querySelectorAll(".option");

  attempted++;

  options.forEach(opt => opt.classList.add("disabled"));

  if (selectedIndex === correctIndex) {
    element.classList.add("correct");
    score++;
  } else {
    element.classList.add("wrong");
    options[correctIndex].classList.add("correct");
  }
}

/* ================= NEXT QUESTION ================= */
function nextQ() {
  index++;

  if (index < questions.length) {
    loadQ();
  } else {
    endQuiz();
  }
}

/* ================= PROGRESS ================= */
function updateProgress() {
  const percent = (index / questions.length) * 100;
  document.getElementById("progressBar").style.width = percent + "%";
}

/* ================= TIMER ================= */
function startTimer() {
  timerInterval = setInterval(() => {
    if (time > 0) {
      time--;
      document.getElementById("timer").innerText = `⏱ ${time}s`;
    } else {
      endQuiz();
    }
  }, 1000);
}

/* ================= END QUIZ ================= */
function endQuiz() {
  clearInterval(timerInterval);

  localStorage.setItem("quizResult", JSON.stringify({
    total: questions.length,
    attempted: attempted,
    correct: score,
    wrong: attempted - score,
    unattempted: questions.length - attempted,
    scorePercent: Math.round((score / questions.length) * 100)
  }));

  window.location.href = "result.html";
}

/* ================= INIT ================= */
if (window.location.pathname.includes("quiz.html")) {
  loadQ();
  startTimer();
}
