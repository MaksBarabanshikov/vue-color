import chroma from "chroma-js";
import {IColor, TColors} from "@/types";

export const generateRandomColor = (): string => {
    const hexCodes = '0123456789ABCDEF'
    let color = ''
    for (let i = 0; i < 6; i++) {
        color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
    }

    return '#' + color
}

export const generateInitialColor = (): TColors => {
    const arr:TColors = []

    for (let i = 0; i < 6; i++) {
        const color: IColor = {
            hex: chroma.random(),
            isLocked: false,
        }
        // @ts-ignore
        arr.push(color)
    }

    return arr
}
