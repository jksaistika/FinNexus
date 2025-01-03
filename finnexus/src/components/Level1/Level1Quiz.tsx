import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Level1Quiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(new Array(5).fill(false));

  const navigate = useNavigate();

  const questions = [
    { question: 'What is a budget?', options: ['A list of income sources', 'A list of expenses', 'A plan for income and expenses', 'None of the above'], correctAnswer: 'A plan for income and expenses' },
    { question: 'What is a savings account?', options: ['An account for spending', 'An account for saving money', 'An account for investments', 'An account for loans'], correctAnswer: 'An account for saving money' },
    { question: 'What is an investment?', options: ['A way to save money', 'A way to make money grow over time', 'A way to earn interest on savings', 'A way to borrow money'], correctAnswer: 'A way to make money grow over time' },
    { question: 'What is an interest rate?', options: ['The rate at which you save money', 'The amount of money you can borrow', 'The percentage charged on a loan or earned on savings', 'The rate at which your salary increases'], correctAnswer: 'The percentage charged on a loan or earned on savings' },
    { question: 'What is a credit score?', options: ['A number that represents your income', 'A number that represents your creditworthiness', 'A number that represents your savings', 'A number that represents your loan history'], correctAnswer: 'A number that represents your creditworthiness' },
  ];

  const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>, option: string) => {
    setSelectedAnswer(option);
  };

  const handleNext = () => {
    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    const updatedAnsweredQuestions = [...answeredQuestions];
    updatedAnsweredQuestions[currentQuestionIndex] = true;
    setAnsweredQuestions(updatedAnsweredQuestions);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    } else {
      setQuizCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedAnswer(null);
    }
  };

  const handleTryAgain = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setQuizCompleted(false);
    setAnsweredQuestions(new Array(5).fill(false));
    setSelectedAnswer(null);
  };

  const handleUnlockNextLevel = () => {
    if (score >= 4) {
      navigate('/FinEducation'); // Navigate to the next page
    } else {
      alert('Your score is not enough to unlock the next level.');
    }
  };

  return (
    <div style={{ backgroundColor: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div style={{ backgroundColor: '#333', padding: '20px', borderRadius: '10px', width: '60%', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
        {!quizCompleted ? (
          <>
            <div style={{ fontSize: '18px', color: '#fff', marginBottom: '20px' }}>
              <strong>Question {currentQuestionIndex + 1} of {questions.length}</strong>
            </div>
            <div style={{ fontSize: '18px', marginBottom: '20px', color: '#fff' }}>
              <strong>{questions[currentQuestionIndex].question}</strong>
            </div>
            <div>
              {questions[currentQuestionIndex].options.map((option, index) => (
                <div
                  key={index}
                  style={{
                    marginBottom: '10px',
                    border: '1px solid #555',
                    borderRadius: '5px',
                    padding: '10px',
                    backgroundColor: selectedAnswer === option ? '#4CAF50' : '#444',
                    color: selectedAnswer === option ? '#fff' : '#fff',
                  }}
                >
                  <input
                    type="radio"
                    id={`option${index}`}
                    name="answer"
                    value={option}
                    checked={selectedAnswer === option}
                    onChange={(e) => handleAnswerChange(e, option)}
                    style={{ marginRight: '10px' }}
                  />
                  <label htmlFor={`option${index}`} style={{ fontSize: '16px', color: '#fff' }}>
                    {option}
                  </label>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
              <button
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#28a745',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: currentQuestionIndex === 0 ? 'not-allowed' : 'pointer',
                }}
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                disabled={selectedAnswer === null}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#28a745',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: selectedAnswer === null ? 'not-allowed' : 'pointer',
                }}
              >
                {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
              </button>
            </div>
          </>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ color: '#fff' }}>Quiz Completed!</h3>
            <p style={{ color: '#fff' }}>You completed {questions.length} questions.</p>
            <div
              style={{
                backgroundColor: '#4CAF50',
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                margin: '20px auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <span style={{ color: '#fff', fontSize: '24px' }}>
                <strong>{score}</strong>
              </span>
            </div>
            <p style={{ color: '#fff' }}>Your score: {score} out of {questions.length}</p>
            <button
              onClick={handleUnlockNextLevel}
              style={{ padding: '10px 20px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
            >
              Unlock Next Level
            </button>
            <button
              onClick={handleTryAgain}
              style={{
                padding: '10px 20px',
                backgroundColor: '#f44336',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                marginLeft: '10px',
              }}
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Level1Quiz;
