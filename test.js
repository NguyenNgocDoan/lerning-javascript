//FUNCTION
function myFunction(){
    let carName = "Volvo"
    document.getElementById("demo-function-1").innerHTML = typeof carName + " " + carName;
}
    myFunction();

    document.getElementById("demo-function-2").innerHTML = typeof carName;


// EVENT
function displayDate() {
    document.getElementById("demo-event-3").innerHTML = Date();
}


//MATH

    document.getElementById("demo-math").innerHTML = 
    "<p><b>Math.E:</b> " + Math.E + "</p>" +
    "<p><b>Math.PI:</b> " + Math.PI + "</p>" +
    "<p><b>Math.SQRT2:</b> " + Math.SQRT2 + "</p>" +
    "<p><b>Math.SQRT1_2:</b> " + Math.SQRT1_2 + "</p>" +
    "<p><b>Math.LN2:</b> " + Math.LN2 + "</p>" +
    "  <p><b>Math.LN10:</b> " + Math.LN10 + "</p>" +
    "<p><b>Math.LOG2E:</b> " + Math.LOG2E + "</p>" +
    "<p><b>Math.Log10E:</b> " + Math.LOG10E + "</p>";

//RANDOM
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

//MAp
