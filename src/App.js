
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import CharacterCard from "./components/CharacterCard";
import CharacterInfo from "./pages/CharacterInfo";

function App() {
  return (
    <div>
        <Router>
            <Routes>
              <Route index element={<Home/>}></Route>
              <Route path="character/:id" element={<CharacterInfo />}></Route>
              <Route path="character/:type" element={<CharacterCard />}></Route>
              <Route path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;