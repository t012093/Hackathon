import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Paper,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from '@mui/material';
import { motion } from 'framer-motion';
import ImageIcon from '@mui/icons-material/Image';

export const VisualGuide = () => {
  const guideImages = [
    {
      title: 'プロジェクトボードの作成',
      description: `
      1. リポジトリのProjectsタブを選択
      2. "New project"ボタンをクリック
      3. テンプレートを選択
      `,
      image: '/src/assets/images/guide/create-project.png',
    },
    {
      title: 'カンバンボードの設定と最適化',
      description: `
      1. "Board"ビューを選択
      2. カラムの設定
         - To Do: これから着手するタスク
         - In Progress: 現在作業中のタスク
         - Review: レビュー待ちのタスク
         - Done: 完了したタスク
      3. カスタムフィールドの追加
         - Priority: High/Medium/Low
         - Type: Bug/Feature/Documentation
         - Story Points: 見積もり工数
         - Due Date: 期限設定
      4. ラベルの色分けとグループ化
         - 重要度による色分け
         - チーム別のグループ化
      5. オートメーションの設定
         - PRのマージでDoneに移動
         - レビュー依頼時にReviewに移動
      `,
      image: '/src/assets/images/guide/board-setup.png',
    },
    {
      title: 'Issueの作成と効率的な管理',
      description: `
      1. "+ New issue"ボタンをクリック
      2. 効果的な記述
         - 明確なタイトル
         - 再現手順や期待動作
         - スクリーンショットや動画
      3. メタ情報の設定
         - 適切なラベル付け
         - 担当者のアサイン
         - マイルストーンの設定
         - プロジェクトへの紐付け
      4. テンプレートの活用
         - バグレポート用
         - 機能要望用
         - ドキュメント更新用
      `,
      image: '/src/assets/images/guide/create-issue.png',
    },
    {
      title: 'Clineを使ったGitHub操作の効率化',
      description: `
      1. 基本的な使用方法
         - VS Codeでターミナルを開く（Ctrl/Cmd + ⌘）
         - Clineを起動（Alt + C）
         - 自然言語でコマンドを入力

      2. Issue管理
         - 新規Issue作成: "Create an issue about..."
         - Issue更新: "Update issue #123..."
         - Issue検索: "Find issues labeled bug"
         - コメント追加: "Comment on issue #123..."

      3. プロジェクト操作
         - タスクの移動: "Move task #123 to In Progress"
         - 優先度設定: "Set priority of #123 to high"
         - フィルター適用: "Show all high priority tasks"
         - 担当者変更: "Assign #123 to @username"

      4. 便利な機能
         - コマンド履歴の表示（↑キー）
         - オートコンプリート（Tab）
         - コマンドのプレビュー
         - エラー時の詳細説明
      `,
      image: '/src/assets/images/guide/cline-usage.png',
    },
    {
      title: 'プロジェクトの進捗管理とレポーティング',
      description: `
      1. 効果的なボード管理
         - デイリースタンドアップでの確認
         - ブロッカーの可視化
         - スプリントの進捗把握
      2. フィルターとソート機能
         - 担当者別の表示
         - 優先度でのソート
         - 期限順での表示
         - ラベルでのフィルタリング
      3. 進捗レポートの活用
         - バーンダウンチャート
         - ベロシティの計測
         - 完了タスクの統計
      4. マイルストーンの追跡
         - 期限管理
         - 達成率の確認
         - 遅延の早期発見
      `,
      image: '/src/assets/images/guide/progress-tracking.png',
    },
    {
      title: 'チームコラボレーションの最適化',
      description: `
      1. タスク管理の効率化
         - 適切な担当者の選定
         - 工数の適正な配分
         - スキルマッチング
      2. コミュニケーションの活性化
         - 明確なコメント記述
         - メンション機能の活用
         - 進捗の定期的な更新
      3. レビュープロセスの改善
         - レビュー担当者の指定
         - チェックリストの活用
         - フィードバックの追跡
      4. ナレッジの共有
         - 解決方法の文書化
         - FAQの蓄積
         - ベストプラクティスの共有
      `,
      image: '/src/assets/images/guide/team-collaboration.png',
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
        ビジュアルガイド
      </Typography>

      <Card
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <CardContent>
          <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
            <ImageIcon sx={{ mr: 1 }} />
            操作手順の詳細
          </Typography>

          <Grid container spacing={4}>
            {guideImages.map((item, index) => (
              <Grid item xs={12} md={6} key={item.title}>
                <Paper
                  elevation={3}
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  sx={{ p: 2, height: '100%' }}
                >
                  <Typography variant="h6" gutterBottom>
                    {item.title}
                  </Typography>
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.title}
                    sx={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: 1,
                      mb: 2,
                      boxShadow: 3,
                    }}
                  />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ whiteSpace: 'pre-line' }}
                  >
                    {item.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>

          <Box mt={4}>
            <Typography variant="h6" gutterBottom>
              スクリーンショットギャラリー
            </Typography>
            <ImageList variant="masonry" cols={3} gap={8}>
              {guideImages.map((item) => (
                <ImageListItem key={item.image}>
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    style={{ borderRadius: 4 }}
                  />
                  <ImageListItemBar
                    title={item.title}
                    position="bottom"
                    sx={{
                      background:
                        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                    }}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
