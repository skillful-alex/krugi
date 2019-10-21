import Life from './Life'

class Plant extends Life {
    constructor(world){
        super(world);
        this.Size = 5;
        this.Color = 'green';
    }

    OnTick() {
        super.OnTick();
        if (this.Energy > 10) {
            this.Prepare({GiveBirth: 1});
        }
    }

    Do(Action) {
        super.Do(Action);
        if (Action.GiveBirth === 1){
            this.Energy = this.Energy-5;
            this.world.lives.push(  new Plant(this.world) );
        }
        if ((this.world.tick - this.BirthDate)>60) {
            this.Energy = 0;
        }        
        this.Size = this.Energy;
    }
}

export default Plant;