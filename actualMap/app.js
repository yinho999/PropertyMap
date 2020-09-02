{
  $(document).ready(() => {
    // $(".left").animate({
    //   visibility: "hide"
    // }, 0);
    var content = true;
    //For sidebar
    //when the button in navbar clicked
    $(".fa-bars").click((e) => {
      if (content) {
        $(".content").animate({
          width: "90%"
        },300);
      } else {
        $(".content").animate({
          width: "100%"
        },500);
      }
      //the width of the sidebar will be toggled
      e.preventDefault();
      $(".left").animate({
        visibility: "toggle",
        width: "toggle"
      });
      content = !content;
    });

  });
}
