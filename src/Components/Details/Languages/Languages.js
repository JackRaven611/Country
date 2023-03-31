export const Languages = ({ languages }) => {
    return (
        <>
            <strong>Languages: </strong>
            {languages.map((language) => (
                <>{`${language.name} `}</>
            ))}
        </>
    );
};
