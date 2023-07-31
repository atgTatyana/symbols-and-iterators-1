import Character from './Character';

export default class Team {
  constructor() {
    this.team = [];
  }

  addAll(...characters) {
    for (const character of characters) {
      this.team.push(character);
    }
    return [...this.team];
  }

  iterator() {
    const { length } = this.team;
    const teamIteraror = this.team;
    let index = 0;

    return {
      next() {
        if (index > (length - 1)) {
          return {
            value: undefined,
            done: true,
          };
        }
        return {
          value: teamIteraror[index++],
          done: false,
        };
      },
    };
  }
}

const daemon = new Character('DDD', 'Daemon');
const magician = new Character('MMM', 'Magician');
const undead = new Character('UUU', 'Undead');
const team = new Team();
team.addAll(daemon, magician, undead);
const iterator = team.iterator();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
