export type UserProps = {
  id: number;
  name: string;
  email: string;
  phone: string;
  username: string;
  address: Address;
  company: Company;
  website: string;
};

export type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
};

export type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

