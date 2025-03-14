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
import VisibilityIcon from '@mui/icons-material/Visibility';
import GroupsIcon from '@mui/icons-material/Groups';
import FeedbackIcon from '@mui/icons-material/Feedback';
import { motion } from 'framer-motion';
import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import ForumIcon from '@mui/icons-material/Forum';
import AssignmentIcon from '@mui/icons-material/Assignment';
import InsightsIcon from '@mui/icons-material/Insights';
import TaskIcon from '@mui/icons-material/Task';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ChatIcon from '@mui/icons-material/Chat';
import { MermaidDiagram } from '../../components/MermaidDiagram';

export const TeamManagement = () => {
  // PROJECT SETUP STEPS
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
      iconColor: '#1976d2', // primary blue
      bgColor: 'rgba(25, 118, 210, 0.08)',
      steps: [
        { type: 'step', text: 'GitHubのリポジトリページを開く' },
        { type: 'step', text: '"Projects"タブをクリック' },
        { type: 'step', text: '"New project"ボタンをクリック' },
        { type: 'step', text: '目的に合わせたテンプレートを選択' },
        { type: 'option', text: 'Table', desc: 'データ重視の管理に最適' },
        { type: 'option', text: 'Board', desc: 'カンバン方式の視覚的な管理' },
        { type: 'option', text: 'Roadmap', desc: '長期的なスケジュール管理' },
        { type: 'step', text: 'プロジェクト名を入力して作成' },
      ],
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
      iconColor: '#2e7d32', // success green
      bgColor: 'rgba(46, 125, 50, 0.08)',
      steps: [
        { type: 'step', text: 'プロジェクトの"Settings"を開く' },
        { type: 'step', text: '"Manage access"をクリック' },
        { type: 'step', text: '"Add collaborators"でメンバーを検索' },
        { type: 'step', text: '以下の権限レベルを選択して招待' },
        { type: 'option', text: 'Admin', desc: 'プロジェクト設定の変更が可能', color: 'error' },
        { type: 'option', text: 'Write', desc: 'タスクの作成・編集が可能', color: 'primary' },
        { type: 'option', text: 'Read', desc: '閲覧のみ可能', color: 'success' },
      ],
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
      iconColor: '#ed6c02', // warning orange
      bgColor: 'rgba(237, 108, 2, 0.08)',
      steps: [
        { type: 'category', text: '定例ミーティング' },
        { type: 'option', text: '朝会', desc: '今日の目標確認（10-15分）' },
        { type: 'option', text: '週次', desc: '進捗確認と計画調整（30-60分）' },
        { type: 'option', text: '月次', desc: '成果報告と戦略レビュー' },
        { type: 'category', text: '非同期コミュニケーション' },
        { type: 'option', text: '重要な決定事項', desc: 'Issueで記録' },
        { type: 'option', text: 'ステータス更新', desc: '毎日実施' },
        { type: 'option', text: 'ブロッカー', desc: '即座に共有' },
      ],
    },
  ];

  // ISSUE MANAGEMENT TEMPLATES
  const templateTasks = [
    {
      category: 'Issue作成のポイント',
      description: '効果的なIssueは明確な情報と適切な関連付けにより、チームの共通理解を促進します',
      tasks: [
        '課題と目的を明確に記述',
        'アサインとマイルストーンの設定',
        'ラベルと関連リンクの添付',
      ],
      icon: <AssignmentIcon />,
      color: '#0277bd', // light blue
      borderColor: 'rgba(2, 119, 189, 0.3)',
    },
    {
      category: '進捗管理の基本',
      description: '定期的な状況更新と透明性の確保により、プロジェクトの健全な進行を維持します',
      tasks: [
        '作業開始時にステータスを更新',
        '定期的な進捗報告の実施',
        '課題発生時の早期共有',
      ],
      icon: <InsightsIcon />,
      color: '#2e7d32', // green
      borderColor: 'rgba(46, 125, 50, 0.3)',
    },
    {
      category: 'Issue完了の確認',
      description: '完了基準の明確化と品質確認のプロセスにより、成果物の一貫性を確保します',
      tasks: [
        '成果物の品質チェック実施',
        '関連ドキュメントの更新確認',
        '承認者による最終確認',
      ],
      icon: <TaskIcon />,
      color: '#c2185b', // pink
      borderColor: 'rgba(194, 24, 91, 0.3)',
    },
  ];

  // COMMUNICATION TIPS
  const communicationTips = [
    {
      title: 'プロジェクトの可視化',
      description: 'プロジェクトの全体像と進捗状況を視覚的に共有することで、チーム全体の方向性を統一',
      items: [
        '進捗状況をダッシュボードで共有',
        'マイルストーンの達成状況を明確に',
        'リスクと課題を早期に特定',
      ],
      icon: <VisibilityIcon />,
      color: '#0288d1',
    },
    {
      title: 'チーム間連携の促進',
      description: '部門や役割を越えたコラボレーションを促進し、情報のサイロ化を防止',
      items: [
        '定期的な情報共有の場を設定',
        '部門を越えた協力体制の構築',
        '成功事例と学びの共有',
      ],
      icon: <GroupsIcon />,
      color: '#388e3c',
    },
    {
      title: '効果的なフィードバック',
      description: '建設的かつ具体的なフィードバック文化を醸成し、継続的な改善を実現',
      items: [
        '具体的な改善提案を心がける',
        '成果を適切に評価し共有',
        '建設的な対話の促進',
      ],
      icon: <FeedbackIcon />,
      color: '#7b1fa2',
    },
  ];

  // Mermaidチャート定義
  const teamStructureChart = `
    flowchart TD
      CEO[CEO/経営層] --> PM[プロジェクト管理者]
      PM --> DevTeam[開発チーム]
      PM --> DesignTeam[デザインチーム]
      PM --> BizTeam[ビジネスチーム]
      
      subgraph "トップダウン構造"
        CEO
        PM
      end
      
      subgraph "マトリックス構造"
        DevTeam --- Feature1[機能チームA]
        DesignTeam --- Feature1
        DevTeam --- Feature2[機能チームB]
        DesignTeam --- Feature2
      end
      
      subgraph "アジャイル/スクラム構造"
        Feature1
        Feature2
      end
      
      style CEO fill:#f9f9f9,stroke:#666,stroke-width:1px
      style PM fill:#e1f5fe,stroke:#666,stroke-width:1px
      style DevTeam fill:#e8f5e9,stroke:#666,stroke-width:1px
      style DesignTeam fill:#f3e5f5,stroke:#666,stroke-width:1px
      style BizTeam fill:#fff8e1,stroke:#666,stroke-width:1px
      style Feature1 fill:#eeeeff,stroke:#666,stroke-width:1px
      style Feature2 fill:#eeeeff,stroke:#666,stroke-width:1px
  `;

  const teamWorkflowChart = `
  flowchart TD
    classDef planNode fill:#e3f2fd,stroke:#1976d2,stroke-width:1px
    classDef doNode fill:#e8f5e9,stroke:#388e3c,stroke-width:1px
    classDef checkNode fill:#fff8e1,stroke:#f57c00,stroke-width:1px
    classDef actNode fill:#f3e5f5,stroke:#7b1fa2,stroke-width:1px
    
    Planning[計画\\n優先順位付け]:::planNode --> IssueTodo[Issue\\nToDo]:::planNode
    IssueTodo --> InProgress[進行中\\n作業追跡]:::doNode
    InProgress --> Review[レビュー\\n品質確認]:::checkNode
    Review --> Done[完了\\n成果確認]:::actNode
    Done -->|フィードバック| Planning
    
    subgraph MainFlow["GitHub Projects"]
      direction TB
      Planning
      IssueTodo
      InProgress
      Review 
      Done
    end
    
    subgraph Plan1["計画・優先順位付け"]
      direction TB
      Milestone[マイルストーン設定]:::planNode
      Label[ラベル付け]:::planNode
      Assign[担当者割当]:::planNode
    end
    
    subgraph Issues1["課題発見と管理"]
      direction TB
      Bug[バグ報告]:::planNode
      Feature[機能要求]:::planNode
      Question[質問]:::planNode
    end
    
    subgraph Do1["進行管理テクニック"]
      direction TB
      Progress1[ステータス更新]:::doNode
      Progress2[作業量追跡]:::doNode
      Progress3[ブロッカー表示]:::doNode
    end
    
    subgraph Check1["検証・レビュー手法"]
      direction TB
      PR[プルリクエスト連携]:::checkNode
      Comment[コメント追加]:::checkNode
      Checklist[チェックリスト]:::checkNode
    end
    
    subgraph Act1["分析・改善"]
      direction TB
      Completion[完了率分析]:::actNode
      Burndown[バーンダウン]:::actNode
      Bottleneck[ボトルネック特定]:::actNode
    end
    
    Planning --- Plan1
    Planning --- Issues1
    InProgress --- Do1
    Review --- Check1
    Done --- Act1
    
    %% スタイル定義
    style Planning font-weight:bold
    style IssueTodo font-weight:bold
    style InProgress font-weight:bold
    style Review font-weight:bold
    style Done font-weight:bold

    %% レイアウト調整
    MainFlow:::planNode
  `;

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
              <Typography variant="h5" gutterBottom sx={{ 
                display: 'flex',
                alignItems: 'center',
                background: 'linear-gradient(90deg, #f0f7ff 0%, #ffffff 100%)',
                p: 1.5,
                pl: 2,
                borderRadius: 2,
                borderLeft: '4px solid #1976d2',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                mb: 3
              }}>
                <SettingsIcon color="primary" sx={{ mr: 1.5 }} />
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
            transition={{ delay: 0.3 }}
          >
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Issue管理の基本
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

        {/* コミュニケーション Tips セクション */}
        <Grid item xs={12}>
          <Card
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <CardContent>
              <Typography variant="h5" gutterBottom>
                コミュニケーション Tips
              </Typography>
              <Grid container spacing={3}>
                {communicationTips.map((tip) => (
                  <Grid item xs={12} md={4} key={tip.title}>
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
                        {tip.icon}
                        <Typography variant="h6" ml={1}>
                          {tip.title}
                        </Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        {tip.description}
                      </Typography>
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
