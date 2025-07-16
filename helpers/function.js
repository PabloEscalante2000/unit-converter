import { convLength } from "./convertions.js"

export const convertLength = (unit, from , to) => {
    const meterValue = unit * convLength[from]
    const response = meterValue / convLength[to]
    return response.toFixed(3) 
}