import {
  _jobs,

} from 'src/_mock';

import CareerLandingHero from '../landing/career-landing-hero';
import CareerLandingFeaturedJobs from '../landing/career-landing-featured-jobs';

// ----------------------------------------------------------------------

export default function CareerLandingView() {
  return (
    <>
      <CareerLandingHero />
      {/* 
      <CareerLandingStep /> */}

      <CareerLandingFeaturedJobs jobs={_jobs.slice(-6)} />

      {/* <CareerLandingTopCompanies companies={_jobsByCompanies} /> */}

      {/* <CareerLandingHotCategories categories={_jobsByCategories} /> */}

      {/* <CareerLandingConnections countries={_jobsByCountries} /> */}

      {/* <CareerLandingForRecruiters /> */}

      {/* <CareerTestimonial testimonials={_testimonials} /> */}

      {/* <CareerOurClients brands={_brandsColor} /> */}
      {/* 
      <CareerLatestPosts posts={_careerPosts.slice(0, 5)} />

      <CareerDownloadApp />

      <CareerNewsletter /> */}
    </>
  );
}
