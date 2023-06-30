import { Box, Stack, Typography } from "@mui/material"
import  DinSVGMap  from "../components/DinSVGMap"
import { useState } from "react";
import { Shape } from "../Interfaces/GroupDataIfaces";

export const SVGMapPage = () => {

  const initialShapeInfo : Shape = {
    id: "",
    x: 0,
    y: 0,
    showName: "",
    description: "",
  }

  const [shapeInfo, setShapeInfo] = useState<Shape>(initialShapeInfo);

  // const setShapeInfo = ():void=>{
  //   console.log('object');
  // }



  return (
<Stack spacing={2}>
        <Box bgcolor="info.light" p={2}>
           PANEL DATA II
           <Typography>{JSON.stringify(shapeInfo)}</Typography>
        </Box>

        <Box bgcolor="info.light">
          <DinSVGMap setShapeInfo={setShapeInfo}/>
        </Box>
</Stack>


  )
}
