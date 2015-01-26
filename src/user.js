class User {

  constructor(name='anonyCat') {
    console.log(`a new user: ${name}`);
  }

  get name() {
    return name;
  }
}
export default new User( 'anonyMouse' );

