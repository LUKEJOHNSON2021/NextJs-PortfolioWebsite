declare global {
  interface NavigatorUAData {
    mobile: boolean;
    brands: { brand: string; version: string }[];
  }
  interface Navigator {
    userAgentData?: NavigatorUAData;
  }
}
