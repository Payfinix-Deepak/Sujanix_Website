import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';

import { useResponsive } from 'src/hooks/use-responsive';
import { useOffSetTop } from 'src/hooks/use-off-set-top';

import { bgBlur } from 'src/theme/css';

import NavMobile from './nav/mobile';
import NavDesktop from './nav/desktop';
import { HEADER } from '../config-layout';
import { navConfig3 } from './config-navigation3';
import HeaderShadow from '../common/header-shadow';

// import SettingsButton from '../common/settings-button';

// ----------------------------------------------------------------------

export default function UemHeader({ headerOnDark }) {
  const theme = useTheme();

  const offset = useOffSetTop();

  const mdUp = useResponsive('up', 'md');

  const renderContent = (
    <>
      {/* <Box sx={{ lineHeight: 0, position: 'relative' }}>
        <Logo />

        <Link href="https://zone-docs.vercel.app/changelog" target="_blank" rel="noopener">
          <Label
            color="info"
            sx={{
              ml: 0.5,
              px: 0.5,
              top: -14,
              left: 60,
              height: 20,
              fontSize: 11,
              cursor: 'pointer',
              position: 'absolute',
            }}
          >
          v2.3.0
          </Label>
        </Link>
      </Box> */}
      {/* <img style={{ width: '170px' }} src="" alt="logo" /> */}
      <NavLink to="/HexNode">
        {/* <svg
          width="120"
          height="100"
          viewBox="0 0 278 107"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0 C2.375 0.8125 2.375 0.8125 4.375 2.8125 C4.67797852 5.36279297 4.67797852 5.36279297 4.75390625 8.5546875 C4.80514648 10.27751953 4.80514648 10.27751953 4.85742188 12.03515625 C4.88384766 13.24042969 4.91027344 14.44570313 4.9375 15.6875 C4.99751467 18.05999467 5.06116458 20.43240089 5.12890625 22.8046875 C5.15283447 23.86026855 5.1767627 24.91584961 5.20141602 26.00341797 C5.40798775 29.49384995 5.40798775 29.49384995 6.375 32.8125 C9.96764452 34.01004817 12.60217474 34.14344958 16.375 33.8125 C19.28217073 31.59386971 20.21481643 30.29305071 21.375 26.8125 C21.48938025 25.00224663 21.5531223 23.18856645 21.5859375 21.375 C21.62847656 19.78558594 21.62847656 19.78558594 21.671875 18.1640625 C21.72395441 15.92985587 21.76822686 13.69545359 21.8046875 11.4609375 C21.835625 10.40132812 21.8665625 9.34171875 21.8984375 8.25 C21.91825684 7.27933594 21.93807617 6.30867188 21.95849609 5.30859375 C22.375 2.8125 22.375 2.8125 23.71337891 0.96484375 C25.375 -0.1875 25.375 -0.1875 28.4375 -0.0625 C31.375 0.8125 31.375 0.8125 33.375 3.8125 C33.64915466 5.7898407 33.64915466 5.7898407 33.68139648 8.06518555 C33.69738388 8.92005051 33.71337128 9.77491547 33.72984314 10.65568542 C33.73520584 11.57755142 33.74056854 12.49941742 33.74609375 13.44921875 C33.75963646 14.87933037 33.75963646 14.87933037 33.77345276 16.33833313 C33.7879669 18.35825457 33.79684488 20.37822315 33.80053711 22.39819336 C33.81238955 25.47136149 33.86152622 28.54249274 33.91210938 31.61523438 C33.92157901 33.5807194 33.92881146 35.54621673 33.93359375 37.51171875 C33.95312607 38.42346359 33.97265839 39.33520844 33.99278259 40.27458191 C33.94059249 47.75073886 31.4851925 52.40486706 26.49609375 57.87109375 C25.94050781 58.32613281 25.38492188 58.78117187 24.8125 59.25 C24.25433594 59.72308594 23.69617188 60.19617188 23.12109375 60.68359375 C18.76550389 63.49962388 13.37829598 63.38087442 8.375 62.8125 C2.10823193 61.03505363 -2.18201981 58.36569386 -5.625 52.8125 C-6.0625 49.5625 -6.0625 49.5625 -5.625 46.8125 C-3.625 44.8125 -3.625 44.8125 -0.6875 44.5 C2.375 44.8125 2.375 44.8125 4.25 46.1875 C5.375 47.8125 5.375 47.8125 5.375 49.8125 C9.08516634 50.99975323 12.50290678 51.15822261 16.375 50.8125 C18.73997439 48.94541495 20.03530715 47.49188569 21.375 44.8125 C20.51648438 45.05033203 20.51648438 45.05033203 19.640625 45.29296875 C13.32442488 46.74133878 7.83340581 46.27809531 2.1640625 43.08203125 C-2.25700151 39.94481334 -4.94207208 35.95750395 -6.625 30.8125 C-7.06682461 26.11282271 -6.99524833 21.40590772 -7 16.6875 C-7.02449219 15.39972656 -7.04898438 14.11195312 -7.07421875 12.78515625 C-7.07808594 11.55410156 -7.08195313 10.32304687 -7.0859375 9.0546875 C-7.09826416 7.36641846 -7.09826416 7.36641846 -7.11083984 5.64404297 C-6.625 2.8125 -6.625 2.8125 -4.76025391 0.91064453 C-2.625 -0.1875 -2.625 -0.1875 0 0 Z "
            fill="#5B5B5B"
            transform="translate(215.625,17.1875)"
          />
          <path
            d="M0 0 C2.3431213 0.25561323 4.67843403 0.59270772 7 1 C8.71456952 4.42913903 8.18502843 8.36223208 8.203125 12.13671875 C8.20882507 13.04952103 8.21452515 13.9623233 8.22039795 14.90278625 C8.2298562 16.83874348 8.2363852 18.77471686 8.24023438 20.71069336 C8.24990431 23.65833125 8.28090494 26.60526129 8.3125 29.55273438 C8.3190337 31.4348917 8.32428273 33.31705401 8.328125 35.19921875 C8.3404718 36.07551437 8.3528186 36.95181 8.36553955 37.85466003 C8.33556761 46.18268528 6.02814253 51.97185747 0 58 C-6.07936958 62.26098671 -13.02340405 63.78404082 -20.35546875 62.62890625 C-27.5074966 60.64701902 -32.76537458 56.24381109 -36.9375 50.1875 C-39.22352136 43.32943593 -39.79532165 36.99856809 -37.14453125 30.171875 C-33.94354218 24.09764317 -29.50566246 19.40426656 -23 17 C-16.35777911 15.12655308 -10.42567224 15.90182131 -4 18 C-3.96261719 17.03578125 -3.92523438 16.0715625 -3.88671875 15.078125 C-3.82097656 13.81484375 -3.75523437 12.5515625 -3.6875 11.25 C-3.60048828 9.37054687 -3.60048828 9.37054687 -3.51171875 7.453125 C-2.99544099 3.96923537 -2.3746744 2.52110204 0 0 Z M-25 31 C-27.37302167 33.92672672 -27.95966626 35.68309204 -28.4375 39.4375 C-27.81951598 44.46965563 -25.63311745 47.18542506 -22.3125 50.875 C-18.61367749 52.67442716 -15.03041366 52.52633309 -11 52 C-7.85152757 50.699544 -6.38259939 49.4485648 -4.1875 46.875 C-2.50881142 42.81080658 -2.07031105 39.32379148 -3 35 C-5.31872157 31.07713143 -7.64733482 28.45088839 -12 27 C-17.70005331 26.46225912 -20.60727556 27.30611808 -25 31 Z "
            fill="#5E5E5E"
            transform="translate(197,1)"
          />
          <path
            d="M0 0 C3.94620636 2.94399522 7.26293741 5.89440612 10 10 C10.375 13 10.375 13 10 16 C7.0739697 18.68161969 3.75677542 20.13099025 0.140625 21.69921875 C-0.97441406 22.18583984 -2.08945313 22.67246094 -3.23828125 23.17382812 C-4.39714844 23.67333984 -5.55601563 24.17285156 -6.75 24.6875 C-7.92433594 25.19861328 -9.09867188 25.70972656 -10.30859375 26.23632812 C-13.20372492 27.4955925 -16.10088002 28.74995275 -19 30 C-16.62839852 32.37160148 -15.99378878 32.31983352 -12.75 32.375 C-8.10369729 32.2556728 -5.54318775 31.13118917 -2 28 C-1.319375 26.948125 -0.63875 25.89625 0.0625 24.8125 C2 22 2 22 4.5 20.875 C7 21 7 21 9.375 22.5625 C11 25 11 25 11.1875 27.75 C8.51077458 35.07577482 2.89998833 39.74528852 -4 43 C-10.73356393 45.52508647 -17.67404984 43.84494285 -24 41 C-29.81369037 37.31054265 -32.80935759 32.51623294 -35 26 C-36.22777497 19.04920947 -35.06493337 13.35654827 -31.6171875 7.23046875 C-24.20217889 -2.99651172 -11.10431747 -6.04732279 0 0 Z M-22.375 13.4375 C-22.91125 14.283125 -23.4475 15.12875 -24 16 C-23.67 17.32 -23.34 18.64 -23 20 C-17.06 17.36 -11.12 14.72 -5 12 C-5 11.01 -5 10.02 -5 9 C-11.73317264 5.63341368 -17.59885618 8.53566819 -22.375 13.4375 Z "
            fill="#5E5E5E"
            transform="translate(95,20)"
          />
          <path
            d="M0 0 C5.79510967 4.92584322 8.71706694 9.96073213 9.71875 17.4609375 C9.93209505 21.00318854 9.9944959 24.53794131 10.03125 28.0859375 C10.06025391 29.02695312 10.08925781 29.96796875 10.11914062 30.9375 C10.18248751 37.79845534 10.18248751 37.79845534 7.859375 41.1171875 C5.71875 42.4609375 5.71875 42.4609375 3.15625 42.3359375 C0.71875 41.4609375 0.71875 41.4609375 -2.28125 39.4609375 C-4.25581894 40.18494611 -6.22851187 40.91642322 -8.17578125 41.7109375 C-14.33849661 43.90619047 -20.57514839 42.16276653 -26.28125 39.4609375 C-31.91440366 35.67650222 -35.89925564 31.23755897 -37.28125 24.4609375 C-37.96608972 15.86093097 -36.93789146 9.60119445 -31.46875 2.7109375 C-23.35150737 -6.25017689 -9.6725964 -6.85802941 0 0 Z M-24.28125 10.4609375 C-26.35816686 14.08131655 -27.53060589 17.49033328 -27 21.68359375 C-25.83719979 25.38655872 -24.46391867 27.29101316 -21.59375 29.9609375 C-17.57551165 31.78051713 -14.61318805 32.30830263 -10.28125 31.4609375 C-6.58819192 29.64924863 -4.70759399 28.06607091 -2.34375 24.7109375 C-1.00197994 20.60669965 -1.0240334 17.58087027 -2.28125 13.4609375 C-4.42831916 10.05524159 -6.38542103 7.65132968 -10.28125 6.4609375 C-16.25381249 5.88294758 -19.74043634 6.13132447 -24.28125 10.4609375 Z "
            fill="#5E5E5E"
            transform="translate(146.28125,21.5390625)"
          />
          <path
            d="M0 0 C4.83784861 1.29163883 7.12906002 3.48018313 10.57788086 6.98291016 C11.18946548 7.58638275 11.80105011 8.18985535 12.4311676 8.81161499 C13.71498734 10.08699875 14.99124368 11.37003614 16.26025391 12.66015625 C18.20288891 14.62740008 20.17775052 16.55748335 22.15795898 18.48681641 C23.40419511 19.73342296 24.64840794 20.98205618 25.89038086 22.23291016 C26.4808873 22.80610992 27.07139374 23.37930969 27.67979431 23.96987915 C30.45994589 26.84737676 31.65980424 28.49824032 32.52001953 32.49047852 C31.48127985 37.35515822 29.13618587 39.6323825 25.63647461 43.03369141 C25.00701935 43.66747208 24.37756409 44.30125275 23.72903442 44.95423889 C22.39742938 46.28622452 21.05709259 47.60953065 19.70874023 48.92456055 C17.64903891 50.93919981 15.62631092 52.98625495 13.60522461 55.03955078 C12.30520826 56.33134779 11.00318905 57.62113298 9.69897461 58.90869141 C9.09560272 59.52107162 8.49223083 60.13345184 7.87057495 60.76438904 C4.96018399 63.56370852 3.54594448 64.89982714 -0.55053711 65.46166992 C-3.23071289 65.00634766 -3.23071289 65.00634766 -5.04321289 63.81884766 C-6.56568677 61.49507173 -6.97347226 59.77290754 -7.23071289 57.00634766 C-6.09375 55.06689453 -6.09375 55.06689453 -4.32055664 53.22509766 C-3.67199707 52.53931641 -3.0234375 51.85353516 -2.35522461 51.14697266 C-1.65413574 50.44056641 -0.95304688 49.73416016 -0.23071289 49.00634766 C0.45619629 48.29994141 1.14310547 47.59353516 1.85083008 46.86572266 C3.9512373 44.72677138 6.07439289 42.61337945 8.20678711 40.50634766 C8.93833008 39.77931641 9.66987305 39.05228516 10.42358398 38.30322266 C12.20318535 36.53525267 13.98509629 34.76968388 15.76928711 33.00634766 C10.65175918 26.83307775 5.06792878 21.30377599 -0.74829102 15.79150391 C-1.78566406 14.78023437 -1.78566406 14.78023437 -2.84399414 13.74853516 C-3.47088135 13.14895996 -4.09776855 12.54938477 -4.74365234 11.93164062 C-6.55102912 9.59163516 -6.99731208 7.94011091 -7.23071289 5.00634766 C-5.24156784 1.19381964 -4.39226015 0.00862985 0 0 Z "
            fill="#5E5E5E"
            transform="translate(11.230712890625,6.99365234375)"
          />
          <path
            d="M0 0 C4.8691173 3.96323501 9.3970239 8.23046064 13.875 12.625 C14.45854248 13.18727295 15.04208496 13.7495459 15.64331055 14.32885742 C16.19156494 14.8726001 16.73981934 15.41634277 17.3046875 15.9765625 C18.0469458 16.70480225 18.0469458 16.70480225 18.80419922 17.44775391 C20.2392551 19.31057246 20.71101974 20.67149702 21 23 C19.85213059 25.24356294 18.7904233 27.2095767 17 29 C13.35518129 29.42463907 11.59691645 29.42927029 8.57470703 27.25585938 C7.81013184 26.45986328 7.04555664 25.66386719 6.2578125 24.84375 C5.41992188 23.98652344 4.58203125 23.12929687 3.71875 22.24609375 C2.8628125 21.33988281 2.006875 20.43367188 1.125 19.5 C0.24585938 18.59378906 -0.63328125 17.68757813 -1.5390625 16.75390625 C-3.70680245 14.51547913 -5.85933075 12.26427911 -8 10 C-5.95933017 5.73384496 -3.41446998 3.26601476 0 0 Z "
            fill="#F8B30A"
            transform="translate(47,43)"
          />
          <path
            d="M0 0 C2.08477638 1.43777681 2.81239178 2.59798239 3.875 4.875 C4.05721164 7.9725979 2.70650871 9.4476998 1 12 C-0.29092096 13.44509542 -1.63119983 14.84727201 -3.01171875 16.20703125 C-3.76904297 16.95791016 -4.52636719 17.70878906 -5.30664062 18.48242188 C-6.48516602 19.63581055 -6.48516602 19.63581055 -7.6875 20.8125 C-8.48478516 21.60076172 -9.28207031 22.38902344 -10.10351562 23.20117188 C-12.0645551 25.13872585 -14.03011881 27.07144276 -16 29 C-17.13199353 28.0919838 -18.25532363 27.17316174 -19.375 26.25 C-20.00148438 25.73953125 -20.62796875 25.2290625 -21.2734375 24.703125 C-23.08312318 22.91800519 -24.00117455 21.32050356 -25 19 C-21.98311311 15.80890733 -18.93275761 12.65191144 -15.875 9.5 C-14.59109375 8.14068359 -14.59109375 8.14068359 -13.28125 6.75390625 C-12.44335938 5.89667969 -11.60546875 5.03945312 -10.7421875 4.15625 C-9.9776123 3.36025391 -9.21303711 2.56425781 -8.42529297 1.74414062 C-5.39022738 -0.43851576 -3.66181489 -0.43924006 0 0 Z "
            fill="#F48512"
            transform="translate(64,7)"
          />
          <path
            d="M0 0 C0.99 0.99 1.98 1.98 3 3 C2 5 2 5 -1 7 C-0.01 7.66 0.98 8.32 2 9 C1.6875 10.9375 1.6875 10.9375 1 13 C0.01 13.33 -0.98 13.66 -2 14 C-0.7625 14.6496875 -0.7625 14.6496875 0.5 15.3125 C1.7375 16.1478125 1.7375 16.1478125 3 17 C3 17.99 3 18.98 3 20 C-1.25566547 21.16063604 -4.6835078 20.76173392 -9 20 C-8.814375 19.2575 -8.62875 18.515 -8.4375 17.75 C-8.00796892 15.05009037 -8.14877026 13.55368923 -9 11 C-8.01 10.34 -7.02 9.68 -6 9 C-6.99 8.01 -7.98 7.02 -9 6 C-8 3 -8 3 -6.15234375 2.05078125 C-5.42144531 1.80714844 -4.69054687 1.56351563 -3.9375 1.3125 C-3.20402344 1.06113281 -2.47054688 0.80976563 -1.71484375 0.55078125 C-0.86599609 0.27814453 -0.86599609 0.27814453 0 0 Z "
            fill="#6C6868"
            transform="translate(274,22)"
          />
          <path
            d="M0 0 C2.625 0.375 2.625 0.375 5 1 C5 1.99 5 2.98 5 4 C4.01 4 3.02 4 2 4 C4.62948691 7.87952544 4.62948691 7.87952544 8.75 9.8125 C9.4925 9.874375 10.235 9.93625 11 10 C10.67 7.36 10.34 4.72 10 2 C12.57547398 2.34339653 13.68894113 2.60006716 15.3125 4.6875 C16.22979703 7.77295365 15.82216447 9.91688325 15 13 C11.79745853 14.60127074 9.54685436 14.40701607 6 14 C1.89192244 11.65831476 -0.58568429 9.26731865 -2.0625 4.75 C-2 2 -2 2 0 0 Z "
            fill="#585454"
            transform="translate(262,54)"
          />
          <path
            d="M0 0 C3.6875 0.3125 3.6875 0.3125 6.125 2 C7.95777568 4.71250801 8.12122673 6.10292223 7.6875 9.3125 C6.6875 10.3125 6.6875 10.3125 3.375 10.5625 C-0.3125 10.3125 -0.3125 10.3125 -2.75 9.1875 C-4.3125 7.3125 -4.3125 7.3125 -4.625 4.1875 C-4.18178591 0.10993038 -4.17166109 0.39355293 0 0 Z M-1.3125 3.3125 C-0.9825 4.3025 -0.6525 5.2925 -0.3125 6.3125 C1.3375 6.6425 2.9875 6.9725 4.6875 7.3125 C4.0275 5.9925 3.3675 4.6725 2.6875 3.3125 C1.3675 3.3125 0.0475 3.3125 -1.3125 3.3125 Z "
            fill="#5D5959"
            transform="translate(269.3125,43.6875)"
          />
          <path
            d="M0 0 C1.32 0 2.64 0 4 0 C3.6875 1.9375 3.6875 1.9375 3 4 C2.01 4.33 1.02 4.66 0 5 C0.825 5.433125 1.65 5.86625 2.5 6.3125 C3.7375 7.1478125 3.7375 7.1478125 5 8 C5 8.99 5 9.98 5 11 C1.37 10.67 -2.26 10.34 -6 10 C-6 9.67 -6 9.34 -6 9 C-4.35 8.67 -2.7 8.34 -1 8 C-1.66 7.566875 -2.32 7.13375 -3 6.6875 C-3.66 6.130625 -4.32 5.57375 -5 5 C-5 4.01 -5 3.02 -5 2 C-3.35 1.67 -1.7 1.34 0 1 C0 0.67 0 0.34 0 0 Z "
            fill="#4B4848"
            transform="translate(272,31)"
          />
          <path
            d="M0 0 C0 0.99 0 1.98 0 3 C-0.99 3 -1.98 3 -3 3 C-1.75976392 6.72070823 -0.04269852 7.62521091 3 10 C3.99 11.485 3.99 11.485 5 13 C1.7 12.67 -1.6 12.34 -5 12 C-4.814375 11.2575 -4.62875 10.515 -4.4375 9.75 C-3.81104559 7.08065626 -3.81104559 7.08065626 -4.625 4.875 C-4.74875 4.25625 -4.8725 3.6375 -5 3 C-3.38441968 0.84589291 -2.74502455 0 0 0 Z "
            fill="#6F6B6B"
            transform="translate(270,30)"
          />
          <path
            d="M0 0 C2.57547398 0.34339653 3.68894113 0.60006716 5.3125 2.6875 C6.21465796 5.72203131 5.69345348 7.94880471 5 11 C4.34 10.67 3.68 10.34 3 10 C2.67 10 2.34 10 2 10 C0.66431979 9.67619874 -0.66923011 9.34342449 -2 9 C-1.01 8.67 -0.02 8.34 1 8 C0.67 5.36 0.34 2.72 0 0 Z "
            fill="#696565"
            transform="translate(272,56)"
          />
          <path
            d="M0 0 C0.33 0.66 0.66 1.32 1 2 C-0.98 2.66 -2.96 3.32 -5 4 C-4.67 4.66 -4.34 5.32 -4 6 C-5.32 6 -6.64 6 -8 6 C-8.5625 4.0625 -8.5625 4.0625 -9 2 C-6.95301586 -0.04698414 -2.69588759 0.29954307 0 0 Z "
            fill="#484545"
            transform="translate(274,24)"
          />
          <path
            d="M0 0 C0.598125 0.474375 1.19625 0.94875 1.8125 1.4375 C4.00382924 3.16465744 4.00382924 3.16465744 7 4 C7.33 3.34 7.66 2.68 8 2 C8 3.32 8 4.64 8 6 C5.69 5.67 3.38 5.34 1 5 C0.67 3.35 0.34 1.7 0 0 Z "
            fill="#504D4D"
            transform="translate(267,47)"
          />
          <path
            d="M0 0 C1.32 0.66 2.64 1.32 4 2 C3.67 2.66 3.34 3.32 3 4 C1.68 3.67 0.36 3.34 -1 3 C-0.67 2.01 -0.34 1.02 0 0 Z "
            fill="#676464"
            transform="translate(273,69)"
          />
        </svg> */}
        <svg
          width="70%"
          height="80%"
          viewBox="0 0 1932 465"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M129.667 84.9347C90.4667 93.3347 60.3333 121.068 48.0667 160.135C45 170.001 45 170.801 45 232.801C45 294.801 45 295.601 48.0667 305.468C59.6667 342.401 87.2667 369.068 124.067 379.068C138.467 382.935 164.6 382.935 179.667 378.935C193.267 375.335 206.6 368.801 218.333 359.735C228.467 352.001 241.4 337.468 245 329.868C249.4 320.668 245 309.335 236.2 307.468C229.267 305.868 223.8 308.935 217.933 317.335C200.733 341.735 173.533 355.201 145.667 353.068C114.333 350.668 87.1333 328.935 76.6 298.135L73 287.468V234.135C73 175.068 73.2667 173.201 81.4 156.135C88.3333 142.001 103.933 126.268 117.667 119.735C123.133 117.201 131 114.268 135.267 113.468C145 111.335 166.867 112.401 175.667 115.601C191.667 121.201 207 133.201 216.6 147.068C224.2 158.401 232.067 161.468 240.467 156.535C248.867 151.468 248.867 142.001 240.333 129.468C224.867 106.801 199.267 89.7347 172.6 84.668C160.333 82.4014 141 82.4014 129.667 84.9347Z"
            fill="#FF471A"
          />
          <path
            d="M352.999 160.268C314.466 169.735 284.199 199.201 272.066 239.068C269.266 248.401 269.133 251.468 268.599 309.735C268.199 364.001 268.333 371.068 270.333 374.801C273.933 381.868 284.866 384.401 290.999 379.735C297.133 374.935 296.999 376.268 297.666 312.268L298.333 251.468L301.933 241.735C308.733 223.068 321.133 208.001 337.933 197.735C347.933 191.735 358.466 188.268 372.866 186.268C387.399 184.268 390.599 182.801 393.133 176.535C395.799 170.401 394.466 165.068 389.399 160.801C385.933 157.868 384.333 157.468 374.599 157.601C368.599 157.601 358.866 158.801 352.999 160.268Z"
            fill="#CC2900"
          />
          <path
            d="M413.399 160.801C411.532 162.668 409.666 166.001 409.132 168.268C407.799 175.068 408.199 270.535 409.666 283.068C416.732 344.801 471.932 388.801 533.266 381.601C571.666 377.068 603.532 354.801 620.332 320.801C631.666 297.735 631.399 299.868 631.932 228.668L632.466 165.868L628.599 161.735C625.266 158.135 623.666 157.468 618.599 157.468C611.266 157.468 606.332 161.068 604.332 167.868C603.532 170.935 602.999 194.001 602.999 227.068C602.999 260.935 602.466 284.001 601.532 288.401C600.732 292.268 597.666 300.535 594.732 306.668C587.532 321.868 572.332 337.201 557.532 344.535C525.132 360.401 487.932 354.268 462.466 328.668C453.132 319.335 445.532 307.201 441.399 294.801C438.599 286.535 438.466 283.735 438.066 228.135C437.799 196.268 437.266 168.668 436.999 167.068C434.866 157.735 420.199 153.868 413.399 160.801Z"
            fill="#FF471A"
          />
          <path
            d="M668.333 158.935C661.267 161.735 657.933 171.868 661.933 179.201C662.733 180.801 682.867 201.868 706.6 226.001L749.933 269.868L736.733 283.335C729.533 290.801 709.533 311.201 692.2 328.801C660.333 361.201 658.467 363.601 660.067 371.468C661.4 379.068 672.6 384.801 679.267 381.335C681 380.535 702.333 360.001 726.733 335.735L771 291.468L815.4 335.735C839.667 360.001 861 380.535 862.733 381.335C869.267 384.668 880.867 378.801 881.933 371.735C883.267 362.801 882.733 362.268 836.867 316.135C812.333 291.468 792.333 270.801 792.333 270.135C792.333 269.335 810.733 250.535 833.133 228.135C855.533 205.735 875.667 185.068 877.8 182.268C883 175.201 883.267 166.801 878.2 162.135C874.2 158.401 867.4 156.668 862.733 158.135C861.133 158.668 839.667 179.335 815.4 204.001L771 248.801L728.067 205.468C704.467 181.601 683.667 161.068 681.8 159.868C677.933 157.201 673.4 156.935 668.333 158.935Z"
            fill="#FF471A"
          />
          <path
            d="M1141.17 153.364H1150.19V192.587C1150.19 196.761 1149.21 200.459 1147.25 203.682C1145.29 206.885 1142.54 209.409 1138.98 211.253C1135.43 213.078 1131.27 213.99 1126.49 213.99C1121.74 213.99 1117.58 213.078 1114.03 211.253C1110.48 209.409 1107.72 206.885 1105.76 203.682C1103.8 200.459 1102.82 196.761 1102.82 192.587V153.364H1111.82V191.859C1111.82 194.558 1112.41 196.955 1113.59 199.052C1114.8 201.148 1116.49 202.799 1118.69 204.002C1120.88 205.186 1123.48 205.778 1126.49 205.778C1129.52 205.778 1132.13 205.186 1134.32 204.002C1136.54 202.799 1138.23 201.148 1139.39 199.052C1140.58 196.955 1141.17 194.558 1141.17 191.859V153.364ZM1211.41 153.364V213H1203.14L1172.83 169.263H1172.27V213H1163.28V153.364H1171.6L1201.95 197.159H1202.5V153.364H1211.41ZM1233.53 153.364V213H1224.54V153.364H1233.53ZM1246.64 213V153.364H1283.62V161.109H1255.64V179.28H1280.97V186.996H1255.64V213H1246.64ZM1303.68 153.364V213H1294.68V153.364H1303.68ZM1316.79 213V153.364H1354.18V161.109H1325.78V179.28H1352.22V186.996H1325.78V205.254H1354.52V213H1316.79ZM1385.5 213H1366.19V153.364H1386.11C1391.96 153.364 1396.97 154.558 1401.17 156.945C1405.36 159.314 1408.57 162.721 1410.81 167.166C1413.06 171.592 1414.18 176.902 1414.18 183.094C1414.18 189.307 1413.05 194.645 1410.78 199.11C1408.52 203.575 1405.26 207.011 1400.99 209.418C1396.72 211.806 1391.56 213 1385.5 213ZM1375.19 205.138H1385.01C1389.55 205.138 1393.32 204.284 1396.33 202.575C1399.34 200.848 1401.59 198.353 1403.09 195.092C1404.58 191.811 1405.33 187.812 1405.33 183.094C1405.33 178.416 1404.58 174.446 1403.09 171.185C1401.61 167.923 1399.41 165.448 1396.48 163.759C1393.55 162.07 1389.91 161.226 1385.56 161.226H1375.19V205.138ZM1447.07 213V153.364H1484.46V161.109H1456.07V179.28H1482.51V186.996H1456.07V205.254H1484.81V213H1447.07ZM1544.62 153.364V213H1536.35L1506.03 169.263H1505.48V213H1496.48V153.364H1504.81L1535.15 197.159H1535.71V153.364H1544.62ZM1577.05 213H1557.74V153.364H1577.66C1583.5 153.364 1588.52 154.558 1592.71 156.945C1596.91 159.314 1600.12 162.721 1602.35 167.166C1604.6 171.592 1605.73 176.902 1605.73 183.094C1605.73 189.307 1604.59 194.645 1602.32 199.11C1600.07 203.575 1596.81 207.011 1592.54 209.418C1588.27 211.806 1583.1 213 1577.05 213ZM1566.74 205.138H1576.55C1581.09 205.138 1584.87 204.284 1587.88 202.575C1590.89 200.848 1593.14 198.353 1594.64 195.092C1596.13 191.811 1596.88 187.812 1596.88 183.094C1596.88 178.416 1596.13 174.446 1594.64 171.185C1593.16 167.923 1590.96 165.448 1588.03 163.759C1585.09 162.07 1581.45 161.226 1577.11 161.226H1566.74V205.138ZM1616.92 213V153.364H1638.18C1642.82 153.364 1646.66 154.208 1649.71 155.897C1652.76 157.586 1655.04 159.896 1656.55 162.827C1658.06 165.739 1658.82 169.02 1658.82 172.67C1658.82 176.339 1658.05 179.639 1656.52 182.57C1655.01 185.482 1652.72 187.792 1649.65 189.501C1646.6 191.19 1642.77 192.034 1638.15 192.034H1623.53V184.405H1637.33C1640.26 184.405 1642.64 183.9 1644.47 182.891C1646.29 181.862 1647.63 180.464 1648.48 178.697C1649.34 176.931 1649.77 174.922 1649.77 172.67C1649.77 170.418 1649.34 168.418 1648.48 166.671C1647.63 164.924 1646.28 163.555 1644.44 162.565C1642.61 161.575 1640.2 161.08 1637.22 161.08H1625.92V213H1616.92ZM1721.17 183.182C1721.17 189.549 1720.01 195.024 1717.68 199.605C1715.35 204.167 1712.16 207.681 1708.1 210.146C1704.06 212.592 1699.47 213.815 1694.33 213.815C1689.16 213.815 1684.55 212.592 1680.49 210.146C1676.46 207.681 1673.27 204.157 1670.94 199.576C1668.61 194.995 1667.45 189.53 1667.45 183.182C1667.45 176.814 1668.61 171.35 1670.94 166.788C1673.27 162.206 1676.46 158.692 1680.49 156.246C1684.55 153.781 1689.16 152.548 1694.33 152.548C1699.47 152.548 1704.06 153.781 1708.1 156.246C1712.16 158.692 1715.35 162.206 1717.68 166.788C1720.01 171.35 1721.17 176.814 1721.17 183.182ZM1712.26 183.182C1712.26 178.329 1711.48 174.242 1709.9 170.923C1708.35 167.584 1706.22 165.06 1703.5 163.352C1700.8 161.624 1697.74 160.76 1694.33 160.76C1690.89 160.76 1687.82 161.624 1685.12 163.352C1682.43 165.06 1680.29 167.584 1678.72 170.923C1677.16 174.242 1676.39 178.329 1676.39 183.182C1676.39 188.035 1677.16 192.131 1678.72 195.47C1680.29 198.79 1682.43 201.313 1685.12 203.041C1687.82 204.75 1690.89 205.604 1694.33 205.604C1697.74 205.604 1700.8 204.75 1703.5 203.041C1706.22 201.313 1708.35 198.79 1709.9 195.47C1711.48 192.131 1712.26 188.035 1712.26 183.182ZM1741.39 153.364V213H1732.39V153.364H1741.39ZM1802.63 153.364V213H1794.36L1764.04 169.263H1763.49V213H1754.49V153.364H1762.82L1793.16 197.159H1793.72V153.364H1802.63ZM1812.81 161.109V153.364H1858.97V161.109H1840.36V213H1831.39V161.109H1812.81ZM1102.82 252.364H1113.74L1132.72 298.722H1133.42L1152.41 252.364H1163.33V312H1154.77V268.845H1154.21L1136.62 311.913H1129.52L1111.93 268.816H1111.38V312H1102.82V252.364ZM1181.45 312H1171.9L1193.36 252.364H1203.75L1225.21 312H1215.66L1198.8 263.196H1198.34L1181.45 312ZM1183.05 288.646H1214.03V296.217H1183.05V288.646ZM1281.96 252.364V312H1273.69L1243.38 268.263H1242.82V312H1233.83V252.364H1242.15L1272.5 296.159H1273.05V252.364H1281.96ZM1300.12 312H1290.57L1312.03 252.364H1322.43L1343.89 312H1334.34L1317.48 263.196H1317.01L1300.12 312ZM1301.72 288.646H1332.71V296.217H1301.72V288.646ZM1390.06 271.204C1389.49 269.437 1388.74 267.855 1387.79 266.457C1386.85 265.04 1385.74 263.837 1384.44 262.847C1383.14 261.837 1381.65 261.07 1379.98 260.546C1378.33 260.022 1376.52 259.76 1374.54 259.76C1371.18 259.76 1368.15 260.624 1365.45 262.352C1362.75 264.079 1360.62 266.613 1359.05 269.952C1357.49 273.271 1356.72 277.338 1356.72 282.153C1356.72 286.987 1357.5 291.073 1359.07 294.412C1360.65 297.751 1362.8 300.284 1365.54 302.012C1368.28 303.74 1371.39 304.604 1374.89 304.604C1378.13 304.604 1380.95 303.944 1383.36 302.624C1385.79 301.304 1387.66 299.44 1388.98 297.033C1390.32 294.606 1390.99 291.752 1390.99 288.472L1393.32 288.908H1376.26V281.483H1399.7V288.268C1399.7 293.276 1398.63 297.625 1396.49 301.313C1394.38 304.982 1391.45 307.817 1387.7 309.816C1383.97 311.816 1379.7 312.815 1374.89 312.815C1369.49 312.815 1364.75 311.573 1360.68 309.088C1356.62 306.603 1353.45 303.08 1351.18 298.518C1348.91 293.936 1347.78 288.501 1347.78 282.211C1347.78 277.455 1348.44 273.184 1349.76 269.398C1351.08 265.613 1352.93 262.4 1355.32 259.76C1357.73 257.1 1360.55 255.072 1363.79 253.674C1367.05 252.257 1370.62 251.548 1374.48 251.548C1377.7 251.548 1380.7 252.024 1383.48 252.975C1386.27 253.926 1388.76 255.276 1390.93 257.023C1393.12 258.77 1394.94 260.847 1396.38 263.254C1397.81 265.642 1398.78 268.292 1399.29 271.204H1390.06ZM1411.12 312V252.364H1448.51V260.109H1420.12V278.28H1446.56V285.996H1420.12V304.254H1448.86V312H1411.12ZM1460.53 252.364H1471.45L1490.43 298.722H1491.13L1510.12 252.364H1521.04V312H1512.48V268.845H1511.92L1494.33 311.913H1487.23L1469.64 268.816H1469.09V312H1460.53V252.364ZM1534.12 312V252.364H1571.51V260.109H1543.12V278.28H1569.56V285.996H1543.12V304.254H1571.86V312H1534.12ZM1631.66 252.364V312H1623.39L1593.08 268.263H1592.52V312H1583.53V252.364H1591.85L1622.2 296.159H1622.75V252.364H1631.66ZM1641.85 260.109V252.364H1688V260.109H1669.39V312H1660.42V260.109H1641.85Z"
            fill="#FF471A"
          />
          <rect x="982.266" y="69" width="14" height="327" rx="7" fill="#FF471A" />{' '}
        </svg>
      </NavLink>

      {/* <Stack flexGrow={1} alignItems="center" sx={{ height: 1, padding: "1rem" }}>
        <NavDesktop data={navConfig} />
      </Stack> */}

      {mdUp ? (
        <Stack flexGrow={1} alignItems="center" sx={{ height: 1 }}>
          <NavDesktop data={navConfig3} />
        </Stack>
      ) : (
        <Box sx={{ flexGrow: 1 }} />
      )}

      <Stack spacing={2} direction="row" alignItems="center" justifyContent="flex-end">
        {/* <Stack spacing={1} direction="row" alignItems="center">
          <Searchbar />

          <SettingsButton />
        </Stack> */}

        {/* {mdUp && (
          <Button
            variant="contained"
            color="inherit"
            href="/HomeLanding/Contact"
            target="_blank"
            rel="noopener"
          >
            BOOK A CALL
          </Button>
        )} */}
      </Stack>

      {!mdUp && <NavMobile data={navConfig3} />}
    </>
  );

  return (
    <AppBar>
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
          transition: theme.transitions.create(['height', 'background-color'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(headerOnDark && {
            color: 'common.white',
          }),
          ...(offset && {
            ...bgBlur({ color: theme.palette.background.default }),
            color: 'text.primary',
            height: {
              md: HEADER.H_DESKTOP - 16,
            },
          }),
        }}
      >
        <Container
          sx={{
            height: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {renderContent}
        </Container>
      </Toolbar>

      {offset && <HeaderShadow />}
    </AppBar>
  );
}

UemHeader.propTypes = {
  headerOnDark: PropTypes.bool,
};
