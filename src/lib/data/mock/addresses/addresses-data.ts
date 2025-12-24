import { Address, AddressType } from "@/lib/types/address";

const mockAddresses: Address[] = [
  {
    id: 1,
    type: AddressType.Billing,
    isDefault: true,
    firstName: "John",
    lastName: "Doe",
    company: "Tech Corp",
    addressLine1: "123 Main Street",
    addressLine2: "Suite 100",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    country: "United States",
    phone: "+1 (555) 123-4567",
  },
  {
    id: 2,
    type: AddressType.Shipping,
    isDefault: true,
    firstName: "John",
    lastName: "Doe",
    company: "",
    addressLine1: "456 Oak Avenue",
    addressLine2: "",
    city: "Brooklyn",
    state: "NY",
    zipCode: "11201",
    country: "United States",
    phone: "+1 (555) 123-4567",
  },
];

export const getAddresses = (): Address[] => {
  return mockAddresses;
};
