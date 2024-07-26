import { Helmet } from 'react-helmet-async';

import ContactView from 'src/sections/Sujanix/Contact Components/ContactView';

// ----------------------------------------------------------------------

export default function Contact() {
  return (
    <>
      <Helmet>
        <title> Contact US</title>
      </Helmet>
     <ContactView/>
    </>
  );
}
