import { createGlobalStyle } from 'styled-components';

import { ITheme } from 'theme';

const GlobalStyle = createGlobalStyle<{ theme: ITheme }>`
  * {
    color: ${({ theme }: { theme: ITheme }): string => theme.colors.darkText};
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    font-size: 20px;
  }
`;

export default GlobalStyle;