const { MongoClient, ObjectId } = require("mongodb");
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

const usersNoteCollection = client.db("iNoteBook").collection("usersNote");

// Save  User Notes
export const saveNotes = async (req: any) => {
  const note = req.body;
  const result = await usersNoteCollection.insertOne(note);
  const message = {
    status: 200,
    message: "Note saved",
    result: { result },
  };
  return message;
};

// Get User Note

export const getNotes = async (req: any) => {
  const email = req.params.email;
  const userNotes = await usersNoteCollection
    .find({ userEmail: email })
    .toArray();
  console.log(userNotes);
  const message = {
    status: 200,
    message: "ok",
    result: { userNotes },
  };
  return message;
};

export const getSingleNote = async (req: any) => {
  const id = req.params.id;
  const result = await usersNoteCollection
    .find({ _id: ObjectId(id) })
    .toArray();
  console.log(result);
  const message = {
    status: 200,
    message: "ok",
    result,
  };
  return message;
};
