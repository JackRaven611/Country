import styled from "styled-components";

export const HeaderStyled = styled.nav`
    display: flex;
    justify-content: space-around;

    div {
        display: flex;
        justify-content: space-between;
        width: 95%;

        button {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            padding: 0;
            border: 0;
            width: 150px;
            cursor: pointer;

            img {
                max-width: 30px;
            }
        }
    }
`;
