import chroma, {Color} from "chroma-js";
import {IColor, TColors} from "@/types";
import color from "@/components/Color.vue";

export const helper = (): string => {
    const hexCodes = '0123456789ABCDEF'
    let color = ''
    for (let i = 0; i < 6; i++) {
        color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
    }

    return '#' + color
}

export const generateInitialColor = (colors: TColors): TColors => {
    const arr:TColors = []

    for (let i = 0; i < 6; i++) {
        if (colors.length !== 0 && colors[i].isLocked === true) {
            console.log(colors[i]);
            // @ts-ignore
            arr.push(colors[i])
        } else {
            const color: IColor = {
                hex: chroma.random(),
                isLocked: false,
            }
            // @ts-ignore
            arr.push(color)
        }
    }

    return arr
}
