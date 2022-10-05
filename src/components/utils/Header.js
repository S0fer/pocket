import logo from '../../assets/logo/logo_dark.svg'

function Header() {
    return (
        <header>
            <img src={logo} alt="logo" style={{width: '50px',}} />
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#quem">Quem Somos</a></li>
                <li><a href="#colaboradores">Colaboradores</a></li>
                <li><a href="#servicos">Serviços</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
        </header>
    );
}

export default Header;