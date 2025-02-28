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
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import { motion } from 'framer-motion';
import GroupsIcon from '@mui/icons-material/Groups';
import TimelineIcon from '@mui/icons-material/Timeline';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PersonIcon from '@mui/icons-material/Person';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CodeIcon from '@mui/icons-material/Code';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

export const HackathonGuide = () => {
  const roles = [
    {
      title: 'プロダクトオーナー',
      icon: <PersonIcon />,
      description: 'プロジェクトの方向性を決定し、優先順位をつける役割',
      tasks: [
        'プロジェクトのゴール設定',
        'タスクの優先順位付け',
        'ステークホルダーとの調整',
      ],
    },
    {
      title: 'プロジェクトマネージャー',
      icon: <TimelineIcon />,
      description: 'プロジェクトの進行を管理し、チームをサポートする役割',
      tasks: [
        'スケジュール管理',
        'タスクの割り当て',
        'ブロッカーの解消',
      ],
    },
    {
      title: 'デザイナー',
      icon: <DesignServicesIcon />,
      description: 'UIデザインとユーザー体験を担当する役割',
      tasks: [
        'ワイヤーフレーム作成',
        'UI/UXデザイン',
        'プロトタイプ作成',
      ],
    },
    {
      title: 'エンジニア',
      icon: <CodeIcon />,
      description: '技術的な実装を担当する役割',
      tasks: [
        'コーディング',
        'テスト',
        '技術的な検証',
      ],
    },
  ];

  const schedule = [
    {
      time: '1日目 19:00-19:15',
      title: 'オープニング',
      description: '講座の概要説明、講師紹介、参加者自己紹介',
    },
    {
      time: '1日目 19:15-20:00',
      title: 'GitHub Projectsの基本',
      description: 'GitHub Projectsの基本的な使い方を解説',
    },
    {
      time: '1日目 20:00-20:30',
      title: '質疑応答',
      description: 'GitHub Projectsに関する質問を受け付け',
    },
    {
      time: '2日目 19:00-19:15',
      title: '前回の復習',
      description: 'GitHub Projectsの基本的な使い方を復習',
    },
    {
      time: '2日目 19:15-20:00',
      title: 'Clineを活用したGitHub Projectsの応用',
      description: 'Clineを活用したGitHub Projectsの効率的な管理方法',
    },
    {
      time: '2日目 20:00-20:30',
      title: '質疑応答',
      description: '演習結果の発表、フィードバック',
    },
  ];

  return (
    <Box component="section" mb={6}>
      <Typography
        variant="h2"
        component={motion.h2}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        mb={4}
      >
        ハッカソンガイド
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Card
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <CardContent>
              <Typography variant="h5" gutterBottom>
                チーム編成とロール
              </Typography>
              <Grid container spacing={3}>
                {roles.map((role) => (
                  <Grid item xs={12} md={3} key={role.title}>
                    <Paper
                      elevation={3}
                      sx={{
                        p: 2,
                        height: '100%',
                        transition: 'transform 0.2s',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                        },
                      }}
                    >
                      <Box display="flex" alignItems="center" mb={2}>
                        {role.icon}
                        <Typography variant="h6" ml={1}>
                          {role.title}
                        </Typography>
                      </Box>
                      <Typography color="text.secondary" paragraph>
                        {role.description}
                      </Typography>
                      <List dense>
                        {role.tasks.map((task) => (
                          <ListItem key={task}>
                            <ListItemIcon>
                              <CheckCircleIcon color="primary" fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary={task} />
                          </ListItem>
                        ))}
                      </List>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <CardContent>
              <Typography variant="h5" gutterBottom>
                タイムテーブル
              </Typography>
              <Timeline position="alternate">
                {schedule.map((item, index) => (
                  <TimelineItem key={item.time}>
                    <TimelineSeparator>
                      <TimelineDot color="primary" />
                      {index < schedule.length - 1 && <TimelineConnector />}
                    </TimelineSeparator>
                    <TimelineContent>
                      <Paper
                        elevation={3}
                        sx={{
                          p: 2,
                          backgroundColor: 'background.default',
                        }}
                      >
                        <Typography variant="h6">{item.time}</Typography>
                        <Typography variant="subtitle1" color="primary">
                          {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.description}
                        </Typography>
                      </Paper>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <CardContent>
              <Typography variant="h5" gutterBottom>
                AIによる効率化提案
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={3}>
                  <Paper elevation={3} sx={{ p: 2 }}>
                    <Box display="flex" alignItems="center" mb={2}>
                      <SmartToyIcon color="primary" />
                      <Typography variant="h6" ml={1}>
                        タスク分析と最適化
                      </Typography>
                    </Box>
                    <List dense>
                      <ListItem>
                        <ListItemIcon>
                          <CheckCircleIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="タスクの自動分類・優先順位付け" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <CheckCircleIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="工数予測の自動化" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <CheckCircleIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="リソース配分の最適化提案" />
                      </ListItem>
                    </List>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Paper elevation={3} sx={{ p: 2 }}>
                    <Box display="flex" alignItems="center" mb={2}>
                      <AutoGraphIcon color="primary" />
                      <Typography variant="h6" ml={1}>
                        進捗管理の自動化
                      </Typography>
                    </Box>
                    <List dense>
                      <ListItem>
                        <ListItemIcon>
                          <CheckCircleIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="リアルタイム進捗トラッキング" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <CheckCircleIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="ボトルネック検出" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <CheckCircleIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="予実管理の自動化" />
                      </ListItem>
                    </List>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Paper elevation={3} sx={{ p: 2 }}>
                    <Box display="flex" alignItems="center" mb={2}>
                      <FormatListBulletedIcon color="primary" />
                      <Typography variant="h6" ml={1}>
                        ドキュメント生成
                      </Typography>
                    </Box>
                    <List dense>
                      <ListItem>
                        <ListItemIcon>
                          <CheckCircleIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="議事録の自動作成" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <CheckCircleIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="進捗レポートの自動生成" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <CheckCircleIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="技術文書の下書き生成" />
                      </ListItem>
                    </List>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Paper elevation={3} sx={{ p: 2 }}>
                    <Box display="flex" alignItems="center" mb={2}>
                      <AutoAwesomeIcon color="primary" />
                      <Typography variant="h6" ml={1}>
                        クリエイティブ支援
                      </Typography>
                    </Box>
                    <List dense>
                      <ListItem>
                        <ListItemIcon>
                          <CheckCircleIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="アイデア出しの補助" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <CheckCircleIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="デザイン案の自動生成" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <CheckCircleIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="コード補完と提案" />
                      </ListItem>
                    </List>
                  </Paper>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <CardContent>
              <Typography variant="h5" gutterBottom>
                評価基準
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <Paper elevation={3} sx={{ p: 2 }}>
                    <Box display="flex" alignItems="center" mb={2}>
                      <EmojiEventsIcon color="primary" />
                      <Typography variant="h6" ml={1}>
                        技術面（30点）
                      </Typography>
                    </Box>
                    <List dense>
                      <ListItem>
                        <ListItemIcon>
                          <CheckCircleIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Clineの効果的な活用" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <CheckCircleIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="GitHub Projectsの活用度" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <CheckCircleIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="実装の完成度" />
                      </ListItem>
                    </List>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Paper elevation={3} sx={{ p: 2 }}>
                    <Box display="flex" alignItems="center" mb={2}>
                      <GroupsIcon color="primary" />
                      <Typography variant="h6" ml={1}>
                        チーム運営（40点）
                      </Typography>
                    </Box>
                    <List dense>
                      <ListItem>
                        <ListItemIcon>
                          <CheckCircleIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="タスク管理の適切さ" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <CheckCircleIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="コミュニケーションの円滑さ" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <CheckCircleIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="役割分担の明確さ" />
                      </ListItem>
                    </List>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Paper elevation={3} sx={{ p: 2 }}>
                    <Box display="flex" alignItems="center" mb={2}>
                      <AssessmentIcon color="primary" />
                      <Typography variant="h6" ml={1}>
                        プレゼン（30点）
                      </Typography>
                    </Box>
                    <List dense>
                      <ListItem>
                        <ListItemIcon>
                          <CheckCircleIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="デモの分かりやすさ" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <CheckCircleIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="発表の明確さ" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <CheckCircleIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="質疑応答の対応" />
                      </ListItem>
                    </List>
                  </Paper>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
