import { useState, useEffect } from "react";
import { API_MAIN_URL } from "../../Common/Api/Api";
import { ListItem } from "../ListItem/ListItem";
import { ListStyled } from "./styles";
import { Loader } from "../../Common/Loader/Loader";

export const List = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch(API_MAIN_URL)
            .then((response) => response.json())
            .then((data) => {
                setCountries(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <>
            <ListStyled>
                {countries.length > 0 ? (
                    <ListItem countries={countries} />
                ) : (
                    <Loader />
                )}
            </ListStyled>
        </>
    );
};
