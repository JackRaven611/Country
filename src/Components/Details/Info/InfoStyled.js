import styled from "styled-components";

export const InfoStyled = styled.div`
    display: flex;
    justify-content: space-evenly;

    section {
        width: 40%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;

        ul {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            list-style: none;
            padding: 0;
            margin: 0;
            max-height: 200px;

            li {
                padding: 8px 0;
            }
        }

        .borders {
            display: flex;
            flex-direction: row;

            align-items: center;
            gap: 15px;
            padding: 15px 0;

            li {
                padding: 5px 15px;
                border-radius: 5px;
            }
        }
    }

    .imgSection {
        button {
            padding: 10px 35px;
            border: 0;
            border-radius: 5px;
        }

        img {
            margin-top: 50px;
            width: 100%;
        }
    }
`;
