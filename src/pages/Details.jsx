import styled from "styled-components";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CryptoDetails from "../components/CryptoDetails";

function Details() {
  const [item, setItem] = useState({});
  const [chartData, setChartData] = useState([]);
  const [detailsSpinner, setDetailsSpinner] = useState(false);

  let params = useParams();

  useEffect(() => {
    fetchDetails();
    getChartData();
  }, [params.id]);

  async function getChartData() {
    setDetailsSpinner(true);
    const fetchedData = await fetch(
      `https://api.coinstats.app/public/v1/charts?period=1y&coinId=${params.id}`
    );
    const result = await fetchedData.json();
    setChartData(result.chart);
    setDetailsSpinner(false);
  }

  async function fetchDetails() {
    const data = await fetch(
      `https://api.coinstats.app/public/v1/coins/${params.id}?currency=USD`
    );
    const result = await data.json();
    const currency = result.coin;
    setItem(currency);
  }

  return (
    <Container>
      <CryptoDetails
        item={item}
        chartData={chartData}
        detailsSpinner={detailsSpinner}
      />
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
