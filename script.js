// Study session state
let activeQuestions = [];
let currentQuestion = 0;
let responses = [];
let missedQuestions = [];

const questionSets = {
    ALL: () => getAllQuestions(),
    LIMITATIONS: () => getQuestionSet("limitationsQuestions"),
    WEIGHT_BALANCE: () => getQuestionSet("weightAndBalanceQuestions"),
    NORMAL_OPERATING_PROCEDURES: () => getQuestionSet("normalOperatingProceduresQuestions"),
    RANDOM_REVIEW: () => missedQuestions.length ? [...missedQuestions] : getAllQuestions()
};

const modeNames = {
    ALL: "ALL SECTIONS",
    RANDOM_REVIEW: "REVIEW MISSED QUESTIONS",
    LIMITATIONS: "LIMITATIONS",
    WEIGHT_BALANCE: "WEIGHT & BALANCE",
    NORMAL_OPERATING_PROCEDURES: "NORMAL OPERATING PROCEDURES"
};

window.addEventListener("DOMContentLoaded", () => {
    const selector = document.getElementById("categorySelect");
    if (!selector) return;
    startStudyMode();
});

function getQuestionSet(name) {
    // Top-level let/const declarations in classic script files are not properties
    // of window, so resolve the known database names explicitly.
    const sets = {
        limitationsQuestions: typeof limitationsQuestions !== "undefined" ? limitationsQuestions : undefined,
        generalQuestions: typeof generalQuestions !== "undefined" ? generalQuestions : undefined,
        emergencyQuestions: typeof emergencyQuestions !== "undefined" ? emergencyQuestions : undefined,
        normalOperatingProceduresQuestions: typeof normalOperatingProceduresQuestions !== "undefined" ? normalOperatingProceduresQuestions : undefined,
        performanceQuestions: typeof performanceQuestions !== "undefined" ? performanceQuestions : undefined,
        weightAndBalanceQuestions: typeof weightAndBalanceQuestions !== "undefined" ? weightAndBalanceQuestions : undefined,
        aircraftSystemsQuestions: typeof aircraftSystemsQuestions !== "undefined" ? aircraftSystemsQuestions : undefined,
        handlingMaintenanceQuestions: typeof handlingMaintenanceQuestions !== "undefined" ? handlingMaintenanceQuestions : undefined,
        supplementsQuestions: typeof supplementsQuestions !== "undefined" ? supplementsQuestions : undefined,
        safetyQuestions: typeof safetyQuestions !== "undefined" ? safetyQuestions : undefined
    };
    return Array.isArray(sets[name]) ? [...sets[name]] : [];
}

function getAllQuestions() {
    if (typeof allQuestions !== "undefined" && Array.isArray(allQuestions)) {
        return [...allQuestions];
    }
    return [
        "limitationsQuestions", "generalQuestions", "emergencyQuestions",
        "normalOperatingProceduresQuestions", "performanceQuestions",
        "weightAndBalanceQuestions", "aircraftSystemsQuestions",
        "handlingMaintenanceQuestions", "supplementsQuestions", "safetyQuestions"
    ].flatMap(getQuestionSet);
}

function startStudyMode() {
    const mode = document.getElementById("categorySelect").value;
    const getQuestions = questionSets[mode];
    activeQuestions = getQuestions ? getQuestions() : [];
    shuffleQuestions(activeQuestions);
    responses = [];
    currentQuestion = 0;
    setText("modeLabel", modeNames[mode] || "STUDY SESSION");

    if (!activeQuestions.length) {
        showEmptyState("No questions are available for this study mode.");
        updateStatistics();
        return;
    }
    displayQuestion();
    updateStatistics();
}

function shuffleQuestions(questions) {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
}

function displayQuestion() {
    const question = activeQuestions[currentQuestion];
    if (!question) return showEmptyState("No questions are available for this study mode.");

    setText("questionCounter", `Question ${currentQuestion + 1} of ${activeQuestions.length}`);
    setText("questionIndexLabel", String(currentQuestion + 1).padStart(2, "0"));
    setText("questionDifficulty", question.difficulty || "");
    setText("questionCategory", question.category || "");
    setText("questionText", question.question || "");
    setText("questionReference", `Reference: ${question.reference || ""}`, "Reference:");
    setText("questionTopic", `Topic: ${question.sourceTopic || ""}`, "Topic:");
    setText("questionPage", `POH Page: ${question.sourcePage || ""}`, "POH Page:");
    setText("questionManual", `Manual: ${question.manual || ""}`, "Manual:");
    setText("questionRevision", `Revision: ${question.revision || ""}`, "Revision:");
    renderAnswers();
    restoreResult();
    updateProgress();
    updateNavigation();
}

function setText(id, value, label) {
    const element = document.getElementById(id);
    if (!element) return;
    element.replaceChildren();
    if (label) {
        const strong = document.createElement("strong");
        strong.textContent = `${label} `;
        element.append(strong, document.createTextNode(value.slice(label.length).trimStart()));
    } else {
        element.textContent = value;
    }
}

