export interface MarketingBanner {
  id: string;
  title: string;
  size: string;
  type: "horizontal" | "rectangle";
  colorClass: string;
}

export interface MarketingResource {
  id: string;
  title: string;
  description: string;
  type: "text" | "email";
}
