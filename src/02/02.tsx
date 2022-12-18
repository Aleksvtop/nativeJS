export type SreetType = {
    title: string,

}
export type AddressType = {
    street: SreetType
    number?: number,
}
export type HouseType = {
    id?: number,
    buildedAt: number,
    repaired: boolean,
    address: AddressType
}
export type GovernmentBuildingType = {
    type: 'Hospital' | 'Fire-station',
    budget: number,
    staffCount: number,
    address: AddressType
}
export type CityType = {
    title: string,
    houses: Array<HouseType>,
    governmentBuildings: Array<GovernmentBuildingType>,
    citizensNumber: number
}