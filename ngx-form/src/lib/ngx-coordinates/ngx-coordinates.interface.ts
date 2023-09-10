export interface INgxCoordinates {
    latitude: number;
    longitude: number;
}

export interface INgxCoordinatesConfig {
    title?: string;
    value?: INgxCoordinates;
    center?: INgxCoordinates;
    zoom?: number;
}
