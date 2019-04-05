envVal = ''

$( document ).ready(function() {
    console.log( "ready!" );
    envVal = $('input[name="environment"]:checked').val();
    $( "#quiet" ).on( "click", function() {
        console.log( "quiet was clicked" );
        envVal = "quiet";
        console.log(envVal);
        if ( envVal == "quiet" ) {
            console.log("envVal is quiet")
        }
    });
    $( "#social" ).on( "click", function() {
        console.log( "social was clicked" );
        envVal = "social";
        console.log(envVal);
        if ( envVal == "social" ) {
            console.log("envVal is social")
            localStorage.setItem("envVal", envVal)
            console.log(localStorage.getItem("envVal"))
            // if("envVal" in localStorage) {
            //     console.log("social is in localStorage")
            //     document.getElementById("3rd-floor").innerHTML = "<div class='radio'><label><input type='radio' name='floor' id='3rd-floor disabled'>3rd Floor</label><p>--22/50 Available</p></div>"
            // } else {
            //     return;
            // }
        }
    });
    seatVal = $('input[name="seat"]:checked').val();
    $( "#wheels" ).on( "click", function() {
        console.log( "wheels was clicked" );
        seatVal = "wheels";
        console.log(seatVal);
    });
    seatVal = $('input[name="seat"]:checked').val();
    $( "#lounge" ).on( "click", function() {
        console.log( "lounge was clicked" );
        seatVal = "lounge";
        console.log(seatVal);
    });
    seatVal = $('input[name="seat"]:checked').val();
    $( "#cushioned" ).on( "click", function() {
        console.log( "cushioned was clicked" );
        seatVal = "cushioned";
        console.log(seatVal);
    });
    
});
function disableRadio() {
    if("envVal" in localStorage) {
        console.log("social is in localStorage")
        document.getElementById("3rd-floor").innerHTML = "<div class='radio'><label><input type='radio' name='floor' id='3rd-floor' disabled>3rd Floor</label><p>--22/50 Available</p></div>";
    }
}
