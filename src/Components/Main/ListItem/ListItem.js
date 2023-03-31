import { ListItemStyled } from "./styles.js";
import { Link } from "react-router-dom";

export const ListItem = ({ countries }) => {
    console.log(countries);
    return countries.map((country) => (
        <Link to={`/${country.name}`}>
            <ListItemStyled key={country.name}>
                <ul>
                    <li>
                        <img src={country.flag} alt={`${country.name} flag`} />
                    </li>
                    <li>
                        <h3>{country.name}</h3>
                    </li>
                    <li>
                        <p>
                            <strong>Population:</strong> {country.population}
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong>Region:</strong> {country.region}
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong>Capital:</strong>{" "}
                            {country.capital ? country.capital : "N/A"}
                        </p>
                    </li>
                    <li></li>
                </ul>
            </ListItemStyled>
        </Link>
    ));
};
