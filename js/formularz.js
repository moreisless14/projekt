//click add(plus) //
function dodaj() {
    const arrow = document.querySelector('.formularz');
    const out = document.querySelector('.out');
    
    if (arrow.style.display == 'none') 
    {
        arrow.style.display = 'block';
        out.style.display = 'none';
      
     } 
    


     else 
{
    
    arrow.style.display = 'none';
    out.style.display = 'block';
    
}

const mediaQuery = window.matchMedia(' (min-width:450px) and  (max-width:915px) ');
    if ( mediaQuery.matches) {
        if(arrow.style.display == 'block')
        {
                $(".post").css("height","800px");
        }
    
    }
}
    

   //click odrzuć //
    function back() {
const arrow = document.querySelector('.formularz');
const comeback = document.querySelector('.out');

if (arrow.style.display == 'block') 
{
    
    arrow.style.display = 'none';
    comeback.style.display = 'block';
    
    
 } 

else 
{
 
arrow.style.display = 'block';
comeback.style.display = 'none';
}
const mediaQuery = window.matchMedia(' (min-width:774px) and  (max-width:915px) ');
    if ( mediaQuery.matches) {
        if(arrow.style.display == 'none')
        {
                $(".post").css("height","1200px");
        }
    
    }
    const mmedia = window.matchMedia(' (min-width:500px) and  (max-width:773px) ');
    if ( mmedia.matches) {
        if(arrow.style.display == 'none')
        {
                $(".post").css("height","230vh");
        }
    
    }
 

}
    /*
    $(document).ready(function() {
    $(".out").click(function() {
    $(".formularz").show(3000);
 });
});
    */