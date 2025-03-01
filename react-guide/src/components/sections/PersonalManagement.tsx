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
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import ScheduleIcon from '@mui/icons-material/Schedule';
import FilterListIcon from '@mui/icons-material/FilterList';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import BuildIcon from '@mui/icons-material/Build';

  
  export const PersonalProjectManagement = () => {
    const setupSteps = [
      {
        label: '個人用プロジェクトの作成',
        description: `
          1. GitHubのプロファイルページを開く
          2. "Projects"タブを選択
          3. "New project"ボタンをクリック
          4. 個人の作業スタイルに合わせたテンプレートを選択
             • Table: シンプルなタスク管理向け
             • Board: 視覚的な進捗管理向け
             • Roadmap: 長期的な計画管理向け
          5. プロジェクト名を入力して作成
        `,
        icon: <AddIcon />,
      },
      {
        label: '作業の構造化',
        description: `
          1. Issueベースの管理設定
             • バックログ: 未着手のIssue
             • 進行中: 作業中のIssue
             • 完了: クローズされたIssue
          2. カスタムフィールドの活用
             • 優先度（高/中/低）
             • 見積時間（1h/4h/1dなど）
             • ラベル（バグ/機能/ドキュメントなど）
          3. マイルストーンとプロジェクトの連携
        `,
        icon: <FilterListIcon />,
      },
      {
        label: '習慣化と振り返り',
        description: `
          1. 日次計画
             • 朝：今日のタスク確認と優先順位付け
             • 夕：完了タスクの更新と明日の準備
          2. 週次振り返り
             • 完了タスクの確認と進捗分析
             • 翌週の計画調整
             • 習慣や方法の改善点抽出
          3. 月次レビュー
             • 大きな目標に対する進捗確認
             • 優先事項の再設定
        `,
        icon: <ScheduleIcon />,
      },
    ];
  
    const useCases = [
      {
        category: '学習管理',
        tasks: [
          'コース進捗のマイルストーン設定',
          '学習トピックのカンバンボード管理',
          '教材と参考リンクの整理',
          '学習成果物の記録',
        ],
        icon: <MenuBookIcon />,
      },
      {
        category: '副業・フリーランス',
        tasks: [
          'クライアント別プロジェクト管理',
          '請求・支払い状況のトラッキング',
          '納期と優先順位の可視化',
          'ポートフォリオ素材の蓄積',
        ],
        icon: <BuildIcon />,
      },
      {
        category: '自己啓発',
        tasks: [
          '目標設定と細分化',
          '習慣化したいタスクのトラッキング',
          '定期的な振り返りと改善',
          '成長記録の蓄積',
        ],
        icon: <TrendingUpIcon />,
      },
    ];
  
    const productivityTips = [
      {
        title: 'タイムブロッキング',
        items: [
          'タスクに集中時間枠を設定',
          '類似タスクをまとめて処理',
          'ポモドーロテクニックの活用',
        ],
      },
      {
        title: '優先順位付け',
        items: [
          '重要×緊急マトリックスの活用',
          '3タスク集中法の実践',
          '小さな完了可能単位に分解',
        ],
      },
      {
        title: 'モチベーション維持',
        items: [
          '達成状況の可視化',
          'マイルストーン達成の祝福',
          '継続記録のストリーク化',
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
          個人プロジェクト管理ガイド
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
                  個人向けプロジェクトセットアップ
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
                  個人向けプロジェクト管理のポイント
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  GitHub Projectsは個人の生産性向上にも効果的です。タスク管理からライフログまで、日常のあらゆる計画を一元管理できます。
                </Typography>
                <Box
                  component="img"
                  src="/src/assets/images/guide/personal-project.svg"
                  alt="GitHub Projectsを活用した個人のタスク管理"
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
                        整理整頓のコツ
                      </Typography>
                      <List dense>
                        <ListItem>
                          <ListItemIcon>
                            <CheckCircleIcon color="primary" fontSize="small" />
                          </ListItemIcon>
                          <ListItemText primary="ライフエリア別のグループ化" />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <CheckCircleIcon color="primary" fontSize="small" />
                          </ListItemIcon>
                          <ListItemText primary="「2分ルール」の適用" />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <CheckCircleIcon color="primary" fontSize="small" />
                          </ListItemIcon>
                          <ListItemText primary="定期的な整理タイムの設定" />
                        </ListItem>
                      </List>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Paper elevation={3} sx={{ p: 2 }}>
                      <Typography variant="h6" gutterBottom>
                        集中力の管理
                      </Typography>
                      <List dense>
                        <ListItem>
                          <ListItemIcon>
                            <CheckCircleIcon color="primary" fontSize="small" />
                          </ListItemIcon>
                          <ListItemText primary="エネルギーレベル別タスク選択" />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <CheckCircleIcon color="primary" fontSize="small" />
                          </ListItemIcon>
                          <ListItemText primary="コンテキストタグの活用" />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <CheckCircleIcon color="primary" fontSize="small" />
                          </ListItemIcon>
                          <ListItemText primary="深作業時間帯の確保" />
                        </ListItem>
                      </List>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Paper elevation={3} sx={{ p: 2 }}>
                      <Typography variant="h6" gutterBottom>
                        自動化の活用
                      </Typography>
                      <List dense>
                        <ListItem>
                          <ListItemIcon>
                            <CheckCircleIcon color="primary" fontSize="small" />
                          </ListItemIcon>
                          <ListItemText primary="反復タスクの自動作成" />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <CheckCircleIcon color="primary" fontSize="small" />
                          </ListItemIcon>
                          <ListItemText primary="期限切れ通知の設定" />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <CheckCircleIcon color="primary" fontSize="small" />
                          </ListItemIcon>
                          <ListItemText primary="カレンダー連携の活用" />
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
              transition={{ delay: 0.2 }}
            >
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  個人のユースケース別活用法
                </Typography>
                <Grid container spacing={3}>
                  {useCases.map((useCase) => (
                    <Grid item xs={12} md={4} key={useCase.category}>
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
                          {useCase.icon}
                          <Typography variant="h6" ml={1}>
                            {useCase.category}
                          </Typography>
                        </Box>
                        <List dense>
                          {useCase.tasks.map((task) => (
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
                  個人向けGitHub Projects活用のコツ
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Box
                      component="img"
                      src="/src/assets/images/guide/personal-dashboard.svg"
                      alt="GitHub Projectsの個人ダッシュボード"
                      sx={{
                        width: '100%',
                        height: 'auto',
                        borderRadius: 1,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>
                      個人ダッシュボードの作成
                    </Typography>
                    <List>
                      <ListItem>
                        <ListItemIcon>
                          <AssignmentTurnedInIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText 
                          primary="今日の優先タスク" 
                          secondary="フィルター設定で今日取り組むべきタスクだけを表示" 
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <PersonIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText 
                          primary="個人の習慣トラッカー" 
                          secondary="日々の習慣化したいことを記録・可視化" 
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <TrendingUpIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText 
                          primary="進捗の見える化" 
                          secondary="達成率やマイルストーンの進行状況を一目で把握" 
                        />
                      </ListItem>
                    </List>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    );
  };
