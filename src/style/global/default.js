import styled, { css } from "styled-components";
import { media, theme } from "../theme/theme";

export const Container = styled.div`
  max-width: 1320px;
  margin: auto;
  padding: 0 16px;
`;

export const BlockTitle = styled.div`
  margin-bottom: 24px;

  h3 {
    font-size: 32px;
    font-weight: 700px;
    color: ${theme.colors.white};

    ${media.xxl`
      fontSize: 24px;
    `}

    ${media.lg`
      fontSize: 20px;
    `}
  }
`;

export const BlockWrapStyle = css`
  background: ${theme.colors.spaceCadet1};
  border-radius: 20px;
  padding: 24px;
`;

export const BlockContentWrap = styled.div`
  ${BlockWrapStyle}
`;

export const BlockIconBtn = styled.button`
  background: ${theme.colors.spaceCadet1};
  border-radius: 10px;
  width: 34px;
  height: 34px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.white};
  svg {
    width: 24px;
    height: 24px;
  }
`;
