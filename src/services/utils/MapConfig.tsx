/* eslint-disable @typescript-eslint/no-explicit-any */
export default class MapConfig {
    defaultMapContainerStyle(width: any, height: any) {
        return {
            width: width,
            height: height,
            borderRadius: '10px 10px 10px 10px',
        };
    }

    defaultMapZoom(zoom: number) {
        return zoom;
    }

    defaultMapCenter() {
        return {
            lat: 46.492820,
            lng: 2.600390,
        }
    }

    defaultMapCenterAdDetail(ads:any) {
        return {
            lat: ads.lat,
            lng: ads.lng,
        };
    }

    defaultMapOptions(zoomControl: boolean, tilt: number, gestureHandling: string, mapTypeId: string) {
        return {
            zoomControl: zoomControl,
            tilt: tilt,
            gestureHandling: gestureHandling,
            mapTypeId: mapTypeId,
        };
    }
}