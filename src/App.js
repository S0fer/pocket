import './App.css';
import { useState, useEffect } from 'react';
import Footer from './components/utils/Footer';
import Header from './components/utils/Header';
import Loading from './components/utils/Loading';
import Overlay from './components/utils/Overlay';
import Content from './components/content/Content';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(()=> {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000)
  }, [])

  return (
    <div className="App">
      {
        loading ? 
        <Loading />
        :
        <>
          <Header />
          <Content />
          <Footer />
          <Overlay />
        </>
      }
    </div>
  );
}

export default App;
