import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const pic = uploadPhoto(); // returned promise saved within pic
  const user = createUser(); // returned promise saved within user
  let signUp = ''; // empty string
  // iterating through the promises pic and user and adding the values to signUp
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
