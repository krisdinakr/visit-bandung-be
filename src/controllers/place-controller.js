import PlaceService from '../services/place-service';
import Response from '../utils/response';

class PlaceController {
  static getAll = async (req, res, next) => {
    try {
      const result = await PlaceService.getAll();
      return res.status(200).json(Response.success(result));
    } catch (err) {
      console.log('err', err);
      return next(err);
    }
  };

  static getById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await PlaceService.getById(id);
      return res.status(200).json(Response.success(result));
    } catch (err) {
      console.log('err', err);
      return next(err);
    }
  };

  static getBySlug = async (req, res, next) => {
    try {
      const { slug } = req.params;
      const result = await PlaceService.getBySlug(slug);
      return res.status(200).json(Response.success(result));
    } catch (err) {
      console.log('err', err);
      return next(err);
    }
  };

  static create = async (req, res, next) => {
    try {
      const {
        name, category, subCategory, description,
      } = req.body;
      const { files } = req;
      const result = await PlaceService.create({
        name, category, subCategory, files, description,
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
      const result = await PlaceService.delete(id);
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
      const result = await PlaceService.update({
        id, name, category, subCategory, images, description,
      });
      return res.status(200).json(Response.success(result, null, 'updated'));
    } catch (err) {
      console.log('err', err);
      return next(err);
    }
  };

  static getAttractionByCategory = async (req, res, next) => {
    try {
      const { category } = req.params;
      const result = await PlaceService.getByCategory(category);
      return res.status(200).json(Response.success(result));
    } catch (err) {
      console.log('err', err);
      return next(err);
    }
  };
}

export default PlaceController;
