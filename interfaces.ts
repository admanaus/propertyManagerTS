
import { PropertyType } from "./enums"

interface Property {
    id: number,
    address: string,
    rooms: number,
    baths: number,
    squareFeet: number,
    available: boolean,
    type: string,
}

export { Property };