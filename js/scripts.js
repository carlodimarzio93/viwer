document.addEventListener("DOMContentLoaded", function() {
    let currentURL = encodeURIComponent(window.location.href); // Obtiene y codifica la URL

    // Selecciona todos los enlaces dentro de la div
    document.querySelectorAll(".col-md-12 a").forEach(link => {
        link.href = link.href.replace("#TXT#", currentURL); // Reemplaza #TXT# por la URL actual
    });

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'vistualizacion',
      'parametro1': currentURL
    });



    var p = getParam('p');
    if (p !== null){
        document.getElementById("nombre").textContent = atob(p);
    }

    var i= getParam('i');
    if (i !== null){
        var elemento = atob(i);
    

        // Crear el iframe
        const iframe = document.createElement("iframe");

        // Configurar atributos
        iframe.src = elemento; // URL que quieres cargar
        iframe.width = "640";
        iframe.height = "360";
        iframe.style.border = "none"; // Quitar el borde
        iframe.scrolling = "no";  // O "yes", "no", dependiendo de lo que necesites

        // Habilitar pantalla completa
        iframe.allowfullscreen = true;  // Atributo de pantalla completa
        iframe.setAttribute("allow", "fullscreen");  // Alternativa moderna


        // Insertarlo en el cuerpo del documento
        document.getElementById("cuerpo").appendChild(iframe);

    }
});


const getParam = (param) => {
    const params = new URLSearchParams(window.location.search);
    return params.has(param) ? params.get(param) : null;
};
