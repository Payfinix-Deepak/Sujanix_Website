import { Helmet } from 'react-helmet-async';

import AboutView from 'src/sections/Sujanix/About Components/AboutView';

// ----------------------------------------------------------------------

export default function About() {
  return (
    <>
      <Helmet>
        <title> About US</title>
      </Helmet>
      <AboutView/>
    </>
  );
}
