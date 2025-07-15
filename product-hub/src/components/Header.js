import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  height: 80px;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  border-bottom: 1px solid #ddd;
`;
const Logo = styled(NavLink)` font-size: 1.5rem; font-weight: bold; `;
const NavMenu = styled.nav` display: flex; gap: 30px; `;
const StyledNavLink = styled(NavLink)`
  font-size: 1.1rem;
  color: #555;
  &.active { color: #000; font-weight: 700; }
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo to="/">Teconnect</Logo> {/* 수정됨 */}
      <NavMenu>
        <StyledNavLink to="/">홈</StyledNavLink>
        <StyledNavLink to="/products">제품 소개</StyledNavLink>
      </NavMenu>
    </HeaderContainer>
  );
}
export default Header;