import SideBar from "./components/SideBar/SideBar";
import Main from "./components/Main/Main";
import { useEffect, useState } from "react";

const App = () => {
  const [refreshWidth, setRefreshWidth] = useState(false);
  const [refresLine, setRefreshLine] = useState(false);

  const [outerBorderLeft, setOuterBorderLeft] = useState(0);
  const [outerBorderTop, setOuterBorderTop] = useState(0);

  const [innerBorderLeft, setInnerBorderLeft] = useState(0);
  const [innerBorderTop, setInnerBorderTop] = useState(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    setTimeout(() => {
      setOuterBorderLeft(event.clientX);
      setOuterBorderTop(event.clientY);
    }, 100);
    setTimeout(() => {
      setInnerBorderLeft(event.clientX);
      setInnerBorderTop(event.clientY);
    }, 50);
  }


  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setRefreshWidth(true);
    }, 2000);

    const timeout2 = setTimeout(() => {
      setRefreshLine(true);
    }, 1000);

    return () => {
      clearTimeout(timeout1)
      clearTimeout(timeout2)
    };
  }, []);


  return (
    <div className="flex w-full h-full relative" onMouseMove={handleMouseMove}>
      <div className="w-7 h-7 border border-lime-500 rounded-full fixed z-auto bg-transparent" style={{
        top: `${outerBorderTop - 14}px`,
        left: `${outerBorderLeft - 14}px`,
        transition: 'top .08s ease-out, left .08s ease-out'
      }}></div>
      <div className="w-1 h-1 bg-white rounded-full fixed z-auto" style={{
        top: `${innerBorderTop - 2}px`,
        left: `${innerBorderLeft - 2}px`,
        transition: 'top .08s ease-out, left .08s ease-out'
      }}></div>
      <SideBar />
      <Main />
      <div className={`open-door fixed top-0 left-0 h-screen bg-white w-1/2 z-60 ${refreshWidth ? 'refresh-width' : ''}`}></div>
      <div className={`open-door fixed top-0 right-0 h-screen bg-white w-1/2 z-60 ${refreshWidth ? 'refresh-width' : ''}`}></div>
      {!refreshWidth && <div className={`center-line fixed bottom-1/2 left-1/2 w-[1px] bg-black z-70 ${refresLine ? 'h-[50vh] top-0' : 'top-1/2 h-[0vh]'}`}></div>}
      {!refreshWidth && <div className={`center-line fixed top-1/2 left-1/2 w-[1px] bg-black z-70 ${refresLine ? 'h-[50vh] bottom-0' : 'h-[0vh]'}`}></div>}
    </div>
  );
}

export default App

