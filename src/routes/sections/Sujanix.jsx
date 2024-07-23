import { lazy } from 'react';

// ----------------------------------------------------------------------

const HomeView = lazy(() => import('src/pages/Sujanix/Home'));
const ContactView = lazy(() => import('src/pages/Sujanix/Contact'));
const CareerView = lazy(() => import('src/pages/Sujanix/Career'));
const AboutView = lazy(() => import('src/pages/Sujanix/About'));
const CruxView = lazy(() => import('src/pages/Sujanix/Crux'));
const TruView = lazy(() => import('src/pages/Sujanix/TrueRead'));

// ----------------------------------------------------------------------

export const SujanixRoutes = [
  {
    path: 'Sujanix',
    children: [
      { element: <HomeView />, index: true },
      { path: '/Sujanix/Contact', element: <ContactView /> },
      { path: '/Sujanix/Career', element: <CareerView/> },
      { path: '/Sujanix/About', element: <AboutView/> },
      { path: '/Sujanix/Crux', element: <CruxView/> },
      { path: '/Sujanix/TrueRead', element: <TruView/> },

    ],
  },
];
