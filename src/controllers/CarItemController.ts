import { Request, Response } from 'express';
import db from '../models';

const getCarItems = async (req: Request, res: Response) => {
  try {
    const items = await db.CarItem.findAll({
      include: {
        model: db.Product,
        as: 'product',
        attributes: ['name', 'description', 'imageUrl', 'availableStock', 'price']
      }
  });
    res.json(items);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error fetching car items' });
  }
};

const getCarItemsLenght = async (req: Request, res: Response) => {
  try {
    const items = await db.CarItem.findAll();
    res.json({ length: items.length });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error fetching car items' });
  }
};


const addToCar = async (req: Request, res: Response) => {
    const { productId, quantity } = req.body;
    try {
      const product = await db.Product.findByPk(productId);
      if (product) {
        const finalStock = product.availableStock - quantity;
        if (finalStock >= 0) {
          await product.update({ availableStock: finalStock });
          const cartItem = db.CarItem.create({ productId, quantity });
          res.json(cartItem);
        } else {
            res.status(404).json({ error: 'Stock empty' });
        }
      } else {
        res.status(404).json({ error: 'Product not found' });
      }
    } catch (error) {
       res.status(500).json({ error: "Error item didn't saved" });
    }
};


const removeCarItem = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const cartItem = await db.CarItem.findByPk(id);
      const product = await db.Product.findByPk(cartItem.productId);
      
      if (cartItem && product) {
        const finalStock = product.availableStock + cartItem.quantity;
        await product.update({ availableStock: finalStock });
        await cartItem?.destroy();
        res.json({ message: 'Car item deleted successfully' });
      } else {
        res.status(404).json({ error: 'Product not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error deleting product' });
    }
};


export {
    getCarItems,
    addToCar,
    removeCarItem,
    getCarItemsLenght
};

