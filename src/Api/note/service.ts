const { MongoClient, ObjectId } = require("mongodb");
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

const userCollection = client.db("iNoteBook").collection("users");

export const saveNotes = async (req: any) => {
  const message = {
    status: 200,
    message: "ok",
    result: {},
  };
  return message;
};
