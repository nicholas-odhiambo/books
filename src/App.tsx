import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppLayout } from "./layouts/AppLayout";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
