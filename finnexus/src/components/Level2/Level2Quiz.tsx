import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Level2Quiz: React.FC<{ onLevelComplete: (level: number) => void }> = ({ onLevelComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(new Array(10).fill(false));

  const navigate = useNavigate();

  const questions = [
    { question: 'What is compound interest?', options: ['Interest calculated only on the principal amount', 'Interest calculated on the initial principal plus accumulated interest', 'Interest calculated on a daily basis', 'Interest calculated annually without compounding'], correctAnswer: 'Interest calculated on the initial principal plus accumulated interest' },
    { question: 'Which of the following is a liability?', options: ['Savings account balance', 'Home equity', 'Credit card debt', 'Investment portfolio'], correctAnswer: 'Credit card debt' },
    { question: 'What is the primary purpose of a mutual fund?', options: ['To earn interest on savings', 'To pool money from many investors to invest in various securities', 'To borrow money from other investors', 'To track the performance of the stock market'], correctAnswer: 'To pool money from many investors to invest in various securities' },
    { question: 'What is the main difference between stocks and bonds?', options: ['Stocks are debt securities, and bonds are equity securities', 'Stocks represent ownership in a company, while bonds are loans to a company or government', 'Stocks pay fixed interest, while bonds offer variable returns', 'Stocks are safer investments than bonds'], correctAnswer: 'Stocks represent ownership in a company, while bonds are loans to a company or government' },
    { question: 'What is a credit report used for?', options: ['To track your income and expenses', 'To evaluate your creditworthiness for loans', 'To calculate the interest rate on a loan', 'To monitor your bank account balance'], correctAnswer: 'To evaluate your creditworthiness for loans' },
    { question: 'What is the risk associated with investing in stocks?', options: ['There is no risk because stocks always go up', 'There is a risk of losing money due to market fluctuations', 'Stocks are risk-free investments', 'The risk is always the same regardless of the market condition'], correctAnswer: 'There is a risk of losing money due to market fluctuations' },
    { question: 'What does the term "diversification" mean in investing?', options: ['Investing in a single asset class for maximum return', 'Spreading investments across different asset classes to reduce risk', 'Only investing in stocks', 'Only investing in bonds'], correctAnswer: 'Spreading investments across different asset classes to reduce risk' },
    { question: 'What is a 401(k) plan?', options: ['A government bond that earns interest over time', 'A tax-advantaged retirement savings plan offered by employers', 'A stock market investment fund', 'A loan taken from an employer for buying a house'], correctAnswer: 'A tax-advantaged retirement savings plan offered by employers' },
    { question: 'What does APR stand for in lending?', options: ['Annual Price Rate', 'Annual Payment Rate', 'Annual Percentage Rate', 'Annual Profit Ratio'], correctAnswer: 'Annual Percentage Rate' },
    { question: 'What is a stock split?', options: ['A situation where a company merges with another company', 'A company issuing additional shares to existing shareholders, increasing the number of shares outstanding', 'A decrease in the value of a company\'s shares', 'A loan given to shareholders to increase their stock holdings'], correctAnswer: 'A company issuing additional shares to existing shareholders, increasing the number of shares outstanding' },
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
    setAnsweredQuestions(new Array(10).fill(false));
  };

  const handleUnlockNextLevel = () => {
    if (score >= 8) {
      onLevelComplete(2);  // Pass level number to parent to update completion
      navigate('/finEducation'); // Replace with the correct route path for finEducation
    } else {
      alert('Your score is not enough to unlock the next level. Try again!');
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
              <button onClick={handlePrevious} disabled={currentQuestionIndex === 0} style={{ padding: '10px 20px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '5px', cursor: currentQuestionIndex === 0 ? 'not-allowed' : 'pointer' }}>
                Previous
              </button>
              <button onClick={handleNext} disabled={selectedAnswer === null} style={{ padding: '10px 20px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '5px', cursor: selectedAnswer === null ? 'not-allowed' : 'pointer' }}>
                {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
              </button>
            </div>
          </>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ color: '#fff' }}>Quiz Completed!</h3>
            <p style={{ color: '#fff' }}>You completed {questions.length} questions.</p>
            <div style={{ backgroundColor: '#4CAF50', width: '100px', height: '100px', borderRadius: '50%', margin: '20px auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <span style={{ color: '#fff', fontSize: '24px' }}>
                <strong>{score}</strong>
              </span>
            </div>
            <p style={{ color: '#fff' }}>Your score: {score} out of {questions.length}</p>
            <button onClick={handleUnlockNextLevel} style={{ padding: '10px 20px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
              Unlock Next Level
            </button>
            <button onClick={handleTryAgain} style={{ padding: '10px 20px', backgroundColor: '#f44336', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', marginLeft: '10px' }}>
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Level2Quiz;
