import React,{useContext,useEffect,useState} from 'react';

const AppContext = React.createContext();
//provider
const AppProvider=({children})=>{

  const [sideBarOpen,setSideBarOpen]=useState(false);
const [modalOpen,setModalOpen]=useState(false);

//function to open & close them.
const openSidebar=()=>{
  setSideBarOpen(true);
}
const closeSidebar=()=>{
  setSideBarOpen(false);
}

const openModal=()=>{
  setModalOpen(true)
}
const closeModal=()=>{
  setModalOpen(false);
}
  return <AppContext.Provider value={{
    sideBarOpen,modalOpen,openModal,openSidebar,closeSidebar,closeSidebar
  }}>{children}</AppContext.Provider>
}

//Custom Hook : insteading of imort both appcontext & then useContext in Home.js only import
// custom Hook useGlbalcontext
export const useGlobalContext=()=>{
return useContext(AppContext)
}

export {AppContext,AppProvider}

//import appProvider in index.js
//if we dont pass children nothing will be displayed.
//pehle component ko wrap krte the ab [puri app ko krenge]




