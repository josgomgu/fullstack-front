document.getElementById("frm").addEventListener('submit', function(event)
{
    let nombre  = document.getElementById("nombre").value;
    let apellido  = document.getElementById("apellido").value;
    
    document.getElementById('lblnombre').style.color = "black";
    document.getElementById('lblapellido').style.color = "black";

    if(nombre=="")
    {
        document.getElementById('lblnombre').style.color = "red";
        //alert("El campo nombre es obligatorio");
        event.preventDefault();        
    }

    if(apellido=="")
    {
        document.getElementById('lblapellido').style.color = "red";
        //alert("El campo apellido es obligatorio");
        event.preventDefault();        
    }
});

