import PropTypes from 'prop-types';

import Link from '@mui/material/Link';
import Masonry from '@mui/lab/Masonry';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { alpha, styled } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import Button, { buttonClasses } from '@mui/material/Button';

import { usePathname } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';

import { useBoolean } from 'src/hooks/use-boolean';
import { useResponsive } from 'src/hooks/use-responsive';

import { _socials } from 'src/_mock';

import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';

import { pageLinks, navConfig } from './config-navigation';

// ----------------------------------------------------------------------

const StyledAppStoreButton = styled(Button)(({ theme }) => ({
  flexShrink: 0,
  padding: '5px 12px',
  color: theme.palette.common.white,
  border: `solid 1px ${alpha(theme.palette.common.black, 0.24)}`,
  background: `linear-gradient(180deg, ${theme.palette.grey[900]} 0%, ${theme.palette.common.black} 100%)`,
  [`& .${buttonClasses.startIcon}`]: {
    marginLeft: 0,
  },
}));

// ----------------------------------------------------------------------

export default function Footer() {
  const mdUp = useResponsive('up', 'md');

  const pathname = usePathname();

  const mobileList = navConfig.find((i) => i.title === 'Pages')?.children || [];

  const desktopList = pageLinks.sort((listA, listB) => Number(listA.order) - Number(listB.order));

  const renderLists = mdUp ? desktopList : mobileList;

  const isHome = pathname === '/';

  const simpleFooter = (
    <Container sx={{ py: 8, textAlign: 'center' }}>
      <Logo single />

      <Typography variant="caption" component="div" sx={{ color: 'text.secondary' }}>
        © 2023. All rights reserved
      </Typography>
    </Container>
  );

  const mainFooter = (
    <>
      <Divider />

      <Container
        sx={{
          overflow: 'hidden',
          py: { xs: 8, md: 10 },
        }}
      >
        <Grid container spacing={3} justifyContent={{ md: 'space-between' }}>
          <Grid xs={12} md={4}>
            <Stack spacing={{ xs: 3, md: 5 }}>
              <Stack alignItems="flex-start" spacing={3}>
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

                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  The starting point for your next project based on easy-to-customize Material-UI ©
                  helps you build apps faster and better.
                </Typography>
              </Stack>

              <Stack spacing={1} alignItems="flex-start">
                <Typography variant="h6">Community</Typography>
                <Link variant="body2" sx={{ color: 'text.primary' }}>
                  Documentation
                </Link>

                <Link variant="body2" sx={{ color: 'text.primary' }}>
                  Changelog
                </Link>

                <Link variant="body2" sx={{ color: 'text.primary' }}>
                  Contributing
                </Link>
              </Stack>

              <Stack spacing={2}>
                <Stack spacing={1}>
                  <Typography variant="h6">Let’s stay in touch</Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    Ubscribe to our newsletter to receive latest articles to your inbox weekly.
                  </Typography>
                </Stack>

                <TextField
                  fullWidth
                  hiddenLabel
                  placeholder="Email address"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Button variant="contained" color="inherit" size="large" sx={{ mr: -1.25 }}>
                          Subscribe
                        </Button>
                      </InputAdornment>
                    ),
                  }}
                />
              </Stack>

              <Stack spacing={2}>
                <Typography variant="h6">Social</Typography>
                <Stack direction="row" alignItems="center">
                  {_socials.map((social) => (
                    <IconButton key={social.value} color="primary">
                      <Iconify icon={social.icon} />
                    </IconButton>
                  ))}
                </Stack>
              </Stack>

              <Stack spacing={2}>
                <Typography variant="h6">Apps</Typography>
                <AppStoreButton />
              </Stack>
            </Stack>
          </Grid>

          <Grid xs={12} md={6}>
            {mdUp ? (
              <Masonry columns={4} spacing={2} defaultColumns={4} defaultSpacing={2}>
                {renderLists.map((list) => (
                  <ListDesktop key={list.subheader} list={list} />
                ))}
              </Masonry>
            ) : (
              <Stack spacing={1.5}>
                {renderLists.map((list) => (
                  <ListMobile key={list.subheader} list={list} />
                ))}
              </Stack>
            )}
          </Grid>
        </Grid>
      </Container>

      <Divider />

      <Container>
        <Stack
          spacing={2.5}
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          sx={{ py: 3, textAlign: 'center' }}
        >
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            © 2023. All rights reserved
          </Typography>

          <Stack direction="row" spacing={3} justifyContent="center">
            <Link variant="caption" sx={{ color: 'text.secondary' }}>
              Help Center
            </Link>

            <Link variant="caption" sx={{ color: 'text.secondary' }}>
              Terms of Service
            </Link>
          </Stack>
        </Stack>
      </Container>
    </>
  );

  return <footer>{isHome ? simpleFooter : mainFooter}</footer>;
}

