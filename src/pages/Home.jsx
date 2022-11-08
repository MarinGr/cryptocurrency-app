import React from "react";
import Search from "../components/Search";
import CryptoList from "../components/CryptoList";

function Home({ cryptoList, setFilteredList, filteredList }) {
  return (
    <div>
      <Search cryptoList={cryptoList} setFilteredList={setFilteredList} />
      <CryptoList filteredList={filteredList} />
    </div>
  );
}

export default Home;
