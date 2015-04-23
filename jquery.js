$(document).ready(function () {
        $(document).on('click', '.remove', function() {
            $(this).parent().parent().remove();
        });

    $(document).on('click', '.move', function() {
        var cont = $(this).parent().parent();
        $('.listaaprendidos').append(cont);
    });

    $('.iput').keypress(function (e) {
        if (e.which == 13) {
            $('.corpo').append("<tr><td>"+$('.iput').val()+"</td><td><button class='btn btn-warning move'><span class='glyphicon glyphicon-move'></span></button></td><td><button class='btn btn-danger remove'><span class='glyphicon glyphicon-remove-sign'></span></button></td></tr>");
            return false;    //<---- Add this line
        }
    });

});
