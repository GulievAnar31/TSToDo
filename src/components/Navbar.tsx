
import { NavLink } from 'react-router-dom';

export const Navbar: React.FC = () => {
    return (
      <nav>
        <div className="nav-wrapper green darken-2 px1">
          <NavLink to="#" className="brand-logo">
            React + TypeScript
          </NavLink>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <NavLink to="/">Список дел</NavLink>
            </li>
            <li>
              <NavLink to="/">Информация</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
}