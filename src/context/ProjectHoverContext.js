import React, { createContext, useContext, useState } from 'react';

export const ProjectHoverContext = createContext();

export const ProjectHoverProvider = ({ children }) => {
  // Estado que almacenará el COLOR de fondo de la página hovered (o null/color base)
  const [hoveredPageColor, setHoveredPageColor] = useState(null); // <-- CAMBIO AQUÍ

  return (
    <ProjectHoverContext.Provider value={{ hoveredPageColor, setHoveredPageColor }}> {/* <-- CAMBIO AQUÍ */}
      {children}
    </ProjectHoverContext.Provider>
  );
};

export const useProjectHover = () => {
  return useContext(ProjectHoverContext);
};