$(document).ready(function(){

//Section 1: Defining functions//

//Defining the funciton to make the grid
    function makeGrid() {
        $("#container").empty(); //empties any .box divs in the #container div
        var gridSize = +prompt("Enter a grid dimension", "Enter a value of 128 or less");
        while (gridSize > 128 || gridSize / gridSize != 1 || gridSize < 1) { //checks to see if positive number less than 128, or truly a number
            gridSize = +prompt("Max value = 128", "Enter a value of 128 or less");
        }
        gridSize = Math.floor(gridSize); //makes sure number is an integer
        var containerSize = +$("#container").width(); // grabbing container size in order to find .box size
        var boxSize = containerSize/gridSize; // figuring out box size
            for (i=0; i < gridSize; i++) { //when each row is completed, counter will increase, initialize creation of another row
                for (j=0; j < gridSize; j++){ //row creater
                    var newBox = $("<div class='box'></div>"); //converting div into jQuery object
                    $("#container").append(newBox); 
                }
            }
            $(".box").width(boxSize).height(boxSize);//converting all size of all .box once instead of within the loops
        };

//Defining the funciton return a random hex color to use in rainbow etch-a-sketch
    function getRandomColor() {
        var letters = '789ABCD'; //limit the colors to a more pastel pallete 
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 6)];
        }
        return color;
        };

//Defining the funciton used to give 
    function coloring(){
        $(".box").hover(function(){
        $(this).addClass("highlighted"); //add this class to .box div if mouse hovers
        if ($("#rainbow").data("clicked")) { //if rainbow was clicked, change background
            var boxColor = getRandomColor();
            $(this).css("background", boxColor);//ONLY on the div currently affected
            }
        });
    };

//Section 2: Executing Standard Grid with User Input//

    makeGrid();
    coloring();

//Section 3: Displaying options to make a new grid, standard or rainbow

    $("#rainbow").click(function(){
        $(this).data("clicked",true); //will make the if statement in the coloring function true, enabling color change
        makeGrid();
        coloring();
    });

    $("#standard").click(function(){
        $("#rainbow").data("clicked",false); //no color changes
        makeGrid();
        coloring();
    });

    $("#options").hover(function() {
        $("#standard, #rainbow").slideDown("slow").css("display","block");
        });
    });
    
