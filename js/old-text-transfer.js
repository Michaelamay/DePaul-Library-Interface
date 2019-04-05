// var date = date = document.getElementById("date-select");
// dateText = date.options[date.selectedIndex].text;
// var dateText = {};
dateState = false;
timeState = false;

var submission = function() {
    document.getElementById("value-submissions").onclick = function() {
        dateState = true;
        var date = document.getElementById('date-select');
        var dateText = date.options[date.selectedIndex].text;
        console.log(dateText)

        timeState = true;
        var time = document.getElementById('time-select');
        var timeText = time.options[time.selectedIndex].text;
        console.log(timeText)

        document.getElementById('choices').innerHTML = `<h1>You Have Chosen:</h1>
                                                    // <p>``<\p>`;
    };
}

// var date = function getDate() {
//     dateState = true;
//     var date = document.getElementById('date-select');
//     var dateText = date.options[date.selectedIndex].text;
//     console.log(dateText)
// }



// var time = function getTime() {
//     timeState = true;
//     var time = document.getElementById('time-select');
//     var timeText = time.options[time.selectedIndex].text;
//     console.log(timeText)
// }

// function displayChoices(d) {
    // document.getElementById('choices').innerHTML = `<h1>You Have Chosen:</h1>
                                                    // <p>`+date+`<\p>`;
    
    // var h1 = document.createElement('h1');
    // h1.innerHTML = "You Have Chosen:";
    // document.getElementById('choices').appendChild(h1);
    // var p = document.createElement('p') 
    // p.innerHTML = "Date:" + getDate();
    // document.getElementById('choices').appendChild(p);
    // // document.getElementById("choices").innerHTML = "<p>new content</p>"
    
//     document.getElementById('choices').innerHTML = d;
// }

// displayChoices(date);

