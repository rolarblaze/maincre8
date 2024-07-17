// Define the structure of a password criterion, which includes a label and a validation function.
interface PasswordCriteria {
  label: string;
  isValid: (password: string) => boolean;
}

// An array of password criteria to check against the password.
// Each criterion includes a label to describe the requirement and a validation function to test the password.
export const passwordCriteria: PasswordCriteria[] = [
  {
    // Criterion to check if the password is at least 8 characters long.
    label: "8 or more characters",
    isValid: (password) => password.length >= 8,
  },
  {
    // Criterion to check if the password contains at least one lowercase letter.
    label: "At least 1 lower case",
    isValid: (password) => /[a-z]/.test(password),
  },
  {
    // Criterion to check if the password contains at least one uppercase letter.
    label: "At least 1 upper case",
    isValid: (password) => /[A-Z]/.test(password),
  },
  {
    // Criterion to check if the password contains at least one special character.
    label: "At least 1 special character",
    isValid: (password) => /[!@#$%^&*(),.?":{}|<>]/.test(password),
  },
];

// Function to validate the password against all criteria.
// It takes a password string and returns an array of objects indicating if each criterion is met.
export const validatePassword = (password: string) => {
  return passwordCriteria.map((criterion) => ({
    label: criterion.label,
    isValid: criterion.isValid(password),
  }));
};
