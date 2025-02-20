import { Box, Container, ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from '../theme';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        sx={{
          minHeight: '100vh',
          backgroundColor: 'background.default',
          py: 4,
        }}
      >
        <Container maxWidth="lg">{children}</Container>
      </Box>
    </ThemeProvider>
  );
};
