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
import WorkIcon from '@mui/icons-material/Work';
import BusinessIcon from '@mui/icons-material/Business';
import BrushIcon from '@mui/icons-material/Brush';

export const TeamManagement = () => {
  const setupSteps = [
    {
      label: 'プロジェクトの作成',
      description: `
        1. GitHubのリポジトリページを開く
        2. "Projects"タブをクリック
        3. "New project"ボタンをクリック
        4. 目的に合わせたテンプレートを選択
           • Table: データ重視の管理に最適
           • Board: カンバン方式の視覚的な管理
           • Roadmap: 長期的なスケジュール管理
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
        4. 以下の権限レベルを選択して招待
           • Admin: プロジェクト設定の変更が可能
           • Write: タスクの作成・編集が可能
           • Read: 閲覧のみ可能
      `,
      icon: <GroupAddIcon />,
    },
    {
      label: 'コミュニケーションルールの設定',
      description: `
        1. 定例ミーティング
           • 朝会：今日の目標確認（10-15分）
           • 週次：進捗確認と計画調整（30-60分）
           • 月次：成果報告と戦略レビュー
        2. 非同期コミュニケーション
           • 重要な決定事項はIssueで記録
           • ステータス更新は毎日実施
           • ブロッカーは即座に共有
      `,
      icon: <ForumIcon />,
    },
  ];

  const roleTasks = [
    {
      category: 'プロジェクト管理者',
      tasks: [
        'プロジェクトのゴール設定と共有',
        'タスクの優先順位付けとアサイン',
        '進捗モニタリングとリスク管理',
        'チーム間の連携促進',
      ],
      icon: <BusinessIcon />,
    },
    {
      category: '制作チーム',
      tasks: [
        'デザイン/コンテンツの作成',
        'レビュー依頼と修正対応',
        '品質基準の遵守',
        '納期管理と進捗報告',
      ],
      icon: <BrushIcon />,
    },
    {
      category: 'ビジネスチーム',
      tasks: [
        '要件定義と仕様確認',
        'スケジュール調整と予算管理',
        'ステークホルダーとの調整',
        '成果物の検収と評価',
      ],
      icon: <WorkIcon />,
    },
  ];

  const templateTasks = [
    {
      category: 'タスク作成のポイント',
      tasks: [
        '目的と期待される成果を明確に記述',
        '担当者と期限を明確に設定',
        '必要なリソースと参考情報を添付',
      ],
      icon: <AssignmentIcon />,
    },
    {
      category: '進捗管理の基本',
      tasks: [
        '作業開始時にステータスを更新',
        '定期的な進捗報告の実施',
        '課題発生時の早期共有',
      ],
      icon: <InsightsIcon />,
    },
    {
      category: 'タスク完了の確認',
      tasks: [
        '成果物の品質チェック実施',
        '関連ドキュメントの更新確認',
        '承認者による最終確認',
      ],
      icon: <TaskIcon />,
    },
  ];

  const communicationTips = [
    {
      title: 'プロジェクトの可視化',
      items: [
        '進捗状況をダッシュボードで共有',
        'マイルストーンの達成状況を明確に',
        'リスクと課題を早期に特定',
      ],
    },
    {
      title: 'チーム間連携の促進',
      items: [
        '定期的な情報共有の場を設定',
        '部門を越えた協力体制の構築',
        '成功事例と学びの共有',
      ],
    },
    {
      title: '効果的なフィードバック',
      items: [
        '具体的な改善提案を心がける',
        '成果を適切に評価し共有',
        '建設的な対話の促進',
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
                プロジェクトセットアップ
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
          >
            <CardContent>
              <Typography variant="h5" gutterBottom>
                効率的なプロジェクト管理
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                GitHub Projectsでは、1つのプロジェクトボード内で複数のチームを効率的に管理できます。
                カスタムフィールドやビュー機能を活用することで、チームごとの進捗を明確に把握できます。
              </Typography>
              <Box
                component="img"
                src="/src/assets/images/guide/project-grouping.svg"
                alt="GitHub Projectsのグルーピング機能を活用したプロジェクト管理"
                sx={{
                  width: '100%',
                  maxWidth: 800,
                  height: 'auto',
                  my: 2,
                  display: 'block',
                  mx: 'auto'
                }}
              />
              <Grid container spacing={3} sx={{ mt: 2 }}>
                <Grid item xs={12} md={4}>
                  <Paper elevation={3} sx={{ p: 2 }}>
                    <Typography variant="h6" gutterBottom>
                      カスタムフィールドの活用
                    </Typography>
                    <List dense>
                      <ListItem>
                        <ListItemIcon>
                          <CheckCircleIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="チーム/部門を示すフィールド作成" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <CheckCircleIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="ラベルによる色分け表示" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <CheckCircleIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="優先度や進捗状況の管理" />
                      </ListItem>
                    </List>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Paper elevation={3} sx={{ p: 2 }}>
                    <Typography variant="h6" gutterBottom>
                      ビューの使い分け
                    </Typography>
                    <List dense>
                      <ListItem>
                        <ListItemIcon>
                          <CheckCircleIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="チーム別のフィルタリング" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <CheckCircleIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="ボード/テーブル形式の切替" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <CheckCircleIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="マイルストーン別の進捗表示" />
                      </ListItem>
                    </List>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Paper elevation={3} sx={{ p: 2 }}>
                    <Typography variant="h6" gutterBottom>
                      グルーピング機能
                    </Typography>
                    <List dense>
                      <ListItem>
                        <ListItemIcon>
                          <CheckCircleIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="チーム別のグループ化" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <CheckCircleIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="状態×チームのマトリックス表示" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <CheckCircleIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="優先度に基づく整理" />
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
          >
            <CardContent>
              <Typography variant="h5" gutterBottom>
                柔軟なプロジェクト管理構造
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                GitHub Projectsは、様々な部門やロールに対応できる柔軟な管理構造を提供します。
                以下の図は、異なるチーム構成でのプロジェクト管理の例を示しています。
              </Typography>
              <Box
                component="img"
                src="/src/assets/images/guide/team-structure.svg"
                alt="GitHub Projectsを活用したチーム構成と管理フロー"
                sx={{
                  width: '100%',
                  maxWidth: 800,
                  height: 'auto',
                  my: 2,
                  display: 'block',
                  mx: 'auto'
                }}
              />
              <Typography variant="body2" paragraph>
                このように、GitHub Projectsは従来のエンジニアリングチームだけでなく、
                様々な部門やロールのチームメンバーが効率的に協働できる環境を提供します。
              </Typography>
              <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
                効率的なチームコラボレーション
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                GitHub Projectsは、様々なチーム間のコミュニケーションと情報共有を円滑にします。
                以下の図は、異なるチーム間でのコラボレーションの仕組みを示しています。
              </Typography>
              <Box
                component="img"
                src="/src/assets/images/guide/team-workflow.svg"
                alt="GitHub Projectsを活用したチーム間コラボレーション"
                sx={{
                  width: '100%',
                  maxWidth: 800,
                  height: 'auto',
                  my: 2,
                  display: 'block',
                  mx: 'auto'
                }}
              />
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
                チーム別の役割と責任
              </Typography>
              <Grid container spacing={3}>
                {roleTasks.map((role) => (
                  <Grid item xs={12} md={4} key={role.category}>
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
                          {role.category}
                        </Typography>
                      </Box>
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
            transition={{ delay: 0.3 }}
          >
            <CardContent>
              <Typography variant="h5" gutterBottom>
                タスク管理の基本
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
                効果的なプロジェクト運営
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
