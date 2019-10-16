import Plant from './Plant'

class Animal extends Plant {
    constructor(WorldWidth, WorldHeight){
        super(WorldWidth, WorldHeight);
        this.color = 'red';
    }

    OnTick(world) {
        this.x = this.x + Math.floor(Math.random() * 10) - 5;
        this.y = this.y + Math.floor(Math.random() * 10) - 5;
        return this;
    }
}

export default Animal;