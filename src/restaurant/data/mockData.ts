import type {
  CateringPackage,
  Dish,
  EventItem,
  FaqItem,
  GalleryImage,
  HoursEntry,
  MenuCategory,
  NavItem,
  PressItem,
  ReservationSlot,
  RestaurantInfo,
  Review
} from "../types/models";

export const navItems: NavItem[] = [
  { id: "home", label: "Home", href: "/" },
  { id: "menu", label: "Menu", href: "/menu" },
  { id: "reservations", label: "Reservations", href: "/reservations" },
  { id: "order", label: "Order", href: "/order" },
  { id: "events", label: "Events", href: "/events" },
  { id: "about", label: "About", href: "/about" },
  { id: "gallery", label: "Gallery", href: "/about" },
  { id: "visit", label: "Visit", href: "/visit" }
];

export const restaurant: RestaurantInfo = {
  name: "Ember & Ash",
  tagline: "Where Fire Meets Flavor",
  description:
    "Template demo data: a wood-fired American dining room with seasonal plates, atmospheric interiors, and polished hospitality.",
  phone: "+1 (503) 555-0162",
  email: "reservations@emberandash.demo",
  address: "1246 Alder Street",
  cityState: "Portland, OR 97205",
  cuisine: "Wood-Fired American",
  priceRange: "$$$",
  socials: [
    { label: "Instagram", href: "#" },
    { label: "TikTok", href: "#" },
    { label: "YouTube", href: "#" }
  ]
};

export const hours: HoursEntry[] = [
  { day: "Monday", open: "", close: "", closed: true },
  { day: "Tuesday", open: "11:30 AM", close: "10:00 PM" },
  { day: "Wednesday", open: "11:30 AM", close: "10:00 PM" },
  { day: "Thursday", open: "11:30 AM", close: "10:00 PM" },
  { day: "Friday", open: "11:30 AM", close: "11:00 PM" },
  { day: "Saturday", open: "11:30 AM", close: "11:00 PM" },
  { day: "Sunday", open: "11:30 AM", close: "10:00 PM" }
];

export const menuCategories: MenuCategory[] = [
  { id: "starters", label: "Starters" },
  { id: "salads", label: "Salads" },
  { id: "mains", label: "Mains" },
  { id: "sides", label: "Sides" },
  { id: "desserts", label: "Desserts" },
  { id: "drinks", label: "Drinks" }
];

const c = (label: string, options: string[], required = false) => ({
  id: label.toLowerCase().replace(/\s+/g, "-"),
  label,
  required,
  options
});

