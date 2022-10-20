import {Color} from "chroma-js";

export interface IColor {
    hex: Color;
    isLocked: boolean;
}

export type TColors = IColor[] | []
