const useUser = () => {
  const user = localStorage.getItem('currentUser');

  if (user) {
    return JSON.parse(user);
  }
};

export default useUser;
