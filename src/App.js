import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Contentcontainer from './components/Contentcontainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

function App() {
  const pageSize = 10;
  const apiKey = process.env.REACT_APP_API_KEY;
  const [progress, setProgress] = useState(0)

  return (
    <>
    <BrowserRouter>
     <Navbar />
     <LoadingBar
        height={4}
        color='#b404f3'
        progress={progress} 
      />
    <Routes>
    <Route exact path="/" element={<Contentcontainer setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />} /> 
          <Route exact path="/business" element={<Contentcontainer setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/>} /> 
          <Route exact path="/entertainment" element={<Contentcontainer setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>} /> 
          <Route exact path="/general" element={<Contentcontainer setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/> } />
          <Route exact path="/health" element={<Contentcontainer setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/>} /> 
          <Route exact path="/science" element={<Contentcontainer setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/>} /> 
          <Route exact path="/sports" element={<Contentcontainer setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/> } />
          <Route exact path="/technology"  element={<Contentcontainer setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/>} /> 
          <Route exact path="/stocks" element={<Contentcontainer setProgress={setProgress} apiKey={apiKey} key="stocks" pageSize={pageSize} country="in" category="stocks"/> } />
          <Route exact path="/politics" element={<Contentcontainer setProgress={setProgress} apiKey={apiKey} key="politics" pageSize={pageSize} country="in" category="politics"/>} /> 
          <Route exact path="/bitcoin" element={<Contentcontainer setProgress={setProgress} apiKey={apiKey} key="bitcoin" pageSize={pageSize} country="in" category="bitcoin"/> } />
      
    </Routes>
  </BrowserRouter>
  
  
  
   {/* <Contentcontainer category="general" apiKey={apiKey} /> */}
  </>
  );
}

export default App;
