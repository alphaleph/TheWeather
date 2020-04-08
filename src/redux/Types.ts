export interface BaseAction {
  type: string;
  payload?: any;
}

export interface RawAPILocation {
  id: number;
  name: string;
  state: string;
  country: string;
  coord: {
    lon: number;
    lat: number;
  };
}
