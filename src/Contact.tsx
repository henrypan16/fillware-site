import { APIProvider, MapCameraChangedEvent, MapCameraProps} from '@vis.gl/react-google-maps';
import { useState, useCallback } from 'react'
import { Map } from './components/Map'
import { React } from 'react'

interface Props {
    innerRef: {
        current: HTMLDivElement[]
    }
}

export const Contact = ({innerRef}: Props) => {
    const office = {
        lat: 43.66370695446159,
        lng: -79.65597855414568
    }
    
    const warehouse = {
        lat: 43.662166595458984,
        lng: -79.65428924560547
    };

      const [officeCamera, setOfficeCamera] = useState<MapCameraProps>()
      const [warehouseCamera, setWarehouseCamera] = useState<MapCameraProps>()
    
      const officeCameraChanged = useCallback((ev: MapCameraChangedEvent) => {setOfficeCamera(ev.detail)}, []);
      const warehouseCameraChanged = useCallback((ev: MapCameraChangedEvent) => {setWarehouseCamera(ev.detail)}, []);

    return (
        <div className="w-full flex flex-col gap-6" ref={(ref: HTMLDivElement) => {innerRef.current = [...innerRef.current, ref] }}>
        <h2 className="text-3xl text-center tracking-tight font-extrabold text-gray-900 dark:text-white">Our locations</h2>
        <div className="h-1 w-24 border-2 border-gray-500 rounded-lg mx-auto mb-4"></div>
        <APIProvider apiKey={'AIzaSyCJ8M0H-aB7jnZAafRSTcbOdPRHlFxniHk'} onLoad={() => {console.log('Maps API has loaded.')}}>
            <div className="flex gap-24 mx-auto mb-10 lg:flex-row flex-col">
                <Map title="Head Office" id="office" camera={officeCamera} cameraChanged={officeCameraChanged} position={office}/>
                <Map title="Service Center" id="warehouse" camera={warehouseCamera} cameraChanged={warehouseCameraChanged} position={warehouse}/>
            </div>
        </APIProvider>
    </div>)
}