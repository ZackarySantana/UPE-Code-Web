function getQuestionsRaw() {
    return `
        ["What is React?",
        "Why is React?",
        "Where is React"]
    `;
}

function getQuestionDetailsRaw(questionNumber) {
    return `
        {
            "answers": [
                "A JS Framework",
                "A fake thing",
                "A reflex response",
                "I have no idea"
            ],
            "correct_answer": "1"
        }
    `
}

function getQuestions() {
    return JSON.parse(getQuestionsRaw());
}

function getQuestionDetails() {
    return JSON.parse(getQuestionDetailsRaw());
}

export default { getQuestions, getQuestionDetails };

export { getQuestions, getQuestionDetails };