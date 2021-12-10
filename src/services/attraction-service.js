import { Attraction } from '../models';
import ERRORS from '../configs/errors';

class AttractionService {
  static getAll = () => Attraction.findAll();

  static getBySlug = async (slug) => {
    const result = await Attraction.findOne({
      where: { slug },
    });

    if (result === null) throw new Error(ERRORS.ATTRACTION_NOT_FOUND);

    return result;
  };
}

export default AttractionService;
