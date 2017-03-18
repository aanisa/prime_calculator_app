var inputObj = {};

$(document).ready(function() {

    $('#addButton').on('click', function() {
        var val1 = $('#val1').val();
        var val2 = $('#val2').val();
        var type = 'Add';
    //AJAX request to server & append response to DOM
        $.ajax({
            type: 'GET',
            url: '/add/' + val1 + '/' + val2 + '/' + type,
            success: function(response) {
                console.log(response);
                $('.resultDiv').append('<p>' + response + '</p>');
            }
        });
    });


    $('#subtractButton').on('click', function() {
        var val1 = $('#val1').val();
        var val2 = $('#val2').val();
        var type = 'Subtract';
    //AJAX request to server & append response to DOM
        $.ajax({
            type: 'GET',
            url: '/subtract/' + val1 + '/' + val2 + '/' + type,
            success: function(response) {
                console.log(response);
                $('.resultDiv').append('<p>' + response + '</p>');
            }
        });
    });

    $('#multiplyButton').on('click', function() {
        var val1 = $('#val1').val();
        var val2 = $('#val2').val();
        var type = 'Multiply';
    //AJAX request to server & append response to DOM
        $.ajax({
            type: 'GET',
            url: '/multiply/' + val1 + '/' + val2 + '/' + type,
            success: function(response) {
                console.log(response);
                $('.resultDiv').append('<p>' + response + '</p>');
            }
        });

    });

    $('#divideButton').on('click', function() {
        var val1 = $('#val1').val();
        var val2 = $('#val2').val();
        var type = 'Divide';
    //AJAX request to server & append response to DOM
        $.ajax({
            type: 'GET',
            url: '/divide/' + val1 + '/' + val2 + '/' + type,
            success: function(response) {
                console.log(response);
                $('.resultDiv').append('<p>' + response + '</p>');
            }
        });
    });


    //clear all - reset
    $('#clearAll').on('click', function() {
        $('.resultDiv').empty();

        console.log('DOM CLEARED!');
    });


}); //end of doc.ready
