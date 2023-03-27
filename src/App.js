import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Details from "./pages/Details";
import Home from "./pages/Home";

function App() {
  const [cryptoList, setCryptoList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    fetchCurrencies();
  }, []);

  async function fetchCurrencies() {
    setSpinner(true);
    const data = await fetch(
      "https://api.coinstats.app/public/v1/coins?skip=0&currency=USD"
    );
    const result = await data.json();
    setSpinner(false);
    setCryptoList(result.coins);
    setFilteredList(result.coins);
  }

  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Routes>
          <Route
            path="/cryptocurrency-app"
            element={
              <Home
                spinner={spinner}
                cryptoList={cryptoList}
                filteredList={filteredList}
                setFilteredList={setFilteredList}
              />
            }
          />
          <Route path="/currency/:id" element={<Details />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

const Container = styled.div`
  height: 100vh;
`;
export default App;
