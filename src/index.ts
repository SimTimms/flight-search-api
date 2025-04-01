import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./database/connection";
import { graphqlHTTP } from "express-graphql";
import schema from "./graphql/schemas/schema";
import resolvers from "./graphql/resolvers/resolvers";

dotenv.config();

const port = process.env.PORT || 3000;

connectDB();

const app: Express = express();

// ================
// SETUP
// ================

app.use(express.json());
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: process.env.ENABLE_GRAPHIQL === "true",
  })
);

// ================
// 404 - Not Found
// ================

app.use((_: Request, res: Response) => {
  res.status(404).json({ message: "This route does not exist" });
});

// ================
// 500 - ERROR HANDLER
// ================

app.use((err: Error, _: Request, res: Response) => {
  res
    .status(500)
    .json({ message: "Internal server error", error: err.message });
});

// ================
// START SERVER
// ================

app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});
