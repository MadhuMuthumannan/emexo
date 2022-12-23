import React from "react";
// Context has been created
const ThemeContext = React.createContext({
    theme: 'light',
    setTheme: () => { }
});
// Provider
const ThemeContextProvider = ({ children }) => {
    const [toggle, setToggle] = React.useState('light');
    const toggleFunction = () => {
        setToggle(toggle === 'light' ? 'dark' : 'light');
    };
    return (
        <ThemeContext.Provider value={{ toggle, toggleFunction }}>
            {children}
        </ThemeContext.Provider>
    );
};
export { ThemeContext, ThemeContextProvider };