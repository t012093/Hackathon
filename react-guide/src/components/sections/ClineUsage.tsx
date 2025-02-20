import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Paper,
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const ClineUsage = () => {
  const clineExamples = [
    {
      title: 'Issueの作成',
      description: 'プロジェクトのタスクをIssueとして作成します。',
      command: `# Issue作成のコマンド例
gh issue create \
  --title "ログイン機能の実装" \
  --body "ユーザー認証システムの開発とテスト" \
  --label "enhancement" \
  --assignee "@me" \
  --project "開発プロジェクト"`,
      usage: `CLINEでの使用例：
"ログイン機能の実装というタイトルで、ユーザー認証システムの開発とテストという内容のIssueを作成してください。ラベルはenhancementで、担当者は自分にしてください。"`,
    },
    {
      title: 'タスクの進捗更新',
      description: 'Issueのステータスやラベルを更新します。',
      command: `# ステータス更新のコマンド例
gh issue edit 123 \
  --add-label "in-progress" \
  --remove-label "todo" \
  --body "$(cat <<EOF
現在の進捗:
- ログインフォーム UI 完了
- バリデーション実装中
- テスト準備中
EOF
)"`,
      usage: `CLINEでの使用例：
"Issue #123の進捗を更新してください。ステータスをtodoからin-progressに変更し、現在の進捗状況を追記してください。"`,
    },
    {
      title: 'プロジェクトの進捗確認',
      description: 'プロジェクト全体の進捗を確認します。',
      command: `# プロジェクト進捗確認のコマンド例
gh project view "開発プロジェクト" \
  --format "table" \
  --fields "title,assignees,status,labels"`,
      usage: `CLINEでの使用例：
"開発プロジェクトの現在の進捗状況を表形式で表示してください。タイトル、担当者、ステータス、ラベルを含めてください。"`,
    },
  ];

  const clineUsageTips = [
    {
      title: '効果的な指示の方法',
      points: [
        '目的を明確に説明する',
        '具体的な条件や制約を提示する',
        '期待する結果を明示する',
        '必要な情報を漏れなく提供する',
      ],
    },
    {
      title: 'コマンド生成のコツ',
      points: [
        '自然な日本語で指示を書く',
        'オプションは明示的に指定する',
        '複雑な操作は段階的に指示する',
        'エラー時は詳細な情報を提供する',
      ],
    },
    {
      title: '進捗管理での活用',
      points: [
        '定期的な進捗更新の自動化',
        'ステータスレポートの生成',
        'タスクの依存関係の管理',
        'チーム全体の進捗可視化',
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
        Clineの実践的な活用方法
      </Typography>

      <Grid container spacing={4}>
        {clineExamples.map((example, index) => (
          <Grid item xs={12} key={example.title}>
            <Card
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {example.title}
                </Typography>
                <Typography color="text.secondary" paragraph>
                  {example.description}
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
                      <Typography variant="subtitle1" gutterBottom>
                        コマンド例
                      </Typography>
                      <SyntaxHighlighter
                        language="bash"
                        style={materialDark}
                        customStyle={{
                          margin: 0,
                          borderRadius: 4,
                        }}
                      >
                        {example.command}
                      </SyntaxHighlighter>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
                      <Typography variant="subtitle1" gutterBottom>
                        Clineでの使用方法
                      </Typography>
                      <Typography
                        component="pre"
                        sx={{
                          whiteSpace: 'pre-wrap',
                          wordWrap: 'break-word',
                          fontFamily: 'monospace',
                          m: 0,
                        }}
                      >
                        {example.usage}
                      </Typography>
                    </Paper>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}

        <Grid item xs={12}>
          <Card
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <CardContent>
              <Typography variant="h5" gutterBottom>
                効果的な活用のポイント
              </Typography>
              <Grid container spacing={3}>
                {clineUsageTips.map((tip, index) => (
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
                      <Typography variant="h6" gutterBottom>
                        {tip.title}
                      </Typography>
                      <Divider sx={{ my: 1 }} />
                      {tip.points.map((point, pointIndex) => (
                        <Typography
                          key={pointIndex}
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            my: 1,
                            '&:before': {
                              content: '"•"',
                              marginRight: 1,
                              color: 'primary.main',
                            },
                          }}
                        >
                          {point}
                        </Typography>
                      ))}
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
