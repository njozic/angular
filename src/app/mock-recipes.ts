import { RecipeModel } from './models';

export const MOCK_RECIPES: RecipeModel[] = [
  {
    id: 1,
    name: 'Spaghetti Carbonara',
    description: 'A classic Italian pasta dish.',
    imageUrl: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
    ingredients: [
        { name: 'Spaghetti', quantity: 200, unit: 'g' },
        { name: 'Guanciale', quantity: 100, unit: 'g' },
        { name: 'Egg Yolks', quantity: 4, unit: 'each' },
        { name: 'Pecorino Romano Cheese', quantity: 50, unit: 'g' },
        { name: 'Black Pepper', quantity: 1, unit: 'tsp' },
    ],
  },
  {
    id: 2,
    name: 'Caprese Salad',
    description: 'A simple and refreshing Italian salad.',
    imageUrl: 'https://images.pexels.com/photos/4768996/pexels-photo-4768996.jpeg',
    ingredients: [
        { name: 'Tomatoes', quantity: 4, unit: 'each' },
        { name: 'Fresh Mozzarella', quantity: 200, unit: 'g' },
        { name: 'Fresh Basil', quantity: 1, unit: 'bunch' },
        { name: 'Extra Virgin Olive Oil', quantity: 2, unit: 'tbsp' },
    ],
  },
];