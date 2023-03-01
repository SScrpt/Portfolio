const contenedor = document.querySelector('#proyectos');

for (let index in Proyectos) {
    let proyectoAGenerar = '';
    proyectoAGenerar += `<div class="proyecto">`;
    proyectoAGenerar += `<div class="imagen" id="${Proyectos[index].imagen}"></div>`;
    proyectoAGenerar += `<div class="titulo">${Proyectos[index].nombre}</div>`;
    proyectoAGenerar += `<div class="descripcion"><p>${Proyectos[index].descripcion}</p></div>`;
    proyectoAGenerar += `<div class="vinculo"><a href="${Proyectos[index].link}" target="_blank"><span>Acceder al proyecto</span><span class="material-symbols-outlined icono">display_external_input</span></a></div>`;
    proyectoAGenerar += `<div class="fecha">${Proyectos[index].fecha}</div>`;
    proyectoAGenerar += `</div>`;
    contenedor.innerHTML += proyectoAGenerar;
}
