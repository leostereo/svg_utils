import { GroupsData } from "../definitions/GroupData";
import { useEffect, useState } from "react";

import { Box } from "@mui/material";
import { memo } from "react";
import {
  
  Coord,
  Shape,
  Neighbour,
  
} from "../Interfaces/GroupDataIfaces";

type DinProps = {
  setShapeInfo: () => void;
};

const DinSVGMap = memo(function SVGMap({ setShapeInfo }: DinProps) {
  // const handleClick = (event) => {
  //   // alert(event.target.id);
  // };

  const handleKeyDown = (event:any):void => {
    //console.log('press : ',event.key);

    const nextMove:string | undefined =
      event.key === "ArrowDown"
        ? availableNeighbour.down
        : event.key === "ArrowUp"
        ? availableNeighbour.up
        : event.key === "ArrowLeft"
        ? availableNeighbour.left
        : event.key === "ArrowRight"
        ? availableNeighbour.right
        : undefined;

    if(nextMove){
      const nextShape = document.getElementById(nextMove);
      nextShape?.focus();
    }    
  };

  const renderSVG = (): void => {
    const svgns = "http://www.w3.org/2000/svg";
    const svg: HTMLElement | null = document.getElementById("svg");

    GroupsData.forEach((group) => {
      let newGroup = document.createElementNS(svgns, "g");
      newGroup.setAttribute("fill", group.shape_data.color);
      newGroup.setAttribute("stroke", group.shape_data.stroke);
      group.shapes.forEach((shape: any) => {
        let shape_type = group.shape_data.type;
        let newShape = document.createElementNS(svgns, shape_type);

        const SCALE = 0.5;

        if (shape_type === "rect") {
          newShape.setAttribute("width", group.shape_data.w.toString());
          newShape.setAttribute("height", group.shape_data.h.toString());
          newShape.setAttribute(
            "x",
            String(group.x + group.space_x + shape.x * SCALE)
          );
          newShape.setAttribute(
            "y",
            String(group.y + group.space_y + shape.y * SCALE)
          );
          newShape.setAttribute("class", "focusable rect");
        } else if (shape_type === "circle") {
          newShape.setAttribute(
            "cx",
            String(group.x + group.space_x + shape.cx * SCALE)
          );
          newShape.setAttribute(
            "cy",
            String(group.y + group.space_y + shape.cy * SCALE)
          );
          newShape.setAttribute(
            "r",
            String(group.y + group.space_y + shape.r * SCALE)
          );
          newShape.setAttribute("class", "focusable circle");
        }
        newShape.setAttribute("id", shape.id);
        newShape.setAttribute("tabindex", String(0));
        //newShape.onclick = handleClick;
        newShape.onfocus = handleFocus;
        newShape.onkeydown = handleKeyDown;

        newGroup.appendChild(newShape);
      });
      svg?.appendChild(newGroup);
    });
  };

  const focusFirstShape = ():void => {
    const firstFocus:any =  document.getElementsByClassName("focusable")[0]
        if(firstFocus){
            firstFocus.focus()
        }
    
  };

  let currentFocusId: string | null = "";

  let availableNeighbour: Neighbour = {
    up:   '',
    down: '',
    right:'',
    left: '',
  };

  const getShapeCoords = (shape: HTMLElement & any): Coord => {
    switch (shape.classList[1]) {
      case "rect":
        return {
          id: shape.id,
          x: shape.x.baseVal.value,
          y: shape.y.baseVal.value,
        };
      case "circle":
        return {
          id: shape.id,
          x: shape.cx.baseVal.value,
          y: shape.cy.baseVal.value,
        };

      default:
        return {
          id: "null",
          x: 0,
          y: 0,
        };
    }
  };

  const nullNeighbour: Coord = {
    id: "",
    x: 0,
    y: 0,
  };

  const getCurrentNeighbours = () => {
    const currentFocusedShape = document.activeElement;

    if (currentFocusedShape) {
      currentFocusId = currentFocusedShape.id;
    }

    const currentFocuseData = getShapeCoords(currentFocusedShape);

    const allFocusableData: Coord[] = [];

    const allFocusables = document.getElementsByClassName("focusable");
    // console.log(allFocusables);

    for (let index = 0; index < allFocusables.length; index++) {
      if (allFocusables[index].id !== currentFocuseData.id) {
        allFocusableData.push(getShapeCoords(allFocusables[index]));
      }
    }

    let downNeighbourArr: Coord[] = allFocusableData.filter((neighbour) => {
      return neighbour.y > currentFocuseData.y;
    });
    let downNeighbour: Coord;
    if (downNeighbourArr.length > 0) {
      downNeighbour = downNeighbourArr.reduce((prev, current) => {
        return Math.hypot(
          prev.y - currentFocuseData.y,
          prev.x - currentFocuseData.x
        ) <
          Math.hypot(
            current.y - currentFocuseData.y,
            current.x - currentFocuseData.x
          )
          ? prev
          : current;
      });
    } else {
      downNeighbour = nullNeighbour;
    }

    let upNeighbourArr: Coord[] = allFocusableData.filter((neighbour) => {
      return neighbour.y < currentFocuseData.y;
    });
    let upNeighbour: Coord;
    if (upNeighbourArr.length > 0) {
      upNeighbour = upNeighbourArr.reduce((prev, current) => {
        return Math.hypot(
          prev.y - currentFocuseData.y,
          prev.x - currentFocuseData.x
        ) <
          Math.hypot(
            current.y - currentFocuseData.y,
            current.x - currentFocuseData.x
          )
          ? prev
          : current;
      });
    } else {
      upNeighbour = nullNeighbour;
    }

    let leftNeighbourArr: Coord[] = allFocusableData.filter((neighbour) => {
      return neighbour.x < currentFocuseData.x;
    });

    let leftNeighbour: Coord;
    if (leftNeighbourArr.length > 0) {
      leftNeighbour = leftNeighbourArr.reduce((prev, current) => {
        return Math.hypot(
          prev.y - currentFocuseData.y,
          prev.x - currentFocuseData.x
        ) <
          Math.hypot(
            current.y - currentFocuseData.y,
            current.x - currentFocuseData.x
          )
          ? prev
          : current;
      });
    } else {
      leftNeighbour = nullNeighbour;
    }
    let rightNeighbourArr: Coord[] = allFocusableData.filter((neighbour) => {
      return neighbour.x > currentFocuseData.x;
    });

    let rightNeighbour: Coord;
    if (rightNeighbourArr.length > 0) {
      rightNeighbour = rightNeighbourArr.reduce((prev, current) => {
        return Math.hypot(
          prev.y - currentFocuseData.y,
          prev.x - currentFocuseData.x
        ) <
          Math.hypot(
            current.y - currentFocuseData.y,
            current.x - currentFocuseData.x
          )
          ? prev
          : current;
      });
    } else {
      rightNeighbour = nullNeighbour;
    }

    availableNeighbour = {
      up: upNeighbour.id,
      down: downNeighbour.id,
      right: rightNeighbour.id,
      left: leftNeighbour.id,
    };
    //console.log(availableNeighbour);
  };

  const getCurrentFocusData = () => {
    for (let index:number = 0; index < GroupsData.length; index++) {
      let ShapeData = GroupsData[index].shapes.find(
        //(shape:RecShape|CircleShape) => shape.id === currentFocusId
      
        function getEcual (shape) {

          return shape.id === currentFocusId
       
        }
      
        );
      if (ShapeData) {
        return ShapeData;
      }else{
        return undefined
      }
    }
  };

  const handleFocus = () => {
    getCurrentNeighbours();
    //setShapeInfo(getCurrentFocusData());
    getCurrentFocusData();
  };

  useEffect(() => {
    renderSVG();
    focusFirstShape();
  }, []);

  return (
    <Box bgcolor="secondary.main" sx={{ overflow: "auto" }}>
      <svg id="svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <style>
            {`.cls-1,.cls-7{fill:#b2488d;}
              .rect1{stroke:#671f4d}`}
          </style>
        </defs>
      </svg>
    </Box>
  );
});

export default DinSVGMap;
