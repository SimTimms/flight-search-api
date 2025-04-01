import { buildSchema } from "graphql";

const mutations = `
    createFlight(input:FlightInput!):Flight
    updateFlight(input:FlightInput!):Flight
    createAirline(input:AirlineInput!):Flight
    createCity(input:CityInput!):City
`;
const schema = buildSchema(`
    type GeoJSON{
        type: String!
        coordinates: [Float!]!
    }

    type City{
        _id: ID!
        cityName: String!
        coordinates: GeoJSON!
    }

    type Airline {
        _id: ID!
        airlineName: String!
    }

    type Flight {
       _id: ID!
        flightNumber: String!
        departureDateTime: String!
        arrivalDateTime: String!
        airline:Airline
        price: Float!
        departureCity: City
        arrivalCity: City
    }

    input FlightInput {
        flightNumber: String!
        departureDateTime: String!
        arrivalDateTime: String!
        price: Float!
        airline:ID!
        departureCity:ID!
        arrivalCity:ID!
    }
    
    input AirlineInput {
       airlineName: String!
    }
       
    input GeoJSONInput {
        type: String!
        coordinates: [Float!]!
    }
         
    input CityInput {
        cityName: String!
    }

    input FlightFilterInput {
        flightNumber: String
        departureCity: ID
        arrivalCity: ID
        departureDateTime: String # ISO 8601 format
        arrivalDateTime: String # ISO 8601 format
        airline: ID
        price: Float
    }

    type Query{
        getAirlines:[Airline!]!
        getFlight(flightNumber:String!):Flight
        getFlights:[Flight!]!
        getCities:[City!]!
        filterFlights(filter:FlightFilterInput):[Flight!]!
    }


    type Mutation{
        createFlight(input:FlightInput!):Flight
        updateFlight(input:FlightInput!):Flight
        createAirline(input:AirlineInput!):Flight
        createCity(input:CityInput!):City
    }
`);

export default schema;
