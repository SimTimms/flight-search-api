import {
  airlineResolversQuery,
  airlineResolversMutation,
} from "./airline/airlineResolvers";
import {
  flightResolversQuery,
  flightResolversMutation,
  DateTimeScalar,
} from "./flight/flightResolvers";
import {
  cityResolversQuery,
  cityResolversMutation,
} from "./city/cityResolvers";

const resolvers = {
  Query: {
    ...airlineResolversQuery,
    ...flightResolversQuery,
    ...cityResolversQuery,
  },
  Mutation: {
    ...airlineResolversMutation,
    ...flightResolversMutation,
    ...cityResolversMutation,
  },
  DateTime: DateTimeScalar, // Add your custom scalar resolvers here if needed
};

export default resolvers;
