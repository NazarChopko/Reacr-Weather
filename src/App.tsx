import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/components/Home";
import Error from "./pages/shared/Error/Error";
import Header from "./pages/shared/Header/Header";
import Popup from "./pages/shared/Popup/Popup";
import { useTypedSelector } from "./redux/hooks/useTypedSelector";

function App() {
  const { error } = useTypedSelector((state) => state.currentWeather);

  return (
    <div className=" sm:h-full relative dark:bg-lite h-screen">
      <Popup />
      <div className="  max-w-[1200px] mx-auto pt-[20px] relative ">
        <Header />
        {error ? (
          <Error message={error} />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
          </Routes>
        )}
      </div>
    </div>
  );
}

export default App;
