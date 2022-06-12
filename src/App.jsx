import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import githubUserContext from "./utils/githubUserContext";
import { Introduction, UserDetails, EmailPage, UseEffectAPI} from "./pages/index"


const App = () => {
  const [gitUserId, setGitUserId] = useState("");
  const [gitHubData, setgitHubData] = useState([]);

  return (
    <>
        <githubUserContext.Provider value={{ gitUserId, setGitUserId,gitHubData ,setgitHubData}}>
          <Router>
              <Routes>           
                <Route path="/" element={<Introduction />} />
                <Route path="/userDetails" element={<UserDetails />} />
                <Route path="/emailPage" element={<EmailPage />} />
                <Route path="/gitUserData" element={<UseEffectAPI />} />
              </Routes>
          </Router>
        </githubUserContext.Provider>
    </>
  );
};


export default App