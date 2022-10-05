import '../../style/Home.css'
import Carousel from '../test/Test';

function Home() {
    return (
        <div className="home">
            <div style={{zIndex:1}}>
                Conteúdo
            </div>
            <Carousel />
        </div>
    );
}

export default Home;