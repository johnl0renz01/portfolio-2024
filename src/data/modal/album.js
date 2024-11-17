import dining_thumbnail from '@/assets/models/dining/thumbnail.png';
import dining_perspective1 from '@/assets/models/dining/angle1.png';
import dining_perspective2 from '@/assets/models/dining/angle2.png';
import dining_perspective3 from '@/assets/models/dining/angle3.png';
import dining_perspective4 from '@/assets/models/dining/angle4.png';
import dining_close1 from '@/assets/models/dining/close1.png';
import dining_close2 from '@/assets/models/dining/close2.png';
import dining_side1 from '@/assets/models/dining/side1.png';
import dining_side2 from '@/assets/models/dining/side2.png';
import dining_top1 from '@/assets/models/dining/top1.png';

import chess_thumbnail from '@/assets/models/chess/thumbnail.png';
import chess_perspective1 from '@/assets/models/chess/angle1.png';
import chess_perspective2 from '@/assets/models/chess/angle2.png';

import tower_thumbnail from '@/assets/models/tower/thumbnail.png';
import tower_angle1 from '@/assets/models/tower/angle1.png';
import tower_angle2 from '@/assets/models/tower/angle2.png';
import tower_steady1 from '@/assets/models/tower/steady1.png';
import tower_steady2 from '@/assets/models/tower/steady2.png';

import mountain_thumbnail from '@/assets/models/mountain/thumbnail.png';
import mountain_angle1 from '@/assets/models/mountain/angle1.png';

const album = [
  {
    name: 'dining',
    title: 'Castle Dining Scene',
    items: [
      {
        image: dining_thumbnail,
        imageName: 'Perspective One',
      },

      {
        image: dining_perspective1,
        imageName: 'Perspective One',
      },
      {
        image: dining_perspective2,
        imageName: 'Perspective Two',
      },
      {
        image: dining_perspective3,
        imageName: 'Perspective Three',
      },
      {
        image: dining_perspective4,
        imageName: 'Perspective Four',
      },
      {
        image: dining_close1,
        imageName: 'Close-up One',
      },
      {
        image: dining_close2,
        imageName: 'Close-up Two',
      },
      {
        image: dining_side1,
        imageName: 'Side View One',
      },
      {
        image: dining_side2,
        imageName: 'Side View Two',
      },
      {
        image: dining_top1,
        imageName: 'Top View',
      },
    ],
  },

  {
    name: 'chess',
    title: 'Wooden Chess Set',
    items: [
      {
        image: chess_thumbnail,
        imageName: 'Side View',
      },

      {
        image: chess_perspective1,
        imageName: 'Perspective One',
      },

      {
        image: chess_perspective2,
        imageName: 'Perspective Two',
      },
    ],
  },

  {
    name: 'tower',
    title: 'Minecraft Tower',
    items: [
      {
        image: tower_thumbnail,
        imageName: 'Perspective One',
      },

      {
        image: tower_angle1,
        imageName: 'Perspective Two',
      },

      {
        image: tower_angle2,
        imageName: 'Persective Three',
      },
      {
        image: tower_steady1,
        imageName: 'Steady One',
      },

      {
        image: tower_steady2,
        imageName: 'Steady Two',
      },
    ],
  },

  {
    name: 'mountain',
    title: 'Mountain Beach',
    items: [
      {
        image: mountain_thumbnail,
        imageName: 'Perspective One',
      },

      {
        image: mountain_angle1,
        imageName: 'Perspective Two',
      },
    ],
  },
];

export default album;
