
{
$(document).ready(()=>{
  $(".sidebar").animate({visibility:"hide"},0);
  var content=true;
  //For sidebar
  //when the button in navbar clicked
  $(".fa-bars").click((e)=>{
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
