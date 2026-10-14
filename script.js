const fields = [
    "name",
    "email",
    "phone",
    "role",
    "summary",
    "skills",
    "education",
    "experience"
];

fields.forEach(id => {
    document.getElementById(id).addEventListener("input", generateResume);
});

function generateResume() {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const role = document.getElementById("role").value;
    const summary = document.getElementById("summary").value;
    const skills = document.getElementById("skills").value;
    const education = document.getElementById("education").value;
    const experience = document.getElementById("experience").value;

    document.querySelector("#resume h1").textContent =
        name || "Your Name";

    document.querySelector(".role").textContent =
        role || "Your Job Title";

    document.querySelector("#resume > p").textContent =
        `${email || "Email"} | ${phone || "Phone"}`;

    document.getElementById("rSummary").textContent =
        summary || "Your professional summary will appear here.";

    document.getElementById("rSkills").textContent =
        skills || "Your skills will appear here.";

    document.getElementById("rEducation").textContent =
        education || "Your education will appear here.";

    document.getElementById("rExperience").textContent =
        experience || "Your experience will appear here.";

    calculateScore();
}

function calculateScore() {

    let score = 0;

    const values = fields.map(id =>
        document.getElementById(id).value.trim()
    );

    values.forEach(value => {
        if (value.length > 0) {
            score += 12.5;
        }
    });

    const skillCount =
        document.getElementById("skills").value
            .split(",")
            .filter(skill => skill.trim()).length;

    if (skillCount >= 5) {
        score = Math.min(score + 10, 100);
    }

    document.getElementById("score").textContent =
        Math.round(score) + "%";
}

generateResume();