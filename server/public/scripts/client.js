var inputObj = {};

$(document).ready(function() {

    $('#addButton').on('click', function() {
        var val1 = $('#val1').val();
        var val2 = $('#val2').val();
        var type = 'Add';
        // var inputs = {x: val1, y: val2, type: type};
        // console.log(inputs);
    $.ajax({
      type: 'GET',
      url: '/add/' + val1 + '/' + val2 + '/' + type,
      success: function (response) {
          console.log(response);
      }
    });
    });

    $('#subtractButton').on('click', function() {
        var val1 = $('#val1').val();
        var val2 = $('#val2').val();
        var type = 'Subtract';

        var inputs = {x: val1, y: val2, type: type};
        console.log(inputs);
    });

    $('#multiplyButton').on('click', function() {
        var val1 = $('#val1').val();
        var val2 = $('#val2').val();
        var type = 'Multiply';

        var inputs = {x: val1, y: val2, type: type};
        console.log(inputs);
    });

    $('#divideButton').on('click', function() {
        var val1 = $('#val1').val();
        var val2 = $('#val2').val();
        var type = 'Divide';

        var inputs = {x: val1, y: val2, type: type};
        console.log(inputs);
    });


//clear all - reset
    $('#clearAll').on('click', function() {
        $('#resultDiv').empty();

        console.log('DOM CLEARED!');
    });


}); //end of doc.ready
