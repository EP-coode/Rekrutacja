import { NavLink } from 'react-router-dom'

import './Navigation.css'

function Navigation() {
    return (
        <nav className="navigation">
            <div className="navigation__logo">
                Space Explorer 🚀
            </div>
            <ul className="navigation__option-list">
                <li className="navigation__option">
                    <NavLink to="/">main page</NavLink>
                </li>
                <li className="navigation__option">
                    <NavLink to="/fav">favourites</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;