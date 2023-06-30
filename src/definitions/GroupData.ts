import { Group } from "../Interfaces/GroupDataIfaces"



const GroupsData: Group[] = 
[
  {
    gid : 'A',
    x: 25,
    y: 5,
    space_x: 0,
    space_y: 0,
    shape_data: {
      type: 'rect',
      w: 30,
      h: 20,
      color: 'gray',
      stroke: 'green',
      class: ['focusable'],
      
    },
    shapes: [
      {id: 'A1', x: 10, y: 10, showName:"shape A1", description:"a single shape"},
      {id: 'A2', x: 10, y: 50, showName:"shape A2", description:"a single shape"},
      {id: 'A3', x: 10, y: 90, showName:"shape A3", description:"a single shape"},
      {id: 'A4', x: 10, y: 130, showName:"shape A4", description:"a single shape"},
      {id: 'A5', x: 10, y: 170, showName:"shape A5", description:"a single shape"},
      {id: 'A6', x: 10, y: 210, showName:"shape a6", description:"a single shape"},
      {id: 'A7', x: 10, y: 250, showName:"shape a7", description:"a single shape"},
      {id: 'A8', x: 10, y: 290, showName:"shape a8", description:"a single shape"},
      {id: 'A1', x: 10, y: 300, showName:"shape A1", description:"a single shape"},
      {id: 'A2', x: 10, y: 350, showName:"shape A2", description:"a single shape"},
      {id: 'A3', x: 10, y: 390, showName:"shape A3", description:"a single shape"},
      {id: 'A4', x: 10, y: 430, showName:"shape A4", description:"a single shape"},
      {id: 'A5', x: 10, y: 470, showName:"shape A5", description:"a single shape"},
      {id: 'A6', x: 10, y: 410, showName:"shape a6", description:"a single shape"},
      {id: 'A7', x: 10, y: 450, showName:"shape a7", description:"a single shape"},
      {id: 'A8', x: 10, y: 490, showName:"shape a8", description:"a single shape"},

    ]
  },
  {
    gid : 'B',
    x: 150,
    y: 60,
    space_x: 0,
    space_y: 0,
    shape_data: {
      type: 'rect',
      w: 50,
      h: 20,
      color: 'blue',
      stroke: 'green',
      class: ['focusable'],
      
    },
    shapes: [
      {id: 'B1', x: 10, y: 10, showName:"shape 1", description:"a single shape"},
      {id: 'B2', x: 10, y: 60, showName:"shape 1", description:"a single shape"},
      {id: 'B3', x: 10, y: 110, showName:"shape 1", description:"a single shape"},

    ]
  },
  {
    gid : 'C',
    x: 80,
    y: 0,
    space_x: 0,
    space_y: 0,
    shape_data: {
      type: 'circle',
      w: 50, 
      h: 20,
      color: 'red',
      stroke: 'green',
      class: ['focusable','circle'],
      
    },
    shapes: [
      {id: 'C1', cx: 10, cy: 10, r:5, showName:"shape 1", description:"a single shape"},
      {id: 'C2', cx: 10, cy: 30, r:5, showName:"shape 1", description:"a single shape"},
      {id: 'C3', cx: 10, cy: 50, r:5, showName:"shape 1", description:"a single shape"},
      {id: 'C4', cx: 10, cy: 70, r:5, showName:"shape 1", description:"a single shape"},
      {id: 'C5', cx: 10, cy: 90, r:5, showName:"shape 1", description:"a single shape"},
    ]
  },

]



export {GroupsData }