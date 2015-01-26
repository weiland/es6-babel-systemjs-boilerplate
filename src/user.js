class User {

  constructor(name='anonyCat') {
    console.log(`a new user: ${name}`);
  }

  get name() {
    return 'anonyCow';
  }
}
export default new User(  );

