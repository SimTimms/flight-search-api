const typeDefs = `#graphql
############################
### SCALARS
############################

    scalar DateTime

############################
### GEO SCHEMA
############################

    input GeoJSONInput {
        type: String!
        coordinates: [Float!]!
    }
   
    type GeoJSON{
        type: String!
        coordinates: [Float!]!
    }

############################
### CITY SCHEMA
############################

    input CityInput {
        cityName: String!
    }


    type City{
        _id: ID!
        cityName: String!
        coordinates: GeoJSON!
    }

############################
### AIRLINE SCHEMA
############################

    type Airline {
        _id: ID!
        airlineName: String!
    }

    input AirlineInput {
       airlineName: String!
    }

############################
### FLIGHT SCHEMA
############################


    type Flight {
       _id: ID!
        flightNumber: String
        departureDateTime: DateTime # ISO 8601 format
        arrivalDateTime: DateTime # ISO 8601 format
        airline:Airline
        price: Float
        departureCity: City
        arrivalCity: City
        distance: Float
        co2Emission: Float
        totalCo2Emission: Float
        numberOfPassengers: Int
    }


    input FlightInput {
        flightNumber: String!
        departureDateTime: DateTime! # ISO 8601 format
        arrivalDateTime: DateTime! # ISO 8601 format
        price: Float!
        airline:ID!
        departureCity:ID!
        arrivalCity:ID!
    }


    input FlightFilter {
        flightNumber: String
        departureCity: ID
        arrivalCity: ID
        departureDateTime: DateTime! # ISO 8601 format
        arrivalDateTime: DateTime! # ISO 8601 format
        airline: ID
        price: Float
        distance: Float
        numberOfPassengers: Int!
    }

    
############################
### QUERIES
############################

    type Query{
        getAirlines:[Airline]
        getFlight(flightNumber:String!):Flight
        getFlights:[Flight]
        getCities:[City]
        filterFlights(filter:FlightFilter):[Flight]
    }

############################
### MUTATIONS
############################

    type Mutation{
        createFlight(input:FlightInput!):Flight
        createAirline(input:AirlineInput!):Airline
        createCity(input:CityInput!):City
    }
`;
export default typeDefs;
