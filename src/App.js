import GlobalStyles from "./css/global";
import HomeMain from "./frontend/Home";
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <Router>
          <div className="App">
            <HomeMain />
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
