import { Request, Response } from 'express';
import { Op } from 'sequelize';
import db from '../models';

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products =await db.Product.findAll({
      include: {
        model: db.Category,
        as: 'category',
        attributes: ['name']
      }
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching products' });
  }
};

const getProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const product =await db.Product.findOne({
      where: {
        id
      },
      include: {
        model: db.Category,
        as: 'category',
        attributes: ['name']
      }
    });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching products' });
  }
};

const getProductsByCategory = async (req: Request, res: Response) => {
    try {
      const categoryId = req.params.categoryId;
      
      const category = await db.Category.findByPk(categoryId, {
          include: [{ model: db.Product, as: 'products', include: {
            model: db.Category,
            as: 'category',
            attributes: ['name']
          }
        }],
      });
  
      if (!category) {
        return res.status(404).json({ error: "This category hasn't products." });
      }
  
      res.json(category.products);
    } catch (error) {
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  }

const getProductByName = async (req: Request, res: Response) => {
    const { name } = req.params;
    try {
      const products = await db.Product.findAll({
        where: {
          name: {
            [Op.like]: `%${name}%`,
          },
        },
        include: {
          model: db.Category,
          as: 'category',
          attributes: ['name']
        }
      });
    
      if (products) {
        res.json(products);
      } else {
        res.status(404).json({ error: 'Product not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error fetching product by ID' });
    }
};

export {
  getProduct,
  getAllProducts,
  getProductByName,
  getProductsByCategory
};

