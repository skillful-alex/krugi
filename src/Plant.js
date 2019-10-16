class Plant {
    constructor(WorldWidth, WorldHeight){
    //    super(WorldWidth, WorldHeight);
        this.x = Math.floor(Math.random() * WorldWidth);
        this.y = Math.floor(Math.random() * WorldHeight);
        this.width = 5;
        this.height = 5;
        this.color = 'green';
    }

    onTick(world) {
        return this;
    }

    Paint(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);        
    }
}

export default Plant;