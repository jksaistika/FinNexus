import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/HomePage';
import SignUpPage from './components/SignUpPage';
import Login from './components/LoginPage';
import FinEducation from './components/FinEducation';
import Level1Video from './components/Level1/Level1Video';
import Level1Instructions from './components/Level1/Level1Instructions';
import Level1Quiz from './components/Level1/Level1Quiz';
import Level2Video from './components/Level2/Level2Video';
import Level2Instructions from './components/Level2/Level2Instructions';
import Level2Quiz from './components/Level2/Level2Quiz';
import Level3Video from './components/Level3/Level3Video';
import Level3Instructions from './components/Level3/Level3Instructions';
import Level3Quiz from './components/Level3/Level3Quiz';
import Budgeting from './components/Budgeting/Budgeting';
import SetBudget from './components/Budgeting/SetBudget';
import NavigateToTrackExpense from './components/Budgeting/NavigateToTrackExpense';
import TrackExpenses from './components/Budgeting/TrackExpenses';
import ExpenseTablePage from './components/Budgeting/ExpenseTablePage';
import ExpenseOverview from './components/Budgeting/ExpenseOverview';
import Savings from './components/Budgeting/Savings';
import MicroInvestment from './components/Micro_Investment/MicroInvestment';
import ViewPlans from './components/Micro_Investment/ViewPlans';
import RegisterPlan from './components/Micro_Investment/RegisterPlan';
import SchemesPage from './components/SchemesPage';
import SchemeList from './components/SchemeList';  // Add the import for SchemeList

const App: React.FC = () => {
  const navigate = useNavigate();

  const handleLevelComplete = (level: number) => {
    console.log(`Level ${level} complete!`);
    if (level === 1) {
      navigate('/Level2/quiz');
    } else if (level === 2) {
      navigate('/Level3/quiz');
    } else {
      navigate('/finish');
    }
  };

  const isAuthenticated = true; // Replace with actual authentication logic

  // Define schemes data
  const governmentSchemes = [
    {
      name: "Women's Empowerment Scheme",
      description: "A scheme to promote women's entrepreneurship and empowerment.",
      link: "https://www.example.com/womens-empowerment-scheme",
    },
    {
      name: "Student Loan Scheme",
      description: "A loan scheme for students pursuing higher education.",
      link: "https://www.example.com/student-loan-scheme",
    },
  ];

  const ngoSchemes = [
    {
      name: "NGO Support Fund",
      description: "A funding program to support NGOs working in rural areas.",
      link: "https://www.example.com/ngo-support-fund",
    },
    {
      name: "Community Health Project",
      description: "An initiative to provide healthcare support to underserved communities.",
      link: "https://www.example.com/community-health-project",
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <div style={{ flexGrow: 1 }}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/fineducation" element={<FinEducation />} />

          {/* Level Routes */}
          <Route path="/Level1/video" element={<Level1Video />} />
          <Route path="/Level1/instructions" element={<Level1Instructions />} />
          <Route path="/Level1/quiz" element={<Level1Quiz onLevelComplete={(level) => handleLevelComplete(Number(level))} />} />
          <Route path="/Level2/video" element={<Level2Video />} />
          <Route path="/Level2/instructions" element={<Level2Instructions />} />
          <Route path="/Level2/quiz" element={<Level2Quiz onLevelComplete={(level) => handleLevelComplete(Number(level))} />} />
          <Route path="/Level3/video" element={<Level3Video />} />
          <Route path="/Level3/instructions" element={<Level3Instructions />} />
          <Route path="/Level3/quiz" element={<Level3Quiz onLevelComplete={(level) => handleLevelComplete(Number(level))} />} />

          {/* Budgeting Routes */}
          <Route path="/Budgeting" element={<Budgeting />} />
          <Route path="/set-budget" element={<SetBudget />} />
          <Route path="/track-expenses" element={<TrackExpenses />} />
          <Route path="/expense-table" element={<ExpenseTablePage />} />
          <Route path="/expense-overview" element={<ExpenseOverview />} />
          <Route path="/savings" element={<Savings />} />
          <Route path="/micro-investment" element={<MicroInvestment />} />
        <Route path="/view-plans" element={<ViewPlans />} />
        <Route path="/register-plan" element={<RegisterPlan />} />

          {/* Schemes Routes */}
          <Route path="/schemes" element={<SchemesPage />} />
          <Route path="/government-schemes" element={<SchemeList title="Government Schemes" schemes={governmentSchemes} />} />
          <Route path="/ngo-schemes" element={<SchemeList title="NGO Schemes" schemes={ngoSchemes} />} />

          {/* Fallback Route */}
          <Route path="*" element={isAuthenticated ? <Home /> : <Login />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
