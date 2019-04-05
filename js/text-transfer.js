// If the button is clicked, grab the date and time from the select dropdowns.

window.onload = function () {
    document.getElementById("value-submissions-2").onclick = function () {
        var date = document.getElementById("date-select");
        var dateText = date.options[date.selectedIndex].text;
        var time = document.getElementById('time-select');
        var timeText = time.options[time.selectedIndex].text;
        var newHtml = `

            <div class="container-fluid" id="to-change">
            <div class='container' id='choices'>
            <h1>You Have Chosen:</h1>
            <p id='choices'>${dateText}<br>${timeText}</p>
            </div>


            <div class='container'>
            <!-- Previous/Next Navigation -->
            <ul class='pager fixed-bottom'> 
                <li class='previous'><a href='time-and-date.html'>Previous</a></li>


            <li class='next'><a href="confirmation-page.html" id="reserve">Reserve</a></li>
            
            
            </ul>
            </div>
            </div>
            <!-- END Centered Page Fluid Container -->



            `
        dateState = true;
        timeState = true;
        console.log("state changed")
        console.log(dateText)
        console.log(timeText)
        document.getElementById('to-change').innerHTML = newHtml;
    }
    
    

    document.getElementById("value-submissions-1").onclick = function () {
        var date = document.getElementById("date-select");
        var dateText = date.options[date.selectedIndex].text;
        var time = document.getElementById('time-select');
        var timeText = time.options[time.selectedIndex].text;
        var newHtml = `<div class='container' id='choices'><h1>You Have Chosen:</h1><p id='choices'>${dateText}<br>${timeText}</p></div><div class='container'><!-- Previous/Next Navigation --><ul class='pager fixed-bottom'> <li class='previous'><a href='time-and-date.html'>Previous</a></li><li class=next><a href='#'>Reserve</a></li></ul></div>`
        dateState = true;
        timeState = true;
        console.log("state changed")
        console.log(dateText)
        console.log(timeText)
        document.getElementById('to-change').innerHTML = newHtml;
    }

    //Wasn't implemented, thus, not in service.
    document.getElementById("reserve").onclick = function () {
        var date = document.getElementById("date-select");
        var dateText = date.options[date.selectedIndex].text;
        var time = document.getElementById('time-select');
        var timeText = time.options[time.selectedIndex].text;
        
        var newHtml2 = `

            <div class="container-fluid" id="to-change">
            <div class='container' id='choices'>
            <h1>Dummy Page Work</h1>
            <p id='choices'>${dateText}<br>${timeText}</p>
            </div>

            </div>
            <!-- END Centered Page Fluid Container -->


            `
        
        
        dateState = true;
        timeState = true;
        console.log("state changed")
        console.log(dateText)
        console.log(timeText)
        document.getElementById('to-change').innerHTML = newHtml2;
    }


}
