import * as _ from 'lodash';

export enum toolsListModes {
  symptoms = 'symptoms',
  tools = 'tools',
}

export enum toolsTypes {
  symptoms = 'symptoms',
  soundsOfNature = 'soundsOfNature',
  breathingPractices = 'breathingPractices',
  meditation = 'meditation',
  quotesForReflection = 'quotesForReflection',
  fallAsleep = 'fallAsleep',
  timerNotification = 'timerNotification',
}

export enum toolsLinks {
  soundsOfNature = 'sounds-of-nature',
  breathingPractices = 'breathing-practices',
  meditation = 'meditation',
  quotesForReflection = 'quotes-for-reflection',
  fallAsleep = 'fall-asleep',
  timerNotification = 'timer-notification'
}

export const toolsItems = {
  soundsOfNature: {
    name: 'Звуки природы',
    type: toolsTypes.soundsOfNature,
    link: toolsLinks.soundsOfNature,
  },
  breathingPractices: {
    name: 'Дыхательные техники',
    type: toolsTypes.breathingPractices,
    link: toolsLinks.breathingPractices,
  },
  meditation: {
    name: 'Медитация',
    type: toolsTypes.meditation,
    link: toolsLinks.meditation,
  },
  quotesForReflection: {
    name: 'Цитаты для размышления',
    type: toolsTypes.quotesForReflection,
    link: toolsLinks.quotesForReflection,
  },
  fallAsleep: {
    name: 'Техники для засыпания',
    type: toolsTypes.fallAsleep,
    link: toolsLinks.fallAsleep,
  },
  timerNotification: {
    name: 'Таймер',
    type: toolsTypes.timerNotification,
    link: toolsLinks.timerNotification,
  },
};

export enum toolResults {
  decreased = 'decreased',
  notChanged = 'notChanged',
  increased = 'increased',
  dangerousIncreased = 'dangerousIncreased',
}

export enum toolResultsMessages {
  default = 'Результаты',
  decreased = 'Стресс уменьшился',
  notChanged = 'Стресс не изменился',
  increased = 'Стресс увеличился',
  dangerousIncreased = 'Критический уровень стресса',
}

export const findItemByType = (toolType: string) => {
  const toolsArray = Object.values(toolsItems);
  return toolsArray.find((el) => {
    return el.type === toolType;
  });
};

export const getRandomToolType = () => {
  const toolItemsCount = Object.keys(toolsItems).length;
  const randomIndex = _.random(0, toolItemsCount - 1);
  return Object.keys(toolsItems)[randomIndex];
};
