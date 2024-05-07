$(document).ready(function() {
    $('#find-greatest').click(function() {
        var num1 = parseFloat($('#num1').val());
        var num2 = parseFloat($('#num2').val());
        var num3 = parseFloat($('#num3').val());

        var greatest = findGreatest(num1, num2, num3);

        $('#result').text('The greatest number is: ' + greatest);
    });
});

function findGreatest(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}