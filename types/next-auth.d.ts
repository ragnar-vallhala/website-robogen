// import "next-auth";

// declare module "next-auth" {
//   interface User {
//     id: string;
//   }
  
//   interface Session {
//     user: User;
//   }
// }


import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      image?: string;
    };
  }
}