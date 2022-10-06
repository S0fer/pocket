import button from '../../assets/bg/button.png'
import '../../style/Overlay.css'

function Overlay() {
    return (
        <div className="overlay">
            <a href="#top">
                <img src={button} alt="button" />
            </a>
        </div>
    );
}

export default Overlay;