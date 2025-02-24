const checkUserAuth = () => {
  const accessToken = localStorage.getItem('access_token');

  return accessToken && accessToken === '!Q@W3e4r';
};

const authenticate = (email, password) => {
  const usersList = JSON.parse(localStorage.getItem('users') || '[]');

  for (const user of usersList) {
    if (user.email === email && user.password === password) {
      localStorage.setItem('access_token', '!Q@W3e4r');

      return true;
    }
  }

  return false;
};

const createUser = (values) => {
  let usersList = JSON.parse(localStorage.getItem('users') || '[]');

  // check if user exists
  for (const user of usersList) {
    if (values.email === user.email) {
      return;
    }
  }

  usersList.push({
    firstName: values.firstName,
    lastName: values.lastName,
    email: values.email,
    password: values.password
  });

  localStorage.setItem('users', JSON.stringify(usersList));
};

export { checkUserAuth, createUser, authenticate };
