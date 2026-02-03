class Actor {
  constructor(name) {
    this.name = name;
    this.abilities = [];
  }

  can(ability) {
    this.abilities.push(ability);
    return this;
  }

  async attemptsTo(...tasks) {
    for (const task of tasks) {
      await task.performAs(this);
    }
  }
}

module.exports = Actor;
