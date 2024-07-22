import { Helmet } from 'react-helmet-async';
import HomeView from 'src/sections/Sujanix/HomeView';

// ----------------------------------------------------------------------

export default function Home() {
  return (
    <>
      <Helmet>
        <title> Home</title>
      </Helmet>
      <HomeView />
    </>
  );
}
