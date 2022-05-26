import { useQuery,gql } from "@apollo/client";
export const SignIn = gql`
  mutation {
    signUpWithEmail(
      name: "John Doe"
      email: "john@doe.com"
      password: "p4SSW0rd"
    ) {
      user {
        id
        email
        name
        facebookId
        googleId
        appleId
      }
      accessToken
      refreshToken
    }
  }
`;
