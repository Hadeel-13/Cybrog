import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Container } from "./components/index";
import { Header, Footer } from "./sections/index";
import { Home, Profile } from "./Pages/index";
import "./App.css";
function App() {
  return (
    <>
      <Router basename={'/'}>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </>
  );
}
export default App;
