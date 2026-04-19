import ourStoryIcon from '../../assets/Our Story.png';
import ourAmazingFriendsIcon from '../../assets/Our Amazing friends.png';
import howScrumptiousIcon from '../../assets/How Scrumptious.png';
import theBigDifferenceIcon from '../../assets/The Big Difference.png';
import notSoSweetIcon from '../../assets/Not So Sweet.png';
import organicKidsTvIcon from '../../assets/Organic Kids TV.png';

export const mainMenuItems = [
  { label: 'Our Story', icon: ourStoryIcon },
  { label: 'Our Amazing Friends', icon: ourAmazingFriendsIcon },
  { label: 'How Scrumptious', icon: howScrumptiousIcon },
  { label: 'The Big Difference', icon: theBigDifferenceIcon },
  { label: 'Not So Sweet', icon: notSoSweetIcon },
  { label: 'Organic Kids TV', icon: organicKidsTvIcon },
];

export const weeklyMenu = [
  {
    day: 'Monday',
    accent: '#5f7f3d',
    stripe: '#d8ddcf',
    items: [
      {
        name: 'Organic Whole Grain Spaghetti',
        note: 'in a tomato basil sauce with hand-made 100% beef meatballs',
        organic: true,
      },
      {
        name: 'Organic Italian Salad',
        note: 'with balsamic dressing',
        organic: true,
      },
      { name: 'Fruit of the Day: Organic Pears', organic: true },
      { name: 'Organic Milk', organic: true },
      {
        name: 'Vegetarian: Meatless Tofu in Fresh Basil Sauce',
        vegetarian: true,
      },
    ],
    markers: ['organic', 'green'],
  },
  {
    day: 'Tuesday',
    accent: '#f06e24',
    stripe: '#f7ddd2',
    items: [
      { name: 'Herb-Roasted Chicken' },
      {
        name: 'Organic Rice Pilaf',
        note: 'with peas',
        organic: true,
        green: true,
      },
      { name: 'Steamed Baby Carrots', orange: true },
      { name: 'Fruit of the Day: Pineapple' },
      { name: 'Organic Milk', organic: true },
      { name: 'Vegetarian: Grilled Tofu', vegetarian: true },
    ],
    markers: ['organic', 'green', 'orange'],
  },
  {
    day: 'Wednesday',
    accent: '#c51c54',
    stripe: '#f3d8df',
    items: [
      { name: 'Breaded Fillet of Sole' },
      { name: 'Organic Spring Vegetable Couscous', organic: true, green: true },
      { name: 'Polenta Square' },
      { name: 'Fruit of the Day: Organic Apples', organic: true },
      { name: 'Organic Milk', organic: true },
    ],
    callout: 'Vegetarian Day',
    calloutAccent: '#8ab64f',
    markers: ['organic', 'green', 'orange'],
  },
  {
    day: 'Thursday',
    accent: '#f2ad2a',
    stripe: '#f7ead1',
    items: [
      { name: 'Free Range, Pasture-Raised Slow Cooked Roast Beef' },
      { name: 'Herb-Roasted Potatoes' },
      {
        name: 'Verdurian-Style Vegetables & Organic Beans',
        organic: true,
        green: true,
      },
      { name: 'Fruit of the Day: Organic Bananas', organic: true },
      { name: 'Organic Milk', organic: true },
      { name: 'Vegetarian: Baked Bean Casserole', vegetarian: true },
    ],
    markers: ['organic', 'green', 'orange'],
  },
  {
    day: 'Friday',
    accent: '#2a9ed8',
    stripe: '#dbe7dd',
    items: [
      { name: 'Vietnamese Vegetable Rice Noodle Soup', green: true },
      { name: 'Chicken Breast Sandwiches on Rice Bread' },
      { name: 'Organic Tomato Wedges', organic: true, orange: true },
      {
        name: 'Fruit of the Day: Organic Oranges',
        organic: true,
        orange: true,
      },
      { name: 'Organic Milk', organic: true },
      {
        name: 'Vegetarian: 100% Cheddar Cheese Sandwich on Rice Bread',
        vegetarian: true,
      },
    ],
    callout: 'Gluten Free Day',
    calloutAccent: '#8ab64f',
    markers: ['organic', 'green', 'orange'],
  },
];

export const preferenceGroups = [
  {
    title: 'Allergy-safe tags',
    options: [
      'Nut-free',
      'Peanut-free',
      'Dairy-free',
      'Egg-free',
      'Soy-free',
      'Gluten-free',
      'Sesame-free',
      'Shellfish-free',
    ],
  },
  {
    title: 'Dietary type',
    options: ['Vegetarian', 'Vegan', 'Halal', 'Kosher', 'Pescatarian'],
  },
  {
    title: 'Nutrition limitation',
    options: [
      'Low sugar',
      'Low sodium',
      'High protein',
      'Whole grain',
      'No added sugar',
      'Organic',
    ],
  },
];

export const createKidPreferences = () =>
  preferenceGroups.reduce((groups, group) => {
    groups[group.title] = group.options.reduce((options, option) => {
      options[option] = false;
      return options;
    }, {});

    return groups;
  }, {});

export const createKid = (id) => ({
  id,
  name: '',
  isCollapsed: false,
  showNameInput: true,
  preferences: createKidPreferences(),
});
