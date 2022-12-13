import { User } from "../models/userModel";
import { Request, Response } from "express";

export const createUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).send("Please Fill all Fields!!");
  }
  const userExist = await User.findOne({ email });

  if (userExist) {
    return res.status(400).send("User alreay exists!!");
  }

  const user = await User.create({
    email,
    name,
  });

  return res.status(200).json(user);
};

export const getUser = async (req: Request, res: Response) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).send("Please fill all fields");
  }

  const user = await User.findOne({ email });
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).send("User Does not exists");
  }
};
