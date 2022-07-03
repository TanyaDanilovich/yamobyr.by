$(document).ready(function () {
	$("form").submit(function (event) {
		event.preventDefault();
		let form_data = jQuery(this).serialize(); // Собираем данные из полей
		if (event.target.classList.contains('callback-form')) {
			// Событие отправки с формы
			$.ajax({
				type: "POST", // Метод отправки
				url: "sendform.php", // Путь к PHP обработчику sendform.php
				data: form_data,
				success: swal({
					title: "Спасибо за заявку!",
					type: "success",
					showConfirmButton: false,
					timer: 2000
				})
			});
		} else {
			// Событие отправки с формы
			$.ajax({
				type: "POST", // Метод отправки
				url: "sendform.php", // Путь к PHP обработчику sendform.php
				data: form_data,
				success: swal({
					title: "Ваше сообщение отправлено!",
					type: "success",
					showConfirmButton: false,
					timer: 2000
				})
			});
		}
		event.target.reset();
	});
});