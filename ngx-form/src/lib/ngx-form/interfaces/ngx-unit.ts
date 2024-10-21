import { UnitArea, UnitLength, UnitVolume, UnitWeight } from '@webilix/helper-library';

/**
 * Area unit input value
 */
export interface INgxFormUnitArea {
    unit: UnitArea;
    value: number;
}

/**
 * Length unit input value
 */
export interface INgxFormUnitLength {
    unit: UnitLength;
    value: number;
}

/**
 * Volume unit input value
 */
export interface INgxFormUnitVolume {
    unit: UnitVolume;
    value: number;
}

/**
 * Weight unit input value
 */
export interface INgxFormUnitWeight {
    unit: UnitWeight;
    value: number;
}
