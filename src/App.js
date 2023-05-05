import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './page/HomePage';
import DetailPage from './page/DetailPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/details/:continent" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
