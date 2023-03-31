export const Currencies = ({ currencies }) => {
    return (
        <>
            <strong>Currencies: </strong>
            {currencies.map((currency) => (
                <>{`${currency.name} `}</>
            ))}
        </>
    );
};
