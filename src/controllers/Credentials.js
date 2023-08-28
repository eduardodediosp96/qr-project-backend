import Credential from "../models/Credentials";

export const getCredentials = async (req, res) => {
  Credential.find({}, (err, docs) => {
    if (err) {
      console.log(err);
      res.status(500).json(err);
    } else {
      console.log("Credentials finded : ", docs);
      res.json(docs);
    }
  });
};

export const getCredential = async (req, res) => {
  const { id } = req.params;
  await Credential.findById(id)
    .then((credential) => res.send(credential))
    .catch((error) => {
      res.status(500).json(error);
    });
};

export const createCredential = async (req, res) => {
  await Credential.create(req.body)
    .then((cred) => res.json(cred))
    .catch((error) => {
      res.status(500).json(error);
    });
};

export const editCredential = async (req, res) => {
  const { id } = req.params;
  const filter = { _id: id };
  const update = req.body;
  await Credential.findOneAndUpdate(filter, update)
    .then((credential) => Credential.findById(credential._id))
    .then((newCredential) => res.send(newCredential))
    .catch((error) => {
      res.status(500).json(error);
    });
};

export const deleteCredential = async (req, res) => {
  const { id } = req.params;
  const filter = { _id: id };
  await Credential.deleteOne(filter)
    .then((response) => res.send(response))
    .catch((error) => {
      res.status(500).json(error);
    });
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  await Credential.findOne({ username })
    .then((user) => {
      if (user.password === password) {
        res.status(200).send(`${username} logged in`);
      } else {
        throw { status: 401, message: "wrong credentials" };
      }
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};
