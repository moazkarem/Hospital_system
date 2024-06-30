export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          // style nav bar
          bgHader: {
            main: "#ffffff",
          },
          coloriconDark: {
            main: "#607387",
          },
          // side bar colors
          background: {
            default: "#ffffff",
            paper: "#ffffff",
          },
          colorSidebar:{
            bg:'#ffffff' , 
            colors:'#7B8A9C'
          }
        }
      : {
          // palette values for dark mode
          // style nav bar
          bgHader: {
            main: "#2A2B40",
          },
          coloriconDark: {
            main: "#CBCBE2",
          },
          background: {
            default: "#232333",
            paper: "#2A2B40",
          },
     
          colorSidebar:{
            bg: "#2A2B40", 
            colors:'#9B9BB2'
          }
        }),
  },
});
