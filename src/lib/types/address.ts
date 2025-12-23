export enum AddressType {
  Billing = "billing",
  Shipping = "shipping",
}

export interface Address {
  id: string | number;
  type: AddressType;
  isDefault: boolean;

  firstName: string;
  lastName: string;

  company?: string;
  addressLine1: string;
  addressLine2?: string;

  city: string;
  state: string;
  zipCode: string;
  country: string;
  phone: string;
}
