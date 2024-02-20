import { Request, Response } from 'express';
import db from '../models';

const getAllCategories = async (req: Request, res: Response) => {
  try {
    const categories = await db.Category.findAll();
    res.json(categories);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error fetching categories' });
  }
};

export {
    getAllCategories
};

