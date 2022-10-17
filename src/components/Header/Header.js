// Импортируем стили
import './Header.css';
import app from "../../images/app.svg";

function Header() {
return (
            <header className="header">
                <img className="header__logo" src={app} alt="приложения"></img>
                <p className="header__title">Список приложений</p>
            </header>
)

}
export default Header;
