import React from 'react';
import Footer from './components/Footer';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import GlobalStyles  from './components/GlobalStyles';
import { Suspense, lazy } from 'react';
// Components and pages
import Search from './components/Search';
import {Routes, Route} from 'react-router-dom';
import Loading from './components/Loading';
import { AnimatePresence } from 'framer-motion';
const Home = React.lazy(()=> import('./pages/Home'));
const Nav = React.lazy(()=> import('./components/Nav'));


function App() {
  // const counter = useSelector(state=> state.counter);
  return (
    <AppStyle className="App">
      <GlobalStyles/>
      <Nav/>
      <AnimatePresence>
      <Routes>
        <Route path='/' element={<Suspense fallback={<Loading/>}><Home/></Suspense>}/>
        <Route path='/search' element={<Suspense fallback={<Loading/>}><Search/></Suspense>}/>
      </Routes>
      </AnimatePresence>
      <Footer/>
    </AppStyle>
  );
}

const AppStyle = styled(motion.div)`
  background:linear-gradient(180deg, white, white, #121212, #121212)

`
export default App;
