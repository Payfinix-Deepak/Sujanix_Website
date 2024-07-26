import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

import Image from 'src/components/image';
import TextMaxLine from 'src/components/text-max-line';

// ----------------------------------------------------------------------

export default function MarketingFeaturedPostItem({ post, id }) {
  return (
    <Stack
      direction={{
        xs: 'column',
        md: 'row',
      }}
      sx={{ bgcolor: 'background.default', borderRadius: 2 }}
    >
      <Image
        src={post.coverUrl}
        alt={post.title}
        sx={{ flexGrow: 1, height: { md: 360 }, maxWidth: '40rem' }}
      />

      <Stack
        justifyContent="space-between"
        sx={{
          mx: 'auto',
          p: { xs: 6, md: 5 },
          maxWidth: { md: 596 },
        }}
      >
        <Stack spacing={3}>
          {/* <PostTimeBlock createdAt={fDate(post.createdAt)} duration={post.duration} /> */}
          {/* 
          <Link component={RouterLink} href={paths.marketing.post} color="inherit" variant="h3">
            {post.title}
          </Link> */}
          <NavLink
            style={{
              cursor: 'pointer',
              textDecoration: 'None',
              transition: 'primary 0.3s',
              color: 'black',
              fontSize: '20px',
            }}
            to="/marketing/post"
            state={{ id }}
          >
            <Typography variant="h3"> {post.title}</Typography>
          </NavLink>

          <TextMaxLine
            variant="body2"
            sx={{ color: 'text.secondary', fontSize: '19px', fontFamily: 'sans-serif' }}
          >
            {post.description}
          </TextMaxLine>
          <Typography>
            <button
              type="button"
              style={{
                fontSize: '16px',
                backgroundColor: '#fff',
                border: '1px solid white',
                color: 'orangered',
                cursor: 'pointer',
              }}
            >
              READ MORE
            </button>
          </Typography>
        </Stack>

        {/* <Stack direction="row" alignItems="center" sx={{ pt: 2, typography: 'body2' }}>
          <Avatar src={post.author.avatarUrl} sx={{ mr: 1 }} />
          {post.author.name}
        </Stack> */}
      </Stack>
    </Stack>
  );
}

MarketingFeaturedPostItem.propTypes = {
  id: PropTypes.number,
  post: PropTypes.object,
  // post: PropTypes.shape({
  //   title: PropTypes.string,
  //   id: PropTypes.number,
  //   coverUrl: PropTypes.string,
  //   duration: PropTypes.string,
  //   description: PropTypes.string,
  //   createdAt: PropTypes.instanceOf(Date),
  //   author: PropTypes.shape({
  //     avatarUrl: PropTypes.string,
  //     name: PropTypes.string,
  //     id: PropTypes.number,
  //   }),

  // }),
};
