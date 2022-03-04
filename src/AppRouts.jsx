import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import CreateCharPage from "./pages/CreateCharPage/CreateCharPage";
import HomePage from "./pages/HomePage/HomePage";

function AppRouts() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<CreateCharPage />} />
        <Route exact path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default AppRouts;
