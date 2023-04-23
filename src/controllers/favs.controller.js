import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createFavs = async (req, res) => {
  try {
    const newFavs = await prisma.favs.create({
      data: req.body,
    });
    res.status(201).json(newFavs);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true });
  }
};

//delete a favorite
export const favsDelete = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const deleted = await prisma.favs.delete({
      where: {
        idfavs: +id,
      },
    });
    res.json(deleted);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true });
  }
};
