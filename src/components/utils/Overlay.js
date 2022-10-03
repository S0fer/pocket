import { bg } from "../../assets/bg/bg";
import '../../style/Overlay.css'

function Overlay() {
    return (
        <div className="overlay">
            <a href="#top">
                <img src={bg.button} alt="button" />
            </a>
        </div>
    );
}

export default Overlay;