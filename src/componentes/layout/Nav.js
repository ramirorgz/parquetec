import "../../estilos/componentes/layout/Nav.css";

import { NavLink } from "react-router-dom";

const Nav = (props) => {
  return (
    <nav>
      <div className="centrar">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "activo" : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacto"
              className={({ isActive }) => (isActive ? "activo" : undefined)}
            >
              Contacto
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/novedades"
              className={({ isActive }) => (isActive ? "activo" : undefined)}
            >
              Novedades
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/nosotros"
              className={({ isActive }) => (isActive ? "activo" : undefined)}
            >
              Nosotros
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
