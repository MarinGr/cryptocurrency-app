import styled from "styled-components";
import Chart from "./Chart";

function CryptoDetails({ item }) {
  return (
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
        <Chart item={item} />
        <ChartLabel>Yearly dynamic</ChartLabel>
      </ChartContainer>
      <Website>
        <span> Official website: </span>
        <WebsiteLink href={item.websiteUrl} target="_blank">
          {item.websiteUrl}
        </WebsiteLink>
      </Website>
    </Card>
  );
}

const Card = styled.div`
  margin-top: 2rem;
  padding: 2rem 3rem;
  border-radius: 1rem;
  background-color: var(--header-bg-color);
  color: var(--primary-text-color);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

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
