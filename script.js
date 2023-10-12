$(document).ready(function(){
    //create a function addTask


$('button').on('click', function(){
    function addTask(){
        var inp = $("input:text").val();

        var newItem = $("<li>").text(inp);

        $('ul').append(newItem);

        $("input:text").val('');
    }
    addTask();
});

})