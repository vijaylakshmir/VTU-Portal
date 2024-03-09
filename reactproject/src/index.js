import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import{
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from "./App";
import reportWebVitals from './reportWebVitals';
import HomeScreen from "./component/HomeScreen";
import AdminScreen from "./component/AdminScreen";
import ResultComponent from "./component/ResultComponent";
import ResultPage from "./component/ResultPage";
import StudentAdmissionFormScreen from './component/StudentAdmissionFormScreen';
import AdmissionDetailsScreen from './component/AdmissionDetailsScreen';
import AboutUsScreen from './component/AboutUsScreen';
import Circular from './component/Circular';
// import Certificate from './component/Certificate';
// import Guidelines from './component/Guidelines';
import ExamApplication from './component/ExamApplication'
import Departments from './component/Departments';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/' index={true} element={<HomeScreen/>}/>
      <Route path='/about' element={<AboutUsScreen/>}/>
      <Route path='/admin/login' element={<AdminScreen/>}/>
      <Route path='/result' element={<ResultComponent/>}/>
      <Route path='/resultpage/:id' element={<ResultPage/>}/>
      <Route path='/admission' element={<StudentAdmissionFormScreen/>}/>
      <Route path='/admin/admissiondetails' element={<AdmissionDetailsScreen/>}/>
      <Route path='/circular' element={<Circular/>}/>
      {/* <Route path='/certificate' element={<Certificate/>}/>
      <Route path='/guidelines' element={<Guidelines/>}/> */}
      <Route path='/ExamApplication' element={<ExamApplication/>}/>
      <Route path='/Departments' element={<Departments/>}/>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
