import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
} from '@mui/material';
import { motion } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ErrorIcon from '@mui/icons-material/Error';
import BugReportIcon from '@mui/icons-material/BugReport';
import SecurityIcon from '@mui/icons-material/Security';
import SyncProblemIcon from '@mui/icons-material/SyncProblem';

export const TroubleshootingGuide = () => {
  const commonIssues = [
    {
      category: 'GitHub認証とアクセス',
      icon: <SecurityIcon color="error" />,
      problems: [
        {
          title: '認証エラー: Bad credentials',
          solution: `
            1. Personal Access Tokenの有効期限を確認
            2. トークンの権限設定を確認（repo, workflow必須）
            3. トークンを再生成して設定し直す
          `,
        },
        {
          title: 'リポジトリにアクセスできない',
          solution: `
            1. リポジトリの権限設定を確認
            2. Access Tokenの設定を確認
            3. 
          `,
        },
      ],
    },
    {
      category: 'プロジェクト管理',
      icon: <SyncProblemIcon color="error" />,
      problems: [
        {
          title: 'プロジェクトが表示されない',
          solution: `
            1. プロジェクトの可視性設定を確認
            2. プロジェクトへの招待を確認
            3. ブラウザのキャッシュをクリア
          `,
        },
        {
          title: 'Issueがボードに表示されない',
          solution: `
            1. プロジェクトとIssueの紐付けを確認
            2. フィルター設定を確認
            3. プロジェクトのビュー設定を確認
          `,
        },
      ],
    },
    {
      category: 'Clineの動作',
      icon: <BugReportIcon color="error" />,
      problems: [
        {
          title: 'Clineが応答しない',
          solution: `
            1. VS Codeを再起動
            2. Cline拡張機能を無効化して再有効化
            3. キャッシュをクリア（%APPDATA%/Code/User/globalStorage/）
          `,
        },
        {
          title: 'コマンドの実行に失敗する',
          solution: `
            1. GitHubのトークン設定を確認
            2. コマンドの構文を確認
            3. 必要な権限があるか確認
          `,
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
        トラブルシューティング
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
                <ErrorIcon color="error" sx={{ mr: 1 }} />
                よくある問題と解決方法
              </Typography>
              {commonIssues.map((category, index) => (
                <Box key={category.category} mb={3}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ display: 'flex', alignItems: 'center', mt: 2 }}
                  >
                    {category.icon}
                    <Box ml={1}>{category.category}</Box>
                  </Typography>
                  {category.problems.map((problem) => (
                    <Accordion key={problem.title}>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>{problem.title}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography
                          component="pre"
                          sx={{
                            whiteSpace: 'pre-line',
                            fontFamily: 'inherit',
                            m: 0,
                          }}
                        >
                          {problem.solution}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </Box>
  );
};
