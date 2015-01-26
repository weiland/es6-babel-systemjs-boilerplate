class User {

  constructor(name='anonyMouse') {
    console.log(`a new user: ${name}`);
  }

  get name() {
    return name;
  }
}
export default new User();

