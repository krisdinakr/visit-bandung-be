import AttractionService from '../services/attraction-service';
import Response from '../utils/response';

class AttractionController {
  static getAll = async (req, res) => {
    try {
      const result = await AttractionService.getAll();
      return res.status(200).json(Response.success(result));
    } catch (err) {
      const getError = Response.errors(err);
      return res.status(getError.code).json(getError);
    }
  };

  static getBySlug = async (req, res) => {
    try {
      const { slug } = req.params;
      const result = await AttractionService.getBySlug(slug);
      return res.status(200).json(Response.success(result));
    } catch (err) {
      console.log('err', err);
      const getError = Response.errors(err);
      return res.status(getError.code).json(getError);
    }
  };
}

export default AttractionController;
