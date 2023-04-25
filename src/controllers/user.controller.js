import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const hash = bcrypt.hashSync(password, 12);
    const newUser = await prisma.user.create({
      data: { email, password: hash },
    });

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: true });
  }
};

export const getAllInformation = async (req, res) => {
  try {
    const allInformation = await prisma.user.findMany({
      select: {
        email: true,
        list: {
          select: {
            name: true,
            favs: {},
          },
        },
      },
    });

    const computedData = allInformation.map(({ email, list }) => {
      return {
        email,
        list,
      };
    });
    res.status(200).json(computedData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true });
  }
};

export const getListUser = async (req, res) => {
  const { id } = req.params;
  try {
    const allListUser = await prisma.user.findUnique({
      where: {
        iduser: +id,
      },
      select: {
        email: true,
        list: {},
      },
    });

    if (allListUser && Object.keys(allListUser).length > 0) {
      res.status(200).json(allListUser);
    } else {
      res.status(204).json({ messageError: "No content" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true });
  }
};

const user = {
  username: "email@test.com",
  password: "secret",
};

export const generateToken = (req, res) => {
  try {
    const { user } = req.body;
    const payload = { ...user };
    const token = jwt.sign(payload, process.env.SECRET, { expiresIn: "24h" });
    res.status(200).json({ ...user, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true });
  }
};

//middleware login
export const login = async (req, res, next) => {
  const { username: email, password } = req.body;

  try {
    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    const isValidUser = bcrypt.compareSync(password, user.password);
    if (isValidUser) {
      console.log("valido");
      next();
    } else {
      res.status(401).json("user o password is not valid");
    }
  } catch (error) {
    res.status(500).json({ error: true });
  }
};

//middleware verify token
export const verifyToken = (req, res, next) => {
  const token = req.header("Authorization").split(" ")[1];

  console.log(token);
  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    console.log(decoded);
    const { exp: expDate } = decoded;
    //expired?
    if (Date.now() / 1000 > expDate) {
      console.log("expired");
      res.status(401).send();
    } else {
      next();
    }
  } catch (error) {
    res.status(401).send();
  }
};
