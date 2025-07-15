import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    /* 배경을 크림색으로, 글자색을 짙은 차콜 그레이로 변경 */
    background-color: #F5F5DC; /* 크림색 (Off-white) */
    color: #36454F; /* 차콜 그레이 */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;
export default GlobalStyle;