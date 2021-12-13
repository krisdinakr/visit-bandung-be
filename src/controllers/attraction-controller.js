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
}

export default AttractionController;
