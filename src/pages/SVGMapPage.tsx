import { Box, Stack } from "@mui/material"
import  DinSVGMap  from "../components/DinSVGMap"

export const SVGMapPage = () => {


  const setShapeInfo = ():void=>{
    console.log('object');
  }



  return (
<Stack spacing={2}>
        <Box bgcolor="info.light" p={2}>
           PANEL DATA
        </Box>

        <Box bgcolor="info.light">
          <DinSVGMap setShapeInfo={setShapeInfo}/>
        </Box>
</Stack>


  )
}
