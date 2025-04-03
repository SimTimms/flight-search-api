# **Flight Search - SYSTEM DESIGN**

## **Overview**

The Flight API facilitates querying, filtering, and displaying flight information based on user input such as departure/arrival times, cities, number of passengers, and more. The system consists of reusable and modular components for managing state, handling user interactions, and processing queries.

The API and the UI are written to separate repositories. This separation adds a small complexity overhead when running the application but when scaling the application it can be useful to have two seperate entities.

## **ARCHITECTURE**

### **Back-End**

- **Node.js**: Backend runtime for handling API requests.
- **MongoDB**: NoSQL database for managing flights, cities, and airline data. Chosen for it's flexibility and rapid development and it's suitability to iterative design changes. The relational model is not complex and is suited to MongoDBs embedded JSON structure.
- **Redis**: In-memory data store for caching and reducing database load.
- **GraphQL**: Query language for API interaction, enabling flexible and efficient data requests.
- **TypeScript**: Ensures type safety and better maintainability of the code.

### **Front-End**

- **React**: Front end application, React excels at rapid development, especially prototype and demo applications.
- **MUI**: Pre-styled components for handling date and times.
- **GraphQL**: Query language for API interaction.
- **TypeScript**: Ensures type safety and better maintainability of the code.

### **Removed Technologies**

- **Express**: Initially created as a RESTful API - Express has been removed in favour of creating a GraphQL API.
- **Geospatial Queries**: Initially the Database was designed to handle Geospatial queries however this was deemed unecessary and woud have constituted a huge overhead. The distance calculation is now computed in the createFlight resolver. Similarly the CO2 emission calculations are computed in this resolver.

### **Components**

- **GraphQL API**: Serves flight data based on user queries. Provides query endpoints such as to search for flights and Returns flight data (e.g., airline name, departure/arrival cities, price)
- **Resolvers**: Handle GraphQL queries on the server, Interact with the database to retrieve matching flight record and enrich data, for example: calculating the CO2 emissions.
- **City Mutation**: The createCity mutation handles an external API call to enrich the data. When a createCity mutation is executed the API will search the GoogleMaps API for the city coordinates which are then added to the data.
- **Flight Mutation**: The createFlight mutation determines the distance between the departure and arrival coordinates using the Haversine formula. By calculating the distance at the point of creation and inserting it into the document we can eliminate the overhead of calculating it on each query.
- **Database**: Stores flight data and related entities. Has basic relationships between Airlines, Cities and Flights.

### **Data Storage and Retrival**

- **City Collection**: Each document represents a city and includes fields like cityName and Coordinates.
- **Airline Collection**: Each document represents and airline.
- **Flight Collection**: Each document represents a single flight between 2 points and stores data about the flight. Additionally, the documents reference the Airline and City collections via MongoIDs to create relationships.

### **Design Considerations**

- **Unit, Integration and E2E Testing**: The API and the UI required a testing implementation, this could be Jest, supertest and Cypress.
- **Database Indexing**: Index searchable fields on the database to increase the querying efficiency.
- **Monitor Query Response Times**: Apollo Server provides tools for monitory queries and identifying areas for improvement.
- **Filtering and Searching**: The UI requires a sorting functionality and further filtering options.
- **Error Handling**: Both the UI and and API required a greater time investment in Error Handling. This could coincide with the testing implementation as the testing will throw and bring to the surface errors.
- **Deployment Consideration**: The API is likely to have consistent usage with periods of high traffic as holiday seasons approach. The deployment infrastructure should be carefully considered to balance the running costs with availability.
- **React Application Brief**: The React Application was designed to test the API but does not match the brief. Rebuild the React Application to meet the scope requirements.
