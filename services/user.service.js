const { faker } = require('@faker-js/faker');

class UsersService {
  constructor() {
    this.users = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.users.push({
        id: faker.string.uuid(),
        name: faker.person.firstName(),
        sexo: faker.person.sex(),
        number: faker.phone.number(),
      });
    }
  }

  create() {}
  find() {
    return this.users;
  }
  findOne(id) {
    return this.users.find((item) => item.id === id);
  }
  update() {}
  delete() {}
}

module.exports = UsersService;
