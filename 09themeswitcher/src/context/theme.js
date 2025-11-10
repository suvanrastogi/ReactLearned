import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}



// we can also pass default values while creating
//  context we can even pass variable with default
//   values along with there default methods earlier 
//we were doinng all this in seperate files now we are doing it in single file ,
// we can even create custom hooks like useTheme 
