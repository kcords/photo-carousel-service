// Property ID Range: 30506101-30506200
const faker = require('faker');
const { db, PhotoCollection } = require('./index.js');

const roomTypes = ['Living area', 'Full kitchen', 'Dining room', 'Full bathroom', 'Bedroom Area', 'Entry', 'Exterior', 'Patio'];

const propertyListingGenerator = () => {
  const listings = [];

  for (let id = 30506101; id <= 30506200; id += 1) {
    const photos = photoListGenerator();
    const propertyListing = {
      listingId: id,
      photos,
    };
    listings.push(propertyListing);
  }

  return listings;
};

const photoListGenerator = () => {
  const totalPhotos = Math.floor(Math.random() * 10 + 5);
  const photos = [];
  for (let photoId = 1; photoId < totalPhotos; photoId += 1) {
    photos.push(photoGenerator(photoId));
  }

  return photos;
};

const photoGenerator = (photoId) => ({
  id: photoId,
  imageUrl: `https://loremflickr.com/1200/880/house/all?lock=${photoId}`,
  thumbnailUrl: `https://loremflickr.com/600/450/house/all?lock=${photoId}`,
  description: faker.lorem.sentence(),
  room: roomTypes[Math.floor(Math.random() * (roomTypes.length - 1))],
});

const sampleListings = propertyListingGenerator();
// console.log(sampleListings);
const insertSampleListings = () => {
  // PhotoCollection.create(sampleListings)
  PhotoCollection.deleteMany()
    .then(() => PhotoCollection.create(sampleListings))
    .then((result) => console.log('Database seed successful!', result))
    .catch((error) => console.log('Database seed unsuccessful!', error))
    .then(() => process.exit());
};

insertSampleListings();

// console.table(sampleListings[0].photos)