import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { Container} from '@mui/material';
import Typography from '@mui/material/Typography';

import SvgColor from 'src/components/svg-color';



// ----------------------------------------------------------------------

export default function ElearningCourseDetailsTeachersInfo({ teachers = [] }) {
  return (
  
      <Container>
        <Stack sx={{textAlign:"center"}}>
        <Typography variant="h2" sx={{ mb: 5, marginTop: "5rem" }}>
        Effective Software Development Services for Increased Production, Lower Costs, and Better Outcomes        </Typography>
        </Stack>
       



        <Box
          sx={{
            display: 'grid',
            gap: { xs: 3, md: 4 },
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              lg: 'repeat(2, 1fr)',
            },

          }}
        >
          {teachers.map((teacher) => (
            <TeacherItem key={teacher.id} teacher={teacher} />
          ))}
        </Box>
      </Container>


  );
}

ElearningCourseDetailsTeachersInfo.propTypes = {
  teachers: PropTypes.array,
};

// ----------------------------------------------------------------------

function TeacherItem({ teacher }) {
  return (
    <Paper variant="outlined" sx={{ p: 3, borderRadius: 2 }}>
      <Stack direction="row" spacing={3} >
      <SvgColor 
  src={teacher.avatarUrl} 
  sx={{ 
    width: { xs: '100%', sm: '75%', md: '50%', lg: '35%' }, // Responsive width
    height: { xs: '100px', sm: '150px', md: '200px', lg: '220px' }, // Responsive height
    marginTop: "-4rem",
    bgcolor: 'primary.main',
  }} 
/>
        <Stack spacing={1} flexGrow={3}>
          <Stack spacing={1}>
            {/* <Typography variant="h4">{teacher.name}</Typography>
            <Typography variant="body2" sx={{ fontSize: "18px" }}>
              {teacher.role}
            </Typography> */}

            {/* <Typography variant='h6'>
              <NavLink to='/HomeLanding/Web' > {teacher.ratingNumber1} </NavLink>
              <NavLink to='/HomeLanding/Cus' > {teacher.ratingNumber2} </NavLink>
              <NavLink to='/HomeLanding/Dev' > {teacher.ratingNumber3} </NavLink>
              <NavLink to='/HomeLanding/App' > {teacher.ratingNumber4} </NavLink>
              <NavLink to='/HomeLanding/Digi' > {teacher.ratingNumber5} </NavLink>
              <NavLink to='/HomeLanding/Product' > {teacher.ratingNumber6} </NavLink>
              <NavLink to='/HomeLanding/Block' > {teacher.ratingNumber7} </NavLink>
              <NavLink to='/HomeLanding/UI' > {teacher.ratingNumber8} </NavLink>
              <NavLink to='' > {teacher.ratingNumber9} </NavLink>
              <NavLink to='/HomeLanding/Test' > {teacher.ratingNumber10} </NavLink>

            </Typography> */}

            <Stack spacing={1} flexGrow={3}>
              <Stack spacing={2}>
                <Typography variant="h4">{teacher.name}</Typography>
                <Typography variant="body2" sx={{ fontSize: "18px" }}>
                  {teacher.role}
                </Typography>
                <Typography variant='body3'>
                  <NavLink to='/HomeLanding/Web' sx={{ color: "black", cursor: "pointer", fontSize: "19px" }} style={{
                    color: 'black',
                    cursor: 'pointer',
                    textDecoration: 'None',
                    transition: 'primary 0.3s',
                  }}> <b>{teacher.ratingNumber1}</b>
                  </NavLink>
                  <NavLink to='/HomeLanding/Cus' sx={{ color: "black", cursor: "pointer", fontSize: "19px" }}
                    style={{
                      color: 'black',
                      cursor: 'pointer',
                      textDecoration: 'None',
                      transition: 'primary 0.3s',
                    }}> <b>{teacher.ratingNumber2}</b> </NavLink>
                  <NavLink to='/HomeLanding/Dev' sx={{ color: "black", cursor: "pointer", fontSize: "19px" }}
                    style={{
                      color: 'black',
                      cursor: 'pointer',
                      textDecoration: 'None',
                      transition: 'primary 0.3s',
                    }}><b> {teacher.ratingNumber3}</b> </NavLink>
                  <NavLink to='/HomeLanding/App' sx={{ color: "black", cursor: "pointer", fontSize: "19px" }}
                    style={{
                      color: 'black',
                      cursor: 'pointer',
                      textDecoration: 'None',
                      transition: 'primary 0.3s',
                    }}> <b>{teacher.ratingNumber4} </b></NavLink>
                  <NavLink to='/HomeLanding/Digi' sx={{ color: "black", cursor: "pointer", fontSize: "19px" }}
                    style={{
                      color: 'black',
                      cursor: 'pointer',
                      textDecoration: 'None',
                      transition: 'primary 0.3s',
                    }}><b> {teacher.ratingNumber5}</b> </NavLink>
                  <NavLink to='/HomeLanding/Product' sx={{ color: "black", cursor: "pointer", fontSize: "19px" }}
                    style={{
                      color: 'black',
                      cursor: 'pointer',
                      textDecoration: 'None',
                      transition: 'primary 0.3s',
                    }}><b> {teacher.ratingNumber6}  </b></NavLink>
                  <NavLink to='/HomeLanding/Block' sx={{ color: "black", cursor: "pointer", fontSize: "19px" }}
                    style={{
                      color: 'black',
                      cursor: 'pointer',
                      textDecoration: 'None',
                      transition: 'primary 0.3s',
                    }}><b> {teacher.ratingNumber7}  </b></NavLink>
                  <NavLink to='/HomeLanding/UI' sx={{ color: "black", cursor: "pointer", fontSize: "19px" }}
                    style={{
                      color: 'black',
                      cursor: 'pointer',
                      textDecoration: 'None',
                      transition: 'primary 0.3s',
                    }}><b> {teacher.ratingNumber8}  </b></NavLink>
                  <NavLink to='' sx={{ color: "black", cursor: "pointer", fontSize: "19px" }}
                    style={{
                      color: 'black',
                      cursor: 'pointer',
                      textDecoration: 'None',
                      transition: 'primary 0.3s',
                    }}><b> {teacher.ratingNumber9}  </b></NavLink>
                  <NavLink to='/HomeLanding/Test' sx={{ color: "black", cursor: "pointer", fontSize: "19px" }}
                    style={{
                      color: 'black',
                      cursor: 'pointer',
                      textDecoration: 'None',
                      transition: 'primary 0.3s',
                    }}><b> {teacher.ratingNumber10} </b> </NavLink>

                </Typography>
                {/* <Button
              component={RouterLink}
              href={path}
              color="inherit"
              endIcon={<Iconify icon="carbon:chevron-right" />}
              sx={{ mt: 5 }}
            >
              More Details
            </Button> */}
              </Stack>

              {/* <Stack spacing={0.5} direction="row" alignItems="center">
            <Iconify icon="carbon:star-filled" sx={{ color: 'warning.main' }} />
            <Box sx={{ typography: 'h6' }}>
              {Number.isInteger(teacher.ratingNumber)
                ? `${teacher.ratingNumber}.0`
                : teacher.ratingNumber}
            </Box>

            {teacher.totalReviews && (
              <Link variant="body2" sx={{ color: 'text.secondary' }}>
                ({fShortenNumber(teacher.totalReviews)} reviews)
              </Link>
            )}
          </Stack> */}

              {/* <Stack
            direction="row"
            alignItems="center"
            sx={{ typography: 'body2', color: 'text.disabled' }}
          >
            <Iconify icon="carbon:events" sx={{ mr: 1 }} />
            <Box component="strong" sx={{ mr: 0.25 }}>
              {fShortenNumber(teacher.totalStudents)}
            </Box>
            Students
          </Stack> */}

              {/* <Stack
            direction="row"
            alignItems="center"
            sx={{ typography: 'body2', color: 'text.disabled' }}
          >
            <Iconify icon="carbon:notebook" sx={{ mr: 1 }} />
            <Box component="strong" sx={{ mr: 0.25 }}>
              {teacher.totalCourses}
            </Box>
            Lessons
          </Stack> */}
            </Stack>

            {/* <NavLink
              style={{

                cursor: 'pointer',
                textDecoration: 'None',
                transition: 'primary 0.3s',
                color: "black",
                fontSize: "19px",


              }}


              to='/HomeLanding/Web'



            >
              <Typography variant='body3'>
                {teacher.ratingNumber1}
              </Typography>

            </NavLink>
            <NavLink
              style={{

                cursor: 'pointer',
                textDecoration: 'None',
                transition: 'primary 0.3s',
                color: "black",
                fontSize: "19px",


              }}


              to='/HomeLanding/Cus'



            >
              <Typography variant='body3'>
                {teacher.ratingNumber2}
              </Typography>

            </NavLink>
            <NavLink
              style={{

                cursor: 'pointer',
                textDecoration: 'None',
                transition: 'primary 0.3s',
                color: "black",
                fontSize: "19px",


              }}


              to='/HomeLanding/Dev'



            >
              <Typography variant='body3'>
                {teacher.ratingNumber3}
              </Typography>

            </NavLink>
            <NavLink
              style={{

                cursor: 'pointer',
                textDecoration: 'None',
                transition: 'primary 0.3s',
                color: "black",
                fontSize: "19px",


              }}


              to='/HomeLanding/App'



            >
              <Typography variant='body3'>
                {teacher.ratingNumber4}
              </Typography>

            </NavLink>
            <NavLink
              style={{

                cursor: 'pointer',
                textDecoration: 'None',
                transition: 'primary 0.3s',
                color: "black",
                fontSize: "19px",


              }}


              to='/HomeLanding/Digi'



            >
              <Typography variant='body3'>
                {teacher.ratingNumber5}
              </Typography>

            </NavLink>
            <NavLink
              style={{

                cursor: 'pointer',
                textDecoration: 'None',
                transition: 'primary 0.3s',
                color: "black",
                fontSize: "19px",


              }}


              to='/HomeLanding/Product'



            >
              <Typography variant='body3'>
                {teacher.ratingNumber6}
              </Typography>

            </NavLink>
            <NavLink
              style={{

                cursor: 'pointer',
                textDecoration: 'None',
                transition: 'primary 0.3s',
                color: "black",
                fontSize: "19px",


              }}


              to='/HomeLanding/Block'



            >
              <Typography variant='body3'>
                {teacher.ratingNumber7}
              </Typography>

            </NavLink>
            <Link
              style={{

                cursor: 'pointer',
                textDecoration: 'None',
                transition: 'primary 0.3s',
                color: "black",
                fontSize: "19px",


              }}


              to='/HomeLanding/UI'



            >
              <Typography variant='body3'>
                {teacher.ratingNumber8}
              </Typography>

            </Link>
            <NavLink
              style={{

                cursor: 'pointer',
                textDecoration: 'None',
                transition: 'primary 0.3s',
                color: "black",
                fontSize: "19px",


              }}


              to=''



            >
              <Typography variant='body3'>
                {teacher.ratingNumber9}
              </Typography>

            </NavLink>
            <NavLink
              style={{

                cursor: 'pointer',
                textDecoration: 'None',
                transition: 'primary 0.3s',
                color: "black",
                fontSize: "19px",


              }}


              to='/HomeLanding/Test'



            >
              <Typography variant='body3'>
                {teacher.ratingNumber10}
              </Typography>

            </NavLink> */}
            {/* <Button
              component={RouterLink}
              href={path}
              color="inherit"
              endIcon={<Iconify icon="carbon:chevron-right" />}
              sx={{ mt: 5 }}
            >
              More Details
            </Button> */}
          </Stack>

          {/* <Stack spacing={0.5} direction="row" alignItems="center">
            <Iconify icon="carbon:star-filled" sx={{ color: 'warning.main' }} />
            <Box sx={{ typography: 'h6' }}>
              {Number.isInteger(teacher.ratingNumber)
                ? `${teacher.ratingNumber}.0`
                : teacher.ratingNumber}
            </Box>

            {teacher.totalReviews && (
              <Link variant="body2" sx={{ color: 'text.secondary' }}>
                ({fShortenNumber(teacher.totalReviews)} reviews)
              </Link>
            )}
          </Stack> */}

          {/* <Stack
            direction="row"
            alignItems="center"
            sx={{ typography: 'body2', color: 'text.disabled' }}
          >
            <Iconify icon="carbon:events" sx={{ mr: 1 }} />
            <Box component="strong" sx={{ mr: 0.25 }}>
              {fShortenNumber(teacher.totalStudents)}
            </Box>
            Students
          </Stack> */}

          {/* <Stack
            direction="row"
            alignItems="center"
            sx={{ typography: 'body2', color: 'text.disabled' }}
          >
            <Iconify icon="carbon:notebook" sx={{ mr: 1 }} />
            <Box component="strong" sx={{ mr: 0.25 }}>
              {teacher.totalCourses}
            </Box>
            Lessons
          </Stack> */}
        </Stack>
      </Stack>
    </Paper>
  );
}

TeacherItem.propTypes = {
  teacher: PropTypes.shape({
    avatarUrl: PropTypes.string,
    name: PropTypes.string,
    role: PropTypes.string,
    totalCourses: PropTypes.number,
    ratingNumber1: PropTypes.number,
    ratingNumber2: PropTypes.number,
    ratingNumber3: PropTypes.number,
    ratingNumber4: PropTypes.number,
    ratingNumber5: PropTypes.number,
    ratingNumber6: PropTypes.number,
    ratingNumber7: PropTypes.number,
    ratingNumber8: PropTypes.number,
    ratingNumber9: PropTypes.number,
    ratingNumber10: PropTypes.number,
    totalReviews: PropTypes.number,
    totalStudents: PropTypes.number,
  }),
};
