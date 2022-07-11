import {Route,Routes} from 'react-router-dom';
import MainPage from './components/MainPage/mainpage';
import Signup from './components/Signup/signup';
import Login from './components/Login/login';
import UpdateUser from './components/UpdateUser/updateuser';
import StartGame from './components/StartGame/startgame';
import Statistics from './components/Submenu/Statistics/statistics.jsx';
import Referals from './components/Submenu/Referals/referals';
import Game from './components/Submenu/Game/game';

function App() {
  //const user=localStorage.getItem("token");
  return (
    <Routes>
      <Route path="/home" exact element={<MainPage/>} />
      <Route path="/home/game" exact element={<Game/>} />
      <Route path="/home/statistics" exact element={<Statistics/>}/>
      <Route path="/home/referals" exact element={<Referals/>}/>
      <Route path="/signup" exact element={<Signup/>} />
      <Route path="/login" exact element={<Login/>} />
      <Route path="/update/:id" exact element={<UpdateUser/>}/>
      <Route path="/" exact element={<StartGame/>}/>
    </Routes>
  );
}

export default App;
