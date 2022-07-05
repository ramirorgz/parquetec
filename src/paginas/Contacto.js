/* FORMULARIO DE CONTACTO */
import "../estilos/componentes/paginas/Contacto.css";

const ContactoPage = (props) => {
  return (
    <main className="centrar contacto">
      <div>
        <h3>Formulario de Contacto</h3>
        <form action="" method="" className="formulario">
          <p>
            <label for="nombre">Nombre</label>
            <input type="text" name="" />
          </p>
          <p>
            <label for="email">Email</label>
            <input type="mail" name="" />
          </p>
          <p>
            <label for="telefono">Telefono</label>
            <input type="number" name="" />
          </p>
          <p>
            <label for="mensaje">Mensaje</label>
            <textarea name=""></textarea>
          </p>
        </form>
      </div>
    </main>
  );
};

export default ContactoPage;
