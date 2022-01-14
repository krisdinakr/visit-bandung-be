import { Place } from '../models';
import { NotFound } from '../utils/errors';
import createSlug from '../utils/create-slug';
import firebase from '../utils/firebase';

class PlaceService {
  static getAll = () => Place.findAll();

  static getBySlug = async (slug) => {
    const result = await Place.findOne({
      where: { slug },
    });

    if (result === null) throw new NotFound('Not Found');

    return result;
  };

  static create = async ({
    name, category, subCategory, files, description,
  }) => {
    const imagesPromises = files.map((file) => firebase({
      filename: file.originalname,
      path: file.path,
      mimetype: file.mimetype,
    }));

    const images = await Promise.all(imagesPromises);

    const result = await Place.create({
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
    const targetedPlace = await this.getById(id);

    if (targetedPlace === null) throw new NotFound('Not Found');

    await Place.destroy({
      where: { id },
    });

    return 'deleted';
  };

  static update = async ({
    id, name, category, subCategory, images, description,
  }) => {
    const targetedPlace = await this.getById(id);

    if (targetedPlace === null) throw new NotFound('Not Found');

    const updatedPlace = await Place.update({
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

    return updatedPlace[1];
  };

  static getById = (id) => Place.findOne({
    where: { id },
  });

  static getByCategory = async (category) => {
    const formattedCategory = category.toUpperCase().replace(/-/gm, ' & ');
    const result = await Place.findAll({
      where: { category: formattedCategory },
    });

    return result;
  };
}

export default PlaceService;
