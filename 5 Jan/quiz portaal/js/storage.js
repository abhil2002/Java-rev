if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify([
        { username: "admin", password: "admin123", role: "admin" },
        { username: "user", password: "user123", role: "user" }
    ]));
}

if (!localStorage.getItem("quiz")) {
    localStorage.setItem("quiz", JSON.stringify({
        title: "JavaScript Basics",
        duration: 60, // seconds
        questions: [
            {
                q: "What is JavaScript?",
                options: ["Language", "Framework", "Database", "OS"],
                correct: 0
            },
            {
                q: "Which symbol is used for id selector?",
                options: [".", "#", "*", "&"],
                correct: 1
            }
        ]
    }));
}
