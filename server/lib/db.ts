export interface Feedback {
  email: string;
  message: string;
}

export const saveFeedback = async (feedback: Feedback): Promise<Boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Feedback enviado');
      resolve(true);
    }, 1500);
  });
};
