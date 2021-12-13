import { Attraction } from '../models';
import { NotFound } from '../utils/errors';
import createSlug from '../utils/create-slug';

class AttractionService {
  static getAll = () => Attraction.findAll();

  static getBySlug = async (slug) => {
    const result = await Attraction.findOne({
      where: { slug },
    });

    if (result === null) throw new NotFound('Attraction Not Found');

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

  static delete = async (id) => {
    const targetedAttraction = await Attraction.findOne({
      where: { id },
    });

    if (targetedAttraction === null) throw new NotFound('Attraction Not Found');

    await Attraction.destroy({
      where: { id },
    });

    return 'deleted';
  };
}

export default AttractionService;
