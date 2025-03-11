import { createContext, useState, useMemo } from "react";

export const SidebarContext = createContext({
  isSidebarOpen: true,
  toggleSidebar: () => {},
});

export const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const value = useMemo(
    () => ({
      isSidebarOpen,
      toggleSidebar,
    }),
    [isSidebarOpen]
  );

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};
