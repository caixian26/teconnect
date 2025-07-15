import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 20px 40px;
  text-align: center;
  color: #888;
  border-top: 1px solid #ddd;
`;

function Footer() {
  return (
    <FooterContainer>
      <p>© {new Date().getFullYear()} Teconnect. All rights reserved.</p> {/* 수정됨 */}
    </FooterContainer>
  );
}
export default Footer;