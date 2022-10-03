import logo from '../../assets/logo/logo_light.svg'

function Header() {
    return (
        <header>
            <img src={logo} alt="logo" style={{width: '50px',}} />
            <ul>
                <li>Colaboradores</li>
                <li>Contato</li>
                <li>Home</li>
                <li>Quem</li>
                <li>Servicos</li>
            </ul>
        </header>
    );
}

export default Header;
