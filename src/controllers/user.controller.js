import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createUser = async (req, res) => {
  try {
    const newUser = await prisma.user.create({ data: req.body });
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
