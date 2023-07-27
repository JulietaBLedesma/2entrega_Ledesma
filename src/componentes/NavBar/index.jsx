import "../NavBar/navbar.css"
import "../CartWidgets"


function Navbar  ()  {
  return (
    <nav>
    <ul>
      <li>
        <button>Inicio</button>
      </li>
      <li>
        <button>Catálogo</button>
      </li>
      <li>
        <button>Carrito</button>
      </li>
    </ul>
  </nav>
  );
}

export default Navbar;
