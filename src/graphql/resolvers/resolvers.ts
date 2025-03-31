import airlineResolvers from "./airline/airlineResolvers";
import flightResolvers from "./flight/flightResolvers";

const resolvers = {
  ...airlineResolvers,
  ...flightResolvers,
};

export default resolvers;
