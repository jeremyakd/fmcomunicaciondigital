$(document).ready(function () {
	$.validator.setDefaults({
		messages: {
			Nombre: "Por favor ingrese su Nombre",
			Telefono: {
				required: "Por favor ingrese su Nro de Teléfono",
				minlength: "Su numero de teléfono no es valido",
			},
			Mensaje: "Por favor ingrese su Mensaje",
			Email: {
				required: "Por favor ingrese su E-mail",
				email: "Su direccion de E-mail no es valida",
			},
		},
	});
	$(document).on("click", "#btnEnviar", function () {
		$("#form").trigger("submit");
	});
	
	$(document).on("submit", "#form", function (e) {
		e.preventDefault();
		$(this).validate();
		if ($(this).valid()) {
			var form = new FormData(document.getElementById('form'));
			fetch("send-form.php", {
				method: "POST",
				body: form,
			}).then(response => response.json())
			  .then(result => {
				  if (result.success){
					  $("#mensajeMail").addClass("d-none");
					  window.location.href = "./gracias.html";
				  }else{
					  $("#mensajeMail").removeClass("d-none");
				  }
			  });
		}
		
	});
});