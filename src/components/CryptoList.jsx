import styled from "styled-components";
import { Link } from "react-router-dom";
import { RotatingLines as Spinner } from "react-loader-spinner";

function CryptoList({ filteredList, spinner }) {
  const allCurrencies = filteredList.map((item) => (
    <StyledLink to={`/currency/${item.id}`} key={item.id}>
      <CryptoCard key={item.id}>
        <img src={item.icon} alt={item.name} />
        <CryptoDetails>
          <div>
            <h3>{item.name}</h3>
            <Symbol>{item.symbol}</Symbol>
          </div>
          <p>${item.price.toFixed(2)}</p>
        </CryptoDetails>
      </CryptoCard>
    </StyledLink>
  ));

  return (
    <Container>
      {spinner && (
        <Spinner
          strokeColor="var(--secondary-text-color)"
          strokeWidth="3"
          animationDuration="0.75"
          width="140"
          visible={true}
        />
      )}
      {allCurrencies}
    </Container>
  );
}
const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Container = styled.div`
  background-color: var(--main-bg-color);
  padding: 0 3rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const CryptoCard = styled.div`
  width: 320px;
  height: 130px;
  background-image: var(--card-bg-color);
  padding: 1rem 2rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--primary-text-color);
  box-shadow: var(--shadow);

  img {
    max-width: 80px;
    max-height: 80px;
    object-fit: contain;
    flex-basis: 0;
  }
`;

const CryptoDetails = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1.5rem;
`;

const Symbol = styled.p`
  color: var(--secondary-text-color);
`;

export default CryptoList;
