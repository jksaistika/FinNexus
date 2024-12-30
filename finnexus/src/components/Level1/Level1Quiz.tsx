import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Level1Quiz: React.FC = () => {
  const navigate = useNavigate();
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);

  const questions = [
    {
      question: 'What is the primary purpose of a savings account?',
      options: ['To earn high returns', 'To keep your money safe and earn interest', 'To make large investments', 'To spend money quickly'],
      answer: 'To keep your money safe and earn interest',
    },
    {
      question: 'Which of the following is an example of an investment?',
      options: ['Buying a new phone', 'Buying stocks in a company', 'Paying for a subscription service', 'Purchasing groceries'],
      answer: 'Buying stocks in a company',
    },
    {
      question: 'What is a budget?',
      options: ['A plan for how to spend and save money', 'A type of bank account', 'A financial statement for a company', 'A loan from the bank'],
      answer: 'A plan for how to spend and save money',
    },
    {
      question: 'What does "credit score" represent?',
      options: ['How much money you have in the bank', 'Your ability to borrow money', 'The interest rates on your savings', 'The total amount of your income'],
      answer: 'Your ability to borrow money',
    },
    {
      question: 'What is the difference between a debit card and a credit card?',
      options: ['A debit card lets you borrow money, while a credit card doesn’t', 'A debit card uses your own money, while a credit card allows borrowing money', 'Debit cards are used for online shopping, while credit cards are not', 'There is no difference'],
      answer: 'A debit card uses your own money, while a credit card allows borrowing money',
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
      alert('Congrats! Unlocks to Level 2!');
      // Navigate to Level 2
      navigate('/Level2/video');
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
                Congrats! Unlocks to Level 2!
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

export default Level1Quiz;
