$(document).ready(function() {

    $('#contactForm').submit(function(event) {
        if (this.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        $(this).addClass('was-validated');
    });

    $('#effect').click(function(event) {
        $('#contactForm').toggle()
    });
});