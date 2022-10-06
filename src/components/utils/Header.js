import { useRef } from 'react';
import logo from '../../assets/logo/logo_dark.svg'
import '../../style/Header.css'

function Header() {
    const myRef = useRef(null);
    const handleClick = () =>{
        myRef.current.classList.toggle("teste");
    }
    return (
        <header>
            <img src={logo} alt="logo" style={{width: '50px',}} />
            <ul ref={myRef}>
                <li className='header_li'><a href="#home">Home</a></li>
                <li className='header_li'><a href="#quem">Quem Somos</a></li>
                <li className='header_li'><a href="#colaboradores">Colaboradores</a></li>
                <li className='header_li'><a href="#servicos">Serviços</a></li>
                <li className='header_li'><a href="#contato">Contato</a></li>
            </ul>
            <div className='menu' onClick={handleClick}>
                O
            </div>
        </header>
    );
}

export default Header;