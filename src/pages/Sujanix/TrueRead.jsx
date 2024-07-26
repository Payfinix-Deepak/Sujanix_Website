import { Helmet } from 'react-helmet-async';

import TruView from 'src/sections/Sujanix/TrueRead Components/TruView';

// ----------------------------------------------------------------------

export default function TrueRead() {
  return (
    <>
      <Helmet>
        <title> TrueRead</title>
      </Helmet>
      <TruView/>
    </>
  );
}
