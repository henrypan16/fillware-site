export const Contact = () => {
    <div className="w-full flex flex-col gap-6">
        <h2 className="text-3xl text-center tracking-tight font-extrabold text-gray-900 dark:text-white">Our locations</h2>
        <div class="h-1 w-24 border-2 border-gray-500 rounded-lg mx-auto mb-4"></div>
        <APIProvider apiKey={'AIzaSyCJ8M0H-aB7jnZAafRSTcbOdPRHlFxniHk'} onLoad={() => console.log('Maps API has loaded.')}>
            <div className="flex gap-24">
            <div className="flex flex-col gap-4">
            <p className="font-mulish font-light text-gray-900 sm:text-2xl text-center dark:text-gray-400">
                Head Office
            </p>
                <div className="w-96 h-96 overflow-hidden rounded-3xl shadow-lg border-4 border-blue-50 hover:border-blue-400">
                <Map {...officeCamera} defaultCenter={office} defaultZoom={18} mapId="office" onCameraChanged={officeCameraChanged}>
                    <AdvancedMarker position={office} />
                </Map>
                </div>
            </div>

            <div className="flex gap-24">
                <div className="flex flex-col gap-4">
                    <p className="font-mulish font-light text-gray-900 sm:text-2xl text-center dark:text-gray-400">
                        Service Center
                    </p>
                    <div className="w-96 h-96 overflow-hidden rounded-3xl shadow-lg border-4 border-blue-50 hover:border-blue-400">
                        <Map {...warehouseCamera}
                        defaultCenter={warehouse}
                        defaultZoom={18}
                        mapId="warehouse"
                        onCameraChanged={warehouseCameraChanged}>
                        <AdvancedMarker position={warehouse} />
                        </Map>
                    </div>
                </div>
            </div>
        </div>
        </APIProvider>
    </div>
}