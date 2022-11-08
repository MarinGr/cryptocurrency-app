import styled from "styled-components";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CryptoDetails from "../components/CryptoDetails";

function Details() {
  const [item, setItem] = useState({});
  let params = useParams();

  useEffect(() => {
    fetchDetails(params.id);
  }, [params.id]);

  async function fetchDetails(name) {
    const data = await fetch(
      `https://api.coinstats.app/public/v1/coins/${params.id}?currency=USD`
    );
    const result = await data.json();
    const currency = result.coin;
    setItem(currency);
  }

  return (
    <Container>
      <CryptoDetails item={item} />
    </Container>
  );
}

const Container = styled.div`
  background-color: var(--main-bg-color);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
export default Details;
