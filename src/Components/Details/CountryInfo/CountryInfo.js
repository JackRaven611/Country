import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Info } from "../Info/Info.js";
import { Loader } from "../../Common/Loader/Loader.js";

export const CountryInfo = () => {
    const params = useParams();

    const [countryInfo, setCountryInfo] = useState([]);

    useEffect(() => {
        fetch(`https://restcountries.com/v2/name/${params.countryId}`)
            .then((response) => response.json())
            .then((data) => {
                setCountryInfo(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [params.countryId]);

    return (
        <>
            {countryInfo.length > 0 ? (
                <Info countryInfo={countryInfo} />
            ) : (
                <Loader />
            )}
        </>
    );
};
