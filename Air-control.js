//calculate capacity of the airport traffic upon the manual input of data
//number of runways <= 5 can be used simultaneously
//support 4 different types of aircraft
//produce reports
//all terminals are accessible from each runway 
//operation  hours are 0700-2200 monday - saturday and 0800 -1800 sunday
//be atleast 7 mins between each takeoff and landing

// aircrafts permited to land
const aircraft_model = [
    {name: "DC35", takeoff:16, landing:23},{name: "AB330", takeoff:12, landing:20},
    {name: "LH456", takeoff:19, landing:21},{name: "AB300", takeoff:22, landing:28}
];

// number of runways
const number_runway = 5;

const cooling_time = 7;

//persistent data in place of db
let runway_status_array = [true, true, true ,true ,true];


// function to check the airport traffic capacity
function airport_traffic_capacity(){

    let capacity_count = 0;

    //looping through all runways
    for(x = 1; x <= number_runway; x++){

        runway_status = check_runway_status(x)
        //checking runway status 
        if (runway_status){
            capacity_count++;
        }
    }

    return capacity_count;
}

// runway is an int
function check_runway_status(runway){

    return runway_status_array[runway]
}

function check_aircraft(aircraft){
    if(!aircraft.hasOwnProperty(name) || !aircraft.hasOwnProperty(takeoff) || !aircraft.hasOwnProperty(landing)){
        console.error("Not a valid aircraft object");
    }
    
}

function produce_report(){

}

function check_operation_hours(time, day){

}

function can_land(){

}

function can_takeoff(){

}

function landing(aircraft){

}

function takeoff(aircraft){

}

// operation represents landing or takeoff
function traffic_control(aircraft, operation){
    if (operation == "landing"){
        
    }
}