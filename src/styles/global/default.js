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

export const BlockWrapStyles = css`
  background: ${theme.colors.spaceCadet1};
  border-radius: 20px;
  padding: 24px;
`;

export const BlockContentWrap = styled.div`
  ${BlockWrapStyles}
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

export const BlockTableWrap = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  min-width: 500px;

  th,
  td {
    padding: 10px 12px;
  }

  thead,
  tbody {
    tr {
      td,
      th {
        &:first-child {
          padding: 0;
        }

        &:last-child {
          padding-right: 0;
        }
      }
    }
  }

  thead {
    th {
      text-align: left;
      font-size: 14px;
      color: ${theme.colors.powderBlue};
      padding-bottom: 20px;
      font-weight: 500;
      text-transform: uppercase;
    }
  }

  tbody {
    td {
      font-weight: 700;
    }
  }
`;

export const CheckboxWrap = styled.div`
  position: relative;
  width: 18px;
  height: 18px;

  .checkbox-holder {
    width: 100%;
    height: 100%;
    border: 2px solid ${theme.colors.white};
    border-radius: 2px;
  }

  .checkbox-mark {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 2px;
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #111c44;
    background-color: #7551ff;
    transition: ${theme.transitions.easeInOut};
  }

  input {
    opacity: 0;
    cursor: pointer;
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    &:checked {
      & + .checkbox-mark {
        opacity: 1;
      }
    }
  }
`;
