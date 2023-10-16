alert('Ola Mundo');
function tocaSom(idElementoAudio){
document.querySelector(idElementoAudio).play();
}



        const listaDeTeclas = document.querySelectorA11('.tecla');

      let contador = 0;
       
        while(contador <listaDeTeclas.length) {
      const tecla = listaDeTeclas[contador];
          const instrumento = tecla.classList[1];
                  '#som_ ${instrumento}';
                  console.log(idAudio);
          console.log(instrumento);
        tecla.onclick = function () {
                tocaSom('#som_tecla_splash');
            contador = contador + 1;
        };
          }