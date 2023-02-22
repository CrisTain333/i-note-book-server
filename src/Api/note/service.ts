const { MongoClient, ObjectId } = require("mongodb");
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

const usersNoteCollection = client.db("iNoteBook").collection("usersNote");

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
