import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import BusinessPlanning from './pages/BusinessPlanning';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/business-planning" element={<BusinessPlanning />} />
      </Routes>
    </Router>
  );
}

export default App;