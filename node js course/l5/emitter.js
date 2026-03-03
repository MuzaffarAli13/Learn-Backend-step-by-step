function Emitter(){
    this.events = {} // {greet:[cb1,cb2,cb3]}
};

Emitter.prototype.on =function(type,evenListner){
    this.events[type] = this.events[type] || [];
    this.events[type].push(evenListner)
};

Emitter.prototype.emit = function(type){
    if(this.events[type]){
        this.events[type].forEach(listner => {
            listner()
        });
    }
};

module.exports = Emitter;