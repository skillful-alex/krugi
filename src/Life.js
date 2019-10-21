class Life {
    constructor(world){        
        this.world = world;
        this.X = Math.floor(Math.random() * world.Width);
        this.Y = Math.floor(Math.random() * world.Height);
        this.BirthDate = world.tick || 0;
        this.Energy = 1;
        this.Size = 10;
    }

    OnTick() {
        this.Energy = this.Energy + 1/this.Energy; //TODO get from world
    }

    Prepare(Action) { //helper function
        this.world.actions.push({Who: this, Action});
    }

    Do(Action) {} //virtual function

    Paint(){
        let ctx = this.world.ctx;
        ctx.beginPath();
        ctx.fillStyle = this.Color;
        ctx.arc(this.X, this.Y, this.Size, 0, 2 * Math.PI);
        ctx.fill();

        ctx.font = "12px serif";
        ctx.fillStyle = '#000000';
        ctx.fillText( "E: " + this.Energy.toFixed(1) + this.Color, this.X, this.Y);
    }
}

export default Life;