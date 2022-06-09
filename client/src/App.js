import Header from './components/Header';
import Dashboard from './components/Dashboard';
import TableSpecies from './components/TableSpecies';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/list-antelopes" element={<TableSpecies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
