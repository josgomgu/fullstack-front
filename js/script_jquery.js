var f = $("#frm");
f.on("submit", function(e) { 
    
    let nombre  = $("#nombre").val();
    let apellido = $("#apellido").val();
    
    setColor('lblnombre','black');
    setColor('lblapellido','black');
    
    if(nombre=="")
    {
        setColor('lblnombre','red');
        e.preventDefault();        
    }

    if(apellido=="")
    {
        setColor('lblapellido','red');
        e.preventDefault();        
    }
});

function setColor(p_componente,p_color)
{
    $('#'+lblapellido).css("color", p_color);
}

