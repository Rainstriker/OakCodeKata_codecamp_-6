//--------------------SIDENAV BUTTON--------------------------------------------

function toggleChange(x) {
    x.classList.toggle("change");
}

//--------------------SIDENAV--------------------------------------------------------------

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

//----------------------DATE-------------------------------------------------------------

var n = new Date();
var year = n.getFullYear();
var month = n.getMonth() + 1;
var dayNum = n.getDate();
var weekDayNum = n.getDay();
const weekDay = (num) => {
    switch (num) {
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
    switch (num) {
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

//----------------------------Main Search Bar---------------------------------------------

const myMainSearch = () => {
    document.getElementById("mySearchIcon").style.width = "60px";
}

const navBarHide = () => {
    const mainSearch = document.getElementById("main_search");
    const mainNav = document.getElementById("news-nav-content2");
    const arr = document.getElementsByClassName("main-nav-item");
    //mainSearch.style.width = "100%"
    //mainSearch.style.left = "1px"
    mainNav.style.width = '0';
    mainNav.style.transition = 'all 1s';

    for (let i in arr) {
        arr[i].style.display = "none";
    }

}

const navhBarShow = () => {
    const mainSearch = document.getElementById("main_search");
    const mainNav = document.getElementById("news-nav-content2");
    const arr = document.getElementsByClassName("main-nav-item");
    //mainSearch.style.width = "10px"
    //mainSearch.style.left = "0px"
    mainNav.style.transition = 'none';
    mainNav.style.width = '70%';
    setTimeout(() => {
        mainNav.style.transition = 'all 0.5s';
        mainNav.style.width = '95%';

        for (let i in arr) {
            arr[i].style.display = "block";
        }
    }, 10)

}




let arr = document.getElementById("menu-dropdown");
const sideNav = document.getElementById("mySidenav");
const icon = document.getElementById("mySearchIcon");

if (!window.screen.width <= '1092px') {
    window.onscroll = function () {
        let prevScrollpos = window.pageYOffset;
        let currentScrollPos = window.pageYOffset;
        if (currentScrollPos > 180) {
            document.getElementById("sticky").style.top = "0px";
        } else {
            document.getElementById("sticky").style.top = "-50px";
            sideNav.style.width = "0px";
            icon.style.width = "0px";
            arr.classList.remove("change");
        }
    }
} 