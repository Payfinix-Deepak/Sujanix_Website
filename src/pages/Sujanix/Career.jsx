import { Helmet } from 'react-helmet-async';

import CareerView from 'src/sections/Sujanix/Career Components/CareerView';

// ----------------------------------------------------------------------

export default function Career() {
  return (
    <>
      <Helmet>
        <title> Career</title>
      </Helmet>
      <CareerView />
    </>
  );
}
