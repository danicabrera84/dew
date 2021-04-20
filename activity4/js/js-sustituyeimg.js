'use strict'

fetch('img/changed.png').then(
      function (response) {
        if (response.ok) {
          response.blob().then(function (miBlob) {
            var imagen = document.getElementsByTagName("img")[0];
            var objectURL = URL.createObjectURL(miBlob);
            imagen.src = objectURL;
          });
        } else {
          alert('No se ha podido cargar la imagen');
        }
      }
    )
     
