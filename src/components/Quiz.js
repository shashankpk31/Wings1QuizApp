import React, { useState } from 'react'
import Instruction from './Instruction'
import Ques from './Question'
import Result from './Result'
import Review from './Review'

function Quiz({ questions }) {
    const [status, setstatus] = useState('Question');
    const [Question, setQuestion] = useState(0);
    const [correct, setcorrect] = useState([]);
    const [wrong, setwrong] = useState([]);

    const calc = (response) => {
        if (questions[Question].answer === response) {
            setcorrect((prevcorrect) => [...prevcorrect, Question])
            setwrong((prevwrong) =>
                prevwrong.filter(function (element) {
                    return element !== Question
                }))
        } else {
            setwrong((prevwrong) => [...prevwrong, Question])
            setcorrect((prevcorrect) =>
                prevcorrect.filter(function (element) {
                    return element !== Question
                }))
        }
        console.log(correct, wrong);
    }

    const startQuiz = () => {
        setstatus('Question');
    }
    const submitQuiz = () => {
        setstatus('Result');
    }

    const reviewQuiz = () => {
        setstatus('Review');
    }


    const component = {
        "Result": <Result reviewQuiz={reviewQuiz} score={correct.length} />,
        "Review": <Review restartQuiz={startQuiz} revdata={{ correct, wrong }} />,
        "Question": <Ques question={questions[Question]}
            Question={Question}
            setQuestion={setQuestion}
            submitQuiz={submitQuiz}
            calc={calc}
        />,
        "Default": <Instruction startQuiz={startQuiz} />
    };

    return (
        <div className='Quiz'>
            {component[status]}
        </div>
    );
}

export default Quiz