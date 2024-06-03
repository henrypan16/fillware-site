import { Map as GoogleMap, AdvancedMarker,  MapCameraChangedEvent, MapCameraProps } from '@vis.gl/react-google-maps';
import { React } from 'react'

interface Props {
    camera: MapCameraProps,
    position: {
        lat: number,
        lng: number
    },
    cameraChanged: MapCameraChangedEvent,
    title: string,
    id: string
}

export const Map = ({camera, position, cameraChanged, title, id}: Props) => {
    return <div className="flex flex-gap-4 z-50">
        <div className="flex flex-col gap-4">
            <p className="font-mulish font-light text-gray-900 text-2xl text-center dark:text-gray-400">
                {title}
            </p>
            <div className="md:w-96 h-96 w-screen overflow-hidden rounded-3xl shadow-lg border-4 border-blue-50 hover:border-blue-400">
                <GoogleMap {...camera} defaultCenter={position} defaultZoom={18} mapId={id} onCameraChanged={cameraChanged}>
                    <AdvancedMarker position={position} />
                </GoogleMap>
            </div>
        </div>
    </div>
}