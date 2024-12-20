import { useState } from 'react';
import { Box } from '@/components/mui';
import MobileNavigation from '@/components/navigation/MobileNavigation';
import DesktopNavigation from '@/components/navigation/DesktopNavigation';

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Box component="header" sx={{ display: 'flex' }}>
      <MobileNavigation
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
      />
      <DesktopNavigation handleDrawerToggle={handleDrawerToggle} />
    </Box>
  );
}

export default Header;
