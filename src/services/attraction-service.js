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
    const targetedAttraction = await this.getById(id);

    if (targetedAttraction === null) throw new NotFound('Attraction Not Found');

    await Attraction.destroy({
      where: { id },
    });

    return 'deleted';
  };

  static update = async ({
    id, name, category, subCategory, images, description,
  }) => {
    const targetedAttraction = await this.getById(id);

    if (targetedAttraction === null) throw new NotFound('Attraction Not Found');

    const updatedAttraction = await Attraction.update({
      name,
      category,
      subCategory,
      images,
      slug: name && createSlug(name),
      description,
    }, {
      where: { id },
      returning: true,
    });

    return updatedAttraction[1];
  };

  static getById = (id) => Attraction.findOne({
    where: { id },
  });

  static getByCategory = async (category) => {
    const formattedCategory = category.toUpperCase().replace(/-/gm, ' & ');
    const result = await Attraction.findAll({
      where: { category: formattedCategory },
    });

    return result;
  };
}

export default AttractionService;
