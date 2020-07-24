import sorter from '../app';

test('sort by health 30/60/90', () => {
  const input = [
    { name: 'мечник', health: 30 },
    { name: 'маг', health: 60 },
    { name: 'лучник', health: 90 },
  ];
  const expected = [
    { name: 'лучник', health: 90 },
    { name: 'маг', health: 60 },
    { name: 'мечник', health: 30 },
  ];
  const received = sorter(input);
  expect(received).toEqual(expected);
});

test('sort by health 90/60/30', () => {
  const input = [
    { name: 'мечник', health: 90 },
    { name: 'маг', health: 60 },
    { name: 'лучник', health: 30 },
  ];
  const expected = [
    { name: 'мечник', health: 90 },
    { name: 'маг', health: 60 },
    { name: 'лучник', health: 30 },
  ];
  const received = sorter(input);
  expect(received).toEqual(expected);
});

test('sort by health 30/90/60', () => {
  const input = [
    { name: 'мечник', health: 30 },
    { name: 'маг', health: 90 },
    { name: 'лучник', health: 60 },
  ];
  const expected = [
    { name: 'маг', health: 90 },
    { name: 'лучник', health: 60 },
    { name: 'мечник', health: 30 },
  ];
  const received = sorter(input);
  expect(received).toEqual(expected);
});

test('sort by health 60/90/30', () => {
  const input = [
    { name: 'мечник', health: 60 },
    { name: 'маг', health: 90 },
    { name: 'лучник', health: 30 },
  ];
  const expected = [
    { name: 'маг', health: 90 },
    { name: 'мечник', health: 60 },
    { name: 'лучник', health: 30 },
  ];
  const received = sorter(input);
  expect(received).toEqual(expected);
});

test('sort by health 90/30/60', () => {
  const input = [
    { name: 'мечник', health: 90 },
    { name: 'маг', health: 30 },
    { name: 'лучник', health: 60 },
  ];
  const expected = [
    { name: 'мечник', health: 90 },
    { name: 'лучник', health: 60 },
    { name: 'маг', health: 30 },
  ];
  const received = sorter(input);
  expect(received).toEqual(expected);
});

test('sort by health 60/30/90', () => {
  const input = [
    { name: 'мечник', health: 60 },
    { name: 'маг', health: 30 },
    { name: 'лучник', health: 90 },
  ];
  const expected = [
    { name: 'лучник', health: 90 },
    { name: 'мечник', health: 60 },
    { name: 'маг', health: 30 },
  ];
  const received = sorter(input);
  expect(received).toEqual(expected);
});
