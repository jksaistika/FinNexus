import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Level3Quiz: React.FC = () => {
  const navigate = useNavigate();
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);

  const questions = [
    {
      question: 'Which financial product is most suitable for long-term wealth building?',
      options: [
        'Savings account',
        'Fixed deposit',
        'Stock market investments',
        'Credit card rewards',
      ],
      answer: 'Stock market investments',
    },
    {
      question: 'What does the term "diversification" mean in investing?',
      options: [
        'Investing all your money in one asset to maximize returns',
        'Spreading investments across different assets to reduce risk',
        'Borrowing money to invest in high-risk assets',
        'Investing only in government bonds',
      ],
      answer: 'Spreading investments across different assets to reduce risk',
    },
    {
      question: 'How does compound interest benefit long-term investments?',
      options: [
        'It increases returns by adding interest earned to the principal amount',
        'It reduces the risk of losing money in investments',
        'It ensures guaranteed returns on investments',
        'It lowers the interest rates on loans',
      ],
      answer: 'It increases returns by adding interest earned to the principal amount',
    },
    {
      question: 'Which type of fund pools money from multiple investors to purchase securities?',
      options: [
        'Mutual funds',
        'Hedge funds',
        'Private equity funds',
        'Fixed deposits',
      ],
      answer: 'Mutual funds',
    },
    {
      question: 'What is the main advantage of an emergency fund?',
      options: [
        'It offers high returns in a short period',
        'It provides financial security during unexpected events',
        'It reduces taxable income',
        'It doubles your savings in a year',
      ],
      answer: 'It provides financial security during unexpected events',
    },
  ];

  const handleNext = () => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    setSelectedAnswer(null);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const handlePrevious = () => {
    setSelectedAnswer(null);
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleAnswerSelection = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleTryAgain = () => {
    setQuizFinished(false);
    setScore(0);
    setCurrentQuestion(0);
  };

  const handleComplete = () => {
    alert('Congratulations on completing all levels!');
    navigate('/congratulations'); // Redirect to a completion page
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#001f3f', // Navy background
        color: '#FFD700', // Yellow text color for contrast
      }}
    >
      <div
        style={{
          padding: '20px',
          width: '400px',
          border: '2px solid #FFD700', // Border color to match the yellow theme
          borderRadius: '10px',
          backgroundColor: '#ffffff',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Shadow for some depth
        }}
      >
        {!quizFinished ? (
          <>
            <h2 style={{ color: '#000000', fontSize: '24px' }}>Question {currentQuestion + 1}</h2>
            <p style={{ color: '#000000', fontSize: '22px', fontWeight: 'bold' }}>
              {questions[currentQuestion].question}
            </p>

            <div style={{ marginBottom: '20px' }}>
              {questions[currentQuestion].options.map((option, index) => (
                <div key={index}>
                  <button
                    onClick={() => handleAnswerSelection(option)}
                    style={{
                      padding: '10px 20px',
                      marginBottom: '10px',
                      backgroundColor:
                        selectedAnswer === option ? '#FFD700' : '#001f3f',
                      color: selectedAnswer === option ? '#001f3f' : '#FFD700',
                      border: '2px solid #FFD700', // Border color
                      borderRadius: '5px',
                      fontSize: '16px',
                      cursor: 'pointer',
                      width: '100%',
                    }}
                  >
                    {option}
                  </button>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button
                onClick={handlePrevious}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#FFD700',
                  color: '#001f3f',
                  border: 'none',
                  borderRadius: '5px',
                  fontSize: '16px',
                  cursor: 'pointer',
                }}
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#FFD700',
                  color: '#001f3f',
                  border: 'none',
                  borderRadius: '5px',
                  fontSize: '16px',
                  cursor: 'pointer',
                }}
              >
                Next
              </button>
            </div>
          </>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ color: '#000000', fontSize: '24px' }}>Your Score</h2>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#FFD700',
                color: '#001f3f',
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                fontSize: '36px',
                fontWeight: 'bold',
                margin: '20px auto',
              }}
            >
              {score}/5
            </div>

            {score >= 4 ? (
              <button
                onClick={handleComplete}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#FFD700',
                  color: '#001f3f',
                  border: 'none',
                  borderRadius: '5px',
                  fontSize: '16px',
                  cursor: 'pointer',
                }}
              >
                Complete Quiz
              </button>
            ) : (
              <button
                onClick={handleTryAgain}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#FFD700',
                  color: '#001f3f',
                  border: 'none',
                  borderRadius: '5px',
                  fontSize: '16px',
                  cursor: 'pointer',
                }}
              >
                Try Again
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Level3Quiz;
