import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Paper,
  IconButton,
  Tabs,
  Tab,
  TextField,
  InputAdornment,
} from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import SearchIcon from '@mui/icons-material/Search';
import { ImageDialog } from '../ImageDialog';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ImageIcon from '@mui/icons-material/Image';

export const VisualGuide = () => {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [activeTab, setActiveTab] = React.useState(0);
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setDialogOpen(true);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => Math.min(prev + 1, guideImages.length - 1));
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => Math.max(prev - 1, 0));
  };

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
      title: 'ボードビューの選択と基本設定',
      description: `
      <h3>1. "Board"ビューの選択方法</h3>
      <div style="margin-left: 12px; margin-bottom: 8px;">
         • <strong>Views</strong>タブを選択<br/>
         • <strong>Board</strong>オプションをクリック<br/>
         • レイアウトとテーマをカスタマイズ
      </div>
      `,
      image: '/src/assets/images/guide/board-setup.png',
    },
    {
      title: 'カラムの設定とワークフロー',
      description: `
      <h3>2. カラムの設定</h3>
      <div style="margin-left: 12px; margin-bottom: 8px;">
         • <strong>To Do:</strong> これから着手するタスク<br/>
         • <strong>In Progress:</strong> 現在作業中のタスク<br/>
         • <strong>Review:</strong> レビュー待ちのタスク<br/>
         • <strong>Done:</strong> 完了したタスク
      </div>
      <div style="margin-left: 12px;">
         • カラムの追加/削除/並び替え<br/>
         • WIP制限の設定<br/>
         • カラムごとの条件設定
      </div>
      `,
      image: '/src/assets/images/guide/projects.png',
    },
    {
      title: 'カスタムフィールドの追加',
      description: `
      <h3>3. カスタムフィールドの設定</h3>
      <div style="margin-left: 12px; margin-bottom: 8px;">
         • <strong>Priority:</strong> High/Medium/Low<br/>
         • <strong>Type:</strong> Bug/Feature/Documentation<br/>
         • <strong>Story Points:</strong> 見積もり工数<br/>
         • <strong>Due Date:</strong> 期限設定
      </div>
      <div style="margin-left: 12px;">
         • フィールドタイプの選択<br/>
         • 必須/任意の設定<br/>
         • デフォルト値の設定
      </div>
      `,
      image: '/src/assets/images/guide/karam.png',
    },
    {
      title: 'ラベルの色分けとグループ化',
      description: `
      <h3>4. ラベル管理とグループ化</h3>
      <div style="margin-left: 12px; margin-bottom: 8px;">
         • <strong>ラベルの作成:</strong><br/>
         - 重要度による色分け（赤: 高優先度, 黄: 中優先度, 緑: 低優先度）<br/>
         - カテゴリー別の色分け（青: フロントエンド, 紫: バックエンド）
      </div>
      <div style="margin-left: 12px;">
         • <strong>グループ化の設定:</strong><br/>
         - チーム別のグループ化<br/>
         - マイルストーン別のグループ化<br/>
         - ステータス別のグループ化
      </div>
      `,
      image: '/src/assets/images/guide/p1.png',
    },
    {
      title: 'オートメーションの設定',
      description: `
      <h3>5. オートメーションルールの設定</h3>
      <div style="margin-left: 12px; margin-bottom: 8px;">
         • <strong>自動化ルール:</strong><br/>
         - PRのマージでDoneに移動<br/>
         - レビュー依頼時にReviewに移動<br/>
         - 期限切れタスクの自動フラグ付け
      </div>
      <div style="margin-left: 12px;">
         • <strong>通知設定:</strong><br/>
         - ステータス変更時の通知<br/>
         - メンション時の通知<br/>
         - 期限前のリマインダー
      </div>
      `,
      image: '/src/assets/images/guide/auto.png',
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

  // タブごとにグループ化
  const tabGroups = [
    { label: "プロジェクト設定", items: guideImages.slice(0, 3) },
    { label: "タスク管理", items: guideImages.slice(3, 6) },
    { label: "チーム連携", items: guideImages.slice(6) }
  ];

  const filteredItems = tabGroups[activeTab].items.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
          <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
            <Tabs
              value={activeTab}
              onChange={(_, newValue) => setActiveTab(newValue)}
              variant="scrollable"
              scrollButtons="auto"
            >
              {tabGroups.map((group, index) => (
                <Tab key={index} label={group.label} />
              ))}
            </Tabs>
          </Box>

          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="ガイドを検索..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <AnimatePresence mode="wait">
            <Grid container spacing={4}>
              {filteredItems.map((item, index) => (
                <Grid item xs={12} md={6} lg={4} key={item.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Paper
                      elevation={3}
                      sx={{ 
                        p: 3, 
                        height: '100%',
                        transition: 'transform 0.2s',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                        }
                      }}
                    >
                      <Typography variant="h6" gutterBottom>
                        {item.title}
                      </Typography>
                      <Box sx={{ position: 'relative' }}>
                        <Box
                          component="img"
                          src={item.image}
                          alt={item.title}
                          sx={{
                            width: '80%',
                            height: 'auto',
                            borderRadius: 1,
                            mb: 3,
                            boxShadow: 3,
                            cursor: 'pointer',
                          }}
                          onClick={() => handleImageClick(index)}
                        />
                        <IconButton
                          sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            color: 'white',
                            '&:hover': {
                              backgroundColor: 'rgba(0, 0, 0, 0.7)',
                            },
                          }}
                          onClick={() => handleImageClick(index)}
                        >
                          <ZoomInIcon />
                        </IconButton>
                      </Box>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ 
                          whiteSpace: 'pre-line',
                          fontSize: '1rem',
                          lineHeight: 1,
                          '& h3': {
                            fontSize: '1rem',
                            fontWeight: 'bold',
                            color: 'text.primary',
                            marginBottom: '5px',
                            marginTop: '5px'
                          },
                          '& div': {
                            marginBottom: '5px'
                          },
                          '& strong': {
                            color: 'text.primary'
                          }
                        }}
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      />
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </AnimatePresence>
        </CardContent>
      </Card>

      <ImageDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        images={guideImages}
        currentIndex={currentImageIndex}
        onNextImage={handleNextImage}
        onPrevImage={handlePrevImage}
      />
    </Box>
  );
};
