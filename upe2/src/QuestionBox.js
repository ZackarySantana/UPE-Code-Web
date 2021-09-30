import { useEffect, useState } from 'react';
import "./QuestionBox.css"

function QuestionBox(props) {

    const [clicked, setClicked] = useState(0);

    const onClick = (answerNum) => {
        return () => setClicked(answerNum);
    }

    useEffect(() => {
        setClicked(0);
    }, [props.correct]);

    return <div class="qb-surround">
        <section class="qb-section">
            <h1 class="qb-question-title">{props.question}</h1>
            <section class="qb-question-choices">
                <Answer onClick={onClick(1)} clicked={clicked === 1} correct={props.correct} text={props.answers[0]} />
                <Answer onClick={onClick(2)} clicked={clicked === 2} correct={props.correct} text={props.answers[1]} />
                <Answer onClick={onClick(3)} clicked={clicked === 3} correct={props.correct} text={props.answers[2]} />
                <Answer onClick={onClick(4)} clicked={clicked === 4} correct={props.correct} text={props.answers[3]} />
            </section>
        </section>
    </div>
}

function Answer(props) {
    if (props.clicked) {
        if (props.correct === props.text) {
            return <p onClick={props.onClick} class="qb-answer clicked-right">{props.text}</p>
        } else {
            return <p onClick={props.onClick} class="qb-answer clicked-wrong">{props.text}</p>   
        }
    } else {
        return <p onClick={props.onClick} class="qb-answer">{props.text}</p>
    }
}

export default QuestionBox;