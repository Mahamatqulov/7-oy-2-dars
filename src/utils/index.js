export const getAuthErrorMessage = (errorCode) => {
  switch (errorCode) {
    case "auth/invalid-email":
      return "The email address is invalid. Please enter a valid email.";
    case "auth/user-disabled":
      return "This account has been disabled by an administrator.";
    case "auth/user-not-found":
      return "No user found with this email address.";
    case "auth/invalid-credential":
      return "No user found with this email address.";
    case "auth/wrong-password":
      return "The password is incorrect. Please try again.";
    case "auth/email-already-in-use":
      return "This email is already in use. Please use a different email.";
    case "auth/weak-password":
      return "The password is too weak. Please use a stronger password.";
    case "auth/operation-not-allowed":
      return "This operation is not allowed. Please contact support.";
    case "auth/too-many-requests":
      return "You have made too many requests. Please try again later.";
    case "auth/network-request-failed":
      return "A network error occurred. Please check your internet connection.";
    case "auth/requires-recent-login":
      return "Please log in again to perform this operation.";
    case "auth/credential-already-in-use":
      return "This credential is already associated with another account.";
    case "auth/timeout":
      return "The operation timed out. Please try again later.";
    case "auth/invalid-verification-code":
      return "The verification code is invalid. Please try again.";
    case "auth/invalid-verification-id":
      return "The verification ID is invalid. Please try again.";
    default:
      return "An unknown error occurred. Please try again later.";
  }
};
