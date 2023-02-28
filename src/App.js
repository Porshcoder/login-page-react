import './App.css';
import Form from './Components/Form';
import React, { useState, useEffect } from 'react';
import CircleLoader from 'react-spinners/CircleLoader'

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 6000)
  }, []);


  return (
    <div className="App">
      {
        loading ? (

          <CircleLoader size={150} color={"#eaee1a"} loading={loading} />
        ) :

          <Form>

          </Form>
      }
    </div>
  );

}


export default App;
