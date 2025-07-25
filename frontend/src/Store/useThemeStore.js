import { create } from "zustand";


export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("chat-theme") || "dark", // Default theme
  setTheme: (newTheme) =>{
    set({ theme: newTheme });
    localStorage.setItem("chat-theme", newTheme); // Save to local storage
   // document.documentElement.setAttribute("data-theme", newTheme); // Update HTML attribute

  } ,// Function to update the theme
  resetTheme: () => set({ theme: "dark" }), // Function to reset to default theme
}));    
