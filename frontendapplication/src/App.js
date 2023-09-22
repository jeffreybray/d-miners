import "./App.css";
import "./index.css";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./components/Login";
import Main from "./components/Main";
import Signup from "./components/Signup";
import backgroundImage from "./assets/bg1.png";
import DiscussionForum from "./components/DiscussionForum";
function App() {
  return (
      <BrowserRouter>
        <div className="flex flex-col min-h-screen" >
          <Route path="/" component={Login} exact></Route>
          <Route path="/signup" component={Signup}></Route>
          <Route path="/home" component={Main}></Route>
            <Route path="/home/discussion" component={DiscussionForum}></Route>

        </div>
      </BrowserRouter>
  );
}

export default App;
