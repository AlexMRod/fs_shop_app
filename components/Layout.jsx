import React from 'react';
import { Typography, Container, Box } from '@/components/mui';
import Header from '@/components/Header'

export default function Layout({ children }) {
  return (
    <Box>
      <Header />
      <Container>{children}</Container>
    </Box>
  );
}
