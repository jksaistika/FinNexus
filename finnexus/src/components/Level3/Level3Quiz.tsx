import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Level3QuizProps {
  onLevelComplete: (level: string) => void;
}

const Level3Quiz: React.FC<Level3QuizProps> = ({ onLevelComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(new Array(10).fill(false));

  const navigate = useNavigate();

  const questions = [
    { question: 'What is the difference between a traditional IRA and a Roth IRA?', options: ['Both are tax-free', 'Traditional IRA offers tax-deferred growth, Roth IRA offers tax-free growth', 'Roth IRA is more expensive', 'There is no difference'], correctAnswer: 'Traditional IRA offers tax-deferred growth, Roth IRA offers tax-free growth' },
    { question: 'What is the purpose of an emergency fund?', options: ['To invest in high-risk assets', 'To have funds available for unexpected expenses', 'To pay off student loans', 'To accumulate wealth'], correctAnswer: 'To have funds available for unexpected expenses' },
    { question: 'Which of the following is considered a fixed-income investment?', options: ['Stocks', 'Bonds', 'Real estate', 'Mutual funds'], correctAnswer: 'Bonds' },
    { question: 'What is diversification in investment?', options: ['Investing in one asset class only', 'Spreading investments across different assets to reduce risk', 'Investing in a single stock for the highest return', 'Investing in government bonds only'], correctAnswer: 'Spreading investments across different assets to reduce risk' },
    { question: 'What is a credit score?', options: ['A measure of your income', 'A measure of your debt', 'A numerical representation of your creditworthiness', 'A measure of your assets'], correctAnswer: 'A numerical representation of your creditworthiness' },
    { question: 'What is a mutual fund?', options: ['A type of savings account', 'An investment vehicle that pools funds from multiple investors', 'A short-term investment', 'A bond issued by the government'], correctAnswer: 'An investment vehicle that pools funds from multiple investors' },
    { question: 'What is the risk associated with bonds?', options: ['No risk', 'Risk of losing money if the issuer defaults', 'Risk of market volatility', 'Risk of inflation'], correctAnswer: 'Risk of losing money if the issuer defaults' },
    { question: 'What is an index fund?', options: ['A fund that invests in a broad market index', 'A fund that invests in only one asset', 'A fund that invests in international stocks only', 'A bond fund'], correctAnswer: 'A fund that invests in a broad market index' },
    { question: 'What does ETF stand for?', options: ['Exchange-Traded Fund', 'Economic Trading Fund', 'Exchangeable Transfer Fund', 'Equity Transaction Fund'], correctAnswer: 'Exchange-Traded Fund' },
    { question: 'What is asset allocation?', options: ['The process of selecting investments in a single asset class', 'The process of spreading investments across various asset classes', 'The process of determining the value of an asset', 'The process of purchasing more assets'], correctAnswer: 'The process of spreading investments across various asset classes' },
  ];

  const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>, option: string) => {
    setSelectedAnswer(option);
  };

  const handleNext = () => {
    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
      setScore(prevScore => prevScore + 1);
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
      // Call the onLevelComplete prop to pass the level
      onLevelComplete(String(3)); // Pass the level info
      navigate('/nextLevel'); // Replace with the correct route path for the next level
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

export default Level3Quiz;
