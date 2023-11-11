import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route, Routes}  from 'react-router-dom';
import ListEmployeeComonent from './components/ListOfEmployee';
import HeaderComponent from './components/HeaderComponents';
import FooterComponent from './components/FooterComponents';
import AddEmployee from './components/AddEmployee';

function App() {
  return (
    <div>
      <Router>
      <HeaderComponent></HeaderComponent>
      <div className='container'>
        <Routes>
          <Route exact path="/" element= {<ListEmployeeComonent/>}></Route>
          <Route path="/employee" element= {<ListEmployeeComonent/>}></Route>
          <Route path='/add-employee' element= {<AddEmployee></AddEmployee>}></Route>
        </Routes>
      </div>
       <FooterComponent></FooterComponent>
      </Router>
    </div>
  );
}

export default App;