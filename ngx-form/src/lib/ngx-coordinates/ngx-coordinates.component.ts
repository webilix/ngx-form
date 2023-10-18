import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Feature, Map, View } from 'ol';
import { Coordinate } from 'ol/coordinate';
import { Point } from 'ol/geom';
import BaseLayer from 'ol/layer/Base';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import OSM from 'ol/source/OSM';
import VectorSource from 'ol/source/Vector';
import interactionDoubleClickZoom from 'ol/interaction/DoubleClickZoom';

import { INgxCoordinates, INgxCoordinatesConfig } from './ngx-coordinates.interface';

@Component({
    host: { selector: 'ngx-coordinates' },
    templateUrl: './ngx-coordinates.component.html',
    styleUrls: ['./ngx-coordinates.component.scss'],
})
export class NgxCoordinatesComponent implements OnInit {
    public map!: Map;
    public title?: string = this.data.config.title;
    public coordinates?: INgxCoordinates = this.data.config.value;

    public error?: 'LATITUDE' | 'LONGITUDE';

    constructor(
        @Inject('NGX_FORM_PRIMARY_COLOR') private readonly primaryColor: string,
        @Inject(MAT_DIALOG_DATA)
        private readonly data: { config: INgxCoordinatesConfig },
        private readonly matDialogRef: MatDialogRef<NgxCoordinatesComponent>,
    ) {}

    ngOnInit(): void {
        const latitude: number = this.coordinates?.latitude || this.data.config.center?.latitude || 35.6997382;
        const longitude: number = this.coordinates?.longitude || this.data.config.center?.longitude || 51.3380603;

        const coordinate: Coordinate = [longitude, latitude];
        this.map = new Map({
            view: new View({ center: coordinate, zoom: this.data.config.zoom || 15, projection: 'EPSG:4326' }),
            layers: [new TileLayer({ source: new OSM() })],
            target: 'ngx-form-map',
        });

        // Remove DoubleClick / Zoom action
        this.map
            .getInteractions()
            .getArray()
            .forEach((interaction) => {
                if (interaction instanceof interactionDoubleClickZoom) this.map.removeInteraction(interaction);
            });

        this.addCoordinateLayer();
    }

    addCoordinateLayer(): void {
        // Reset map
        this.map
            .getLayers()
            .getArray()
            .forEach((layer: BaseLayer) => {
                if (layer instanceof VectorLayer) this.map.removeLayer(layer);
            });

        if (!this.coordinates) return;
        const coordinate: Coordinate = [this.coordinates.longitude, this.coordinates.latitude];
        const layer = new VectorLayer({
            source: new VectorSource({ features: [new Feature(new Point(coordinate))] }),
            style: {
                'circle-fill-color': this.primaryColor,
                'circle-radius': 8,
                'circle-stroke-color': '#FFF',
                'circle-stroke-width': 1,
            },
        });
        this.map.addLayer(layer);
    }

    checkInputs(latitude: string, longitude: string): void {
        this.error = undefined;

        latitude = latitude.toString().trim();
        if (latitude === '' || isNaN(+latitude) || +latitude < -180 || +latitude > 180) {
            this.error = 'LATITUDE';
            return;
        }

        longitude = longitude.toString().trim();
        if (longitude === '' || isNaN(+longitude) || +longitude < -180 || +longitude > 180) {
            this.error = 'LONGITUDE';
            return;
        }

        if (this.coordinates && this.coordinates.latitude === +latitude && this.coordinates.longitude === +longitude)
            return;

        const center: Coordinate = [+longitude, +latitude];
        this.map.getView().animate({ center, duration: 1000 });

        this.coordinates = { latitude: +latitude, longitude: +longitude };
        this.addCoordinateLayer();
    }

    setCoordinates(event: MouseEvent): void {
        event.preventDefault();

        this.error = undefined;
        const coordinate: Coordinate = this.map.getEventCoordinate(event).map((c: number) => +c.toFixed(7));
        this.coordinates = { latitude: coordinate[1], longitude: coordinate[0] };
        this.addCoordinateLayer();
    }

    selectCoordinates(): void {
        if (!this.coordinates || this.error) return;
        this.matDialogRef.close(this.coordinates);
    }
}
