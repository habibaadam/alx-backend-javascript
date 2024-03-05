import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);
  const status = [];

  return Promise.all([user, photo])
    .then((values) => {
      status.push({ status: 'fulfilled', value: values[0] });
      status.push({ status: 'fulfilled', value: values[1] });
      return status;
    })
    .catch((error) => {
      status.push({ status: 'rejected', value: error.toString() });
      return status;
    });
}
