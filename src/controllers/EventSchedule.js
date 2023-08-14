import EventSchedule from "../models/EventSchedule";
import Event from "../models/Event";

export const getEventSchedules = async (req, res) => {
  EventSchedule.find({}, (err, docs) => {
    if (err) {
      console.log(err);
      res.status(500).json(err);
    } else {
      console.log("EventSchedules finded : ", docs);
      res.json(docs);
    }
  });
};

export const getEventSchedule = async (req, res) => {
  const { id } = req.params;
  await EventSchedule.findById(id)
    .then((eventSchedule) => res.send(eventSchedule))
    .catch((error) => {
      res.status(500).json(error);
    });
};

export const createEventSchedule = async (req, res) => {
  const { id } = req.params;
  try {
    const event = await Event.findById(id);
    if (!event) {
      throw { status: 401, message: "an event with that id doesnt exist" };
    }

    //creo el eventSchedule
    const eventSchedule = await EventSchedule.create({
      ...req.body,
      event: event._id,
    });

    //coloco el schedule recien creado en el evento
    await Event.update(
      { _id: event._id },
      { $push: { schedules: eventSchedule._id } }
    );

    res.json(eventSchedule);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const editEventSchedule = async (req, res) => {
  const { id } = req.params;
  const filter = { _id: id };
  const update = req.body;

  //no esta permitido cambiar el event
  await EventSchedule.findOneAndUpdate(filter, {
    date: update.date,
    time: update.time,
  })
    .then((eventSchedule) => EventSchedule.findById(eventSchedule._id))
    .then((newEventSchedule) => res.send(newEventSchedule))
    .catch((error) => {
      res.status(500).json(error);
    });
};

export const deleteEventSchedule = async (req, res) => {
  const { id } = req.params;
  const filter = { _id: id };
  await EventSchedule.deleteOne(filter)
    .then((response) => res.send(response))
    .catch((error) => {
      res.status(500).json(error);
    });
};
