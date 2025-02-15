import {
  trigger,
  style,
  animate,
  transition,
  query,
} from '@angular/animations';

const ShakeAnimation = [
  style({ transform: 'rotate(0)' }),
  animate('0.1s', style({ transform: 'rotate(2deg)' })),
  animate('0.1s', style({ transform: 'rotate(-2deg)' })),
  animate('0.1s', style({ transform: 'rotate(2deg)' })),
  animate('0.1s', style({ transform: 'rotate(0)' })),
];

export const QueryShake = [
  trigger('queryShake', [
    transition('* => default', [query('.card', ShakeAnimation)]),
    transition('* => withLimit', [
      query('.card', ShakeAnimation, {
        limit: 2,
      }),
    ]),
  ]),
];
