import {images} from '@assets';

import {OnboardingPageItem} from './types';

type OnboardingPageItemWithoutMeta = Omit<
  OnboardingPageItem,
  'index' | 'total' | 'isLast'
>;

const page1: OnboardingPageItemWithoutMeta = {
  title: [
    {text: 'Uma rede social de', isHighlighted: false},
    {text: '\nconexões reais', isHighlighted: true},
  ],
  subtitle:
    'Fique por dentro do que acontece\ncom as pessoas que você mais gosta',
  image: {
    light: images.onboardingLight1,
    dark: images.onboardingDark1,
  },
};
const page2: OnboardingPageItemWithoutMeta = {
  title: [
    {text: 'Compartilhe suas', isHighlighted: false},
    {text: '\nhistórias', isHighlighted: true},
    {text: ' com seus amigos próximos', isHighlighted: false},
  ],
  subtitle: 'Tenha sua linha do tempo\npersonalizada',
  image: {
    light: images.onboardingLight2,
    dark: images.onboardingDark2,
  },
};

const page3: OnboardingPageItemWithoutMeta = {
  title: [
    {text: 'Interaja', isHighlighted: true},
    {text: ' em tempo real com as pessoas', isHighlighted: false},
  ],
  subtitle: 'Curta, comente e favorite os\nconteúdos que você mais gostar',
  image: {
    light: images.onboardingLight3,
    dark: images.onboardingDark3,
  },
};

export const onboardingPages: OnboardingPageItem[] = [page1, page2, page3].map(
  (page, index, array) => ({
    ...page,
    index,
    total: array.length,
    isLast: index === array.length - 1,
  }),
);
