import { Helmet } from 'react-helmet-async';
import HomeView from 'src/sections/Sujanix/HomeComponents/HomeView';

// ----------------------------------------------------------------------

export default function Home() {
  return (
    <>
      <Helmet>
        <title> Home</title>
      </Helmet>
      <HomeView/>
    </>
  );
}
