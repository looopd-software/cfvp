import NavLink from './NavLink';

const NavLinks: React.FC = () => (
  <div className="flex text-white gap-12 items-center">
    <NavLink href="#servicios">Servicios</NavLink>
    <NavLink href="#nosotros">Nosotros</NavLink>
    <NavLink href="#socios">Socios</NavLink>
    <NavLink href="#blog">Blog</NavLink> {/* New nav link */}
    <NavLink href="#contacto">
      <div className="border border-white rounded-lg px-5 py-1">Contacto</div>
    </NavLink>
  </div>
);

export default NavLinks;
