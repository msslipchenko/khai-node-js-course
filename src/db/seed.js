const db = require('./index');
const { products } = require('./schema');

const productsSeed = [
  {
    name: 'Pixel 4',
    brand: 'Google',
    userId: 1,
  },
  {
    name: 'Pixel 4a',
    brand: 'Google',
    userId: 1,
  },
];

async function seed() {
  try {
    await db.insert(products).values(productsSeed);
    console.log('Seed completed successfully');
    process.exit(0);
  } catch (error) {
    console.error('Seed failed:', error);
    process.exit(1);
  }
}

seed();
