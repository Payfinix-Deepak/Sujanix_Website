import { Helmet } from 'react-helmet-async';
import CruxView from 'src/sections/Sujanix/Crux Components/CruxView';

// ----------------------------------------------------------------------

export default function Crux() {
  return (
    <>
      <Helmet>
        <title> Crux UEM</title>
      </Helmet>
    <CruxView/>
    </>
  );
}
