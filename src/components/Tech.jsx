import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { useEffect, useState } from "react";


const Tech = () => {

  const [showBalls,setShowBalls]=useState(false);

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setShowBalls(true);
    },1.5);

    return ()=> clearTimeout(timer);
  },[])
  
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology)=>(
        <div className="w-28 h-28" key={technology.name}>
          {showBalls && <BallCanvas icon={technology.icon}/>}

        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech,"");