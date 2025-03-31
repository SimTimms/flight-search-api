import { param } from "express-validator";

export const validateNumberOfPassengers = [
  param("numberOfPassengers")
    .isInt({ min: 1 })
    .withMessage("Number of passengers must be a positive integer"),
];