function selectAnswer(index) {
    if (responses[currentQuestion]?.answered) return;
    responses[currentQuestion] = { selected: index, answered: false, correct: false };
    const result = document.getElementById("result");
    if (result) result.replaceChildren();
    renderAnswers();
}

function renderAnswers() {
    const question = activeQuestions[currentQuestion];
    const answersElement = document.getElementById("answers");
    if (!question || !answersElement) return;
    answersElement.replaceChildren();

    (question.answers || []).forEach((answer, index) => {
        const row = document.createElement("label");
        row.className = "answer";
        if (responses[currentQuestion]?.answered && index === question.correct) row.classList.add("correct");
        if (responses[currentQuestion]?.answered && index === responses[currentQuestion].selected && !responses[currentQuestion].correct) row.classList.add("incorrect");

        const input = document.createElement("input");
        input.type = "radio";
        input.name = "answer";
        input.value = String(index);
        input.checked = responses[currentQuestion]?.selected === index;
        input.disabled = Boolean(responses[currentQuestion]?.answered);
        input.addEventListener("change", () => selectAnswer(index));

        const text = document.createElement("span");
        text.textContent = answer;
        row.append(input, text);
        answersElement.append(row);
    });
}

function checkAnswer() {
    const response = responses[currentQuestion];
    const question = activeQuestions[currentQuestion];
    if (!response || !question) {
        alert("Please select an answer.");
        return;
    }
    if (response.answered) return;

    response.answered = true;
    response.correct = response.selected === question.correct;
    if (!response.correct && !missedQuestions.includes(question)) missedQuestions.push(question);
    if (response.correct) missedQuestions = missedQuestions.filter(item => item !== question);
    renderAnswers();
    restoreResult();
    updateStatistics();
    updateNavigation();
}

function restoreResult() {
    const result = document.getElementById("result");
    const response = responses[currentQuestion];
    const question = activeQuestions[currentQuestion];
    if (!result) return;
    result.replaceChildren();
    if (!response?.answered || !question) return;

    const card = document.createElement("div");
    card.className = `result-card ${response.correct ? "result-correct" : "result-incorrect"}`;
    const heading = document.createElement("h3");
    heading.textContent = response.correct ? "✅ Correct" : "❌ Incorrect";
    card.append(heading);

    if (!response.correct) {
        const answer = document.createElement("p");
        const strong = document.createElement("strong");
        strong.textContent = "Correct Answer: ";
        answer.append(strong, document.createTextNode(question.answers?.[question.correct] || ""));
        card.append(answer);
    }
    const explanation = document.createElement("p");
    explanation.textContent = question.explanation || "";
    card.append(explanation);
    result.append(card);
}

function nextQuestion() {
    if (currentQuestion < activeQuestions.length - 1) {
        currentQuestion++;
        displayQuestion();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion();
    }
}

function updateStatistics() {
    const correct = responses.filter(response => response?.answered && response.correct).length;
    const incorrect = responses.filter(response => response?.answered && !response.correct).length;
    const total = correct + incorrect;
    const percent = total ? Math.round(correct / total * 100) : 0;
    setText("correctCount", String(correct));
    setText("incorrectCount", String(incorrect));
    setText("scorePercent", `${percent}%`);
    updateProgress();
}

function updateProgress() {
    const completed = responses.filter(response => response?.answered).length;
    const total = activeQuestions.length;
    const percent = total ? Math.round(completed / total * 100) : 0;
    const bar = document.getElementById("progressBar");
    const fill = document.getElementById("progressFill");
    if (bar) {
        bar.setAttribute("aria-valuemax", String(total));
        bar.setAttribute("aria-valuenow", String(completed));
    }
    if (fill) fill.style.width = `${percent}%`;
    setText("progressLabel", `${completed} of ${total}`);
    setText("progressPercent", `${percent}%`);
}

function updateNavigation() {
    const previous = document.getElementById("previousButton");
    const next = document.getElementById("nextButton");
    const check = document.getElementById("checkButton");
    if (previous) previous.disabled = currentQuestion <= 0 || activeQuestions.length === 0;
    if (next) next.disabled = currentQuestion >= activeQuestions.length - 1 || activeQuestions.length === 0;
    if (check) check.disabled = Boolean(responses[currentQuestion]?.answered) || activeQuestions.length === 0;
}

function restartSession() {
    responses = [];
    currentQuestion = 0;
    shuffleQuestions(activeQuestions);
    if (activeQuestions.length) displayQuestion();
    else showEmptyState("No questions are available for this study mode.");
    updateStatistics();
}

function showEmptyState(message) {
    setText("questionCounter", "");
    setText("questionDifficulty", "");
    setText("questionCategory", "");
    setText("questionText", message);
    setText("questionIndexLabel", "—");
    for (const id of ["answers", "result", "questionReference", "questionTopic", "questionPage", "questionManual", "questionRevision"]) {
        document.getElementById(id)?.replaceChildren();
    }
    for (const id of ["questionReference", "questionTopic", "questionPage", "questionManual", "questionRevision"]) setText(id, "—");
    updateProgress();
    updateNavigation();
}
