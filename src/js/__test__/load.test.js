import GamePlay from '../GamePlay.js';
import GameStateService from '../GameStateService.js';

test('Метод load должен выбросить ошибку №1', () => {
  const stateService = new GameStateService(null);
  expect(() => stateService.load()).toThrowError(new Error('Invalid state'));
});

test('При отсутствии переданных данных должен сработать метод showError', () => {
  const stateService = new GameStateService(null);
  const mock = jest.fn(() => GamePlay.showError('Ошибка загрузки'));

  try {
    stateService.load();
  } catch (err) {
    mock();
  }

  expect(mock).toHaveBeenCalled();
});
