import { NavLink } from 'react-router-dom'

import './Navigation.css'

function Navigation() {
    return (
        <nav className="navigation">
            <div className="navigation__logo">
                Space Explorer 🚀
            </div>
            <ul className="navigation__item-list">
                <li>
                    <NavLink
                        to="/"
                        activeClassName={'--active'}
                        className={'navigation__item btn'}
                        exact
                    >main page</NavLink>
                </li>
                <li>
                    <NavLink to="/fav"
                        className={'navigation__item btn'}
                        activeClassName={'--active'}>
                        favourites</NavLink>
                </li>
            </ul>
        </nav >
    );
}

export default Navigation;