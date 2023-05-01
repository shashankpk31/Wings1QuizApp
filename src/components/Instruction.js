import React, { useState } from 'react'

function Instruction() {
  
  const [Instrcutions] = useState({
    'Introduction': 'Welcome to Wings1 QuizApp! Our app is designed to help you test your knowledge on PL/SQL.',
    'Starting the Test To start the test': 'click on the “Start Quiz” button on the home screen. Once you click on the button, a timer of 60 minutes will start automatically.',
    'Taking the Test': 'The test consists of 40 questions that cover various aspects of PL/SQL development. Read each question carefully and select the answer that you think is correct.',
    'Submitting Answers': 'Once you’ve answered all of the questions, click on the “Submit” button. The test will automatically end when the timer reaches 0.',
    'Viewing Results': 'You can view your results by clicking on the “Results” button. Your competency level in PL/SQL will be displayed along with your score. If your competency level is 80 or above, then you are ready for your wings exam.'
  });

  return (
    <div className='container'>
      <h1>Instrcutions for Quiz</h1>
      <div className=" my-3 p-3 border">
        {Object.keys(Instrcutions).map((key) => <p key={key}><strong>{key}</strong>:&nbsp; {Instrcutions[key]}</p>)}
      </div>
      <button type="button" className="btn btn-primary my-2" onClick={() => console.log('Start the Quiz you pervert')}>Start Quiz</button>
    </div>
  )
}

export default Instruction