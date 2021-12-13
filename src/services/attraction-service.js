import { Attraction } from '../models';
import { BadRequest } from '../utils/errors';
import createSlug from '../utils/create-slug';

class AttractionService {
  static getAll = () => Attraction.findAll();

  static getBySlug = async (slug) => {
    const result = await Attraction.findOne({
      where: { slug },
    });

    if (result === null) throw new BadRequest('Attraction Not Found');

    return result;
  };

  static create = async ({
    name, category, subCategory, images, description,
  }) => {
    const result = await Attraction.create({
      name,
      category,
      subCategory,
      images,
      slug: createSlug(name),
      description,
    });

    return result;
  };
}

export default AttractionService;
