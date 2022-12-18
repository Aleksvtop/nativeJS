import {CityType, GovernmentBuildingType} from "../02/02";

const ages = [18, 20, 22, 1, 100, 90, 14]

const predicate = (age:number) => {
    return age > 90;
}

const oldAges = [100]

type CourseType = {
    title: string,
    price: number
}

const courses = [
    {title: "css", price: 100},
    {title: "JS", price: 200},
    {title: "REACT", price: 150}
]
const cheapPredicate = (course: CourseType) => {
    return course.price < 160
}
export const demolishHousesOnTheStreet = (city: CityType, street: string) => {
    city.houses = city.houses.filter(house => house.address.street.title !== street)
}

export const getBuildingsWithStaffCountGreaterThen = (buildings: Array<GovernmentBuildingType>, number: number) => {
    return buildings.filter(buildings => buildings.staffCount > number)
}