import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Tabs,
  Tab,
  Divider,
  Chip,
  Button,
  TextField,
  IconButton,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import TaskIcon from '@mui/icons-material/Task';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DoneIcon from '@mui/icons-material/Done';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

const CommandBox = ({ command }: { command: string }) => {
  const [copied, setCopied] = useState(false);
  const theme = useTheme();

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Box
      sx={{
        backgroundColor: 'grey.900',
        color: 'grey.100',
        p: 2,
        borderRadius: 1,
        fontFamily: 'monospace',
        position: 'relative',
        mb: 2,
        border: `1px solid ${theme.palette.primary.main}20`,
      }}
    >
      <Typography variant="body2" component="code">
        {command}
      </Typography>
      <IconButton
        size="small"
        onClick={handleCopy}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: copied ? 'primary.main' : 'grey.100',
        }}
      >
        {copied ? <DoneIcon /> : <ContentCopyIcon />}
      </IconButton>
    </Box>
  );
};

export const IssueManagement = () => {
  const [tabValue, setTabValue] = useState(0);
  const theme = useTheme();

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box component="section" mb={6}>
      <Typography
        variant="h2"
        component={motion.h2}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        mb={4}
        sx={{
          color: 'primary.main',
          borderBottom: `2px solid ${theme.palette.primary.main}20`,
          pb: 1,
        }}
      >
        Issue管理とプロジェクトボード
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'primary.light' }}>
        <Tabs 
          value={tabValue} 
          onChange={handleTabChange} 
          aria-label="issue management tabs"
          sx={{
            '& .MuiTab-root': {
              color: 'text.secondary',
              '&.Mui-selected': {
                color: 'primary.main',
              },
            },
            '& .MuiTabs-indicator': {
              backgroundColor: 'primary.main',
            },
          }}
        >
          <Tab icon={<TaskIcon />} label="Issue作成" />
          <Tab icon={<LocalOfferIcon />} label="ラベル管理" />
          <Tab icon={<AssignmentIcon />} label="プロジェクトボード" />
        </Tabs>
      </Box>

      <TabPanel value={tabValue} index={0}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                '&:hover': {
                  boxShadow: `0 4px 20px ${theme.palette.primary.main}20`,
                  transform: 'translateY(-2px)',
                },
                transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
              }}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom color="primary">
                  CLIでIssueを作成
                </Typography>
                <CommandBox command="gh issue create --title 'タスクのタイトル' --body '詳細な説明' --label 'bug' --assignee '@me'" />
                <Typography variant="body2" color="text.secondary" paragraph>
                  基本的なIssue作成コマンド。タイトル、説明、ラベル、担当者を指定できます。
                </Typography>
                <CommandBox command="gh issue create --project 'プロジェクト名' --milestone 'v1.0'" />
                <Typography variant="body2" color="text.secondary">
                  プロジェクトやマイルストーンを指定したIssue作成も可能です。
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                '&:hover': {
                  boxShadow: `0 4px 20px ${theme.palette.primary.main}20`,
                  transform: 'translateY(-2px)',
                },
                transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
              }}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom color="primary">
                  Issue操作コマンド
                </Typography>
                <CommandBox command="gh issue list --state open --label bug --assignee @me" />
                <Typography variant="body2" color="text.secondary" paragraph>
                  自分に割り当てられた未解決のバグIssueを一覧表示します。
                </Typography>
                <CommandBox command="gh issue close 123 --comment '修正完了しました'" />
                <Typography variant="body2" color="text.secondary">
                  Issue番号を指定して、コメントと共にクローズできます。
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={tabValue} index={1}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                '&:hover': {
                  boxShadow: `0 4px 20px ${theme.palette.primary.main}20`,
                  transform: 'translateY(-2px)',
                },
                transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
              }}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom color="primary">
                  ラベルの作成と管理
                </Typography>
                <Box display="flex" gap={1} flexWrap="wrap" mb={2}>
                  <Chip label="bug" color="error" />
                  <Chip label="enhancement" color="primary" />
                  <Chip label="documentation" color="info" />
                  <Chip label="help wanted" color="success" />
                </Box>
                <CommandBox command="gh label create bug --color FF0000 --description 'バグ報告'" />
                <Typography variant="body2" color="text.secondary">
                  新しいラベルをCLIで作成できます。色や説明を指定可能です。
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                '&:hover': {
                  boxShadow: `0 4px 20px ${theme.palette.primary.main}20`,
                  transform: 'translateY(-2px)',
                },
                transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
              }}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom color="primary">
                  ラベル操作
                </Typography>
                <CommandBox command="gh label list" />
                <Typography variant="body2" color="text.secondary" paragraph>
                  既存のラベル一覧を表示します。
                </Typography>
                <CommandBox command="gh issue edit 123 --add-label 'priority-high'" />
                <Typography variant="body2" color="text.secondary">
                  既存のIssueにラベルを追加できます。
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={tabValue} index={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card
              component={motion.div}
              whileHover={{ y: -4 }}
              sx={{
                height: '100%',
                '&:hover': {
                  boxShadow: `0 4px 20px ${theme.palette.primary.main}20`,
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom color="primary">
                  ToDo
                </Typography>
                <Box
                  sx={{
                    backgroundColor: (theme) => theme.palette.background.default,
                    p: 2,
                    borderRadius: 1,
                    minHeight: 200,
                    border: `1px dashed ${theme.palette.primary.main}20`,
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    ドラッグ＆ドロップでカードを移動できます
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card
              component={motion.div}
              whileHover={{ y: -4 }}
              sx={{
                height: '100%',
                '&:hover': {
                  boxShadow: `0 4px 20px ${theme.palette.primary.main}20`,
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom color="primary">
                  進行中
                </Typography>
                <Box
                  sx={{
                    backgroundColor: (theme) => theme.palette.background.default,
                    p: 2,
                    borderRadius: 1,
                    minHeight: 200,
                    border: `1px dashed ${theme.palette.primary.main}20`,
                  }}
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card
              component={motion.div}
              whileHover={{ y: -4 }}
              sx={{
                height: '100%',
                '&:hover': {
                  boxShadow: `0 4px 20px ${theme.palette.primary.main}20`,
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom color="primary">
                  完了
                </Typography>
                <Box
                  sx={{
                    backgroundColor: (theme) => theme.palette.background.default,
                    p: 2,
                    borderRadius: 1,
                    minHeight: 200,
                    border: `1px dashed ${theme.palette.primary.main}20`,
                  }}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box mt={4}>
          <Typography 
            variant="h6" 
            gutterBottom 
            sx={{
              color: 'primary.main',
              borderLeft: '4px solid',
              borderLeftColor: 'primary.main',
              pl: 2,
            }}
          >
            プロジェクトボード操作
          </Typography>
          <CommandBox command="gh project create 'プロジェクト名' --body '説明文'" />
          <Typography variant="body2" color="text.secondary" paragraph>
            新しいプロジェクトボードを作成します。
          </Typography>
          <CommandBox command="gh issue edit 123 --project 'プロジェクト名'" />
          <Typography variant="body2" color="text.secondary">
            Issueをプロジェクトボードに追加します。
          </Typography>
        </Box>
      </TabPanel>
    </Box>
  );
};
