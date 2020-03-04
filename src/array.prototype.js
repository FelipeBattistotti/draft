Object.defineProperty(Array.prototype, "remove", {
    value: function(value) {
      for(let key in this){
        if(this[key] === value){
          this.splice(key,1);
        }
      }
      return this;
    } 
});

var instrument = ["Guitar", "Flute", "Drumbs", "Fiddle", "Piano"];

instrument.remove("Flute");
console.log(instrument)
