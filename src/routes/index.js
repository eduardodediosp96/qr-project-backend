import express from "express";
import credentialRoutes from "./Credentials";
import eventSchedule from "./EventSchedule";
import event from "./Event";
import guest from "./Guest";

const router = express.Router();
router.use("/credentials", credentialRoutes);
router.use("/event-schedules", eventSchedule);
router.use("/events", event);
router.use("/guests", guest);

export default router;
