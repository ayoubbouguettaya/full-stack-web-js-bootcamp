export type Product = {
  id: number;
  name: string;
  description: string;
  quantity: number;
  category: string;
  image: string;
};


export type UserData =
  {
    user: {
        "id": number,
      "userName": string
    },
    isConnected: boolean;
  }