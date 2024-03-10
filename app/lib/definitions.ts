export type Timestamps = number[][];

export type Instructor = {
  first_name: string;
  last_name: string;
  portrait_image: string;
};

export type Location = {
  timezone: string;
};

export type Pricing = {
  amount: number;
  currency: string;
  valid_until: number;
};

export type Course = {
  id: number;
  dates: Timestamps;
  instructors: Instructor[];
  location: Location;
  pricing: Pricing;
};
