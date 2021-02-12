import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import PostsPage from "./pages/PostsPage";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="Container">
        <BrowserRouter>
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route path="/posts/:id" component={PostsPage} />
            <Redirect from="/" exact to="/home" />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
