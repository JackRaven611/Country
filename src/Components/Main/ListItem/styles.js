import styled from "styled-components";

export const ListItemStyled = styled.li`
    padding: 0;
    margin: 0;
    list-style: none;
    border-radius: 7px;
    overflow: hidden;
    background-color: hsl(0, 0%, 100%);

    ul {
        list-style: none;
        padding: 0 0 45px 0;
    }

    img {
        width: 300px;
        height: 200px;
    }

    p {
        margin: 5px 0;
        padding: 0 25px;
    }

    h3 {
        margin: 10px 0;
        padding: 15px 25px;
        max-width: 250px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;
