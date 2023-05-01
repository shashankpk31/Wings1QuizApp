import Timer from './Timer'

function Question({ question, Question, setQuestion, submitQuiz, calc }) {
  const handleSelect = (elm) => {
    calc(elm);
  }
  return (
    <div className='container border rounded-4 p-3  Question'>
      <div className='clearfix'>
        <p className='float-start'>
          {'Question: ' + (Question + 1) + '). ' + question.question}
        </p>
        <button type="button" className="btn btn-light mx-3 float-end">
          <Timer time={1800} /></button>
      </div>
      <div className='container-fluid'>
        {question.options.map((e, i) =>
          <div className='option' key={i}>
            <button type="button" className="btn btn-warning m-2 left"
              onClick={() => { handleSelect(e) }}>{e}</button>
          </div>
        )}
      </div>
      <div className="clearfix my-3">
        <button type="button" className="btn btn-secondary float-start py-1 px-2"
          onClick={() => { setQuestion(Question - 1) }}
          disabled={Question === 0 && true}>
          Prev</button>
        <button type="button" className="btn btn-secondary float-end py-1 px-2"
          onClick={() => { setQuestion(Question + 1) }}
          disabled={Question === 39 && true}>
          Next</button>
      </div>
      <button type="button" className="btn btn-primary" onClick={submitQuiz}>
        submit Quiz</button>
    </div>
  )
}

export default Question