const Action = Object.freeze( {
    eat: 1,
    birth: 2,  // only if satiety > 75%  after satiety -= 50, and size -= newAnymalSize
})

export default function animal(mySize, plans, gnawing, predators) {
    mySize = 3;
    satiety = 10;// if satiety > 50 , then increase size
    mySpeed = { x:3, y:2 };
    plans = [ 
        { x:3, y:2, size:4 },
        { x:3, y:2, size:4 },
        { x:3, y:2, size:4 },
        { x:3, y:2, size:4 },
    ];
    gnawing = [ 
        { x:3, y:2, size:4 },
        { x:3, y:2, size:4 },
        { x:3, y:2, size:4 },
        { x:3, y:2, size:4 },
    ];
    predators = [ 
        { x:3, y:2, size:4},
        { x:3, y:2, size:4},
        { x:3, y:2, size:4},
    ];

    return {
        acceleration: {
            x: 5,
            y: -5,
        },
        action: Action.eat,
        newAnymalSize: undefined,
    }
};