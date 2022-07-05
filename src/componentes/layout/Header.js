import "../../estilos/componentes/layout/Header.css";

const Header = (props) => {
  return (
    <header>
      <div className="centrar">
        <img className="logo" src="imagenes/Logo.png" alt="Logo" />
        <h2>ParqueTec</h2>
      </div>
    </header>
  );
};

export default Header;
