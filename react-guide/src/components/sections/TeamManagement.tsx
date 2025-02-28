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
import { MermaidDiagram } from '../../components/MermaidDiagram';

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
      category: 'Issue作成のポイント',
      tasks: [
        '課題と目的を明確に記述',
        'アサインとマイルストーンの設定',
        'ラベルと関連リンクの添付',
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
      category: 'Issue完了の確認',
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
flowchart LR
  classDef planNode fill:#e3f2fd,stroke:#1976d2,stroke-width:1px
  classDef doNode fill:#e8f5e9,stroke:#388e3c,stroke-width:1px
  classDef checkNode fill:#fff8e1,stroke:#f57c00,stroke-width:1px
  classDef actNode fill:#f3e5f5,stroke:#7b1fa2,stroke-width:1px
  
  Issues[Issues\n課題管理]:::planNode --> Planning[計画\n優先順位付け]:::planNode
  Planning --> IssueTodo[Issue\nToDo]:::planNode
  IssueTodo --> InProgress[進行中\n作業追跡]:::doNode
  InProgress --> Review[レビュー\n品質確認]:::checkNode
  Review --> Done[完了\n成果確認]:::actNode
  Done -->|フィードバック| Issues
  
  subgraph "GitHub Projects ワークフロー管理"
    Issues
    IssueTodo
    InProgress
    Review 
    Done
  end
  
  subgraph "課題発見と管理" 
    Bug[バグ報告]:::planNode
    Feature[機能要求]:::planNode
    Question[質問]:::planNode
    
    Issues --- Bug
    Issues --- Feature
    Issues --- Question
  end
  
  subgraph "計画・優先順位付け"
    Milestone[マイルストーン設定]:::planNode
    Label[ラベル付け]:::planNode
    Assign[担当者割当]:::planNode
    
    Planning --- Milestone
    Planning --- Label
    Planning --- Assign
  end
  
  subgraph "進行管理テクニック"
    Progress1[ステータス更新]:::doNode
    Progress2[作業量追跡]:::doNode
    Progress3[ブロッカー表示]:::doNode
    
    InProgress --- Progress1
    InProgress --- Progress2
    InProgress --- Progress3
  end
  
  subgraph "検証・レビュー手法"
    PR[プルリクエスト連携]:::checkNode
    Comment[コメント追加]:::checkNode
    Checklist[チェックリスト]:::checkNode
    
    Review --- PR
    Review --- Comment
    Review --- Checklist
  end
  
  subgraph "分析・改善"
    Completion[完了率分析]:::actNode
    Burndown[バーンダウン]:::actNode
    Bottleneck[ボトルネック特定]:::actNode
    
    Done --- Completion
    Done --- Burndown
    Done --- Bottleneck
  end
  
  %% 関連付け線
  Issues -.->|整理| Planning
  Planning -.->|優先度| IssueTodo
  IssueTodo -.->|作業開始| InProgress
  InProgress -.->|コミット| Review
  Review -.->|マージ| Done
  
  %% スタイル定義
  style Issues font-weight:bold
  style Planning font-weight:bold
  style IssueTodo font-weight:bold
  style InProgress font-weight:bold
  style Review font-weight:bold
  style Done font-weight:bold
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
                効率的なチームコラボレーション
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                GitHub Projectsは、Issueを中心としたコミュニケーションと情報共有により、
                チーム間の協働を効率化します。Issue管理とタスクの流れを一元化することで、
                プロジェクトの透明性と追跡性を高めることができます。
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
                組織の規模や目的に合わせて、最適なプロジェクト管理アプローチを選択できます。
              </Typography>
              
              {/* 構造比較表 */}
              <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
                <Typography variant="h6" gutterBottom>
                  組織規模・目的別の推奨管理構造
                </Typography>
                <Grid container spacing={2} sx={{ mt: 2 }}>
                  <Grid item xs={12} md={4}>
                    <Box sx={{ border: '1px solid #e0e0e0', borderRadius: 1, p: 2, height: '100%' }}>
                      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                        小規模チーム (5-10名)
                      </Typography>
                      <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
                        <CheckCircleIcon color="success" fontSize="small" sx={{ mr: 1 }} />
                        <Typography variant="body2">単一プロジェクトボード</Typography>
                      </Box>
                      <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
                        <CheckCircleIcon color="success" fontSize="small" sx={{ mr: 1 }} />
                        <Typography variant="body2">シンプルなカンバン方式</Typography>
                      </Box>
                      <Box display="flex" alignItems="center">
                        <CheckCircleIcon color="success" fontSize="small" sx={{ mr: 1 }} />
                        <Typography variant="body2">担当者ベースの振り分け</Typography>
                      </Box>
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12} md={4}>
                    <Box sx={{ border: '1px solid #e0e0e0', borderRadius: 1, p: 2, height: '100%' }}>
                      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                        中規模チーム (10-30名)
                      </Typography>
                      <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
                        <CheckCircleIcon color="success" fontSize="small" sx={{ mr: 1 }} />
                        <Typography variant="body2">機能/部署別のビュー作成</Typography>
                      </Box>
                      <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
                        <CheckCircleIcon color="success" fontSize="small" sx={{ mr: 1 }} />
                        <Typography variant="body2">カスタムフィールドでの分類</Typography>
                      </Box>
                      <Box display="flex" alignItems="center">
                        <CheckCircleIcon color="success" fontSize="small" sx={{ mr: 1 }} />
                        <Typography variant="body2">イテレーション単位の管理</Typography>
                      </Box>
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12} md={4}>
                    <Box sx={{ border: '1px solid #e0e0e0', borderRadius: 1, p: 2, height: '100%' }}>
                      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                        大規模組織 (30名以上)
                      </Typography>
                      <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
                        <CheckCircleIcon color="success" fontSize="small" sx={{ mr: 1 }} />
                        <Typography variant="body2">複数プロジェクトの連携</Typography>
                      </Box>
                      <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
                        <CheckCircleIcon color="success" fontSize="small" sx={{ mr: 1 }} />
                        <Typography variant="body2">階層化されたマイルストーン</Typography>
                      </Box>
                      <Box display="flex" alignItems="center">
                        <CheckCircleIcon color="success" fontSize="small" sx={{ mr: 1 }} />
                        <Typography variant="body2">部門横断の統合ダッシュボード</Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Paper>

              {/* 主要図解 */}
              <Box sx={{ position: 'relative', my: 6, pb: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
                  チーム構成と管理フローの例
                </Typography>
                <Box sx={{ 
                  width: '100%', 
                  maxWidth: '100%',
                  mx: 'auto',
                  p: 3,
                  border: '1px solid #e0e0e0',
                  borderRadius: 2,
                  bgcolor: '#fafafa',
                  height: '600px',
                  overflow: 'visible'
                }}>
                  <MermaidDiagram 
                    chart={teamStructureChart} 
                    className="mermaid-diagram"
                    config={{ 
                      fontSize: 18,
                      flowchart: {
                        diagramPadding: 30,
                        nodeSpacing: 100,
                        rankSpacing: 120,
                        curve: 'basis',
                        htmlLabels: true,
                        useMaxWidth: false
                      }
                    }}
                    style={{
                      height: '100%',
                      minHeight: '550px',
                      width: '100%'
                    }}
                  />
                </Box>

                {/* 図解補助説明 */}
                <Box sx={{ mt: 3, mx: 'auto', maxWidth: 800 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                      <Paper elevation={1} sx={{ p: 1.5, bgcolor: '#f5f5f5' }}>
                        <Typography variant="subtitle2" color="primary">
                          トップダウン構造
                        </Typography>
                        <Typography variant="body2">
                          経営層・リーダーから実行チームへの明確な指示系統。
                          ビジョンや戦略的方向性に基づくタスク管理に最適。
                        </Typography>
                      </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Paper elevation={1} sx={{ p: 1.5, bgcolor: '#f5f5f5' }}>
                        <Typography variant="subtitle2" color="primary">
                          マトリックス構造
                        </Typography>
                        <Typography variant="body2">
                          機能横断的なチーム編成と部門別管理の両立。
                          多様なスキルセットが必要なプロジェクトに効果的。
                        </Typography>
                      </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Paper elevation={1} sx={{ p: 1.5, bgcolor: '#f5f5f5' }}>
                        <Typography variant="subtitle2" color="primary">
                          アジャイル/スクラム構造
                        </Typography>
                        <Typography variant="body2">
                          自律的な小チームによる反復開発と頻繁なフィードバック。
                          柔軟な対応と継続的改善が求められる場面に最適。
                        </Typography>
                      </Paper>
                    </Grid>
                  </Grid>
                </Box>
              </Box>

              <Typography variant="body2" paragraph>
                このように、GitHub Projectsは従来のエンジニアリングチームだけでなく、
                様々な部門やロールのチームメンバーが効率的に協働できる環境を提供します。
                組織の成長に合わせて管理構造を柔軟に進化させることも可能です。
              </Typography>
              
              <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
                効率的なチームコラボレーション
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                GitHub Projectsは、様々なチーム間のコミュニケーションと情報共有を円滑にします。
                以下の図は、異なるチーム間でのコラボレーションの仕組みを示しています。
              </Typography>
              <Box sx={{ position: 'relative', my: 6, pb: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
                  GitHub Projectsを活用したチームワークフロー
                </Typography>
                <Box sx={{ 
                  width: '100%', 
                  maxWidth: '100%',
                  mx: 'auto',
                  p: 3,
                  border: '1px solid #e0e0e0',
                  borderRadius: 2,
                  bgcolor: '#fafafa',
                  height: '600px',
                  overflow: 'visible'
                }}>
                  <MermaidDiagram 
                    chart={teamWorkflowChart} 
                    className="mermaid-diagram"
                    config={{ 
                      fontSize: 18,
                      flowchart: {
                        diagramPadding: 30,
                        nodeSpacing: 100,
                        rankSpacing: 120,
                        curve: 'basis',
                        htmlLabels: true,
                        useMaxWidth: false
                      }
                    }}
                    style={{
                      height: '100%',
                      minHeight: '550px',
                      width: '100%'
                    }}
                  />
                </Box>
                
                {/* 図の説明を追加 */}
                <Box sx={{ mt: 3, mx: 'auto', maxWidth: '1000px' }}>
                  <Typography variant="body1" paragraph sx={{ fontWeight: 'medium' }}>
                    上図は GitHub Projects を使ったチーム協働のワークフローを示しています。
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <Paper elevation={1} sx={{ p: 2, bgcolor: '#f5f5f5' }}>
                        <Typography variant="subtitle2" color="primary" gutterBottom>
                          左から右への流れ
                        </Typography>
                        <Typography variant="body2">
                          Issueから始まり、計画、実装、レビュー、完了という一連の流れで作業が進行します。
                          各段階で適切なステータス更新とドキュメント化を行うことで、チーム全体の可視性が向上します。
                        </Typography>
                      </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Paper elevation={1} sx={{ p: 2, bgcolor: '#f5f5f5' }}>
                        <Typography variant="subtitle2" color="primary" gutterBottom>
                          フィードバックループ
                        </Typography>
                        <Typography variant="body2">
                          完了したタスクからのフィードバックが新たなIssueとして取り込まれる循環的なプロセスを
                          実現することで、継続的な改善が可能になります。
                        </Typography>
                      </Paper>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
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
