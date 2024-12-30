import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Level2Quiz: React.FC = () => {
  const navigate = useNavigate();
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);

  const questions = [
    {
      question: 'What is the difference between compound interest and simple interest?',
      options: [
        'Compound interest is calculated on the initial principal only, while simple interest is calculated on both principal and interest.',
        'Compound interest is calculated on both principal and interest, while simple interest is calculated only on the principal.',
        'Compound interest is always lower than simple interest.',
        'Simple interest is calculated quarterly, while compound interest is annual.'
      ],
      answer: 'Compound interest is calculated on both principal and interest, while simple interest is calculated only on the principal.',
    },
    {
      question: 'Which of the following is a characteristic of stocks?',
      options: [
        'They guarantee fixed returns.',
        'They represent ownership in a company.',
        'They are considered low-risk investments.',
        'They are insured by the government.'
      ],
      answer: 'They represent ownership in a company.',
    },
    {
      question: 'Which of the following strategies is most appropriate for long-term investing?',
      options: [
        'Investing in highly volatile stocks for short-term profit.',
        'Investing in diversified assets with a focus on growth over time.',
        'Using margin trading to maximize returns quickly.',
        'Investing in government bonds for the next 6 months.'
      ],
      answer: 'Investing in diversified assets with a focus on growth over time.',
    },
    {
      question: 'What is the purpose of a credit report?',
      options: [
        'To track your spending habits.',
        'To monitor your savings balance.',
        'To assess your creditworthiness and borrowing risk.',
        'To show your income and tax payments.'
      ],
      answer: 'To assess your creditworthiness and borrowing risk.',
    },
    {
      question: 'What is the primary advantage of investing in bonds?',
      options: [
        'Bonds offer guaranteed high returns.',
        'Bonds are low-risk and provide steady income.',
        'Bonds offer tax-free returns in all cases.',
        'Bonds are more liquid than stocks.'
      ],
      answer: 'Bonds are low-risk and provide steady income.',
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

  const handleProceed = () => {
    if (score >= 4) {
      // If the score is 4 or higher, navigate to Level 3 and display the unlock message
      alert('Congrats! Unlocks to Level 3!');
      navigate('/Level3/video');
    } else {
      alert('You need a score of 4/5 to proceed to the next level.');
    }
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
                onClick={handleProceed} // Proceed to the next level if the score is >= 4
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
                Congrats! Unlocks to Level 3!
              </button>
            ) : (
              <button
                onClick={handleTryAgain} // Try Again button if score is less than 4
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

export default Level2Quiz;
