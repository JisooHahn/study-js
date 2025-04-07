const userservice = (() => {
  const getusers = async (callback) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    if (callback) {
      callback(users.slice(0, 20));
    }
  };
  return { getusers: getusers };
})();
