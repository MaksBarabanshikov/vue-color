import {TColors} from "@/types";
import {defineStore} from "pinia";

export const useColors = defineStore('colors',{
    state: () => ({
        colors: [] as TColors
    }),
    actions: {
        setColors(colors: TColors) {
            this.colors = colors;
        },
        changeLockStatus(id) {
            this.colors[id].isLocked = !this.colors[id].isLocked
        }
    },
    persist: true
})
