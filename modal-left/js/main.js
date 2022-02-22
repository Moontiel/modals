/* 
	$showHiddenModal: almacena el elemento html con el ID show-hidden-modal
*/
let $showHiddenModal = document.querySelector('#show-hidden-modal');

/* 
	$closeHiddenModal: almacena el elemento html con el ID show-hidden-modal
*/
let $hiddenModal = document.querySelector('#hidden-modal');

/* 
	añadimos un evento click en la variable $showHiddenModal
*/
$showHiddenModal.addEventListener('click', () => {
	/* 
		seleccionamos $hiddenModal y le añadimos la
		clase js_show_hidden_modal definida en la
		hoja d eestilos
	*/
	$hiddenModal.classList.add('js_show_hidden_modal');
})

/* 
	añadimos un evento click en la variable $hiddenModal
*/
$hiddenModal.addEventListener('click', () => {
	/* 
		seleccionamos $hiddenModal y le removemos la
		clase js_show_hidden_modal definida en la
		hoja d eestilos
	*/
	$hiddenModal.classList.remove('js_show_hidden_modal');
})