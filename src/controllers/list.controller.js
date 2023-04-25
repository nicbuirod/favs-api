import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//create a list
export const createList = async (req, res) => {
  try {
    const newList = await prisma.list.create({
      data: req.body,
    });
    res.status(201).json(newList);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true });
  }
};

//get all list
export const getAllList = async (req, res) => {
  try {
    const allList = await prisma.list.findMany();
    res.status(200).json(allList);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true });
  }
};

//delete a list
export const listDelete = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const deleted = await prisma.list.delete({
      where: {
        idlist: +id,
      },
    });
    res.json(deleted);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true });
  }
};
