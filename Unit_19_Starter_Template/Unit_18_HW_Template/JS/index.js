
console.log("Your index.js file is loaded correctly!");

$(document).ready(function() {
    $('#myButton').hover(
        function() {
            $(this).css({
                'background-color': '#0056b3', // Darker blue
                'transform': 'scale(1.05)'     // Slightly enlarge the button
            });
        },
        function() {
            $(this).css({
                'background-color': '#C4D7B4', // Original blue
                'transform': 'scale(1)'       // Reset the button size
            });
        }
    );
});
