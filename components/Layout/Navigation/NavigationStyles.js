import styled from "styled-components";

export const Container = styled.nav`
  position: fed;
  display: flex;
  flex-wrap: wrap;
  height: 60px;
  z-index: 99;
  justify-content: flex-start;
  align-items: left;
  width: 100%;
`;

export const NavLinks = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  gap: 5.5rem;
`;

export const LogoContainer = styled.div`
  width: 76px;
`;

export const NavItem = styled.a`
  display: block;
  font-family: "Proxima Nova";
  color: #616060;
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    transition: all 0.2s;
    cursor: pointer;
    color: #20388B;
  }
  @media only screen and (max-width: 860px) {

  }
`;
