var x = window.matchMedia("(max-width: 420px)")
function verMenu() {

  if (x.matches) {
    var itemsMenu = document.getElementById("items");
    if (itemsMenu.style.display === "flex") {
      itemsMenu.style.display = "none";
    } else {
    
       itemsMenu.style.transition ="all .4s ease-in-out"
      itemsMenu.style.display = "flex";
    }
  } 
  else {
    var itemsMenu = document.getElementById("items");
    if (itemsMenu.style.display === "flex") {
      itemsMenu.style.display = "none";
    } else {
    
       itemsMenu.style.transition ="all .4s ease-in-out"
      itemsMenu.style.display = "flex";
    }
   
  }
  
}
