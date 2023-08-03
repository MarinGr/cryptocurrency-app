import styled from "styled-components";
import Chart from "./Chart";
import { RotatingLines as Spinner } from "react-loader-spinner";

function CryptoDetails({ item, chartData, detailsSpinner }) {
  return (
    <CardWrapper>
      {detailsSpinner && (
        <Spinner
          strokeColor="var(--secondary-text-color)"
          strokeWidth="3"
          animationDuration="0.75"
          width="140"
          visible={true}
        />
      )}
      {!detailsSpinner && (
        <Card>
          <Header>
            <img src={item.icon} alt={item.name} />
            <div>
              <h2>{item.name}</h2>
              <p>{item.symbol}</p>
            </div>
          </Header>
          <p>
            Price: <Price>${Math.round(item.price * 100) / 100}</Price>
          </p>
          <ChartContainer>
            <Chart chartData={chartData} />
            <ChartLabel>Yearly dynamic</ChartLabel>
          </ChartContainer>
          <Website>
            <span> Official website: </span>
            <WebsiteLink href={item.websiteUrl} target="_blank">
              {item.websiteUrl}
            </WebsiteLink>
          </Website>
        </Card>
      )}
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  height: 500px;
  width: 500px;
  margin-top: 2rem;
  padding: 2rem 3rem;
  border-radius: 1rem;
  background: var(--primary-color);
  color: var(--primary-text-color);
  box-shadow: var(--shadow);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  img {
    max-width: 80px;
    max-height: 80px;
    object-fit: contain;
    flex-basis: 0;
  }

  p {
    color: var(--secondary-text-color);
  }

  @media (max-width: 500px) {
    min-width: 100%;
    padding: 1rem;
  }
`;

const Price = styled.span`
  font-weight: 500;
  color: var(--primary-text-color);
  margin-left: 0.5rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ChartContainer = styled.div``;

const ChartLabel = styled.p`
  text-align: center;
  font-size: 14px;
`;

const Website = styled.div`
  color: var(--secondary-text-color);
`;

const WebsiteLink = styled.a`
  text-decoration: none;
  color: var(--primary-text-color);
  margin-left: 0.5rem;
`;

export default CryptoDetails;
