import moon from "../../../img/moon-outline.svg";
import sun from "../../../img/sunny-outline.svg";
import { HeaderStyled } from "./HeaderStyled";
import { useContext } from "react";
import { ModeContext } from "../../../App";

export const Header = () => {
    const context = useContext(ModeContext);

    const onClick = () => {
        context.setDarkMode(!context.darkMode);
    };

    return (
        <>
            <HeaderStyled>
                <div>
                    <h1>Where is the world?</h1>
                    <button onClick={onClick}>
                        {context.darkMode ? (
                            <>
                                <img src={sun} alt="sun" />
                                <p>Light Mode</p>
                            </>
                        ) : (
                            <>
                                <img src={moon} alt="moon" />
                                <p>Dark Mode</p>
                            </>
                        )}
                    </button>
                </div>
            </HeaderStyled>
        </>
    );
};
