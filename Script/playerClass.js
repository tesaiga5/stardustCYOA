export class Player {
    constructor() {
      this.credits = 0; //collect credits
      this.crewNum = 0; //remaining crew slots
      this.fleetSize = 0; //IF fleetsize is zero; can't choose hulls
      this.you = []; //contains 
      this.skills = [];
      this.gear = [];
      this.scenario = [];
      this.choices = []; //to hold all choices; sum its costs and update credits display
      this.currentActiveShip = ""; //div id
      this.ships = []; //array of objects
      this.hostiles = []; //collection of hostile factions
      this.frame = {};
      this.crew = [];
      this.equipmentLevel = 0;
      this.alignment = 'neutral';
    }
}

