let steps = 0;

let workout = 0;

let calories = 0;


// Add fitness data

function addFitnessData() {

    steps =
        Number(document.getElementById("steps").value);

    workout =
        Number(document.getElementById("workout").value);

    calories =
        Number(document.getElementById("calories").value);


    document.getElementById("stepsDisplay").textContent =
        steps;

    document.getElementById("workoutDisplay").textContent =
        workout + " min";

    document.getElementById("caloriesDisplay").textContent =
        calories + " kcal";


    updateProgress();

    saveData();

}


// Update progress bars

function updateProgress() {

    let stepsPercent =
        Math.min((steps / 10000) * 100, 100);

    let workoutPercent =
        Math.min((workout / 60) * 100, 100);

    let caloriesPercent =
        Math.min((calories / 500) * 100, 100);


    document.getElementById("stepsProgress").style.width =
        stepsPercent + "%";


    document.getElementById("workoutProgress").style.width =
        workoutPercent + "%";


    document.getElementById("caloriesProgress").style.width =
        caloriesPercent + "%";

}


// Save data

function saveData() {

    localStorage.setItem(
        "steps",
        steps
    );

    localStorage.setItem(
        "workout",
        workout
    );

    localStorage.setItem(
        "calories",
        calories
    );

}


// Load saved data

function loadData() {

    steps =
        Number(localStorage.getItem("steps")) || 0;

    workout =
        Number(localStorage.getItem("workout")) || 0;

    calories =
        Number(localStorage.getItem("calories")) || 0;


    document.getElementById("stepsDisplay").textContent =
        steps;

    document.getElementById("workoutDisplay").textContent =
        workout + " min";

    document.getElementById("caloriesDisplay").textContent =
        calories + " kcal";


    updateProgress();

}


// Load data when the app opens

loadData();
let weeklyData = {

    mon: 60,

    tue: 40,

    wed: 80,

    thu: 50,

    fri: 90,

    sat: 70,

    sun: 65

};
function updateWeeklyProgress() {

    document.getElementById("mon").style.width =
        weeklyData.mon + "%";

    document.getElementById("tue").style.width =
        weeklyData.tue + "%";

    document.getElementById("wed").style.width =
        weeklyData.wed + "%";

    document.getElementById("thu").style.width =
        weeklyData.thu + "%";

    document.getElementById("fri").style.width =
        weeklyData.fri + "%";

    document.getElementById("sat").style.width =
        weeklyData.sat + "%";

    document.getElementById("sun").style.width =
        weeklyData.sun + "%";

}