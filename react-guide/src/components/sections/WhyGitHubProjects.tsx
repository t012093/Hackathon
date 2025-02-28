import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Divider,
  useTheme,
  alpha,
  Container,
} from '@mui/material';
import { motion } from 'framer-motion';
import ForumIcon from '@mui/icons-material/Forum';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WorkIcon from '@mui/icons-material/Work';
import BusinessIcon from '@mui/icons-material/Business';
import GitHubIcon from '@mui/icons-material/GitHub';

export const WhyGitHubProjects = () => {
  const theme = useTheme();

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };

  return (
    <Box 
      component="section" 
      py={8} 
      sx={{ 
        backgroundColor: alpha(theme.palette.primary.main, 0.03),
        borderRadius: 2,
      }}
    >
      <Container maxWidth="lg">
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            mb: 5 
          }}
          component={motion.div}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <GitHubIcon 
            sx={{ 
              fontSize: 40, 
              mr: 2, 
              color: theme.palette.primary.main 
            }} 
          />
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            なぜGitHub Projectsなのか
          </Typography>
        </Box>

        <Card
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          elevation={4}
          sx={{ 
            borderRadius: 3,
            overflow: 'hidden',
            boxShadow: `0 8px 24px ${alpha(theme.palette.primary.main, 0.1)}`
          }}
        >
          <CardContent sx={{ p: 4 }}>
            <Typography 
              variant="h4" 
              gutterBottom 
              sx={{ 
                fontWeight: 'bold',
                mb: 2,
                position: 'relative',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -8,
                  left: 0,
                  width: 100,
                  height: 4,
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: 2,
                }
              }}
            >
              プロジェクト管理のベストプラクティス
            </Typography>
            
            <Typography 
              variant="body1" 
              color="text.secondary" 
              paragraph
              sx={{ mb: 4, maxWidth: '90%', fontSize: '1.1rem' }}
            >
              GitHub Projectsは、現代のプロジェクト管理における理想的な選択肢です。
              以下の特長から、多くの組織で採用されています：
            </Typography>
            
            <Grid container spacing={4}>
              {[
                {
                  title: "コスト効率",
                  icon: <BusinessIcon sx={{ fontSize: 28 }} />,
                  items: [
                    { 
                      primary: "基本機能は無料で利用可能", 
                      secondary: "個人プランでもパブリック/プライベートリポジトリでコラボレーション可能" 
                    },
                    { 
                      primary: "充実した無料プラン", 
                      secondary: "Issueの作成・管理、プロジェクトボード、Wiki、2,000分/月のGitHub Actions、500MB/月のパッケージストレージなど、主要な機能が無料で利用可能です。" 
                    },
                    { 
                      primary: "追加のツール導入が不要", 
                      secondary: "GitHubの統合機能として利用可能" 
                    }
                  ]
                },
                {
                  title: "シームレスな開発連携",
                  icon: <WorkIcon sx={{ fontSize: 28 }} />,
                  items: [
                    { 
                      primary: "コードとタスクの直接的な紐付け", 
                      secondary: "コミット、Issue、PRとの自動連携"
                    },
                    { 
                      primary: "自動化されたステータス更新", 
                      secondary: "コードの変更に応じて自動反映"
                    },
                    { 
                      primary: "Pull Requestとの連動", 
                      secondary: "レビューやマージの進捗を自動追跡"
                    }
                  ]
                },
                {
                  title: "柔軟なコラボレーション",
                  icon: <ForumIcon sx={{ fontSize: 28 }} />,
                  items: [
                    { 
                      primary: "部門を超えた情報共有", 
                      secondary: "開発・企画・営業など全体で活用可能"
                    },
                    { 
                      primary: "カスタマイズ可能なビュー", 
                      secondary: "チーム別・役割別の表示切替が可能"
                    },
                    { 
                      primary: "豊富な連携機能", 
                      secondary: "Slack、TeamsなどのツールとAPI連携"
                    }
                  ]
                }
              ].map((section, i) => (
                <Grid item xs={12} md={4} key={section.title}>
                  <Paper 
                    elevation={2}
                    component={motion.div}
                    custom={i}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ 
                      y: -5,
                      boxShadow: `0 10px 30px ${alpha(theme.palette.primary.main, 0.2)}`,
                      transition: { duration: 0.3 }
                    }}
                    sx={{ 
                      p: 3, 
                      height: '100%',
                      borderRadius: 2,
                      border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <Box 
                      sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        mb: 2,
                        pb: 2,
                        borderBottom: `1px solid ${alpha(theme.palette.divider, 0.5)}`
                      }}
                    >
                      <Box 
                        sx={{ 
                          p: 1.5,
                          borderRadius: '50%',
                          backgroundColor: alpha(theme.palette.primary.main, 0.1),
                          display: 'flex',
                          mr: 2,
                          color: theme.palette.primary.main
                        }}
                      >
                        {section.icon}
                      </Box>
                      <Typography 
                        variant="h6"
                        fontWeight="bold"
                      >
                        {section.title}
                      </Typography>
                    </Box>
                    
                    <List sx={{ flexGrow: 1 }}>
                      {section.items.map((item, j) => (
                        <ListItem 
                          key={j} 
                          alignItems="flex-start" 
                          sx={{ px: 0, py: 1.5 }}
                        >
                          <ListItemIcon sx={{ minWidth: 36, mt: 0.5 }}>
                            <CheckCircleIcon 
                              color="primary" 
                              fontSize="small" 
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <Typography 
                                variant="subtitle1" 
                                fontWeight="medium"
                                sx={{ mb: 0.5 }}
                              >
                                {item.primary}
                              </Typography>
                            }
                            secondary={
                              <Typography 
                                variant="body2" 
                                color="text.secondary"
                              >
                                {item.secondary}
                              </Typography>
                            }
                            disableTypography
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Paper>
                </Grid>
              ))}
            </Grid>
            
            <Box 
              sx={{ 
                mt: 5, 
                py: 3, 
                px: 4, 
                backgroundColor: alpha(theme.palette.primary.main, 0.05),
                borderRadius: 2,
                borderLeft: `4px solid ${theme.palette.primary.main}`
              }}
              component={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <Typography 
                variant="body1" 
                color="text.primary"
                fontWeight="medium"
              >
                これらの特長により、GitHub Projectsはエンジニアリングチームだけでなく、
                組織全体のプロジェクト管理ツールとして最適な選択肢となっています。
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};