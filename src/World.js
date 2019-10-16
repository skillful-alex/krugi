import React from 'react';
import Animal from './Animal'
import Plant from './Plant'

class World extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          tick: 0,
        }
        this.animals = [
            new Animal(this.props.width,this.props.height),
            new Animal(this.props.width,this.props.height),
          ];
        this.plants = [
            new Plant(this.props.width,this.props.height),
            new Plant(this.props.width,this.props.height),
            new Plant(this.props.width,this.props.height),
            new Plant(this.props.width,this.props.height),
            new Plant(this.props.width,this.props.height),
          ];
        this.timer = setInterval(() => {this.onTick()}, 100, this);
    }

    onTick() {
        for (let index = 0; index < this.animals.length; index++) {
            this.animals[index].OnTick();
        }
        this.setState({
            tick: this.state.tick+1,
        })
        this.updateCanvas();
    }

    componentDidMount() {
        this.updateCanvas();
    }

    updateCanvas() {
        const ctx = this.refs.canvas.getContext('2d');
        ctx.fillStyle = '#666633';
        ctx.fillRect(0,0, this.props.width, this.props.height);
        for (let index = 0; index < this.animals.length; index++) {
            this.animals[index].Paint(ctx);
        }
        for (let index = 0; index < this.plants.length; index++) {
            this.plants[index].Paint(ctx);
        }
        ctx.font = "18px serif";
        ctx.fillStyle = '#000000';
        ctx.fillText(this.state.tick, 10, 20);
        
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