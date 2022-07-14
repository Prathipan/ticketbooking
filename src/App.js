import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";
import BookingPage from "./components/BookingPage";

function App() {
  
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/booking" element={<BookingPage />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
