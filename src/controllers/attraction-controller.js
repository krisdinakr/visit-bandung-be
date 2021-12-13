import AttractionService from '../services/attraction-service';
import Response from '../utils/response';

class AttractionController {
  static getAll = async (req, res, next) => {
    try {
      const result = await AttractionService.getAll();
      return res.status(200).json(Response.success(result));
    } catch (err) {
      console.log('err', err);
      return next(err);
    }
  };

  static getBySlug = async (req, res, next) => {
    try {
      const { slug } = req.params;
      const result = await AttractionService.getBySlug(slug);
      return res.status(200).json(Response.success(result));
    } catch (err) {
      console.log('err', err);
      return next(err);
    }
  };

  static create = async (req, res, next) => {
    try {
      const {
        name, category, subCategory, images, description,
      } = req.body;
      const result = await AttractionService.create({
        name, category, subCategory, images, description,
      });
      return res.status(201).json(Response.success(result));
    } catch (err) {
      console.log('err', err);
      return next(err);
    }
  };

  static deleteAttraction = async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await AttractionService.delete(id);
      return res.status(200).json(Response.success(null, null, result));
    } catch (err) {
      console.log('err', err);
      return next(err);
    }
  };

  static updateAttraction = async (req, res, next) => {
    try {
      const { id } = req.params;
      const {
        name, category, subCategory, images, description,
      } = req.body;
      const result = await AttractionService.update({
        id, name, category, subCategory, images, description,
      });
      return res.status(200).json(Response.success(result, null, 'updated'));
    } catch (err) {
      console.log('err', err);
      return next(err);
    }
  };
}

export default AttractionController;
