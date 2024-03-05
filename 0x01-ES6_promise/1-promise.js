export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success === true) {
      resolve({ status: 200, body: 'Sucess' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
