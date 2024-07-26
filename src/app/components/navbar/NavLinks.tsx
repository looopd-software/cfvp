import NavLink from './NavLink';
interface Props {
  className: string;
}
const NavLinks: React.FC<Props> = ({ className }: Props) => (
  <div className={`text-white gap-12 items-center ${className}`}>
    <NavLink href="#nosotros">Nosotros</NavLink>
    <NavLink href="#servicios">Servicios</NavLink>
    <NavLink href="#clientes">Clientes</NavLink>
    <NavLink href="#contacto">
      <div className="border border-white rounded-lg px-5 py-1">Contacto</div>
    </NavLink>
  </div>
);

export default NavLinks;
