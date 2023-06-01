import "../Header/style.css";
import "../../style/globalStyle.css";

export const Header = () => {
    return (
        <header className="header__main">
            <p className="header__main--title">Portfólio</p>
            <div className="header__main--buttons">
                <button className="header__main--button">Sobre</button>
                <button className="header__main--button">Stack</button>
                <button className="header__main--button">Projetos</button>
            </div>
            <div className="header__main--DivButton">
                <button className="header__main--buttonContact">Contato</button>
            </div>
        </header>
    );
};
