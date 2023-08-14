import Guest from "../models/Guest";

export const getGuests = async (req, res) => {
  Guest.find({}, (err, docs) => {
    if (err) {
      console.log(err);
      res.status(500).json(err);
    } else {
      console.log("Guests finded : ", docs);
      res.json(docs);
    }
  });
};

export const getGuest = async (req, res) => {
  const { id } = req.params;
  await Guest.findById(id)
    .then((guest) => res.send(guest))
    .catch((error) => {
      res.status(500).json(error);
    });
};

export const createGuest = async (req, res) => {
  await Guest.create(req.body)
    .then((cred) => res.json(cred))
    .catch((error) => {
      res.status(500).json(error);
    });
};

export const editGuest = async (req, res) => {
  const { id } = req.params;
  const filter = { _id: id };
  const update = req.body;
  await Guest.findOneAndUpdate(filter, update)
    .then((guest) => Guest.findById(guest._id))
    .then((newGuest) => res.send(newGuest))
    .catch((error) => {
      res.status(500).json(error);
    });
};

export const deleteGuest = async (req, res) => {
  const { id } = req.params;
  const filter = { _id: id };
  await Guest.deleteOne(filter)
    .then((response) => res.send(response))
    .catch((error) => {
      res.status(500).json(error);
    });
};
