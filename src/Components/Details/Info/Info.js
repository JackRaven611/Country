import { Link } from "react-router-dom";
import { Borders } from "../Borders/Borders";
import { Currencies } from "../Currencies/Currencies";
import { Languages } from "../Languages/Languages";
import { InfoStyled } from "./InfoStyled";

export const Info = ({ countryInfo }) => {
    console.log(countryInfo.length);

    const info = countryInfo[0];

    return (
        <InfoStyled>
            <section className="imgSection">
                <Link to="/">
                    <button>Back</button>
                </Link>
                <img src={info.flag} alt={`${info.name} flag`} />
            </section>
            <section>
                <h1>{info.name}</h1>
                <ul className="infoList">
                    {info.nativeName ? (
                        <li>
                            <strong>Native Name:</strong> {info.nativeName}
                        </li>
                    ) : null}

                    {info.population ? (
                        <li>
                            <strong>Population:</strong> {info.population}
                        </li>
                    ) : null}

                    {info.region ? (
                        <li>
                            <strong>Region:</strong> {info.region}
                        </li>
                    ) : null}

                    {info.subregion ? (
                        <li>
                            <strong>Sub Region:</strong> {info.subregion}
                        </li>
                    ) : null}

                    {info.capital ? (
                        <li>
                            <strong>Capital: </strong> {info.capital}
                        </li>
                    ) : null}

                    {info.topLevelDomain ? (
                        <li>
                            <strong>Top Level Domain: </strong>
                            {info.topLevelDomain}
                        </li>
                    ) : null}

                    {info.currencies ? (
                        <li>
                            <Currencies currencies={info.currencies} />
                        </li>
                    ) : null}

                    {info.languages ? (
                        <li>
                            <Languages languages={info.languages} />
                        </li>
                    ) : null}
                </ul>
                {info.borders ? <Borders borders={info.borders} /> : null}
            </section>
        </InfoStyled>
    );
};
