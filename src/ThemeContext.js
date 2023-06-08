import {createContext, useContext, useState, useEffect} from "react";

const ThemeContext = createContext();
const ThemeProvider = ({children}) => {
    const intialTheme = () => localStorage.getItem("MYAPP_THEME");
    
    const [theme, setTheme] = useState((intialTheme === null) ? 'light' : intialTheme );
    const toggleTheme = () => {
      setTheme( theme === 'light' ? 'dark' : 'light');
    }
    
    useEffect( () => {
        localStorage.setItem("MYAPP_THEME", theme);
        if(theme === 'light') {
            document.documentElement.classList.remove("dark-mode");
            document.documentElement.classList.add("light-mode");
        }
        else{
            document.documentElement.classList.remove("light-mode");
            document.documentElement.classList.add("dark-mode");
        }
    }, [theme]);
    
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

const useTheme = () => {
    const context = useContext(ThemeContext);
    return context;
}

export {ThemeProvider, useTheme};