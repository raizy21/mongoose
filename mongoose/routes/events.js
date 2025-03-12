import express from "express";
import {
  getEvents,
  createEvent,
  getEvent,
  updateEvent,
  deleteEvent,
} from "../controllers/events.js";
import validateSchema from "../middlewares/validateSchema.js";
import {
  createEventSchema,
  updateEventSchema,
} from "../schemas/events.js";

const router = express.Router();

router
  .route("/")
  .get(getEvents)
  .post(validateSchema(createEventSchema), createEvent);
router
  .route("/:id")
  .get(getEvent)
  .put(validateSchema(updateEventSchema), updateEvent)
  .delete(deleteEvent);

export default router;
