const { MongoClient, ObjectId } = require("mongodb");
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userCollection = client.db("custom-auth").collection("user");

/// ------------------ Handle Register
export const register = async (user: any) => {
  const { name, email, password, phone } = user;

  const filter = { email: email };
  const checkEmail = await userCollection.findOne(filter);
  // const checkUserName = await userCollection.findOne({
  //   name: name,
  // });
  // //
  // if (checkUserName) {
  //   const message = {
  //     status: 302,
  //     message: "name already taken",
  //     result: "",
  //   };
  //   return message;
  // }

  if (checkEmail) {
    const message = {
      status: 302,
      message: "Email already in use",
      result: "",
    };
    return message;
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const userInfo = {
    name,
    email,
    hashedPassword,
    phone,
  };

  const result = await userCollection.insertOne(userInfo);

  const message = {
    status: 200,
    message: "Registration successful",
    result: result,
  };
  return message;
};

/// ------------------ Handle Login
export const login = async (user: any) => {
  const { email, password } = user;
  const checkEmail = await userCollection.findOne({ email: email });
  const hashedPassword = checkEmail?.hashedPassword;
  if (!checkEmail) {
    const message = {
      status: 404,
      message: "email not found",
      result: "",
    };
    return message;
  }
  const checkPassword = await bcrypt.compare(password, hashedPassword);

  if (!checkPassword) {
    const message = {
      status: 401,
      message: "Wrong password",
      result: "",
    };
    return message;
  }
  const payload = { email };

  const token = jwt.sign(payload, "12gvdhjuirtvch7$#%$^#%^78IUGHJVBN", {
    expiresIn: "1d", // expires in 1 days
  });

  const message = {
    status: 200,
    message: "login successful",
    result: { token },
  };
  return message;
};

//// ------------- Get User

export const getUser = async (req: any) => {
  console.log(req.query.token);

  const userEmail = jwt.verify(
    req.query.token,
    "12gvdhjuirtvch7$#%$^#%^78IUGHJVBN",
    (err: any, user: any) => {
      if (err) {
        const message = {
          status: 403,
          message: "token is not valid",
          result: "",
        };
        return message;
      }
      return user;
    }
  );

  const user = await userCollection.findOne({ email: userEmail.email });
  console.log(user);

  const message = {
    status: 200,
    message: "ok",
    result: {
      user,
    },
  };
  return message;
};