export const dishes: Dish[] = [
  {
    id: "dish-01",
    categoryId: "starters",
    name: "Charred Carrot Hummus",
    description: "Smoked carrot puree, chili oil, seeded lavash.",
    price: 14,
    tags: ["new"],
    dietary: ["vegan"],
    allergens: ["sesame"],
    image: "https://images.unsplash.com/photo-1543332164-6e82f355bad5?w=700&q=80",
    customizations: [c("Extra Chili Oil", ["Yes", "No"], false)]
  },
  {
    id: "dish-02",
    categoryId: "starters",
    name: "Coal-Roasted Oysters",
    description: "Garlic brown butter, lemon crumb, parsley.",
    price: 19,
    tags: ["popular"],
    dietary: [],
    allergens: ["shellfish", "dairy"],
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=700&q=80",
    popular: true,
    featured: true,
    customizations: [c("Half or Full", ["Half Dozen", "Full Dozen"], true)]
  },
  {
    id: "dish-03",
    categoryId: "starters",
    name: "Ember Wings",
    description: "Smoked chili glaze, pickled celery, charred lime.",
    price: 16,
    tags: [],
    dietary: [],
    allergens: [],
    image: "https://images.unsplash.com/photo-1562967914-01efa7b5b1fa?w=700&q=80",
    customizations: [c("Heat Level", ["Mild", "Medium", "Hot"], true)]
  },
  {
    id: "dish-04",
    categoryId: "starters",
    name: "Burnt Onion Dip",
    description: "Caramelized allium dip, potato crisps, herbs.",
    price: 13,
    tags: [],
    dietary: ["vegetarian", "gluten-free"],
    allergens: ["dairy"],
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=700&q=80",
    customizations: []
  },
  {
    id: "dish-05",
    categoryId: "salads",
    name: "Market Greens",
    description: "Little gems, citrus, toasted seeds, herb vinaigrette.",
    price: 15,
    tags: [],
    dietary: ["vegan", "gluten-free"],
    allergens: ["nuts"],
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=700&q=80",
    customizations: [c("Add Protein", ["None", "Chicken", "Salmon", "Tofu"], false)]
  },
  {
    id: "dish-06",
    categoryId: "salads",
    name: "Fire Caesar",
    description: "Baby kale, parmesan ash crumb, brioche crouton.",
    price: 16,
    tags: ["popular"],
    dietary: ["vegetarian"],
    allergens: ["dairy", "gluten"],
    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=700&q=80",
    popular: true,
    customizations: []
  },
  {
    id: "dish-07",
    categoryId: "salads",
    name: "Stone Fruit Burrata",
    description: "Seasonal fruit, burrata, basil, aged balsamic.",
    price: 18,
    tags: [],
    dietary: ["vegetarian", "gluten-free"],
    allergens: ["dairy"],
    image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=700&q=80",
    customizations: []
  },
  {
    id: "dish-08",
    categoryId: "salads",
    name: "Warm Lentil Bowl",
    description: "Beluga lentils, roasted squash, tahini herbs.",
    price: 17,
    tags: ["new"],
    dietary: ["vegan", "gluten-free"],
    allergens: ["sesame"],
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=700&q=80",
    customizations: []
  },
  {
    id: "dish-09",
    categoryId: "mains",
    name: "48-Hour Short Rib",
    description: "Coal braise, smoked potato pave, shallot jus.",
    price: 38,
    tags: ["popular"],
    dietary: ["gluten-free"],
    allergens: [],
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=700&q=80",
    featured: true,
    popular: true,
    customizations: [c("Doneness", ["Medium", "Medium-Well"], true)]
  },
  {
    id: "dish-10",
    categoryId: "mains",
    name: "Cedar Salmon",
    description: "Open-fire salmon, lemon barley, charred broccolini.",
    price: 34,
    tags: [],
    dietary: [],
    allergens: ["fish", "gluten"],
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=700&q=80",
    featured: true,
    customizations: []
  },
  {
    id: "dish-11",
    categoryId: "mains",
    name: "Mushroom Hearth Pie",
    description: "Mixed mushrooms, truffle cream, blistered crust.",
    price: 27,
    tags: [],
    dietary: ["vegetarian"],
    allergens: ["gluten", "dairy"],
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=700&q=80",
    customizations: [c("Add Egg", ["Yes", "No"], false)]
  },
  {
    id: "dish-12",
    categoryId: "mains",
    name: "Oak-Grilled Chicken",
    description: "Sunchoke puree, pan jus, charred scallion.",
    price: 31,
    tags: [],
    dietary: ["gluten-free"],
    allergens: [],
    image: "https://images.unsplash.com/photo-1518492104633-130d0cc84637?w=700&q=80",
    customizations: []
  },
  {
    id: "dish-13",
    categoryId: "sides",
    name: "Smoked Potatoes",
    description: "Crisp Yukon potatoes, rosemary ash salt.",
    price: 10,
    tags: [],
    dietary: ["vegan", "gluten-free"],
    allergens: [],
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=700&q=80",
    customizations: []
  },
  {
    id: "dish-14",
    categoryId: "sides",
    name: "Wood-Fired Brussels",
    description: "Maple miso glaze, toasted sesame.",
    price: 11,
    tags: [],
    dietary: ["vegan"],
    allergens: ["sesame"],
    image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=700&q=80",
    customizations: []
  },
  {
    id: "dish-15",
    categoryId: "sides",
    name: "Butter Cornbread",
    description: "Skillet baked with whipped honey butter.",
    price: 9,
    tags: [],
    dietary: ["vegetarian"],
    allergens: ["dairy", "gluten"],
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=700&q=80",
    soldOut: true,
    customizations: []
  },
  {
    id: "dish-16",
    categoryId: "sides",
    name: "Charred Broccolini",
    description: "Garlic confit, chili crunch, lemon zest.",
    price: 10,
    tags: [],
    dietary: ["vegan", "gluten-free"],
    allergens: [],
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=700&q=80",
    customizations: []
  },
  {
    id: "dish-17",
    categoryId: "desserts",
    name: "Burnt Honey Cheesecake",
    description: "Caramelized top, sour cherry compote.",
    price: 13,
    tags: ["popular"],
    dietary: ["vegetarian"],
    allergens: ["dairy", "gluten"],
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=700&q=80",
    featured: true,
    popular: true,
    customizations: []
  },
  {
    id: "dish-18",
    categoryId: "desserts",
    name: "Smoked Chocolate Torte",
    description: "Dark chocolate ganache, hazelnut praline.",
    price: 14,
    tags: [],
    dietary: ["gluten-free"],
    allergens: ["nuts", "dairy"],
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=700&q=80",
    customizations: []
  },
  {
    id: "dish-19",
    categoryId: "desserts",
    name: "Stone Fruit Crisp",
    description: "Warm seasonal fruit, oat crumble, vanilla cream.",
    price: 12,
    tags: ["new"],
    dietary: ["vegetarian"],
    allergens: ["gluten", "dairy"],
    image: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=700&q=80",
    customizations: []
  },
  {
    id: "dish-20",
    categoryId: "desserts",
    name: "Affogato Ember",
    description: "Espresso pour-over, vanilla gelato, cocoa nib.",
    price: 11,
    tags: [],
    dietary: ["vegetarian", "gluten-free"],
    allergens: ["dairy"],
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1f25d?w=700&q=80",
    customizations: []
  },
  {
    id: "dish-21",
    categoryId: "drinks",
    name: "Citrus Ember Spritz",
    description: "Bitter orange, sparkling wine, herbs.",
    price: 14,
    tags: [],
    dietary: ["vegan", "gluten-free"],
    allergens: [],
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=700&q=80",
    customizations: [c("Spirit", ["Aperitif", "Non-Alcoholic"], true)]
  },
  {
    id: "dish-22",
    categoryId: "drinks",
    name: "Smoked Old Fashioned",
    description: "Bourbon, demerara, bitters, citrus smoke.",
    price: 16,
    tags: ["popular"],
    dietary: ["vegan", "gluten-free"],
    allergens: [],
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=700&q=80",
    popular: true,
    customizations: []
  },
  {
    id: "dish-23",
    categoryId: "drinks",
    name: "House Ginger Tonic",
    description: "Fresh ginger cordial, tonic, lime.",
    price: 9,
    tags: [],
    dietary: ["vegan", "gluten-free"],
    allergens: [],
    image: "https://images.unsplash.com/photo-1481671703460-040cb8a2d909?w=700&q=80",
    customizations: []
  },
  {
    id: "dish-24",
    categoryId: "drinks",
    name: "Cold Brew Float",
    description: "Slow cold brew, vanilla cream, orange peel.",
    price: 10,
    tags: [],
    dietary: ["vegetarian", "gluten-free"],
    allergens: ["dairy"],
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=700&q=80",
    customizations: []
  }
];

