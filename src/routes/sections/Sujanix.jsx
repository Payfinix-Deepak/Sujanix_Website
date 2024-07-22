import { lazy } from 'react';

// ----------------------------------------------------------------------

const HomeView = lazy(() => import('src/pages/Sujanix/Home'));

// ----------------------------------------------------------------------

export const SujanixRoutes = [
  {
    path: 'Sujanix',
    children: [{ element: <HomeView />, index: true }],
  },
];
