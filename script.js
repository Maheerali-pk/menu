document.addEventListener("DOMContentLoaded", () => {
   if (window.innerWidth < 700) {
      new Mmenu("#menu", {
         offCanvas: {
            position: "bottom",
            clone: true,
         },
         backButton: { close: false },
         slidingSubmenus: true,
         navbar: { add: true },
         theme: "light",
      });
   }
});