export const reviews: Review[] = [
  {
    id: "r1",
    author: "Nora H.",
    rating: 5,
    text: "Every plate arrived with intention. Fire-kissed flavors and perfect pacing.",
    source: "Google"
  },
  {
    id: "r2",
    author: "Elias W.",
    rating: 5,
    text: "The short rib and smoked old fashioned are worth planning a weekend around.",
    source: "Yelp"
  },
  {
    id: "r3",
    author: "Priya M.",
    rating: 4,
    text: "Warm hospitality and excellent vegetarian options that still feel indulgent.",
    source: "TripAdvisor"
  },
  {
    id: "r4",
    author: "Marcus L.",
    rating: 5,
    text: "Private event service was seamless from inquiry to final toast.",
    source: "Google"
  }
];

export const press: PressItem[] = [
  {
    id: "p1",
    outlet: "Portland Monthly",
    quote: "A glowing dining room where smoke becomes a seasoning."
  },
  {
    id: "p2",
    outlet: "Eater PDX",
    quote: "A benchmark for modern wood-fired hospitality in the Pearl."
  },
  {
    id: "p3",
    outlet: "Oregon Live",
    quote: "Layered flavors, local sourcing, and a compelling room."
  }
];

export const events: EventItem[] = [
  {
    id: "e1",
    title: "Wine & Fire Dinner",
    date: "May 08",
    time: "7:00 PM",
    price: "$145",
    seats: "12 seats left",
    description: "Five courses paired with Oregon producers and ember-focused plating."
  },
  {
    id: "e2",
    title: "Chef's Table Experience",
    date: "May 18",
    time: "8:30 PM",
    price: "$180",
    seats: "6 seats left",
    description: "Front-row tasting journey with chef narration and ingredient stories."
  },
  {
    id: "e3",
    title: "Harvest Tasting Night",
    date: "Jun 05",
    time: "6:30 PM",
    price: "$120",
    seats: "18 seats left",
    description: "Season-first menu built around farm delivery from the Willamette valley."
  },
  {
    id: "e4",
    title: "Sunday Jazz Brunch",
    date: "Jun 16",
    time: "11:00 AM",
    price: "$68",
    seats: "Open",
    description: "Live trio and plated brunch with optional sparkling pairing."
  }
];

