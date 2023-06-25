<?php
 
//Create functions to be used in the program
 
function createEvents($events, $hours) {
 
    //Use for loop to create events
    for ($i = 0; $i < count($events); $i++) {
        echo "Creating event: " . $events[$i] . " for " . $hours[$i] . " hours." . "<br>";
    }
}
 
function orderSupplies($suppliesList) {
 
    //Use for loop to order supplies
    for ($i = 0; $i < count($suppliesList); $i++) {
        echo "Ordering " . $suppliesList[$i] . " <br>";
    }
}
 
function hireInstructors($instructorsList) {
 
    //Use for loop to hire instructors
    for ($i = 0; $i < count($instructorsList); $i++) {
        echo "Hiring " . $instructorsList[$i] . " <br>";
    }
}
 
function advertiseProgram($locationsList) {
 
    //Use for loop to advertise program
    for ($i = 0; $i < count($locationsList); $i++) {
        echo "Advertising program at " . $locationsList[$i] . " <br>";
    }
}
 
$events = array("art class", "music class");
$hours = array("2 hours", "4 hours");
$suppliesList = array("paints", "brushes", "musical instruments");
$instructorsList = array("artist", "musician");
$locationsList = array("local library", "youth center");
 
//Call functions to start outreach program
createEvents($events, $hours);
orderSupplies($suppliesList);
hireInstructors($instructorsList);
advertiseProgram($locationsList);
 
?>