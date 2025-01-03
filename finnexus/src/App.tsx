import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';  // Ensure correct import path
import Footer from './components/Footer';  // Ensure correct import path
import Home from './components/HomePage';  // Ensure correct import path
import Login from './components/LoginPage';  // Ensure correct import path
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
import TrackExpenses from './components/Budgeting/TrackExpenses';
import ExpenseTable from './components/Budgeting/ExpenseTable';
import ExpenseOverview from './components/Budgeting/ExpenseOverview';
import Savings from './components/Budgeting/Savings';
import Charts from './components/Budgeting/Charts';
import MicroInvestment from './components/Micro_Investment/MicroInvestment';
import ViewPlans from './components/Micro_Investment/ViewPlans';
import RegisterPlan from './components/RegisterPlan';
import ScheduleTable from './components/ScheduleTable';
import SchemesModule from './components/SchemesModule';
import GovernmentSchemes from "./components/GovernmentSchemes";
import NGOSchemes from "./components/NGOSchemes";

const App: React.FC = () => {
  const isAuthenticated = true; // Replace with actual authentication logic

  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <div style={{ flexGrow: 1 }}>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/FinEducation" element={<FinEducation  />} />
            <Route path="/Level1Video" element={<Level1Video />} />
            <Route path="/Level1Instructions" element={<Level1Instructions />} />
            <Route path="/Level1Quiz" element={<Level1Quiz />} />
            <Route path="/Level2Video" element={<Level2Video />} />
            <Route path="/Level2Instructions" element={<Level2Instructions />} />
            <Route path="/Level2Quiz" element={<Level2Quiz />} />
            <Route path="/Level3Video" element={<Level3Video />} />
            <Route path="/Level3Instructions" element={<Level3Instructions />} />
            <Route path="/Level3Quiz" element={<Level3Quiz />} />
            <Route path="/Budgeting" element={<Budgeting  />} />
            <Route path="/SetBudget" element={<SetBudget />} />
            <Route path="/TrackExpenses" element={<TrackExpenses />} />
            <Route path="/ExpenseTable" element={<ExpenseTable />} />
            <Route path="/ExpenseOverview" element={<ExpenseOverview />} />
            <Route path="/Savings" element={<Savings />} />
            <Route path="/charts" element={<Charts />} />
            <Route path="/MicroInvestment" element={<MicroInvestment />} />
            <Route path="/ViewPlans" element={<ViewPlans />} />
            <Route path="/RegisterPlans" element={<RegisterPlan />} />
            <Route path="/ScheduleTable" element={<ScheduleTable />} />
            <Route path="/SchemesModule" element={<SchemesModule />} />
            <Route path="/government-schemes" element={<GovernmentSchemes />} />
            <Route path="/ngo-schemes" element={<NGOSchemes />} />
            {/* Add other routes here */}

            {/* Fallback Route */}
            <Route path="*" element={isAuthenticated ? <Home /> : <Login />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
