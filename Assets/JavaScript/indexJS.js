$(document).ready(function() {

  /////////////////////////////
  // Left Menu
  /////////////////////////////

  function OpenMenu() {
    $("#leftNavMenu").css({
      "left" : "0"
    });
    $("#leftNavMenuMask").css({
      "display" : "block"
    });
  }

  function CloseMenu() {
    $("#leftNavMenu").css({
      "left" : "-10%"
    });
    $("#leftNavMenuMask").css({
      "display" : "none"
    });
  }


  $("#openMenuButton").on("click", function() {
    OpenMenu();
  });
  $("#leftNavMenuMask").on("click", function() {
    CloseMenu();
  });

});
