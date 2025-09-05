import Logo from "./NavBar/Logo";

const Footer = ()=> {
    const year = new Date().getFullYear();
    return (
        <footer>
            <Logo/>
            <p>&copy; {year}</p>
            <div className="icons">
                <i className="fa-regular fa-envelope"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-whatsapp"></i>
            </div>
        </footer>
    )
}

export default Footer;