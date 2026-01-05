// LOGIN
$("#loginBtn").click(function () {
    window.location.href = "quiz.html";
});

// SIGNUP
$("#signupBtn").click(function () {
    alert("Account created successfully!");
    window.location.href = "index.html";
});

// QUIZ LOGIC
let questions = [
    {
        q: "What does JS stand for?",
        options: ["Java Source", "JavaScript", "Just Script", "JSON"],
        ans: 1
    },
    {
        q: "Which keyword is used to declare variable?",
        options: ["int", "let", "var", "both let & var"],
        ans: 3
    },
    {
        q: "Which company developed JS?",
        options: ["Google", "Netscape", "Microsoft", "Apple"],
        ans: 1
    },
    {
        q: "Which symbol is used for comments?",
        options: ["//", "##", "<!-- -->", "**"],
        ans: 0
    },
    {
        q: "Which function converts JSON to object?",
        options: ["JSON.stringify()", "JSON.parse()", "parseJSON()", "toObject()"],
        ans: 1
    }
];

let index = 0;
let attempted = 0;
let answered = 0;
let timer = 60;

function loadQuestion() {
    $("#question").text(questions[index].q);
    $("#options").empty();

    questions[index].options.forEach((opt, i) => {
        $("#options").append(`<li data-id="${i}">${opt}</li>`);
    });
}

$(document).on("click", "#options li", function () {
    attempted++;
    answered++;
    $("#attempted").text(attempted);
    $("#answered").text(answered);
    $("#unanswered").text(questions.length - answered);

    $("#options li").off("click");
});

$("#nextBtn").click(function () {
    index++;
    if (index < questions.length) {
        loadQuestion();
    } else {
        alert("Quiz Completed!");
    }
});

// TIMER
setInterval(() => {
    if (timer > 0) {
        timer--;
        $("#time").text(timer);
    } else {
        alert("Time's up!");
    }
}, 1000);

loadQuestion();
