import { PropertyType } from "./enums"
import { Property } from "./interfaces"

function getAllProperties() {
    let properties = [
        {id: 1, address: "123 W 234 S", rooms: 3, baths: 1, squareFeet: 1800, available: true, type: PropertyType.Office},
        {id: 3, address: "123 W 234 S", rooms: 6, baths: 2, squareFeet: 2800, available: true, type: PropertyType.Rambler},
        {id: 5, address: "123 W 234 S", rooms: 3, baths: 2, squareFeet: 1700, available: false, type: PropertyType.Complex},
        {id: 8, address: "123 W 234 S", rooms: 2, baths: 1, squareFeet: 2100, available: true, type: PropertyType.TwoStory}
    ];
    return properties;
}

function getPropertyByType(propertyTypeFilter: PropertyType): string[] {
    console.log('Getting properties by type: ' + PropertyType[propertyTypeFilter]);

    const allProperties = getAllProperties();
    const filteredProerties: string[] = [];

    for (let currentProperty of allProperties) {
        if (currentProperty.type === propertyTypeFilter) {
            filteredProerties.push(currentProperty.address);
        }
    }
    return filteredProerties;
}

function logPropertyAddresses(address: string[]): void {
    for (let unit of address) {
        console.log(unit);
    }
}
const officeUnits = getPropertyByType(PropertyType.Office);
logPropertyAddresses(officeUnits);

// Demo stuff
// let favPropType: PropertyType = PropertyType.Office;
// console.log("Favorite Prop Type: " + favPropType);
//
// let propTypeString = PropertyType[3];
// console.log("Fav Prp Type String: " + propTypeString);
//
// let strArray1: string[] = ['here', 'are', 'blah'];
// let strArray2: Array<string> = ['more', 'are', 'blah'];
// let anyArray: any[] = [42, true, 'string'];
//
// let myTuple: [number, string] = [42, 'truck'];
// let firstElement = myTuple[0]; // 25
// let secondElement = myTuple[1]; // truck
// myTuple[2] = 100;
// myTuple[3] = 'this works too!';
// myTuple[8] = 'yey again';
//
// console.log(myTuple);


