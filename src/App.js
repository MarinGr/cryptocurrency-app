import "./App.css";
import { useState, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Details from "./pages/Details";
import Home from "./pages/Home";

function App() {
  const [cryptoList, setCryptoList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    fetchCurrencies();
  }, []);

  async function fetchCurrencies() {
    const data = await fetch(
      "https://api.coinstats.app/public/v1/coins?skip=0&currency=USD"
    );
    const result = await data.json();
    setCryptoList(result.coins);
    setFilteredList(result.coins);
  }

  return (
    <HashRouter>
      <Container>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                cryptoList={cryptoList}
                filteredList={filteredList}
                setFilteredList={setFilteredList}
              />
            }
          />
          <Route path="/currency/:id" element={<Details />} />
        </Routes>
      </Container>
    </HashRouter>
  );
}

const Container = styled.div`
  height: 100vh;
`;
export default App;
