function traercasa(){
    fetch("Datos.json")
    .then(Datos => Datos.json())
    .then(traerCasa => {
        objetos(traerCasa)
    })
}
traercasa();

var traelascasas = []
var todojunto = ``
function objetos(traelascasas){
    for (i = 0; i < traelascasas.length; i++ ){
        jose = traelascasas[i]
        todojunto += `
        <div>
            <img src="${jose.img}" alt="Property 1">
            <div class="Property-details">
                <p class="price">${jose.precio}</p>
                <span class="beds">${jose.Habitaciones} |</span>
                <span class="baths">${jose.Baños} |</span>
                <span class="sqft">${jose.Metroscuadrados}</span>
                <address>
                    ${jose.Dirección}
                </address>
            </div>
        </div>`
    }
    
    document.getElementById("properties-slider").innerHTML = todojunto
}

