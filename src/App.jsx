import "./global.scss";
import { Routes, Router } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Routes></Routes>
      <Footer />
    </>
  );
};

export default App;
