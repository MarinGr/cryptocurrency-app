import { useState, useEffect } from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

function Search({ cryptoList, setFilteredList }) {
  const [searchedCrypto, setSearchedCrypto] = useState("");

  useEffect(() => {
    const filtered = cryptoList.filter((item) =>
      item.name.toLowerCase().includes(searchedCrypto.toLowerCase())
    );
    setFilteredList(filtered);
  }, [searchedCrypto]);

  return (
    <Container>
      <InputGroup>
        <SearchIcon />
        <Input
          onChange={(e) => setSearchedCrypto(e.target.value)}
          type="text"
          placeholder="Search..."
          autoFocus
          value={searchedCrypto}
        ></Input>
      </InputGroup>
    </Container>
  );
}

const Container = styled.div`
  background-color: var(--main-bg-color);
  padding: 3rem;
  display: flex;
  justify-content: center;
`;

const InputGroup = styled.div`
  width: 50%;
  min-width: 300px;
  border-radius: 0.5rem;
  background-color: var(--search-bg-color);
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 14px;
  background-color: var(--search-bg-color);
`;

const SearchIcon = styled(BsSearch)`
  color: var(--secondary-text-color);
`;

export default Search;
