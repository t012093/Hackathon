import { Layout } from './components/Layout';
import { SlideShowSection } from './components/sections/SlideShowSection';
import { PersonalProjectManagement } from './components/sections/PersonalManagement';
import { ToolSetup } from './components/sections/ToolSetup';
import { ClineSetup } from './components/sections/ClineSetup';
import { HackathonGuide } from './components/sections/HackathonGuide';
import { WhyGitHubProjects } from './components/sections/WhyGitHubProjects';
import { GitHubPresentation } from './components/sections/github-presentation';
import { TroubleshootingGuide } from './components/sections/TroubleshootingGuide';
import { PracticalGuide } from './components/sections/PracticalGuide';
import { VisualGuide } from './components/sections/VisualGuide';
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';

function App() {
  return (
    <>
      <AppBar position="fixed" color="transparent" sx={{ backdropFilter: 'blur(8px)' }}>
        <Toolbar>
          <GitHubIcon sx={{ mr: 2 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            GitHub Projects & Cline ガイド
          </Typography>
          <Button
            variant="contained"
            href="https://github.com"
            target="_blank"
            startIcon={<GitHubIcon />}
          >
            GitHub
          </Button>
        </Toolbar>
      </AppBar>
      <Layout>
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          sx={{ pt: 8 }}
        >
          <SlideShowSection />
          <WhyGitHubProjects />
          <GitHubPresentation />
          <HackathonGuide />
          <PersonalProjectManagement />
          <VisualGuide />
          <PracticalGuide />
          <ToolSetup />
          <ClineSetup />
          <TroubleshootingGuide />

          <Box
            component={motion.footer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            sx={{ textAlign: 'center', py: 4, mt: 6 }}
          >
            <Typography variant="body2" color="text.secondary">
              © 2024 GitHub Projects & Cline Guide
            </Typography>
          </Box>
        </Box>
      </Layout>
    </>
  );
}

export default App;
