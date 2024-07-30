import styled from "styled-components";
import { media, theme } from "../../style/theme/theme";

export const BaseLayoutWrap = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  color: ${theme.colors.white};

  .main-content-wrapper {
    flex: 1;
    padding: 32px 20px;
    margin-left: 260px;

    ${media.xxl`
       margin-left: 260px;
       padding: 32px 16px;  
    `}

    ${media.xl`
       margin-left: 72px;
       padding: 24px 16px;  
    `}

    ${media.md`
       margin-left:0px;
    `}
  }
`;
