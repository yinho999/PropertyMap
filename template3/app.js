
{
$(document).ready(()=>{
  var content=true;
  //For sidebar
  //when the button in navbar clicked
  $(".sidebar-button").click((e)=>{
    //the width of the sidebar will be toggled
    e.preventDefault();
    $(".sidebar").animate({
    visibility:"toggle",
      width:"toggle"
      });
      if(content){
        $(".content").animate({width:"90%"});
        content=false;
      }else{
        $(".content").animate({width:"100%"});
        content=true;
      }
  });

});
}
