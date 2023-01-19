import Character from '../Character.js';
import Bowman from '../Characters/Bowman.js';
import Daemon from '../Characters/Daemon.js';
import Magician from '../Characters/Magician.js';
import Swordsman from '../Characters/Swordsman.js';
import Undead from '../Characters/Undead.js';
import Vampire from '../Characters/Vampire.js';

test('При попытке создать новый объект класса Character выбрасывается ошибка', () => {
  expect(() => new Character(1)).toThrowError(new Error('It is forbidden to create objects of the Character class'));
});

test.each([
  [new Bowman(1)],
  [new Daemon(1)],
  [new Magician(1)],
  [new Swordsman(1)],
  [new Undead(1)],
  [new Vampire(1)],
])(('Не должно быть выброса ошибки'), (char) => {
  expect(() => char).not.toThrow();
});
