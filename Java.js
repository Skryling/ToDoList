class Tarea{
    constructor(id,texto,done=false){
        this.id=id;
        this.texto=texto;
        this.done=done;
    }
}

// let tareas= JSON.parse(localStorage.getItem("tareas"));
 let tareas=[];
// tareas = JSON.parse(localStorage.getItem("tareas"));//error aqui con el push dado que si sacamos la declaracion
// del array ya que no se puede sumar mas objetos al mismo
let contenedorTarjetas = document.getElementById("contenedor-tarjetas");

const agregarTarea = (event) =>{
    event.preventDefault();
    // alert("funciono el submit");
    let tarea = document.getElementById("textTarea").value;
    // alert(`${tarea}`)

    if(tarea)
    {
        tareas.push(new Tarea(new Date().getTime(), tarea));
        localStorage.setItem(`tareas`,JSON.stringify(tareas));
        
        document.getElementById("textTarea").value="";

         listarTareas();
    }
}

const listarTareas = ()=> {
    tareas= JSON.parse(localStorage.getItem("tareas"));
    contenedorTarjetas.innerHTML="";

    tareas.map((item) => {
        let columna = document.createElement("div");
        columna.classList="col-12 col-md-6 offset-md-3 mb-2";
        let tarjeta = `<div class="card berder-primary"> 
        <div class="card-body d-flex justify-content-between aling-items-center">
        <span class="${item.done ? "text-decoration-line-through" : ""}"  onclick="tacharTarea(${item.id})">${item.texto.toUpperCase()} </span> 
        <div>
        <button type="button" class="btn btn-danger" onclick="eliminarTarea(${item.id})">X</button>
        </div>
        </div>
        </div>`;
        columna.innerHTML=tarjeta;
        contenedorTarjetas.append(columna);
    });
};

const eliminarTarea = (id) =>{

    tareas= JSON.parse(localStorage.getItem("tareas"));
    let index=tareas.findIndex((item)=>{
        return id==item.id;
    })
    // console.log(index);

    tareas.splice(index,1);
    
    
    localStorage.setItem(`tareas`,JSON.stringify(tareas));

    listarTareas(); 

}


const tacharTarea = (id) =>{
    tareas = JSON.parse(localStorage.getItem(`tareas`));
   let index= tareas.findIndex((item)=>{
    return item.id==id})
    tareas[index].done = !tareas[index].done;
    localStorage.setItem(`tareas`, JSON.stringify(tareas));
    listarTareas();
}


//  solucion al error al iniciar la pagina sin un arreglo en localstorage (not GP)
if(localStorage.getItem("tareas"))
{
    listarTareas();
}




