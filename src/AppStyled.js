import styled, { css } from "styled-components";
import { lightTheme, darkTheme } from "./Components/Common/Themes/Themes";

const Dark = css`
    background-color: ${darkTheme.background};
    color: ${darkTheme.text};

    nav {
        background-color: ${darkTheme.elements};

        button {
            background-color: ${darkTheme.elements};
            color: ${darkTheme.text};
        }
    }

    li {
        background-color: ${darkTheme.elements};
        color: ${darkTheme.text};
    }

    .infoList {
        li {
            background-color: ${darkTheme.background};
        }
    }

    button {
        background-color: ${darkTheme.elements};
        color: ${darkTheme.text};
    }
    .loader {
        background-color: ${darkTheme.background};
    }
`;

const Light = css`
    background-color: ${lightTheme.background};
    color: ${lightTheme.text};

    nav {
        background-color: ${lightTheme.elements};

        button {
            background-color: ${lightTheme.elements};
            color: ${lightTheme.text};
        }
    }

    li {
        background-color: ${lightTheme.elements};
        color: ${lightTheme.text};
    }

    .infoList {
        li {
            background-color: ${lightTheme.background};
        }
    }

    button {
        background-color: ${lightTheme.elements};
        color: ${lightTheme.text};
    }

    .loader {
        background-color: ${lightTheme.background};
    }
`;

export const AppStyled = styled.div`
    ${({ themeMode }) => (themeMode ? Dark : Light)};
`;
