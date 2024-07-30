import { styled } from "styled-components";
import { media, theme } from "../../style/theme/theme";

export const AppBarWrap = styled.header`
  margin-bottom: 32px;

  .appbar-head-main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 16px;
  }

  .appbar-head-top {
    display: flex;
    align-items: center;
    column-gap: 10px;
    margin-bottom: 2px;

    .appbar-head-breadcrumb {
      font-size: 14px;
    }

    .side-open-btn {
      color: ${theme.colors.white};
      cursor: pointer;
      display: none;
      transition: ${theme.transitions.easeInOut};

      &:hover {
        opacity: 0.9;
      }

      ${media.xl`
        display: inline-flex;
        align-items: center;
        justify-content: center;
      `}
    }
  }

  .appbar-head-ttl {
    font-size: 32px;
    font-weight: 700;

    ${media.lg`
      font-size: 24px;
    `}
  }

  .appbar-head-rtl {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 10px;
    background-color: ${theme.colors.spaceCadet1};
    border-radius: 100vh;
    column-gap: 20px;

    ${media.sm`
      column-gap: 12px;
      width: 100%;
    `}
  }

  .appbar-head-search {
    /* max-width: 214px; */
    flex: 1;
    border-radius: 100vh;
    background: ${theme.colors.oxfordBlue};
    border: 0;
    padding: 0 20px;
    display: flex;
    align-items: center;
    column-gap: 10px;
  }

  .appbar-search-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    color: ${theme.colors.white};
  }

  .appbar-search-input {
    height: 40px;
    background: transparent;
    outline: 0;
    border: 0;
    caret-color: ${theme.colors.white};
    font-size: 14px;
    color: ${theme.colors.white};

    &::placeholder {
      color: ${theme.colors.white};
    }
  }

  .appbar-head-misc {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    button {
      color: ${theme.colors.white};
    }

    .appbar-head-notif,
    .appbar-head-info {
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .appbar-profile-avatar {
    width: 42px;
    height: 42px;
    border-radius: 100%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
    }
  }
`;
