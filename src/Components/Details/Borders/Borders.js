export const Borders = ({ borders }) => {
    return (
        <ul className="borders">
            <strong>Bordering Countries: </strong>
            {borders.map((border) => (
                <li>{border}</li>
            ))}
        </ul>
    );
};
