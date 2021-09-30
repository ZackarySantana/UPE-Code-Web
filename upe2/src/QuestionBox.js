import "./QuestionBox.css"

function QuestionBox(props) {
    return <div class="qb-surround">
        <section class="qb-section">
            <h1 class="qb-question-title">{props.question}</h1>
            <section class="qb-question-choices">
                <Answer text={props.answers[0]} />
                <Answer text={props.answers[1]} />
                <Answer text={props.answers[2]} />
                <Answer text={props.answers[3]} />
            </section>
        </section>
        <button class="qb-submit">Submit</button>
    </div>
}

function Answer(props) {
    return <p class="qb-answer">{props.text}</p>
}

export default QuestionBox;