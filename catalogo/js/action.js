
var arrayFotos = ["paredes/pared1.jpg","paredes/pared2.jpg"];
var arrayGalery = new Array();

//localStorage.removeItem("galeria")
mostrarFotos();
cargarStorage();
document.getElementById("lightbox").addEventListener("click", cerrarGaleria);
document.getElementById("siguiente").addEventListener("click", verFotos);
document.getElementById("anterior").addEventListener("click", verFotos);
var indiceFoto;

function mostrarFotos(){
    for(i = 0; i < arrayFotos.length; i++){
        var foto = document.createElement("img");
        foto.setAttribute("src", `img/${arrayFotos[i]}`);
        foto.addEventListener("dblclick", subirGaleria);
        document.querySelector("#fotos").append(foto);
    }
}


function subirGaleria(){
    var foto = this.getAttribute("src");
    var name = foto.split("/paredes/")[1];

    if (arrayGalery.includes(name)){
        alert("foto incluida");
        return  
    }

    arrayGalery.push(name);

    crearImagen(name);

    guardarStorage();
}


function guardarStorage(){
    if(arrayGalery.length == 0){
        localStorage.removeItem("galeria")
        return
    }

    var arrayTexto = arrayGalery.join("/");
    localStorage.setItem("galeria",arrayTexto);

}

function cargarStorage(){
    if(localStorage.getItem("galeria") != undefined){
        arrayGalery = localStorage.getItem("galeria").split("/paredes/");

        for(i = 0; i < arrayGalery.length; i++ ){
            crearImagen(arrayGalery[i]);
        }
    }
    
}

function crearImagen(name){
    var div = document.createElement("div");
    div.classList.add("cajaImgGaleria");

    var objeto = document.createElement("img");
    objeto.setAttribute("src", `img/paredes/${name}` );
    objeto.classList.add("imgGaleria");
    objeto.addEventListener("click", abrirGaleria);

    var borrar = document.createElement("img");
    borrar.setAttribute("src", `img/borrar.png`)
    borrar.setAttribute("id", name);
    borrar.classList.add("borrar");
    borrar.addEventListener("click", borrarFoto);

    div.append(objeto);
    div.append(borrar);
    document.querySelector("#galeria").append(div);

}

function borrarFoto(event){
    event.stopPropagation();
    var indice = arrayGalery.indexOf(this.id);
    console.log(this.id);
    this.parentNode.parentNode.removeChild(this.parentNode);

    arrayGalery.splice(indice, 1);

    guardarStorage();
}

function abrirGaleria(){
    var ruta = this.getAttribute("src");
    document.getElementById("fotoLightbox").setAttribute("src",ruta);
    document.getElementById("fotoLightbox").style.width = "600px";
    document.getElementById("fotoLightbox").style.height = "400px";


    $("#lightbox").fadeIn(2000, "linear");
    document.querySelector("#lightbox").style.display = "flex";
    indiceFoto = arrayGalery.indexOf(ruta.split("/paredes/")[1]);

}

function cerrarGaleria(event){
    $("#lightbox").fadeOut(4000, "linear");
}

function verFotos(event){
    event.stopPropagation();
    var botonPulsado = this.id;

    if (botonPulsado == "anterior"){
        indiceFoto--;
        if (indiceFoto < 0){
            indiceFoto = arrayGalery.length - 1;
        }
    }

    if (botonPulsado == "siguiente"){
        indiceFoto++;
        if (indiceFoto > arrayGalery.length - 1){
            indiceFoto = 0;
        }
    }

    document.getElementById("fotoLightbox").src = `img/paredes/${arrayGalery[indiceFoto]}`;

}
