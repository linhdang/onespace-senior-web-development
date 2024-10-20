import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Achievement from './pages/Achievement';

function App() {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/achievement" element={<Achievement />} />
          </Routes>
    </Router>
  );
}

export default App;
