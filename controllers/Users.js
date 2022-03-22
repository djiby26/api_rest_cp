import UserModel from "../models/User.js";

export const getUsers = (req, res) => {
  UserModel.find((error, result) => {
    if (error) {
      console.log(error);
    }
    res.json(result);
  });
};

export const createUser = async (req, res) => {
  const user = new UserModel({
    name: req.body.name,
    password: req.body.password,
  });

  await user.save();
  res.send(user);

  //   UserModel.create(
  //     { name: req.body.name, password: req.body.password },
  //     (error, result) => {
  //       if (error) {
  //         console.log(error);
  //       }
  //       result.save();
  //       res.json(result);
  //     }
  //   );
};

export const updateUser = (req, res) => {
  const body = req.body;
  UserModel.findByIdAndUpdate(body.params.id, body);
  //   .exec((err, result) => {
  //     if (err) {
  //       console.log(err);
  //     }
  //   });

  UserModel.findById(body.params.id, (err, result) => {
    // if (err) {
    //   console.log(err);
    // } else {
    //   if (body.name) {
    //     result.name = body.name;
    //   }
    //   if (body.password) {
    //     result.password = body.password;
    //   }
    //   result.save();
    //   res.send(result);
    // }
  });
};

export const deletUser = (req, res) => {
  UserModel.findByIdAndDelete(req.params.id, (err, doc) => {
    if (err) {
      console.log(err);
    } else {
      res.send(doc);
    }
  });
};
