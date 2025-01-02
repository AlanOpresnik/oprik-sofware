export interface serviceInterface {
  id: number;
  img?: string;
  type: string;
  description: string;
  price: string;
  techs: { title: string, for: string, description: string }[];
  largeDescription: string;
  subscription: string;
  buttonText: string;
  active: boolean;
  features: { text: string; available: boolean }[];
  images: string[];
  aprox_delivery_time: string;
}
