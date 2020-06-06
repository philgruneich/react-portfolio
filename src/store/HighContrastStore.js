import React, { useState, createContext } from 'react';

export const HighContrastContext = createContext();
HighContrastContext.displayName = 'HighContrastContext';

export const HighContrastStore = props => {
  const [hasContrast, saveHasContrast] = useState(false);

  const toggleContrast = () => {
    saveHasContrast(() => !hasContrast);
  }

  return (
    <HighContrastContext.Provider
      value={{
        state: hasContrast,
        dispatch: saveHasContrast,
        toggle: toggleContrast
      }}
      {...props}
    />
  )
}
