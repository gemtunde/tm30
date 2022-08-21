import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import List from './pages/list/List';
import Login from './pages/login/Login';
import Single from "./pages/single/Single";
import New from './pages/new/New'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/'>
          <Route index element={<Home/>} />
          <Route path='login' element={<Login />} />
          <Route path='user'>
            <Route index element={<List/>} />
            <Route path=':123' element={<Single />} />
            <Route path='new' element={<New />} />
          </Route>
          <Route path='product'>
            <Route index element={<List/>} />
            <Route path=':id' element={<Single />} />
            <Route path='new' element={<New />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
