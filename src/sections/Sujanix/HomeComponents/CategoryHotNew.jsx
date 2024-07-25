import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import SvgColor from 'src/components/svg-color';
import TextMaxLine from 'src/components/text-max-line';

// ----------------------------------------------------------------------

export default function CategoryHotNew({ categories }) {
  return (
    <main style={{ backgroundColor: 'none' }}>
      <Container
        sx={{
          pt: { xs: 2, md: 2 },
          pb: { xs: 2, md: 2 },
        }}
      >
        <Box
          sx={{
            gap: 4,
            display: 'grid',
            my: { xs: 8, md: 10 },
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
          }}
        >
          {categories.map((category) => (
            <CategoryItem key={category.id} category={category} />
          ))}
        </Box>
      </Container>
    </main>
  );
}

CategoryHotNew.propTypes = {
  categories: PropTypes.array,
};

// ----------------------------------------------------------------------

function CategoryItem({ category }) {
  return (
    <Paper
      variant="outlined"
      sx={{
        pt: '100%',
        borderRadius: 2,
        cursor: 'pointer',
        textAlign: 'center',
        position: 'relative',
        bgcolor: 'transparent',
        transition: (theme) => theme.transitions.create('all'),
        '&:hover': {
          bgcolor: 'background.paper',
          boxShadow: (theme) => theme.customShadows.z24,
          '& .icon': {
            bgcolor: 'primary.main',
            transition: (theme) => theme.transitions.create('all'),
            '& > span': {
              color: 'common.white',
            },
          },
        },
      }}
    >
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{
          width: 1,
          height: 1,
          top: 0,
          position: 'absolute',
        }}
      >
        <Box
          className="icon"
          sx={{
            mb: 2.5,
            width: 72,
            height: 72,
            mx: 'auto',
            display: 'flex',
            borderRadius: '50%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <SvgColor src={category.icon} sx={{ width: 48, height: 48 }} />
        </Box>

        <TextMaxLine variant="h6" line={1}>
          {category.name}
        </TextMaxLine>

        <Typography variant="body2" sx={{ color: 'text.disabled', mt: 0.5 }}>
          {category.totalJobs}
        </Typography>
      </Stack>
    </Paper>
  );
}

CategoryItem.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string,
    totalJobs: PropTypes.number,
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  }),
};
