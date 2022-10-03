import './App.css';
import { useState, useEffect } from 'react';
import Footer from './components/utils/Footer';
import Header from './components/utils/Header';
import Loading from './components/utils/Loading';
import Overlay from './components/utils/Overlay';
import Home from './components/content/Home';

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
          <Home />
          <Footer />
          <Overlay />
        </>
      }
    </div>
  );
}

export default App;
