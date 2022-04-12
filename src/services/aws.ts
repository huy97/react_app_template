import { Auth } from "aws-amplify";

// User Login
const login = async (data: any) => {
  try {
    return Auth.signIn(data.username, data.password);
  } catch (e) {
    return e;
  }
};

// User logout
const logout = async () => await Auth.signOut();

// Get a user session
const currentSession = async () => {
  try {
    return Auth.currentSession();
  } catch (e) {
    return e;
  }
};

/**
 * Get current authenticated user details
 */
const currentUserInfo = async () => {
  try {
    return Auth.currentAuthenticatedUser();
  } catch (e) {
    return e;
  }
};

export default { login, logout, currentSession, currentUserInfo };
