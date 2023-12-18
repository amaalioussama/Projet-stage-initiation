import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { useState } from "react";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Template from "./scenes/template";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Alert from "./scenes/alert";
import Payment from "./scenes/payment";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import UserDetails from "./components/userDetails";

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <Router>
      <div className="Apps">
        <Routes>
          <Route
            exact
            path="*"
            element={isLoggedIn == "true" ? <div>
            <ColorModeContext.Provider value={colorMode}>
              <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="apps">
                  <Sidebar isSidebar={isSidebar} />
                  <main className="content">
                    <Topbar setIsSidebar={setIsSidebar} />
                    <Routes>
                      
                      <Route path="/" element={<Dashboard />} />
                      <Route path="/team" element={<Team />} />
                      <Route path="/contacts" element={<Contacts />} />
                      <Route path="/invoices" element={<Invoices />} />
                      <Route path="/form" element={<Form />} />
                      <Route path="/bar" element={<Bar />} />
                      <Route path="/pie" element={<Pie />} />
                      <Route path="/template" element={<Template />} />
                      <Route path="/faq" element={<FAQ />} />
                      <Route path="/alert" element={<Alert />} />
                      <Route path="/payment" element={<Payment />} />
                      <Route path="/calendar" element={<Calendar />} />
        
                    </Routes>
                    
                  </main>
                </div>
              </ThemeProvider>
            </ColorModeContext.Provider>
            </div> : <Login />}
          />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/admin" element={  <div>
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/template" element={<Template />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/alert" element={<Alert />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/calendar" element={<Calendar />} />

            </Routes>
            
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
    </div>
  }
   />
        </Routes>
     
      </div>
    </Router>
  );
}

export default App;
