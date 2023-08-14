import Event from "../models/Event";

export const getEvents = async (req, res) => {
  Event.find({}, (err, docs) => {
    if (err) {
      console.log(err);
      res.status(500).json(err);
    } else {
      console.log("Events finded : ", docs);
      res.json(docs);
    }
  });
};

export const getEvent = async (req, res) => {
  const { id } = req.params;
  await Event.findById(id)
    .then((event) => res.send(event))
    .catch((error) => {
      res.status(500).json(error);
    });
};

export const createEvent = async (req, res) => {
  await Event.create(req.body)
    .then((cred) => res.json(cred))
    .catch((error) => {
      res.status(500).json(error);
    });
};

export const editEvent = async (req, res) => {
  const { id } = req.params;
  const filter = { _id: id };
  const update = req.body;
  await Event.findOneAndUpdate(filter, update)
    .then((event) => Event.findById(event._id))
    .then((newEvent) => res.send(newEvent))
    .catch((error) => {
      res.status(500).json(error);
    });
};

export const deleteEvent = async (req, res) => {
  const { id } = req.params;
  const filter = { _id: id };
  await Event.deleteOne(filter)
    .then((response) => res.send(response))
    .catch((error) => {
      res.status(500).json(error);
    });
};
