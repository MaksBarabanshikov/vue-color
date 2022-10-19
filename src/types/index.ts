export interface IColor {
    id: number;
    hex: string;
    isLocked: boolean;
}

export type TColors = IColor[] | []
