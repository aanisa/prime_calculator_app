var inputs = {};

$(document).ready(function() {

    $('#addButton').on('click', function() {
        var val1 = $('#val1').val();
        var val2 = $('#val2').val();
        var type = 'addition';
        console.log('adding...' + val1 + val2 + type);
    });

    $('#subtractButton').on('click', function() {
        var val1 = $('#val1').val();
        var val2 = $('#val2').val();
        var type = 'subtraction';
        console.log('subtracting...');
    });

    $('#multiplyButton').on('click', function() {
        var val1 = $('#val1').val();
        var val2 = $('#val2').val();
        var type = 'multiplication';
        console.log('multiplying...');
    });

    $('#divideButton').on('click', function() {
        var val1 = $('#val1').val();
        var val2 = $('#val2').val();
        var type = 'division';
        console.log('dividing...');
    });

    $('#clearAll').on('click', function() {
        $('#resultDiv').empty();
        console.log('DOM CLEARED!');
    });


}); //end of doc.ready
