import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import { useEffect, useState } from "react";

const App = () => {

  const [showStars,setShowStars]=useState(false);

  useEffect(()=>{
    const timer=setTimeout(()=>{
      setShowStars(true);
    },2)
    return ()=> clearTimeout(timer);
  },[])

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {showStars && <StarsCanvas />}
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
