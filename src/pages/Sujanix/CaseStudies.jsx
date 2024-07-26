import { Helmet } from 'react-helmet-async';

import CaseView from 'src/sections/Sujanix/Case Studies/CaseView';

// ----------------------------------------------------------------------

export default function CaseStudies() {
  return (
    <>
      <Helmet>
        <title> Case Studies</title>
      </Helmet>
   <CaseView/>
    </>
  );
}
