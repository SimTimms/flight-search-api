import express, { Router, Response, Request } from "express";
import { validateNumberOfPassengers } from "../validators";
import handleValidationErrors from "../middleware/handleValidationErrors";
const router: Router = express.Router();

// ================
// Routes
// ================

router.get("/status", (req: Request, res: Response) => {
  res.status(200).json({ message: "API is running" });
});

router.get(
  "/:numberOfPassengers",
  validateNumberOfPassengers,
  handleValidationErrors,
  (req: Request, res: Response) => {
    const { numberOfPassengers } = req.params;
    res.status(200).json({
      message: `Number of passengers is ${numberOfPassengers}`,
    });
  }
);

export default router;
