interface Shape_data {
    type: string,
    w: number,
    h: number,
    color: string,
    stroke: string,
    class: string[],
}
interface RecShape {
    id: string,
    x: number,
    y: number,
    showName: string,
    description: string
}
interface CircleShape {
    id: string,
    cx: number,
    cy: number,
    r: number,
    showName: string,
    description: string
}

type Shape = CircleShape | RecShape

interface Group {
    gid: string,
    x:number,
    y:number,
    space_x :number,
    space_y :number,
    shape_data: Shape_data,
    shapes: Shape[]
}

interface Coord {
    id: string,
    x: number ,
    y: number 
}

interface Neighbour {
up?:   string   ,
down?: string ,
right?:string,
left?: string ,
}

export { type Group, type Coord, type Neighbour, type Shape } 