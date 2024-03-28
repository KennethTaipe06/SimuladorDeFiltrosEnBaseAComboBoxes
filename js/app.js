//variables

const marca = document.querySelector("#marca");
const year = document.querySelector("#year");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");

const resultado = document.querySelector("#resultado"); //selecciona el div con id='resultado'
//selecciona el div con id='resultado'
const max = new Date().getFullYear();
const min = max - 15;

//genera un objeto con la busqueda
const datosBusqueda = {
    marca: "",
    year: "",
    minimo: "",
    maximo: "",
    puertas: "",
    transmision: "",
    color: "",
};

document.addEventListener("DOMContentLoaded", () => {
    mostrarAutos(autos); //carga los automoviles cuando el html este totalmente cargado
    llenarSelect(); //carga los años del select

});

//eventListener para los select de busqueda
marca.addEventListener("change", (e) => {
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
});
year.addEventListener("change", (e) => {
    datosBusqueda.year = parseInt(e.target.value);
    filtrarAuto();
});
minimo.addEventListener("change", (e) => {
    datosBusqueda.minimo = e.target.value;
    filtrarAuto();
});
maximo.addEventListener("change", (e) => {
    datosBusqueda.maximo = e.target.value;
    filtrarAuto();
});
puertas.addEventListener("change", (e) => {
    datosBusqueda.puertas = parseInt(e.target.value);
    filtrarAuto();
});
transmision.addEventListener("change", (e) => {
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
});
color.addEventListener("change", (e) => {
    datosBusqueda.color = e.target.value;
    filtrarAuto();
});




function mostrarAutos(autos) {
    limpiarHTML(); //Elimina el HTML previo
    //recorre el arreglo para cada carro
    autos.forEach((auto) => {
        //deconstruye el objeto
        const { marca, modelo, year, puertas, transmision, precio, color } = auto;
        //crea un parrafo para cada auto
        const autoHTML = document.createElement("P");
        //asigna el texto al parrafo
        autoHTML.textContent = `
        ${marca} ${modelo} - año: ${year} - ${puertas} puertas - transmision: ${transmision} - $: ${precio} - color: ${color}
        `;
        //lo muestra

        resultado.appendChild(autoHTML);
    });
}

function llenarSelect() {
    //recorre desde el maximo hasta el minimo incluyendolos
    for (let i = max; i >= min; i--) {
        const option = document.createElement("option"); //crea una nueva opcion
        option.value = i; //le asigna un valor a la opcion
        option.textContent = i; //le asigna el texto a la opcion
        year.appendChild(option); //muestra
    }
}

function filtrarAuto() {
    //funcion de alto nivel, filtra los autos por marca
    const resultado = autos.filter(filterMarca).filter(filterYear).filter(filterMinimo).filter(filterMaximo).filter(filterPuertas).filter(filterTransmision).filter(filterColor);
    mostrarAutos(resultado);

    if (resultado.length) {
        mostrarAutos(resultado);

    } else {
        noResultado();
    }
}

function noResultado() {
    limpiarHTML();
    const noResultado = document.createElement('DIV');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = 'No hay resultados, Intente con otra busqueda'

    resultado.appendChild(noResultado)
}


function filterMarca(auto) {
    //destructuring de datos busqueda que extraifa solo la marca
    const { marca } = datosBusqueda
    //si la marca esta llena o tiene algo que devuelva el auto que tenga la marca igual a la marca que se puso en el select
    if (marca) {
        return auto.marca === marca
    }
    //sino que se devuelva el auto completo
    return auto;
}


//limpia todo el html
function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

function filterYear(auto) {
    //destructuring de datos busqueda que extraifa solo la marca
    const { year } = datosBusqueda

    //si la marca esta llena o tiene algo que devuelva el auto que tenga la marca igual a la marca que se puso en el select
    if (year) {
        return auto.year === year;
    }
    //sino que se devuelva el auto completo
    return auto;
}

function filterYear(auto) {
    //destructuring de datos busqueda que extraifa solo la marca
    const { year } = datosBusqueda

    //si la marca esta llena o tiene algo que devuelva el auto que tenga la marca igual a la marca que se puso en el select
    if (year) {
        return auto.year === year;
    }
    //sino que se devuelva el auto completo
    return auto;
}

function filterMinimo(auto) {
    //destructuring de datos busqueda que extraifa solo la marca
    const { minimo } = datosBusqueda

    //si la marca esta llena o tiene algo que devuelva el auto que tenga la marca igual a la marca que se puso en el select
    if (minimo) {
        return auto.precio >= minimo;
    }
    //sino que se devuelva el auto completo
    return auto;
}

function filterMaximo(auto) {
    //destructuring de datos busqueda que extraifa solo la marca
    const { maximo } = datosBusqueda

    //si la marca esta llena o tiene algo que devuelva el auto que tenga la marca igual a la marca que se puso en el select
    if (maximo) {
        return auto.precio >= maximo;
    }
    //sino que se devuelva el auto completo
    return auto;
}

function filterPuertas(auto) {
    //destructuring de datos busqueda que extraifa solo la marca
    const { puertas } = datosBusqueda

    //si la marca esta llena o tiene algo que devuelva el auto que tenga la marca igual a la marca que se puso en el select
    if (puertas) {
        return auto.puertas === puertas;
    }
    //sino que se devuelva el auto completo
    return auto;
}

function filterTransmision(auto) {
    //destructuring de datos busqueda que extraifa solo la marca
    const { transmision } = datosBusqueda

    //si la marca esta llena o tiene algo que devuelva el auto que tenga la marca igual a la marca que se puso en el select
    if (transmision) {
        return auto.transmision >= transmision;
    }
    //sino que se devuelva el auto completo
    return auto;
}

function filterColor(auto) {
    //destructuring de datos busqueda que extraifa solo la marca
    const { color } = datosBusqueda

    //si la marca esta llena o tiene algo que devuelva el auto que tenga la marca igual a la marca que se puso en el select
    if (color) {
        return auto.color === color;
    }
    //sino que se devuelva el auto completo
    return auto;
}