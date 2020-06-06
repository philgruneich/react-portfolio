import React, { useState, useEffect, createContext } from 'react';
import { languages } from '~/lang';

export const LanguageContext = createContext();
LanguageContext.displayName = 'LanguageContext';

export const LanguageStore = props => {
  const [lang, saveLang] = useState('en');
  const [translations, saveTranslations] = useState(languages[lang]);

  useEffect(() => {
    saveTranslations(languages[lang]);
  }, [lang]);

  return (
    <LanguageContext.Provider
      value={{
        state: { lang, translations },
        dispatch: saveLang
      }}
      {...props}
    />
  )
}
