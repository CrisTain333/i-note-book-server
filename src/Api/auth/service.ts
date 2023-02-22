const { MongoClient, ObjectId } = require("mongodb");
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userCollection = client.db("iNoteBook").collection("users");

//// ------------- Save User
export const user = async (req: any) => {
  const { name, email, password, profilePicture } = req.body;

  // Generate Auth Token ---------------
  const token = jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: "2h",
  });

  // Hash Password ---------------
  const hashedPassword = await bcrypt.hash(password, 5);

  // create User -----------------
  const user = {
    name,
    email,
    hashedPassword,
    profilePicture,
  };

  // Save user in db
  const result = await userCollection.insertOne(user);

  const message = {
    status: 200,
    message: "User Saved",
    result: {
      result,
      token,
    },
  };
  return message;
};

export const getUser = async (req: any) => {
  // Get User email
  const emailAddress = req.params.email;
  const user = await userCollection.findOne({ email: emailAddress });
  const { name, profilePicture, email } = user;
  const message = {
    status: 200,
    message: "User Sended",
    result: { name, profilePicture, email },
  };
  return message;
};
