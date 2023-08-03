import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Container>
      <StyledLink to="/cryptocurrency-app">
        <Logo> CR</Logo>
      </StyledLink>
    </Container>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Container = styled.div`
  width: 100%;
  background-color: var(--header-bg-color);
  color: var(--primary-text-color);
  padding: 1rem 3rem;
`;

const Logo = styled.p`
  font-family: "Oswald", sans-serif;
  font-size: 32px;
  font-weight: 600;
  line-height: 2rem;
`;

export default Header;
