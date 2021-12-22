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


$("#tamano").on('change', function() {

    //Se obtiene codigo de llamado desde las ayudas de postman
    let form = new FormData();
	form.append("tamano", this.value);

	let settings = {
	  "url": "http://localhost:5000/checksize",
	  "method": "POST",
	  "timeout": 0,
	  "processData": false,
	  "mimeType": "multipart/form-data",
	  "contentType": false,
	  "data": form
	};

	$.ajax(settings).done(function (response) {	  
	  $("#resultado_tamano").text(response);
	});
});

