"use server";

export const signInWithEmail = async (data: SignInFormData) => {
  console.log("signInWithEmail called with:", data);
  return { success: true };
};

export const signUpWithEmail = async (data: SignUpFormData) => {
  console.log("signUpWithEmail called with:", data);
  return { success: true };
};