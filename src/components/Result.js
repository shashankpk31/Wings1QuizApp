import React from 'react'

function Result({ score,reviewQuiz }) {
  return (
    <div class="container border rounded-04 py-4">
      <div class="score-header">
        <h3>Score Card</h3>
      </div>
      <div class="score-body">
        <div class="score-item">
          <div class="score-icon"><i class="fa fa-trophy"></i></div>
          <div class="score-details">
            <h4>Score</h4>
            <p class="score-value">{score*2.5}</p>
          </div>
        </div>
        <div class="score-item">
          <div class="score-icon"><i class="fa fa-clock"></i></div>
          <div class="score-details">
            <h4>Time Taken</h4>
            <p class="score-value">30 min</p>
          </div>
        </div>
        <div class="score-item">
          <div class="score-icon"><i class="fa fa-question-circle"></i></div>
          <div class="score-details">
            <h4>Questions Attempted</h4>
            <p class="score-value">40</p>
          </div>
        </div>
      </div>
      <div class="score-footer">
        <button class="score-button" onClick={reviewQuiz}>Quiz Review</button>
      </div>
      <div class="lightning"></div>
    </div>
  )
}

export default Result;