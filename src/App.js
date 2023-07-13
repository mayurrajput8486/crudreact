import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import EmpCreate from './components/EmpCreate';
import EmpDetails from './components/EmpDetails';
import EmpEdit from './components/EmpEdit';
import EmployeeList from './components/EmployeeList';

function App() {
  return (
    <div className='App'>
      <h1>React Crud Project of Student Management</h1>
      {/* <EmpCreate />
      <EmployeeList /> */}
      <BrowserRouter>
        <Routes >
          <Route path='/' element={<EmployeeList />}></Route>
          <Route path='/employee/create' element={<EmpCreate />}></Route>

          <Route path='/employee/details/:empId' element={<EmpDetails />}></Route>
          <Route path='/employee/edit/:empId' element={<EmpEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
