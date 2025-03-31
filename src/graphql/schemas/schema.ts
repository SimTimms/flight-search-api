import { buildSchema } from "graphql";
const schema = buildSchema(`
 

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
    }

    input FlightInput {
        flightNumber: String!
        departureDateTime: String!
        arrivalDateTime: String!
        price: Float!
        airline:ID!
    }
    
    input AirlineInput {
       airlineName: String!
    }

    type Query{
        getAirlines:[Airline!]!
        getFlight(flightNumber:String!):Flight
        getFlights:[Flight!]!
    }


    type Mutation{
        createFlight(input:FlightInput!):Flight
        updateFlight(input:FlightInput!):Flight
        createAirline(input:AirlineInput!):Flight
    }
`);

export default schema;
