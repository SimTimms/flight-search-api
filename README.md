# **Flight Search API**

## **Overview**

The Flight Search API enables users to search and filter flights and return the CO2 emissions based on flight distance and duration (international / domestic). It integrates caching via Redis, input validation, and database interactions with MongoDB to provide fast and reliable data.

---

## **Features**

- **Flight Management**: Create and Query flights - Other Update and Delete operations omitted for simplicity
- **City Data**: Create City Documents. Creating a City will call the GoogleMaps API to determine the coordinates for use in distance calculations - Other Update and Delete operations omitted for simplicity
- **Redis Caching**: Improved performance through result caching.
- **Error Handling**: Error messages and debugging support.
- **Scalability**: Built to handle a large number of requests efficiently.

---

## **Technologies**

- **Node.js**: Backend runtime for handling API requests.
- **MongoDB**: NoSQL database for managing flights, cities, and airline data. Chosen for it's flexibility and rapid development and it's suitability to iterative design changes. The relational model is not complex and is suited to MongoDBs embedded JSON structure.
- **Redis**: In-memory data store for caching and reducing database load.
- **GraphQL**: Query language for API interaction, enabling flexible and efficient data requests.
- **TypeScript**: Ensures type safety and better maintainability of the code.

## **Removed Technologies**

- **Express**: Initially created as a RESTful API - Express has been removed in favour of creating a GraphQL API.
- **Geospatial Queries**: Initially the Database was designed to handle Geospatial queries however this was deemed unecessary and woud have constituted a huge overhead. The distance calculation is now computed in the createFlight resolver. Similarly the CO2 emission calculations are computed in this resolver.

---

## **Installation**

Follow the steps below to set up and run the API locally:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/SimTimms/flight-search-api.git
   cd flight-search-api
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set Environment Variables**

- **`MONGO_URI`**  
  The MongoDB connection URI for your database.

- **`ENABLE_GRAPHIQL`**  
  A flag to enable or disable GraphiQL, the in-browser IDE for exploring GraphQL APIs.

- **`GOOGLE_API_KEY`**  
  The Google API key used for accessing Google services (e.g., Maps API).

- **`ENABLE_DB_WRITE`**  
  A flag to enable or disable writing to the database.  
  This can be useful for creating test data in development environments while disabling database functions in production.

- **`REDIS_URI`**  
  The URI for connecting to the Redis instance.

4. **Run the Application**
   ```bash
   npm start
   ```

## **Usage**

### **Endpoints**

The API is powered by GraphQL. There are queries and mutations for creating and reading Flight , City and Airline Data, however for the purpose of this API the only query that should be made available is the filterFlights query.

#### **filterFlights Query**

```
 query {
  filterFlights(filter:
  {
     departureDateTime: "2021-04-02T11:00:18Z",
    arrivalDateTime: "2025-04-02T11:00:18Z",
    numberOfPassengers: 10,
  }) {
    _id
    airline {
      _id
      airlineName
    }
    arrivalDateTime
    departureDateTime
    co2Emission
    arrivalCity {
      _id
      cityName
      coordinates {
        coordinates
        type
      }
    }
    departureCity {
      _id
      cityName
      coordinates {
        coordinates
        type
      }
    }
    distance
    flightNumber
    numberOfPassengers
    price
    totalCo2Emission
  }
}
```

#### **filterFlights typeDefs**

```
Flight:{
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

FlightFilter:{
        numberOfPassengers: Int! - Required
        departureDateTime: DateTime! # ISO 8601 format - Required
        arrivalDateTime: DateTime! # ISO 8601 format - Required
        flightNumber: String
        departureCity: ID
        arrivalCity: ID
        airline: ID
        price: Float
        distance: Float
    }
```

### **Error Handling**

The API incorporates error handling, ensuring meaningful error messages are delivered to both clients and developers.

### **Caching**

Redis is used to cache expensive operations and improve performance.
