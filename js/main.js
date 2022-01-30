(() => {
    // make associations (select) with elements in the HTML markup using CSS
    let theHeading = document.querySelector(".main-heading"),
       theIcons = document.querySelectorAll(".icon");
   
   
    // scripting behaviour with the functions
    function logElement () {
      //when you will click, you will see the name of the icon
        console.log("clicked on an element:", this.id);
    }
   
    theHeading.addEventListener("click", logElement);
   // the below will be one for many, same class that will be icon and will show output for individual in console window
    theIcons.forEach(icon => icon.addEventListener("click", logElement))
   }) ();
   