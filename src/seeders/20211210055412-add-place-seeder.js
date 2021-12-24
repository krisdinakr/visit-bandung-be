module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Place', [
      {
        id: '29af5789-cbe7-4408-b8f6-e5919545d197',
        name: 'NuArt Sculpture Park',
        category: 'CULTURE & ART',
        subCategory: 'Galleries',
        slug: 'nuart-sculpture-park',
        images: ['https://media-cdn.tripadvisor.com/media/photo-s/0d/52/25/cb/nuart-sculpture-park.jpg'],
        description: 'NuArt Sculpture Park primarily exhibits the works of the sculptor Nyoman Nuarta that spans from the beginning of his career to the latest masterpieces. The 3 hectares park was specifically designed to nurture the development of Indonesian art, design and culture.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'c63e8b16-f2b5-4631-aa95-0fc75f6be59d',
        name: 'Museum of The Asian-African Conference',
        category: 'HISTORY & HERITAGE',
        subCategory: 'Museums',
        slug: 'museum-of-the-asian-african-conference',
        images: [
          'https://cdn1.katadata.co.id/media/images/thumb/2020/04/03/2020_04_03-14_03_08_912bf38709d1751bfe7c23ba5c14cc40_620x413_thumb.jpg',
        ],
        description: 'Museum KAA, a place where the history of the Asian-African was raised, and the Asian-African Partnership was enforced for the sake of a better future. Based in Bandung, it has the historical values of the Asian-African Conference in 1955. It was inaugurated by President of the Republic of Indonesia, Soeharto, on 24 April 1980 in the 25th Anniversary of the Asian-African Conference.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '7ab3e2ba-4b7c-4345-95ba-cd06a5061497',
        name: 'Hasan Batik Bandung',
        category: 'SHOPPING',
        subCategory: 'Local Product',
        slug: 'hasan-batik-bandung',
        images: ['https://journalistarter.files.wordpress.com/2015/02/batik-1.jpg?w=1200', 'https://journalistarter.files.wordpress.com/2015/02/credit-by-herman-jusuf-foto-pemenang-desain-batik-bandung.jpg'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla augue tellus, blandit eget imperdiet et, consectetur ut arcu. Suspendisse orci turpis, lobortis a sagittis ut, efficitur ultricies quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent dapibus nunc turpis, sed molestie quam luctus vel. Praesent justo mi, ullamcorper sed vehicula vitae, tempus rhoncus est. Ut eget sapien dolor. Donec elit ex, mollis ac ex non, bibendum elementum nisl. Quisque ultrices, turpis nec interdum placerat, urna quam pharetra leo, lacinia luctus est nibh elementum massa. Donec non elit augue. Nulla blandit scelerisque tellus, eu ultrices dui interdum ut. Vivamus sit amet mi mattis, convallis elit id, blandit quam. In sapien ante, sagittis vitae libero vitae, sodales scelerisque nulla.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Place', null, {});
  },
};
