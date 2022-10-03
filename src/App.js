import './App.css';
import { useState, useEffect } from 'react';
import Footer from './components/utils/Footer';
import Header from './components/utils/Header';
import Loading from './components/utils/Loading';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(()=> {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000)
  }, [])

  return (
    <div className="App">

      {
        loading ? 
        <Loading />
        :
        <>
          <Header />
          <Footer />
        </>
      }

    </div>
  );
}

export default App;
