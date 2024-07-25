import React, { useState, useCallback } from 'react';

import { Tab,Box,Tabs, Container,  Typography } from '@mui/material';

import EcommerceProductItemBestSellers from '../product/item/ecommerce-product-item-best-sellers';
// Adjust the import based on your file structure

const TABS = ['Featured Products', 'Best Sellers', 'New Arrivals', 'Sale']; // Example tabs

const products = [
  // Example product data with categories
  { id: 1, name: 'Product 1', category: 'Featured Products' },
  { id: 2, name: 'Product 2', category: 'Best Sellers' },
  { id: 3, name: 'Product 3', category: 'New Arrivals' },
  { id: 4, name: 'Product 4', category: 'Sale' },
  { id: 5, name: 'Product 5', category: 'Featured Products' },
  { id: 6, name: 'Product 6', category: 'Best Sellers' },
  { id: 7, name: 'Product 7', category: 'New Arrivals' },
  { id: 8, name: 'Product 8', category: 'Sale' },
  // Add more products as needed
];

export default function EcommerceLandingPopularProducts() {
  const [tab, setTab] = useState('Featured Products');

  const handleChangeTab = useCallback((event, newValue) => {
    setTab(newValue);
  }, []);

  // Filter products based on the selected tab
  const filteredProducts = products.filter((product) => product.category === tab);

  return (
    <Container
      sx={{
        py: { xs: 5, md: 8 },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        Popular Products
      </Typography>

      <Tabs
        value={tab}
        scrollButtons="auto"
        variant="scrollable"
        allowScrollButtonsMobile
        onChange={handleChangeTab}
        sx={{ my: 5 }}
      >
        {TABS.map((category) => (
          <Tab key={category} value={category} label={category} />
        ))}
      </Tabs>

      <Box
        gap={3}
        display="grid"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(4, 1fr)',
        }}
      >
        {filteredProducts.slice(0, 8).map((product) => (
          <EcommerceProductItemBestSellers key={product.id} product={product} />
        ))}
      </Box>
    </Container>
  );
}
