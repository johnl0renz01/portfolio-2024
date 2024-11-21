import adaptive_about from '@/assets/projects/adaptive/walkthrough/about.jpg';
import adaptive_admin from '@/assets/projects/adaptive/walkthrough/admin.jpg';
import adaptive_help from '@/assets/projects/adaptive/walkthrough/help.jpg';
import adaptive_hint from '@/assets/projects/adaptive/walkthrough/hint.jpg';
import adaptive_history from '@/assets/projects/adaptive/walkthrough/history.jpg';

import adaptive_learn from '@/assets/projects/adaptive/walkthrough/learn.jpg';
import adaptive_leave from '@/assets/projects/adaptive/walkthrough/leave.jpg';
import adaptive_lessons from '@/assets/projects/adaptive/walkthrough/lessons.jpg';
import adaptive_login from '@/assets/projects/adaptive/walkthrough/login.jpg';
import adaptive_manual from '@/assets/projects/adaptive/walkthrough/manual.jpg';

import adaptive_menu from '@/assets/projects/adaptive/walkthrough/menu.jpg';
import adaptive_skip from '@/assets/projects/adaptive/walkthrough/skip.jpg';
import adaptive_solve1 from '@/assets/projects/adaptive/walkthrough/solve1.jpg';
import adaptive_solve2 from '@/assets/projects/adaptive/walkthrough/solve2.jpg';
import adaptive_steps from '@/assets/projects/adaptive/walkthrough/steps.jpg';

const mobile = [
  {
    name: 'adaptive-sensei',
    items: [
      {
        title: 'Login',
        image: adaptive_login,
        description:
          'Access the system by requiring only username for students, with password for admins.',
      },
      {
        title: 'Admin Menu',
        image: adaptive_admin,
        description:
          'Allows educators to modify accounts, monitor progress, and manage equation settings.',
      },
      {
        title: 'Student Menu',
        image: adaptive_menu,
        description:
          'Central navigation hub for lessons, equation history, and to solve equations.',
      },
      {
        title: 'Main Interface',
        image: adaptive_solve1,
        description:
          'Interface has built-in keyboard for students, and various features that helps in solving.',
      },
      {
        title: 'Hints',
        image: adaptive_hint,
        description:
          'Offers contextual hints to assist students in solving linear equations in each step.',
      },
      {
        title: 'Equation Solved',
        image: adaptive_solve2,
        description:
          'After solving the equation, the student have the ability to reset or proceed to next.',
      },
      {
        title: 'Skip Problem',
        image: adaptive_skip,
        description: "Allows students to skip if they're currently struggling.",
      },
      {
        title: 'Leave Session',
        image: adaptive_leave,
        description:
          'Warning message appear when students wants to leave. Leaving will abandon the equation.',
      },
      {
        title: 'History',
        image: adaptive_history,
        description:
          'Displays a log of solved problems, where student can review their answer.',
      },
      {
        title: 'Steps',
        image: adaptive_steps,
        description:
          "Shows the previous solution steps of the equation they've solved, for reviewing.",
      },

      {
        title: 'Lessons Overview',
        image: adaptive_lessons,
        description:
          "Lists lessons covering linear equations to learn based on student's needs.",
      },
      {
        title: 'Learn',
        image: adaptive_learn,
        description:
          'Interactive lessons adapt to students’ pace and understanding of linear equations.',
      },
      {
        title: 'Help',
        image: adaptive_help,
        description:
          'Provides guidance on navigating the app and understanding its features.',
      },
      {
        title: 'Manual',
        image: adaptive_manual,
        description:
          'Offers detailed instructions for using the system effectively.',
      },

      {
        title: 'About Page',
        image: adaptive_about,
        description:
          'Introduces Adaptive Sensei and its goal to enhance learning of students.',
      },
    ],
  },
];

export default mobile;
