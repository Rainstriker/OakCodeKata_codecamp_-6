//--------------------SIDENAV BUTTON-----------

function myFunction(x) {
    x.classList.toggle("change");
}

//--------------------SIDENAV-------------------

function toggleNav() {
let element = document.getElementById("mySidenav");
    if (element.style.width == "250px") {
        element.style.width = "0px";
        document.getElementById("mySearchIcon").style.width = "0px";

    } else {
        element.style.width = "250px";
        document.getElementById("mySearchIcon").style.width = "60px";
    }
}

//----------------------DATE--------------------------

var n =  new Date();
var year = n.getFullYear();
var month = n.getMonth() + 1;
var dayNum = n.getDate();
var weekDayNum = n.getDay();
const weekDay = (num) => {
    switch(num) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
    }
}

const monthName = (num) => {
    switch(num) {
        case 1:
            return "Jan";
        case 2:
            return "Feb";
        case 3:
            return "Mar";
        case 4:
            return "Apr";
        case 5:
            return "May";
        case 6:
            return "Jun";
        case 7:
            return "Jul";
        case 8:
            return "Aug";
        case 9:
            return "Sep";
        case 10:
            return "Oct";
        case 11:
            return "Nov";
        case 12:
            return "Dec";
    }
}



