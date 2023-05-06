function hacer(){ 
    var x=document.getElementById("appat").value; 
    x=x.substring(0,2); 
    var y=document.getElementById("apmat").value; 
    y=y.charAt(0); 
    var z=document.getElementById("nombre").value; 
    z=z.charAt(0); 
    var año=document.getElementById("año").value; 
    año=año.substring(2,4); 
    var mes=document.getElementById("mes").value; 
    var dia=document.getElementById("dia").value; 

    var conc=x+y+z+año+mes+dia; 
    var mayusc=conc.toUpperCase(); 
    document.getElementById("resultado").value=mayusc; 
} 