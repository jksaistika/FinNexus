import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/LoginPage';
import Home from './components/HomePage';
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
import Budgeting from './components/Budgeting/Budgeting'; // Add the Budgeting Module
import SetBudget from './components/Budgeting/SetBudget';
import TrackExpenses from './components/Budgeting/TrackExpenses';
import ExpenseTablePage from './components/Budgeting/ExpenseTablePage';
import ExpenseOverview from './components/Budgeting/ExpenseOverview';
import Savings from './components/Budgeting/Savings';
const App: React.FC = () => {
  return (
    <Routes>
      {/* Login Page */}
      <Route path="/" element={<Login />} />

      {/* Home Page */}
      <Route path="/home" element={<Home />} />
      {/* FinEducation */}
      <Route path="/fineducation" element={<FinEducation />} />

      {/* Level 1 Routes */}
      <Route path="/Level1/video" element={<Level1Video />} />
      <Route path="/Level1/instructions" element={<Level1Instructions />} />
      <Route path="/Level1/quiz" element={<Level1Quiz />} />

      {/* Level 2 Routes */}
      <Route path="/Level2/video" element={<Level2Video />} />
      <Route path="/Level2/instructions" element={<Level2Instructions />} />
      <Route path="/Level2/quiz" element={<Level2Quiz />} />

      {/* Level 3 Routes */}
      <Route path="/Level3/video" element={<Level3Video />} />
      <Route path="/Level3/instructions" element={<Level3Instructions />} />
      <Route path="/Level3/quiz" element={<Level3Quiz />} />

      {/* Budgeting Module Route */}
      <Route path="/Budgeting" element={<Budgeting />} /> {/* Add the Budgeting route */}
      <Route path="/set-budget" element={<SetBudget />} />
      <Route path="/track-expenses" element={<TrackExpenses />} />
      <Route path="/expense-table" element={<ExpenseTablePage />} />
      <Route path="/expense-overview" element={<ExpenseOverview />} />
      <Route path="/savings" element={<Savings />} />
    </Routes>
  );
};

export default App;