export const packages: CateringPackage[] = [
  {
    id: "cp1",
    title: "Intimate Gathering",
    guestRange: "10-30 guests",
    price: "$85 / person",
    included: ["Three-course menu", "Shared starters", "Dedicated captain"]
  },
  {
    id: "cp2",
    title: "Private Dining",
    guestRange: "30-80 guests",
    price: "$95 / person",
    included: ["Four-course menu", "Wine pairing option", "Room styling"],
    featured: true
  },
  {
    id: "cp3",
    title: "Full Buyout",
    guestRange: "Up to 150 guests",
    price: "Custom",
    included: ["Custom menu engineering", "A/V support", "Event manager"]
  }
];

export const gallery: GalleryImage[] = [
  { id: "g1", category: "food", title: "Chef pass plating", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80" },
  { id: "g2", category: "interior", title: "Main dining room", image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=900&q=80" },
  { id: "g3", category: "events", title: "Private candlelit table", image: "https://images.unsplash.com/photo-1519167758481-83f29c9251f0?w=900&q=80" },
  { id: "g4", category: "food", title: "Flame-finished plate", image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=900&q=80" },
  { id: "g5", category: "interior", title: "Bar and lounge", image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=900&q=80" },
  { id: "g6", category: "events", title: "Chef table gathering", image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=900&q=80" },
  { id: "g7", category: "food", title: "Dessert detail", image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=900&q=80" },
  { id: "g8", category: "interior", title: "Open fire kitchen", image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=900&q=80" },
  { id: "g9", category: "events", title: "Toast moment", image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=900&q=80" },
  { id: "g10", category: "food", title: "Seasonal greens", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=900&q=80" },
  { id: "g11", category: "interior", title: "Window seating", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&q=80" },
  { id: "g12", category: "events", title: "Celebration service", image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=900&q=80" }
];

export const faqItems: FaqItem[] = [
  {
    id: "f1",
    category: "reservations",
    question: "How far ahead can I reserve?",
    answer: "Reservations open 60 days in advance at midnight Pacific time."
  },
  {
    id: "f2",
    category: "reservations",
    question: "Is there a late cancellation fee?",
    answer: "For parties of 6+, cancellations inside 12 hours may incur a fee."
  },
  {
    id: "f3",
    category: "dining",
    question: "Do you accept walk-ins?",
    answer: "Yes. We reserve bar and lounge seating for walk-in guests nightly."
  },
  {
    id: "f4",
    category: "dining",
    question: "Can you accommodate allergies?",
    answer: "Yes. Please share dietary details in your reservation or with your server."
  },
  {
    id: "f5",
    category: "menu",
    question: "Do menus change seasonally?",
    answer: "The core menu rotates with weekly market availability and wood-fire specials."
  },
  {
    id: "f6",
    category: "menu",
    question: "Do you have vegetarian options?",
    answer: "Yes. We always offer vegetarian, vegan, and gluten-free plates."
  },
  {
    id: "f7",
    category: "parking",
    question: "Is there nearby parking?",
    answer: "Validated garage parking is available after 5 PM on Alder and 13th."
  },
  {
    id: "f8",
    category: "parking",
    question: "Is the dining room accessible?",
    answer: "All public spaces are ADA accessible, including restrooms and host entrance."
  },
  {
    id: "f9",
    category: "reservations",
    question: "Do you seat large parties?",
    answer: "Parties up to 10 can reserve online. Larger groups should use events inquiry."
  },
  {
    id: "f10",
    category: "dining",
    question: "Can I bring wine?",
    answer: "Limited corkage is available Tuesdays and Wednesdays with prior approval."
  }
];

const getDateLabel = (offset: number): string => {
  const base = new Date();
  base.setDate(base.getDate() + offset);
  return base.toISOString().split("T")[0];
};

export const reservationSlots: ReservationSlot[] = Array.from({ length: 14 }).map((_, idx) => {
  const date = getDateLabel(idx);
  const closed = idx === 0 || idx === 9;
  const slots: ReservationSlot["slots"] = closed
    ? []
    : [
        { time: "5:00 PM", status: idx % 4 === 0 ? "limited" : "available" },
        { time: "6:30 PM", status: idx % 3 === 0 ? "limited" : "available" },
        { time: "7:30 PM", status: idx % 5 === 0 ? "unavailable" : "available" },
        { time: "9:00 PM", status: idx % 2 === 0 ? "unavailable" : "limited" }
      ];

  return { date, slots };
});
