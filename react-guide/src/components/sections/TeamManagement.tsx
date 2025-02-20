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
  Stepper,
  Step,
  StepLabel,
  StepContent,
} from '@mui/material';
import { motion } from 'framer-motion';
import AddIcon from '@mui/icons-material/Add';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import ForumIcon from '@mui/icons-material/Forum';
import AssignmentIcon from '@mui/icons-material/Assignment';
import InsightsIcon from '@mui/icons-material/Insights';
import TaskIcon from '@mui/icons-material/Task';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ChatIcon from '@mui/icons-material/Chat';

export const TeamManagement = () => {
  const setupSteps = [
    {
      label: 'プロジェクトの作成',
      description: `
        1. GitHubのリポジトリページを開く
        2. "Projects"タブをクリック
        3. "New project"ボタンをクリック
        4. "Board"テンプレートを選択
        5. プロジェクト名を入力して作成
      `,
      icon: <AddIcon />,
    },
    {
      label: 'チームメンバーの招待',
      description: `
        1. プロジェクトの"Settings"を開く
        2. "Manage access"をクリック
        3. "Add collaborators"でメンバーを検索
        4. 権限レベルを選択して招待
      `,
      icon: <GroupAddIcon />,
    },
    {
      label: 'コミュニケーションルールの設定',
      description: `
        1. 朝会：1日の作業確認（10分）
        2. 夕会：進捗報告と課題共有（15分）
        3. 質問はIssueコメントで記録を残す
        4. ブロッカーは即座に共有
      `,
      icon: <ForumIcon />,
    },
  ];

  const templateTasks = [
    {
      category: 'タスク作成',
      tasks: [
        '目的と期待される成果を明確に記述',
        '完了条件を箇条書きで記載',
        '参考資料やリンクを添付',
      ],
      icon: <AssignmentIcon />,
    },
    {
      category: '進捗管理',
      tasks: [
        '作業開始時にステータスを"In Progress"に更新',
        '毎日の進捗をコメントで記録',
        'ブロッカーが発生したら"Blocked"ラベルを追加',
      ],
      icon: <InsightsIcon />,
    },
    {
      category: 'タスク完了',
      tasks: [
        '完了条件をすべて満たしているか確認',
        'ドキュメントの更新が必要か確認',
        'レビュワーに確認を依頼',
      ],
      icon: <TaskIcon />,
    },
  ];

  const communicationTips = [
    {
      title: '質問のコツ',
      items: [
        '現状と期待する結果を明確に説明',
        '試したことを具体的に記載',
        'エラーメッセージがあれば全文を共有',
      ],
    },
    {
      title: '進捗報告のポイント',
      items: [
        '完了したタスクを具体的に記載',
        '次に取り組むタスクを明示',
        'ブロッカーや懸念事項を共有',
      ],
    },
    {
      title: 'フィードバックの方法',
      items: [
        '具体的な改善点を提案',
        'ポジティブな部分も言及',
        '建設的な議論を心がける',
      ],
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
        チーム管理ガイド
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
                プロジェクトセットアップ手順
              </Typography>
              <Stepper orientation="vertical">
                {setupSteps.map((step) => (
                  <Step key={step.label} active={true}>
                    <StepLabel icon={step.icon}>{step.label}</StepLabel>
                    <StepContent>
                      <Typography color="text.secondary" sx={{ whiteSpace: 'pre-line' }}>
                        {step.description}
                      </Typography>
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
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
                タスク管理テンプレート
              </Typography>
              <Grid container spacing={3}>
                {templateTasks.map((template) => (
                  <Grid item xs={12} md={4} key={template.category}>
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
                        {template.icon}
                        <Typography variant="h6" ml={1}>
                          {template.category}
                        </Typography>
                      </Box>
                      <List dense>
                        {template.tasks.map((task) => (
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
            transition={{ delay: 0.4 }}
          >
            <CardContent>
              <Typography variant="h5" gutterBottom>
                効果的なコミュニケーション
              </Typography>
              <Grid container spacing={3}>
                {communicationTips.map((tip) => (
                  <Grid item xs={12} md={4} key={tip.title}>
                    <Paper elevation={3} sx={{ p: 2 }}>
                      <Box display="flex" alignItems="center" mb={2}>
                        <ChatIcon color="primary" />
                        <Typography variant="h6" ml={1}>
                          {tip.title}
                        </Typography>
                      </Box>
                      <List dense>
                        {tip.items.map((item) => (
                          <ListItem key={item}>
                            <ListItemIcon>
                              <CheckCircleIcon color="primary" fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary={item} />
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
      </Grid>
    </Box>
  );
};
