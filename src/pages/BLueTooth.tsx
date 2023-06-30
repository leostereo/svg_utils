import { Button } from "@mui/material"

export default function BlueTooth() {

   const handleClick = async () => {

    try {

        let mobileNavigatorObject: any = window.navigator;
        if(mobileNavigatorObject && mobileNavigatorObject.bluetooth) {
          // Here write your logic of mobileNavigatorObject.bluetooth.requestDevice();

          const device = await mobileNavigatorObject.bluetooth.requestDevice({
              optionalServices: ["battery_service", "device_information"],
              acceptAllDevices: true,
            });

            let deviceName = device.gatt.device.name;
            const server = await device.gatt.connect(); 

            const batteryService = await server.getPrimaryService("battery_service");
            const infoService = await server.getPrimaryService("device_information");

            console.log("info ",deviceName, batteryService,infoService)

        }



    } catch(err) {
      console.error(err);
      alert("An error occured while fetching device details");
    }

   } 


  return (
    <>
    <Button onClick={handleClick}>BLueToot</Button>
    </>
  )
}
