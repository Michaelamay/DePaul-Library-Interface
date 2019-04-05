// TODO: Generalize click function to any class.
// Have it pull either the div id or class directly from the html component that has been clicked
// capture it as a variable and then pass it as an argument 
// Filter out any divs or id's that you don't want clicked with an if statement
// example: if (id = x || y || z || ..) { <do the thing> }
// or give everything you want clickable an id of 'clickable' and modify the function argument

var clicked = false
        $(function () {
            
            // Master box 5 function, selects element by both class and ID.
            $("#color-change.box5").click(function () {
                if (clicked == false) {

                    $(this).text("Occupied");
                    clicked = true 
                    $(".boxa1").text("Avaliable");
                    $(this).css('background-color', 'red');
                    
                }
                else if (clicked == true) {
                    $(this).css('background-color', 'green');
                    clicked = false
                    $(this).text("Avaliable");
                }
            });

            $(".boxa1").click(function () {
                if (clicked == false) {

                    $(".boxa1").text("Occupied");
                    clicked = true 
                    $(this).css('background-color', 'red');
                       
                }
                else if (clicked == true) {
                    $(".boxa1").text("Avaliable");
                    $(this).css('background-color', 'green');
                    clicked = false
                }
            });
            
            $(".boxa2").click(function () {
                if (clicked == false) {
                    clicked = true 
                    $(".boxa2").text("Occupied");
                    $(this).css('background-color', 'red');
                       
                }
                else if (clicked == true) {
                    $(".boxa2").text("Avaliable");
                    $(this).css('background-color', 'green');
                    clicked = false
                }
            });
            
            $(".boxa3").click(function () {
                if (clicked == false) {

                    $(".boxa3").text("Occupied");
                    clicked = true 
                    $(this).css('background-color', 'red');
                       
                }
                else if (clicked == true) {
                    $(".boxa3").text("Avaliable");
                    $(this).css('background-color', 'green');
                    clicked = false
                }
            });
            
            $(".boxa4").click(function () {
                if (clicked == false) {
                    clicked = true 
                    $(".boxa4").text("Occupied");
                    $(this).css('background-color', 'red');
                       
                }
                else if (clicked == true) {
                    $(".boxa4").text("Avaliable");
                    $(this).css('background-color', 'green');
                    clicked = false
                }
            });
            
            $(".boxa5").click(function () {
                if (clicked == false) {

                    $(".boxa5").text("Occupied");
                    clicked = true 
                    $(this).css('background-color', 'red');
                       
                }
                else if (clicked == true) {
                    $(".boxa5").text("Avaliable");
                    $(this).css('background-color', 'green');
                    clicked = false
                }
            });
            
            $(".boxa6").click(function () {
                if (clicked == false) {
                    clicked = true 
                    $(".boxa6").text("Occupied");
                    $(this).css('background-color', 'red');
                       
                }
                else if (clicked == true) {
                    $(".boxa6").text("Avaliable");
                    $(this).css('background-color', 'green');
                    clicked = false
                }
            });
            
            $(".boxa7").click(function () {
                if (clicked == false) {

                    $(".boxa7").text("Occupied");
                    clicked = true 
                    $(this).css('background-color', 'red');
                       
                }
                else if (clicked == true) {
                    $(".boxa7").text("Avaliable");
                    $(this).css('background-color', 'green');
                    clicked = false
                }
            });
            
            $(".boxa8").click(function () {
                if (clicked == false) {
                    clicked = true 
                    $(".boxa8").text("Occupied");
                    $(this).css('background-color', 'red');
                       
                }
                else if (clicked == true) {
                    $(".boxa8").text("Avaliable");
                    $(this).css('background-color', 'green');
                    clicked = false
                }
            });
            
            $(".boxa9").click(function () {
                if (clicked == false) {

                    $(".boxa9").text("Occupied");
                    clicked = true 
                    $(this).css('background-color', 'red');
                       
                }
                else if (clicked == true) {
                    $(".boxa9").text("Avaliable");
                    $(this).css('background-color', 'green');
                    clicked = false
                }
            });
            
            $(".boxa10").click(function () {
                if (clicked == false) {
                    clicked = true 
                    $(".boxa10").text("Occupied");
                    $(this).css('background-color', 'red');
                       
                }
                else if (clicked == true) {
                    $(".boxa10").text("Avaliable");
                    $(this).css('background-color', 'green');
                    clicked = false
                }
            });
            
            $(".boxa11").click(function () {
                if (clicked == false) {

                    $(".boxa11").text("Occupied");
                    clicked = true 
                    $(this).css('background-color', 'red');
                       
                }
                else if (clicked == true) {
                    $(".boxa11").text("Avaliable");
                    $(this).css('background-color', 'green');
                    clicked = false
                }
            });
            
            $(".boxa12").click(function () {
                if (clicked == false) {
                    clicked = true 
                    $(".boxa12").text("Occupied");
                    $(this).css('background-color', 'red');
                       
                }
                else if (clicked == true) {
                    $(".boxa12").text("Avaliable");
                    $(this).css('background-color', 'green');
                    clicked = false
                }
            });
            
            $(".boxa13").click(function () {
                if (clicked == false) {

                    $(".boxa13").text("Occupied");
                    clicked = true 
                    $(this).css('background-color', 'red');
                       
                }
                else if (clicked == true) {
                    $(".boxa13").text("Avaliable");
                    $(this).css('background-color', 'green');
                    clicked = false
                }
            });
            
            $(".boxa14").click(function () {
                if (clicked == false) {
                    clicked = true 
                    $(".boxa14").text("Occupied");
                    $(this).css('background-color', 'red');
                       
                }
                else if (clicked == true) {
                    $(".boxa14").text("Avaliable");
                    $(this).css('background-color', 'green');
                    clicked = false
                }
            });
            
            $(".boxa15").click(function () {
                if (clicked == false) {

                    $(".boxa15").text("Occupied");
                    clicked = true 
                    $(this).css('background-color', 'red');
                       
                }
                else if (clicked == true) {
                    $(".boxa15").text("Avaliable");
                    $(this).css('background-color', 'green');
                    clicked = false
                }
            });
            
            $(".boxa16").click(function () {
                if (clicked == false) {
                    clicked = true 
                    $(".boxa16").text("Occupied");
                    $(this).css('background-color', 'red');
                       
                }
                else if (clicked == true) {
                    $(".boxa16").text("Avaliable");
                    $(this).css('background-color', 'green');
                    clicked = false
                }
            });
            
            $(".boxa17").click(function () {
                if (clicked == false) {

                    $(".boxa17").text("Occupied");
                    clicked = true 
                    $(this).css('background-color', 'red');
                       
                }
                else if (clicked == true) {
                    $(".boxa17").text("Avaliable");
                    $(this).css('background-color', 'green');
                    clicked = false
                }
            });
            
            $(".boxa18").click(function () {
                if (clicked == false) {
                    clicked = true 
                    $(".boxa18").text("Occupied");
                    $(this).css('background-color', 'red');
                       
                }
                else if (clicked == true) {
                    $(".boxa18").text("Avaliable");
                    $(this).css('background-color', 'green');
                    clicked = false
                }
            });
            
            $(".boxa19").click(function () {
                if (clicked == false) {
                    clicked = true 
                    $(".boxa19").text("Occupied");
                    $(this).css('background-color', 'red');
                       
                }
                else if (clicked == true) {
                    $(".boxa19").text("Avaliable");
                    $(this).css('background-color', 'green');
                    clicked = false
                }
            });
            $(".boxa20").click(function () {
                if (clicked == false) {
                    clicked = true 
                    $(".boxa20").text("Occupied");
                    $(this).css('background-color', 'red');
                       
                }
                else if (clicked == true) {
                    $(".boxa20").text("Avaliable");
                    $(this).css('background-color', 'green');
                    clicked = false
                }
            });
            
            $(".boxb1").click(function () {
                if (clicked == false) {
                    clicked = true 
                    $(".boxb1").text("Occupied");
                    $(this).css('background-color', 'red');
                       
                }
                else if (clicked == true) {
                    $(".boxb1").text("Avaliable");
                    $(this).css('background-color', 'green');
                    clicked = false
                }
            });
            
            $(".boxb2").click(function () {
                if (clicked == false) {
                    clicked = true 
                    $(".boxb2").text("Occupied");
                    $(this).css('background-color', 'red');
                       
                }
                else if (clicked == true) {
                    $(".boxb2").text("Avaliable");
                    $(this).css('background-color', 'green');
                    clicked = false
                }
            });
            
            $(".boxb3").click(function () {
                if (clicked == false) {
                    clicked = true 
                    $(".boxb3").text("Occupied");
                    $(this).css('background-color', 'red');
                       
                }
                else if (clicked == true) {
                    $(".boxb3").text("Avaliable");
                    $(this).css('background-color', 'green');
                    clicked = false
                }
            });
            
            $(".boxb4").click(function () {
                if (clicked == false) {
                    clicked = true 
                    $(".boxb4").text("Occupied");
                    $(this).css('background-color', 'red');
                       
                }
                else if (clicked == true) {
                    $(".boxb4").text("Avaliable");
                    $(this).css('background-color', 'green');
                    clicked = false
                }
            });
            
            $(".boxb5").click(function () {
                if (clicked == false) {
                    clicked = true 
                    $(".boxb5").text("Occupied");
                    $(this).css('background-color', 'red');
                       
                }
                else if (clicked == true) {
                    $(".boxb5").text("Avaliable");
                    $(this).css('background-color', 'green');
                    clicked = false
                }
            });
            
            $(".boxb6").click(function () {
                if (clicked == false) {
                    clicked = true 
                    $(".boxb6").text("Occupied");
                    $(this).css('background-color', 'red');
                       
                }
                else if (clicked == true) {
                    $(".boxb6").text("Avaliable");
                    $(this).css('background-color', 'green');
                    clicked = false
                }
            });
            
            $(".boxb7").click(function () {
                if (clicked == false) {
                    clicked = true 
                    $(".boxb7").text("Occupied");
                    $(this).css('background-color', 'red');
                       
                }
                else if (clicked == true) {
                    $(".boxb7").text("Avaliable");
                    $(this).css('background-color', 'green');
                    clicked = false
                }
            });
            
            $(".boxb8").click(function () {
                if (clicked == false) {
                    clicked = true 
                    $(".boxb8").text("Occupied");
                    $(this).css('background-color', 'red');
                       
                }
                else if (clicked == true) {
                    $(".boxb8").text("Avaliable");
                    $(this).css('background-color', 'green');
                    clicked = false
                }
            });
            
            $(".boxb9").click(function () {
                if (clicked == false) {
                    clicked = true 
                    $(".boxb9").text("Occupied");
                    $(this).css('background-color', 'red');
                       
                }
                else if (clicked == true) {
                    $(".boxb9").text("Avaliable");
                    $(this).css('background-color', 'green');
                    clicked = false
                }
            });
            
            $(".boxb10").click(function () {
                if (clicked == false) {
                    clicked = true 
                    $(".boxb10").text("Occupied");
                    $(this).css('background-color', 'red');
                       
                }
                else if (clicked == true) {
                    $(".boxb10").text("Avaliable");
                    $(this).css('background-color', 'green');
                    clicked = false
                }
            });
            
            $(".boxb11").click(function () {
                if (clicked == false) {
                    clicked = true 
                    $(".boxb11").text("Occupied");
                    $(this).css('background-color', 'red');
                       
                }
                else if (clicked == true) {
                    $(".boxb11").text("Avaliable");
                    $(this).css('background-color', 'green');
                    clicked = false
                }
            });
            
            $(".boxb12").click(function () {
                if (clicked == false) {
                    clicked = true 
                    $(".boxb12").text("Occupied");
                    $(this).css('background-color', 'red');
                       
                }
                else if (clicked == true) {
                    $(".boxb12").text("Avaliable");
                    $(this).css('background-color', 'green');
                    clicked = false
                }
            });
            
            $(".boxb13").click(function () {
                if (clicked == false) {
                    clicked = true 
                    $(".boxb13").text("Occupied");
                    $(this).css('background-color', 'red');
                       
                }
                else if (clicked == true) {
                    $(".boxb13").text("Avaliable");
                    $(this).css('background-color', 'green');
                    clicked = false
                }
            });
            
            $(".boxb14").click(function () {
                if (clicked == false) {
                    clicked = true 
                    $(".boxb14").text("Occupied");
                    $(this).css('background-color', 'red');
                       
                }
                else if (clicked == true) {
                    $(".boxb14").text("Avaliable");
                    $(this).css('background-color', 'green');
                    clicked = false
                }
            });
            
            $(".boxb15").click(function () {
                if (clicked == false) {
                    clicked = true 
                    $(".boxb15").text("Occupied");
                    $(this).css('background-color', 'red');
                       
                }
                else if (clicked == true) {
                    $(".boxb15").text("Avaliable");
                    $(this).css('background-color', 'green');
                    clicked = false
                }
            });
            
            $(".boxb16").click(function () {
                if (clicked == false) {
                    clicked = true 
                    $(".boxb16").text("Occupied");
                    $(this).css('background-color', 'red');
                       
                }
                else if (clicked == true) {
                    $(".boxb16").text("Avaliable");
                    $(this).css('background-color', 'green');
                    clicked = false
                }
            });
            
            $(".boxb17").click(function () {
                if (clicked == false) {
                    clicked = true 
                    $(".boxb17").text("Occupied");
                    $(this).css('background-color', 'red');
                       
                }
                else if (clicked == true) {
                    $(".boxb17").text("Avaliable");
                    $(this).css('background-color', 'green');
                    clicked = false
                }
            });
            
            $(".boxb18").click(function () {
                if (clicked == false) {
                    clicked = true 
                    $(".boxb18").text("Occupied");
                    $(this).css('background-color', 'red');
                       
                }
                else if (clicked == true) {
                    $(".boxb18").text("Avaliable");
                    $(this).css('background-color', 'green');
                    clicked = false
                }
            });
            
            $(".boxb19").click(function () {
                if (clicked == false) {
                    clicked = true 
                    $(".boxb19").text("Occupied");
                    $(this).css('background-color', 'red');
                       
                }
                else if (clicked == true) {
                    $(".boxb19").text("Avaliable");
                    $(this).css('background-color', 'green');
                    clicked = false
                }
            });
            
            $(".boxb20").click(function () {
                if (clicked == false) {
                    clicked = true 
                    $(".boxb20").text("Occupied");
                    $(this).css('background-color', 'red');
                       
                }
                else if (clicked == true) {
                    $(".boxb20").text("Avaliable");
                    $(this).css('background-color', 'green');
                    clicked = false
                }
            });


            $(".col-").click(function () {
                if (clicked == false) {
                    clicked = true 
                    $(".col-").text("Occupied");
                    $(this).css('background-color', 'red');
                       
                }
                else if (clicked == true) {
                    $("box5").text("Avaliable");
                    $(this).css('background-color', 'green');
                    clicked = false
                }
            });
            
            
            
            $("boxc1").click(function () {
                if (clicked == false) {
               //Take me to a hyperlink.
                       
                }
                else if (clicked == true) {
           
                }
            });

            
            
            
            
        });