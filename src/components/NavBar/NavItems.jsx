import { Link } from "react-router-dom"

const links = [{ name: "Home", href: "/" }, { name: "About", href: "/about" }, { name: "Products", href: "/products" }]

const NavItems = () => {
    return (
        <ul>
            {links.map(item =>
                <li>
                    <Link to={item.href} className="list">
                        {item.name}
                    </Link>
                </li>)}
        </ul>
    )
}

export default NavItems
