import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import './App.css';
import Layout from './layout/Layout';
import Rockets from './layout/Rockets';
import MyProfile from './layout/MyProfile';
import Missions from './layout/Missions';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Rockets />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
