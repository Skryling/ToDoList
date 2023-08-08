class Tarea{
    constructor(id,texto,done=false){
        this.id=id;
        this.texto=texto;
        this.done=done;
    }
}

// let tareas= JSON.parse(localStorage.getItem("tareas"));
let tareas = JSON.parse(localStorage.getItem("tareas"));//error aqui con el push dado que si sacamos la declaracion
// del array ya que no se puede sumar mas objetos al mismo
let contenedorTarjetas = document.getElementById("contenedor-tarjetas");

const agregarTarea = (event) =>{
    event.preventDefault();
    // alert("funciono el submit");
    let tarea = document.getElementById("textTarea").value;
    // alert(`${tarea}`)

    if(tarea)
    {
        tareas.push(new Tarea(new Date().getTime(), tarea))
        
        localStorage.setItem(`tareas`,JSON.stringify(tareas))
        
        document.getElementById("textTarea").value="";

        listarTareas();
    }
}

const listarTareas = ()=> {
    // let tareas= JSON.parse(localStorage.getItem("tareas"));
    contenedorTarjetas.innerHTML="";

    tareas.map((item) => {
        let columna = document.createElement("div");
        columna.classList="disTarea";
        let tarjeta = `<div class="disTarea"> <span>${item.texto} </span> </div>`;
        columna.innerHTML=tarjeta;
        contenedorTarjetas.append(columna);
    });
};

listarTareas();