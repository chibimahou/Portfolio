export type ThemeMode = "light" | "dark";

export type NavSectionId =
  | "home"
  | "menu"
  | "reservations"
  | "order"
  | "events"
  | "about"
  | "gallery"
  | "visit";

export interface NavItem {
  id: NavSectionId;
  label: string;
  href: string;
}

export interface RestaurantInfo {
  name: string;
  tagline: string;
  description: string;
  phone: string;
  email: string;
  address: string;
  cityState: string;
  cuisine: string;
  priceRange: string;
  socials: Array<{ label: string; href: string }>;
}

export interface HoursEntry {
  day: string;
  open: string;
  close: string;
  closed?: boolean;
}

export interface MenuCategory {
  id: string;
  label: string;
}

export type DietaryTag = "vegetarian" | "vegan" | "gluten-free";

export interface CustomizationGroup {
  id: string;
  label: string;
  required: boolean;
  options: string[];
}

export interface Dish {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  price: number;
  tags: string[];
  dietary: DietaryTag[];
  allergens: string[];
  image: string;
  featured?: boolean;
  popular?: boolean;
  soldOut?: boolean;
  customizations: CustomizationGroup[];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  source: string;
}

export interface PressItem {
  id: string;
  outlet: string;
  quote: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  price: string;
  seats: string;
  description: string;
}

export interface CateringPackage {
  id: string;
  title: string;
  guestRange: string;
  price: string;
  included: string[];
  featured?: boolean;
}

export interface GalleryImage {
  id: string;
  category: "food" | "interior" | "events";
  title: string;
  image: string;
}

export interface FaqItem {
  id: string;
  category: "reservations" | "dining" | "menu" | "parking";
  question: string;
  answer: string;
}

export interface ReservationSlot {
  date: string;
  slots: Array<{ time: string; status: "available" | "limited" | "unavailable" }>;
}

export interface CartItem {
  id: string;
  dishId: string;
  name: string;
  unitPrice: number;
  quantity: number;
  selectedOptions: string[];
}
