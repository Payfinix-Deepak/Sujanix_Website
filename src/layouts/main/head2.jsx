// import PropTypes from 'prop-types';

// import Box from '@mui/material/Box';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Container from '@mui/material/Container';
// import { useTheme } from '@mui/material/styles';

// import { useResponsive } from 'src/hooks/use-responsive';
// import { useOffSetTop } from 'src/hooks/use-off-set-top';

// import { bgBlur } from 'src/theme/css';
// import sujanix_name from 'src/Images/sujanix_name.png';

// import NavMobile from './nav/mobile';
// import NavDesktop from './nav/desktop';
// import { HEADER } from '../config-layout';
// import { navConfig3 } from './config-navigation3';
// import HeaderShadow from '../common/header-shadow';

// // ----------------------------------------------------------------------

// export default function Head2({ headerOnDark }) {
//   const theme = useTheme();

//   const offset = useOffSetTop();

//   const mdUp = useResponsive('up', 'md');

//   const renderContent = (
//     <>



//       {mdUp ? (
//         <Box
//           sx={{
//             flexGrow: 1,
//             display: 'flex',
//             justifyContent: 'flex-end',
//             marginLeft: '30rem',
//           }}
//         >
//           <NavDesktop data={navConfig3} />
//         </Box>
//       ) : (
//         <Box sx={{ flexGrow: 1 }} />
//       )}

//       {!mdUp && <NavMobile data={navConfig3} />}
//     </>
//   );

//   return (
//     <AppBar>
//       <Toolbar
//         disableGutters
//         sx={{
//           height: {
//             xs: HEADER.H_MOBILE,
//             md: HEADER.H_DESKTOP,
//           },
//           transition: theme.transitions.create(['height', 'background-color'], {
//             easing: theme.transitions.easing.easeInOut,
//             duration: theme.transitions.duration.shorter,
//           }),
//           ...(headerOnDark && {
//             color: 'common.white',
//           }),
//           ...(offset && {
//             ...bgBlur({ color: theme.palette.background.default }),
//             color: 'text.primary',
//             height: {
//               md: HEADER.H_DESKTOP - 16,
//             },
//           }),
//         }}
//       >
//         <Container
//           sx={{
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
            
       
            
//           }}
//         >
         
//           {renderContent}
//         </Container>
//       </Toolbar>

//       {offset && <HeaderShadow />}
//     </AppBar>
//   );
// }

// Head2.propTypes = {
//   headerOnDark: PropTypes.bool,
// };
