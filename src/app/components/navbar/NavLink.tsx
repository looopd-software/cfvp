import Link from "next/link";

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
    <Link href={href}>{children}</Link>
);

export default NavLink;