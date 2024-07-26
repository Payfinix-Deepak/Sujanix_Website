import PropTypes from 'prop-types';
import { useState, useEffect,useCallback } from 'react';

import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import ListSubheader from '@mui/material/ListSubheader';

import { usePathname } from 'src/routes/hooks';
import { useActiveLink } from 'src/routes/hooks/use-active-link';

import { useBoolean } from 'src/hooks/use-boolean';

import Label from 'src/components/label';

import NavItem from './nav-item';

// ----------------------------------------------------------------------

export default function NavList({ data }) {
  const pathname = usePathname();
  const menuOpen = useBoolean();
  const active = useActiveLink(data.path, !!data.children);
  const mainList = data.children ? data.children.filter((list) => list.subheader !== 'Common') : [];
 

  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    if (menuOpen.value) {
      menuOpen.onFalse();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpenMenu = useCallback(
    (event) => {
      if (data.children) {
        setAnchorEl(event.currentTarget);
        menuOpen.onTrue();
      }
    },
    [data.children, menuOpen]
  );

  return (
    <Box>
      <NavItem
        open={menuOpen.value}
        onMouseEnter={handleOpenMenu}
        onMouseLeave={menuOpen.onFalse}
        title={data.title}
        path={data.path}
        active={active}
        hasChild={!!data.children}
        externalLink={data.path.includes('http')}
      />

      <Popper
        open={menuOpen.value}
        anchorEl={anchorEl}
        placement="bottom-start"
        transition
        onMouseEnter={menuOpen.onTrue}
        onMouseLeave={menuOpen.onFalse}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps}>
            <Paper
              sx={{
                width: 'auto',
                minWidth: 0,
                maxWidth: 'fit-content',
                borderRadius: 0,
                bgcolor: 'background.default',
                zIndex: (theme) => theme.zIndex.modal,
                boxShadow: (theme) => theme.customShadows.dialog,
                marginTop: '0.5rem',
              }}
            >
              <Box
                sx={{
                  p: 2,
                  bgcolor: '#fff',
                  cursor: 'pointer',
                }}
              >
                <Grid container spacing={2} direction="column">
                  {mainList.map((list) => (
                    <Grid item xs={12} key={list.subheader}>
                      <NavSubList
                        subheader={list.subheader}
                        items={list.items}
                        isNew={list.isNew}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Paper>
          </Fade>
        )}
      </Popper>
    </Box>
  );
}

NavList.propTypes = {
  data: PropTypes.object,
};

// ----------------------------------------------------------------------

function NavSubList({ subheader, isNew, items }) {
  const pathname = usePathname();

  return (
    <Grid container spacing={2} alignItems="flex-start">
      <Grid item xs={12}>
        <ListSubheader
          sx={{
            p: 0,
            typography: 'h6',
            color: 'text.primary',
            bgcolor: 'transparent',
          }}
        >
          {subheader}
          {isNew && (
            <Label color="info" sx={{ ml: 1 }}>
              NEW
            </Label>
          )}
        </ListSubheader>
      </Grid>
      <Grid item xs={12}>
        <Stack
          spacing={1.5}
          alignItems="flex-start"
          sx={{ flexDirection: 'column', flexWrap: 'wrap' }}
        >
          {items.map((item) => {
            const active = pathname === item.path || pathname === `${item.path}/`;

            return (
              <NavItem
                key={item.title}
                title={item.title}
                path={item.path}
                active={active}
                subItem
              />
            );
          })}
        </Stack>
      </Grid>
    </Grid>
  );
}

NavSubList.propTypes = {
  isNew: PropTypes.bool,
  items: PropTypes.array,
  subheader: PropTypes.string,
};
