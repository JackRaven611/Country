import { LoaderStyled } from "./styles";
import { Spinner } from "./Spinner/Spinner";

export const Loader = () => {
    return (
        <LoaderStyled className="loader">
            <Spinner />
        </LoaderStyled>
    );
};
