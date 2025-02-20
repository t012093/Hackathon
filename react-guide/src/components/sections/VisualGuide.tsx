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
      <h3>1. リポジトリのProjectsタブを選択</h3>
      <h3>2. "New project"ボタンをクリック</h3>
      <h3>3. テンプレートを選択</h3>
      `,
      image: '/src/assets/images/guide/create-project.png',
    },
    {
      title: 'カンバンボードの設定と最適化',
      description: `
      <h3>1. "Board"ビューを選択</h3>

      <h3>2. カラムの設定</h3>
      <div style="margin-left: 12px; margin-bottom: 8px;">
         • <strong>To Do:</strong> これから着手するタスク<br/>
         • <strong>In Progress:</strong> 現在作業中のタスク<br/>
         • <strong>Review:</strong> レビュー待ちのタスク<br/>
         • <strong>Done:</strong> 完了したタスク
      </div>

      <h3>3. カスタムフィールドの追加</h3>
      <div style="margin-left: 12px; margin-bottom: 8px;">
         • <strong>Priority:</strong> High/Medium/Low<br/>
         • <strong>Type:</strong> Bug/Feature/Documentation<br/>
         • <strong>Story Points:</strong> 見積もり工数<br/>
         • <strong>Due Date:</strong> 期限設定
      </div>

      <h3>4. ラベルの色分けとグループ化</h3>
      <div style="margin-left: 12px; margin-bottom: 8px;">
         • 重要度による色分け<br/>
         • チーム別のグループ化
      </div>

      <h3>5. オートメーションの設定</h3>
      <div style="margin-left: 12px;">
         • PRのマージでDoneに移動<br/>
         • レビュー依頼時にReviewに移動
      </div>
      `,
      image: '/src/assets/images/guide/board-setup.png',
    },
    {
      title: 'Issueの作成と効率的な管理',
      description: `
      <h3>1. "+ New issue"ボタンをクリック</h3>

      <h3>2. 効果的な記述</h3>
      <div style="margin-left: 12px; margin-bottom: 8px;">
         • <strong>明確なタイトル:</strong> 問題や要望を端的に表現<br/>
         • <strong>再現手順:</strong> 具体的な操作手順を箇条書きで<br/>
         • <strong>期待動作:</strong> あるべき状態を明確に説明
      </div>

      <h3>3. メタ情報の設定</h3>
      <div style="margin-left: 12px; margin-bottom: 8px;">
         • <strong>ラベル:</strong> 適切な分類を選択<br/>
         • <strong>担当者:</strong> 適任者をアサイン<br/>
         • <strong>マイルストーン:</strong> 目標期限を設定<br/>
         • <strong>プロジェクト:</strong> 関連するボードに紐付け
      </div>

      <h3>4. テンプレートの活用</h3>
      <div style="margin-left: 12px;">
         • <strong>バグレポート用:</strong> 再現手順と環境情報<br/>
         • <strong>機能要望用:</strong> 目的と実装案<br/>
         • <strong>ドキュメント用:</strong> 更新箇所と理由
      </div>
      `,
      image: '/src/assets/images/guide/create-issue.png',
    },
    {
      title: 'Clineを使ったGitHub操作の効率化',
      description: `
      <h3>1. 基本的な使用方法</h3>
      <div style="margin-left: 12px; margin-bottom: 8px;">
         • <strong>ターミナル起動:</strong> VS Codeでターミナルを開く（Ctrl/Cmd + ⌘）<br/>
         • <strong>Cline起動:</strong> Alt + C でClineを起動<br/>
         • <strong>コマンド入力:</strong> 自然言語で操作を説明
      </div>

      <h3>2. Issue管理コマンド</h3>
      <div style="margin-left: 12px; margin-bottom: 8px;">
         • <strong>Issue作成:</strong> "Create an issue about..."<br/>
         • <strong>Issue更新:</strong> "Update issue #123..."<br/>
         • <strong>Issue検索:</strong> "Find issues labeled bug"<br/>
         • <strong>コメント追加:</strong> "Comment on issue #123..."
      </div>

      <h3>3. プロジェクト操作コマンド</h3>
      <div style="margin-left: 12px; margin-bottom: 8px;">
         • <strong>タスク移動:</strong> "Move task #123 to In Progress"<br/>
         • <strong>優先度設定:</strong> "Set priority of #123 to high"<br/>
         • <strong>フィルター:</strong> "Show all high priority tasks"<br/>
         • <strong>担当者変更:</strong> "Assign #123 to @username"
      </div>

      <h3>4. 便利な機能</h3>
      <div style="margin-left: 12px;">
         • <strong>履歴表示:</strong> ↑キーで過去のコマンドを表示<br/>
         • <strong>補完機能:</strong> Tabキーでコマンドを補完<br/>
         • <strong>プレビュー:</strong> 実行前に結果を確認<br/>
         • <strong>エラー説明:</strong> 分かりやすいエラーメッセージ
      </div>
      `,
      image: '/src/assets/images/guide/cline-usage.png',
    },
    {
      title: 'プロジェクトの進捗管理とレポーティング',
      description: `
      <h3>1. 効果的なボード管理</h3>
      <div style="margin-left: 12px; margin-bottom: 8px;">
         • <strong>デイリー確認:</strong> スタンドアップでの進捗共有<br/>
         • <strong>ブロッカー:</strong> 問題点の早期発見<br/>
         • <strong>スプリント:</strong> イテレーション単位の管理
      </div>

      <h3>2. フィルターとソート機能</h3>
      <div style="margin-left: 12px; margin-bottom: 8px;">
         • <strong>担当者別:</strong> メンバーごとのタスク一覧<br/>
         • <strong>優先度順:</strong> 重要度に基づく並び替え<br/>
         • <strong>期限順:</strong> デッドラインでの並び替え<br/>
         • <strong>ラベル:</strong> 種類別のフィルタリング
      </div>

      <h3>3. 進捗レポートの活用</h3>
      <div style="margin-left: 12px; margin-bottom: 8px;">
         • <strong>バーンダウン:</strong> 残作業の推移確認<br/>
         • <strong>ベロシティ:</strong> チームの生産性計測<br/>
         • <strong>完了タスク:</strong> 実績の統計分析
      </div>

      <h3>4. マイルストーン追跡</h3>
      <div style="margin-left: 12px;">
         • <strong>期限管理:</strong> 目標期日の設定と監視<br/>
         • <strong>達成率:</strong> 進捗状況のパーセント表示<br/>
         • <strong>遅延管理:</strong> スケジュールの遅れを早期発見
      </div>
      `,
      image: '/src/assets/images/guide/progress-tracking.png',
    },
    {
      title: 'チームコラボレーションの最適化',
      description: `
      <h3>1. タスク管理の効率化</h3>
      <div style="margin-left: 12px; margin-bottom: 8px;">
         • <strong>担当者選定:</strong> 適切なメンバーの割り当て<br/>
         • <strong>工数配分:</strong> バランスの取れた作業分配<br/>
         • <strong>スキル:</strong> 経験とスキルに基づく割り当て
      </div>

      <h3>2. コミュニケーション活性化</h3>
      <div style="margin-left: 12px; margin-bottom: 8px;">
         • <strong>コメント:</strong> 明確で具体的な記述<br/>
         • <strong>メンション:</strong> 必要な人への確実な通知<br/>
         • <strong>進捗更新:</strong> 定期的な状況報告
      </div>

      <h3>3. レビュープロセス改善</h3>
      <div style="margin-left: 12px; margin-bottom: 8px;">
         • <strong>レビュアー:</strong> 適切な担当者の指定<br/>
         • <strong>チェック:</strong> 明確な基準でのレビュー<br/>
         • <strong>フィードバック:</strong> 改善点の追跡管理
      </div>

      <h3>4. ナレッジ共有の促進</h3>
      <div style="margin-left: 12px;">
         • <strong>ドキュメント:</strong> 解決方法の記録<br/>
         • <strong>FAQ管理:</strong> よくある質問の蓄積<br/>
         • <strong>ベスト事例:</strong> 効果的な手法の共有
      </div>
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
              <Grid item xs={12} key={item.title}>
                <Paper
                  elevation={3}
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  sx={{ p: 3, height: '100%' }}
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
                      mb: 3,
                      boxShadow: 3,
                    }}
                  />
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ 
                      whiteSpace: 'pre-line',
                      fontSize: '1.1rem',
                      lineHeight: 1.5,
                      '& h3': {
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        color: 'text.primary',
                        marginBottom: '8px',
                        marginTop: '12px'
                      },
                      '& div': {
                        marginBottom: '12px'
                      },
                      '& strong': {
                        color: 'text.primary'
                      }
                    }}
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </Paper>
              </Grid>
            ))}
          </Grid>

          <Box mt={4}>
            <Typography variant="h6" gutterBottom>
              スクリーンショットギャラリー
            </Typography>
            <ImageList variant="masonry" cols={2} gap={16}>
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
