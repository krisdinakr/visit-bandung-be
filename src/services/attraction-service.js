import { Attraction } from '../models';
import { BadRequest } from '../utils/errors';

class AttractionService {
  static getAll = () => Attraction.findAll();

  static getBySlug = async (slug) => {
    const result = await Attraction.findOne({
      where: { slug },
    });

    if (result === null) throw new BadRequest('Attraction Not Found');

    return result;
  };
}

export default AttractionService;
