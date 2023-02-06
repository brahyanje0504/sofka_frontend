export interface ResponseData {
	status:  boolean
	message: string
	data:   any 
}


export interface Spacecraft {
    id : string
    name: string
    type_spacecraft : string,
    tons_of_thrust : number,
    tons_of_weight : number,
    type_fuel : string,
    height : number,
    country : string,
    objective : string,
    activated : boolean,
    expiration_date : string,
    people_capacity : number,
    transport_capacity : number,
    massive_speed : number,
    propulsion_system : string
    image: string
}