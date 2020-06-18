/*Crear una aplicación web que inicialmente muestre una mesa vacía. Utilizando el tablero
de control (un botón de agregar y uno de borrar) se podrán agregar y borrar, de a una, las
sillas que rodean la mesa. La mesa soporta hasta 8 mesas.*/

window.onload = function() {

	const sillas = document.querySelectorAll('.chair')
	/*console.log(sillas)*/

	const todasLasSillas = Array.from(sillas)
	/*console.log(todasLasSillas)*/

	for (let i = 0; i < todasLasSillas.length; i++) {
		todasLasSillas[i].style.visibility = 'hidden'
	}

	const botonAgregar = document.querySelector('.addChair')

    	function agregarSilla() {
		todasLasSillas.forEach(function(item) {
		item.style.visibility ='visible'
		})
    	}

	botonAgregar.addEventListener('click', agregarSilla)	

	const botonRemover = document.querySelector('.removeChair')

	function sacarSilla() {
  		todasLasSillas.forEach(function(item) {
		item.style.visibility ='hidden'
		})
    	}

	botonRemover.addEventListener('click', sacarSilla)

}
