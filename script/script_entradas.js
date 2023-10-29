// Stepper Up
$('.stepper .stepper-arrow.up').click(function () {
    var input = $(this).siblings('input');
    var currentValue = parseInt(input.val());
    var max = parseInt(input.attr('max'));

    if (currentValue < max) {
        input.val(currentValue + 1);
    }
});

// Stepper Down
$('.stepper .stepper-arrow.down').click(function () {
    var input = $(this).siblings('input');
    var currentValue = parseInt(input.val());
    var min = parseInt(input.attr('min'));

    if (currentValue > min) {
        input.val(currentValue - 1);
    }
});

// Update input on manual input change
$('.stepper input').change(function () {
    var input = $(this);
    var value = parseInt(input.val());
    var min = parseInt(input.attr('min'));
    var max = parseInt(input.attr('max'));

    if (value < min) {
        input.val(min);
    } else if (value > max) {
        input.val(max);
    }
});

document.getElementById("openPdfButton").addEventListener("click", function(event) {
    // Prevent the default behavior of the button
    event.preventDefault();

    // Get the input elements by their IDs
    var nombreInput = document.getElementById("forms-current-from");
    var emailInput = document.getElementById("forms-current-to");
    var telefonoInput = document.getElementById("forms-current-to-2");

    // Check if any of the input fields are empty
    if (nombreInput.value.trim() === "" || emailInput.value.trim() === "" || telefonoInput.value.trim() === "") {
        Swal.fire(
            'Completa la información',
            '',
            'error'
        )
    } else {
        // All fields are filled, so open the PDF
        var pdfUrl = "img/entrada.pdf";
        window.open(pdfUrl, "_blank");

        Swal.fire(
            '¡Reserva Realizada!',
            'Te esperamos en AlbertPark',
            'success'
        )
    }
});
