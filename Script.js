function traerEstudiantes(){
    fetch("Prueba.json")
    .then(Prueba => Prueba.json())
    .then(listaEst => {
        console.log("dataEst", listaEst);
    })
}
traerEstudiantes();