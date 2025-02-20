import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Stepper,
  Step,
  StepLabel,
  StepContent,
} from '@mui/material';
import { motion } from 'framer-motion';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import SchoolIcon from '@mui/icons-material/School';

export const PracticalGuide = () => {
  const shortcuts = [
    {
      category: 'GitHub Projects',
      commands: [
        { key: '?', description: 'キーボードショートカット一覧表示' },
        { key: 'g p', description: 'プロジェクトへ移動' },
        { key: 'c', description: '新規Issue作成' },
        { key: '/', description: '検索' },
        { key: 'j / k', description: '項目の上下移動' },
        { key: 'x', description: '項目の選択/解除' },
        { key: 'e', description: '項目の編集' },
      ],
    },
    {
      category: 'VS Code + Cline',
      commands: [
        { key: 'Ctrl/Cmd + Shift + P', description: 'コマンドパレット' },
        { key: 'Ctrl/Cmd + `', description: 'ターミナル表示/非表示' },
        { key: 'Alt + C', description: 'Clineを起動' },
        { key: 'Ctrl/Cmd + Enter', description: 'コマンド実行' },
        { key: 'Ctrl/Cmd + /u', description: '直前のコマンドをクリア' },
      ],
    },
  ];

  const tutorials = [
    {
      title: 'プロジェクト設定からIssue作成まで',
      steps: [
        {
          label: 'プロジェクトの作成',
          description: `
1. リポジトリのProjectsタブを開く
2. "New project"をクリック
3. "Board"テンプレートを選択
4. プロジェクト名を入力して作成`,
        },
        {
          label: 'カスタムフィールドの追加',
          description: `
1. プロジェクト設定を開く
2. "Custom fields"セクションへ
3. "Priority"フィールドを追加（High/Medium/Low）
4. "Story Points"数値フィールドを追加`,
        },
        {
          label: 'Issue作成とプロジェクト連携',
          description: `
1. "New Issue"ボタンをクリック
2. タイトルと説明を入力
3. ラベルとアサインを設定
4. プロジェクトを選択して紐付け
5. "Submit new issue"で作成`,
        },
      ],
    },
    {
      title: 'チーム開発の実践フロー',
      steps: [
        {
          label: '朝会でのタスク確認',
          description: `
1. プロジェクトボードを開く
2. "In Progress"の項目を確認
3. ブロッカーの有無を確認
4. 新規タスクの優先度を決定`,
        },
        {
          label: '作業開始時の準備',
          description: `
1. 担当するIssueを選択
2. ステータスを"In Progress"に変更
3. ブランチを作成
4. ローカル環境のセットアップ`,
        },
        {
          label: '作業完了時の手順',
          description: `
1. コードレビューを依頼
2. レビューコメントに対応
3. 変更をマージ
4. Issueのステータスを"Done"に更新`,
        },
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
        実践的なガイド
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Card
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <CardContent>
              <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                <KeyboardIcon sx={{ mr: 1 }} />
                便利なショートカットキー
              </Typography>
              <Grid container spacing={3}>
                {shortcuts.map((section) => (
                  <Grid item xs={12} md={6} key={section.category}>
                    <TableContainer component={Paper} elevation={3}>
                      <Table size="small">
                        <TableHead>
                          <TableRow>
                            <TableCell colSpan={2}>
                              <Typography variant="h6">{section.category}</Typography>
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {section.commands.map((command) => (
                            <TableRow key={command.key}>
                              <TableCell
                                component="th"
                                scope="row"
                                sx={{ fontFamily: 'monospace', whiteSpace: 'nowrap' }}
                              >
                                {command.key}
                              </TableCell>
                              <TableCell>{command.description}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
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
              <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                <SchoolIcon sx={{ mr: 1 }} />
                ステップバイステップの実践例
              </Typography>
              <Grid container spacing={4}>
                {tutorials.map((tutorial) => (
                  <Grid item xs={12} md={6} key={tutorial.title}>
                    <Paper elevation={3} sx={{ p: 2 }}>
                      <Typography variant="h6" gutterBottom>
                        {tutorial.title}
                      </Typography>
                      <Stepper orientation="vertical">
                        {tutorial.steps.map((step) => (
                          <Step key={step.label} active={true}>
                            <StepLabel>{step.label}</StepLabel>
                            <StepContent>
                              <Typography
                                color="text.secondary"
                                sx={{ whiteSpace: 'pre-line' }}
                              >
                                {step.description}
                              </Typography>
                            </StepContent>
                          </Step>
                        ))}
                      </Stepper>
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
