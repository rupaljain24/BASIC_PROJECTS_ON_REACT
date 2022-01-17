import React, { useState, useContext, createContext } from "react";
import sublinks from "./data";

export const AppContext = createContext();

export const AppProvider = ( {children}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(true);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeidebar = () => {
    setIsSidebarOpen(false);
  };
  const openSubmenu = () => {
    setIsSubmenuOpen(true);
  };

  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={
        (openSidebar,
        closeSubmenu,
        openSubmenu,
        closeidebar,
        setIsSidebarOpen,
        setIsSubmenuOpen)
      }
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
