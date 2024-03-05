import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const pic = uploadPhoto();
  const user = createUser();
  let signUp = '';

  Promise.all([pic, user]).then((objects) => {
    for (const object of objects) {
      for (const [key, value] of Object.entries(object)) {
        if (key !== 'status') {
          signUp += value;
          signUp += ' ';
        }
      }
    }
    signUp = signUp.trim();
    console.log(signUp);
  }).catch(() => console.log('Signup system offline'));
}
