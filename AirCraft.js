let Runway = {

    _state : false,
    _name : null,
    landingtime : null,
    takeofftime : null,
    observers : [],
    runway_num: null,

    set subscribe(aircraft){
        this.observers.push(aircraft);
        StoreData(aircraft);
    },

    set unsubscribe(aircraft){
        this.observers.map(x =>{
            if(x == aircraft){
                this.observers = this.observers.filter((aircraft)=>{return aircraft != x;});
            }
        });
        RemoveData(aircraft);
    },

    notify(){
        this.observers.map(plane =>{
            plane.update(this);
        });
        console.log("");
    },
    get landing(){
        return this._state;
    },
    set landing(state){
        this._state = state;
    }

};

// Runway.prototype.subscribe = () => {
//     this.observers  = [];
// };

// let Plane = new Runway();

function Aircraft(_name, _landing, _takeofftime){
    this.name = _name;
    this.landingtime = _landing;
    this.takeofftime = _takeofftime;
}

plane = new Aircraft("DC35", 16, 23);
plane2 = new Aircraft("AB330", 12, 20);
plane3 = new Aircraft("LH456", 19, 21);
plane4 = new Aircraft("AB300", 22, 28);

Runway.subscribe = plane;
Runway.subscribe = plane2;
Runway.subscribe = plane3;
Runway.subscribe = plane4;

Runway.unsubscribe = plane2;


console.log(Runway.observers);

function StoreData(aircraft){
    if (typeof(Storage) !== "undefined") {
        // Code for localStorage/sessionStorage.
        sessionStorage.setItem(aircraft);

      } else {
        // Sorry! No Web Storage support..
        console.error("Browser does not support webstorage");
      }
}

function RemoveData(aircraft){
    if (typeof(Storage) !== "undefined") {
        // Code for localStorage/sessionStorage.
        sessionStorage.removeItem(aircraft);

      } else {
        // Sorry! No Web Storage support..
        console.error("Browser does not support webstorage");
      }
}