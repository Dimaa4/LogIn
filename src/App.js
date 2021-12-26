import React from 'react';
import {
     BrowserRouter as Router,
     Routes,
     Route
   } from "react-router-dom";
import { store } from './redux/store';
import "./App.scss";
import { SignUp } from './pages/SignUp';
import { LogIn } from './pages/LogIn';
import { PersonalArea } from './pages/PersonalArea';
import { checkAcc } from './scripts/checkAcc';
import { ModalWindow } from './components/ModalWindow/ModalWindow';
export const App = ()=>{
React.useEffect(() => {
    checkAcc(isLogIn);
    
  }, []);
  
const isLogIn = ()=>{
    const acc = store.getState().acc;
    if(acc && Object.keys(acc).length !== 0 ){

        return(true);
        
    }
    else {

      return(false);
      
    }
}  
const [isModalWindowOpen, setOpenWindow]= React.useState(store.getState().mWindow.isOpen);
const [navig, setNavig] = React.useState(isLogIn());
  store.subscribe(()=>{
      setNavig(isLogIn());
      setOpenWindow(store.getState().mWindow.isOpen);
  });
  if(isModalWindowOpen){
    document.body.style.overflow = 'hidden';
  }


    return(
      <>
         {isModalWindowOpen &&  <ModalWindow/>  }
        <div className='container'>
            
            <Router>
            
            <Routes>
                <Route path="/" element={<PersonalArea navig = {navig}/>}></Route>
                <Route path="/login" element={<LogIn navig={navig}/>}></Route>
                <Route path="/signup" element={<SignUp navig={navig}/>}></Route>
            </Routes> 
            </Router>
        </div>
      </>
    );
}