// ----------------------------------------------------------------------

export function ListDesktop({ list }) {
  const pathname = usePathname();

  return (
    <Stack spacing={1.5} alignItems="flex-start">
      <Typography variant="subtitle2">{list.subheader}</Typography>

      {list.items?.map((link) => {
        const active = pathname === link.path || pathname === `${link.path}/`;

        return (
          <Link
            component={RouterLink}
            key={link.title}
            href={link.path}
            variant="caption"
            sx={{
              color: 'text.secondary',
              '&:hover': {
                color: 'text.primary',
              },
              ...(active && {
                color: 'text.primary',
                fontWeight: 'fontWeightSemiBold',
              }),
            }}
          >
            {link.title}
          </Link>
        );
      })}
    </Stack>
  );
}

ListDesktop.propTypes = {
  list: PropTypes.shape({
    items: PropTypes.array,
    subheader: PropTypes.string,
  }),
};

// ----------------------------------------------------------------------

export function ListMobile({ list }) {
  const pathname = usePathname();

  const listExpand = useBoolean();

  return (
    <Stack spacing={1.5} alignItems="flex-start">
      <Typography
        variant="subtitle2"
        onClick={listExpand.onToggle}
        sx={{
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
        }}
      >
        {list.subheader}
        <Iconify
          width={16}
          icon={listExpand.value ? 'carbon:chevron-down' : 'carbon:chevron-right'}
          sx={{ ml: 0.5 }}
        />
      </Typography>

      <Collapse in={listExpand.value} unmountOnExit sx={{ width: 1 }}>
        <Stack spacing={1.5} alignItems="flex-start">
          {list.items?.map((link) => (
            <Link
              component={RouterLink}
              key={link.title}
              href={link.path}
              variant="caption"
              sx={{
                color: 'text.secondary',
                '&:hover': {
                  color: 'text.primary',
                },
                ...(pathname === `${link.path}/` && {
                  color: 'text.primary',
                  fontWeight: 'fontWeightSemiBold',
                }),
              }}
            >
              {link.title}
            </Link>
          ))}
        </Stack>
      </Collapse>
    </Stack>
  );
}

ListMobile.propTypes = {
  list: PropTypes.shape({
    items: PropTypes.array,
    subheader: PropTypes.string,
  }),
};

// ----------------------------------------------------------------------

function AppStoreButton({ ...other }) {
  return (
    <Stack direction="row" flexWrap="wrap" spacing={2} {...other}>
      <StyledAppStoreButton startIcon={<Iconify icon="ri:apple-fill" width={28} />}>
        <Stack alignItems="flex-start">
          <Typography variant="caption" sx={{ opacity: 0.72 }}>
            Download on the
          </Typography>

          <Typography variant="h6" sx={{ mt: -0.5 }}>
            Apple Store
          </Typography>
        </Stack>
      </StyledAppStoreButton>

      <StyledAppStoreButton startIcon={<Iconify icon="logos:google-play-icon" width={28} />}>
        <Stack alignItems="flex-start">
          <Typography variant="caption" sx={{ opacity: 0.72 }}>
            Download from
          </Typography>

          <Typography variant="h6" sx={{ mt: -0.5 }}>
            Google Play
          </Typography>
        </Stack>
      </StyledAppStoreButton>
    </Stack>
  );
}
