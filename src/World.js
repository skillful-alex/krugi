import React from 'react';
import Animal from './Animal'
import Plant from './Plant'
import shuffle from './helper'

class World extends React.Component {
    constructor(props){
        super(props);

        this.lives = [];
        this.actions = [];
        this.Width = this.props.width;
        this.Height = this.props.height;
        for (let i=0; i< 10; ++i) this.lives.push( new Plant(this) );
    }

    componentDidMount() {
        this.tick = 0;
        this.ctx = this.refs.canvas.getContext('2d');
        this.timer = setInterval(() => {this.onTick()}, 100, this);
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    onTick() {
        this.tick++;
        this.lives.forEach( life => life.OnTick() );
        this.actions = shuffle(this.actions);
        this.actions.forEach( Action => Action.Who.Do(Action.Action) );
        this.actions = []; 
        var i = this.lives.length;
        while(i--) {
           if( this.lives[i].Energy <= 0 ) {
            this.lives.splice(i,1);
           }
        }

        this.updateCanvas();
    }

    updateCanvas() {
        this.ctx.fillStyle = '#666633';
        this.ctx.fillRect(0,0, this.props.width, this.props.height);
        this.lives.forEach( life => life.Paint());
        this.ctx.font = "18px serif";
        this.ctx.fillStyle = '#000000';
        this.ctx.fillText(this.tick, 10, 20);
    }

    render() {
        return (
            <div>                        
            <input type="checkbox" /> UFO
            <canvas ref="canvas" width={this.props.width} height={this.props.height}/>
            </div>
        );
    }
}

export default World;