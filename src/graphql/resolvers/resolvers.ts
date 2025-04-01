import airlineResolvers from "./airline/airlineResolvers";
import flightResolvers from "./flight/flightResolvers";
import cityResolvers from "./city/cityResolvers";

const resolvers = {
  ...airlineResolvers,
  ...flightResolvers,
  ...cityResolvers,
};

export default resolvers;
