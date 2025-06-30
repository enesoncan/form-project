import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CreateUser from "./pages/CreateUser";
import UserResult from "./pages/UserResult";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateUser />} />
        <Route path="/result" element={<UserResult />} />
      </Routes>
    </Router>
  );
}

export default App;
