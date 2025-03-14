import React, { useState } from 'react';
import { Box, Typography, Paper, Grid, Button, Divider, List, ListItem, ListItemIcon, ListItemText, Card, CardContent, Stepper, Step, StepLabel } from '@mui/material';

export const GitHubPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // スライドコンテンツの定義
  const slides = [
    {
      title: "GitHubとは？",
      content: (
        <Box>
          <Typography variant="h6" textAlign="center" mb={3}>
            ファイルの<Box component="span" fontWeight="bold" color="primary.main">変更履歴を記録・管理</Box>するためのクラウドサービス
          </Typography>
          
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Paper elevation={1} sx={{ p: 2, bgcolor: 'primary.light', height: '100%' }}>
                <Typography variant="subtitle1" fontWeight="bold" mb={1} textAlign="center">GitHubの主な役割</Typography>
                <List dense>
                  <ListItem>
                    <ListItemText primary="✅ ファイルの変更履歴を記録" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="✅ 複数人での共同作業をサポート" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="✅ 過去の状態に簡単に戻れる" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="✅ コードを共有・公開できる" />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper elevation={1} sx={{ p: 2, bgcolor: 'success.light', height: '100%' }}>
                <Typography variant="subtitle1" fontWeight="bold" mb={1} textAlign="center">解決する問題</Typography>
                <List dense>
                  <ListItem>
                    <ListItemText primary="❌ 「最新版はどれ？」という混乱" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="❌ 誰がいつ何を変更したか不明" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="❌ ファイルの上書き事故" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="❌ バージョン管理の煩雑さ" />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      )
    },
    {
      title: "リポジトリ（Repository）とは？",
      content: (
        <Box>
          <Typography variant="h6" textAlign="center" mb={3}>
            リポジトリは「プロジェクトのファイルを保管する場所」です
          </Typography>
          
          <Paper elevation={2} sx={{ p: 3, bgcolor: 'primary.light', mb: 3 }}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={4}>
                <Card elevation={1} sx={{ textAlign: 'center', p: 1 }}>
                  <CardContent>
                    <Typography variant="subtitle2">Webサイト用</Typography>
                    <Typography variant="caption" color="text.secondary">リポジトリ</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card elevation={1} sx={{ textAlign: 'center', p: 1 }}>
                  <CardContent>
                    <Typography variant="subtitle2">マーケティング資料</Typography>
                    <Typography variant="caption" color="text.secondary">リポジトリ</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card elevation={1} sx={{ textAlign: 'center', p: 1 }}>
                  <CardContent>
                    <Typography variant="subtitle2">顧客データ</Typography>
                    <Typography variant="caption" color="text.secondary">リポジトリ</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Typography variant="body2" textAlign="center" mt={2} fontStyle="italic" color="text.secondary">
              リポジトリはプロジェクトごとに分けて作成するのが一般的です
            </Typography>
          </Paper>
          
          <Typography variant="body2" textAlign="center" sx={{ bgcolor: 'info.light', p: 2, borderRadius: 1 }}>
            💡 共有フォルダやクラウドストレージと似ていますが、<br />
            変更履歴も記録される点が大きな違いです
          </Typography>
        </Box>
      )
    },
    {
      title: "Issue（課題）とは？",
      content: (
        <Box>
          <Typography variant="h6" textAlign="center" mb={3}>
            Issueは「やるべきこと」や「問題点」を記録するためのメモのようなものです
          </Typography>
          
          <Paper elevation={2} sx={{ p: 3, bgcolor: 'warning.light', mb: 3 }}>
            <Box sx={{ mb: 2 }}>
              <Paper elevation={1} sx={{ p: 1.5, mb: 1.5 }}>
                <Box display="flex" alignItems="center">
                  <Box sx={{ px: 1, py: 0.5, bgcolor: 'error.light', color: 'error.dark', borderRadius: 10, fontSize: '0.7rem', mr: 1 }}>
                    バグ
                  </Box>
                  <Typography variant="body2" fontWeight="medium">ログインページのボタンが動作しない</Typography>
                </Box>
              </Paper>
              
              <Paper elevation={1} sx={{ p: 1.5, mb: 1.5 }}>
                <Box display="flex" alignItems="center">
                  <Box sx={{ px: 1, py: 0.5, bgcolor: 'success.light', color: 'success.dark', borderRadius: 10, fontSize: '0.7rem', mr: 1 }}>
                    新機能
                  </Box>
                  <Typography variant="body2" fontWeight="medium">お問い合わせフォームを追加する</Typography>
                </Box>
              </Paper>
              
              <Paper elevation={1} sx={{ p: 1.5 }}>
                <Box display="flex" alignItems="center">
                  <Box sx={{ px: 1, py: 0.5, bgcolor: 'primary.light', color: 'primary.dark', borderRadius: 10, fontSize: '0.7rem', mr: 1 }}>
                    改善
                  </Box>
                  <Typography variant="body2" fontWeight="medium">商品ページのデザインを更新する</Typography>
                </Box>
              </Paper>
            </Box>
          </Paper>
          
          <Typography variant="body2" fontWeight="medium" textAlign="center">
            💡 Issueには担当者やラベル、期限などを設定できます
          </Typography>
          <Typography variant="caption" textAlign="center" display="block" color="text.secondary" mt={0.5}>
            チームメンバーはIssueにコメントを追加して議論することもできます
          </Typography>
        </Box>
      )
    },
    {
      title: "Projects（プロジェクト管理）とは？",
      content: (
        <Box>
          <Typography variant="h6" textAlign="center" mb={3}>
            Projectsは「Issueをカンバンボードで視覚的に管理できるツール」です
          </Typography>
          
          <Paper elevation={2} sx={{ p: 3, bgcolor: 'info.light', mb: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Paper elevation={1} sx={{ p: 1.5, height: '100%' }}>
                  <Typography variant="subtitle2" textAlign="center" fontWeight="bold" mb={1} sx={{ borderBottom: '1px solid #eee', pb: 0.5 }}>
                    ToDo（予定）
                  </Typography>
                  <Box sx={{ '& > div': { mb: 1 } }}>
                    <Paper variant="outlined" sx={{ p: 1, bgcolor: 'warning.50' }}>
                      <Typography variant="caption">Q2マーケティング計画の作成</Typography>
                    </Paper>
                    <Paper variant="outlined" sx={{ p: 1, bgcolor: 'success.50' }}>
                      <Typography variant="caption">新商品の写真撮影</Typography>
                    </Paper>
                    <Paper variant="outlined" sx={{ p: 1, bgcolor: 'primary.50' }}>
                      <Typography variant="caption">採用ページの更新</Typography>
                    </Paper>
                  </Box>
                </Paper>
              </Grid>
              
              <Grid item xs={4}>
                <Paper elevation={1} sx={{ p: 1.5, height: '100%' }}>
                  <Typography variant="subtitle2" textAlign="center" fontWeight="bold" mb={1} sx={{ borderBottom: '1px solid #eee', pb: 0.5 }}>
                    進行中
                  </Typography>
                  <Box sx={{ '& > div': { mb: 1 } }}>
                    <Paper variant="outlined" sx={{ p: 1, bgcolor: 'secondary.50' }}>
                      <Typography variant="caption">新規顧客向けメールの作成</Typography>
                    </Paper>
                    <Paper variant="outlined" sx={{ p: 1, bgcolor: 'error.50' }}>
                      <Typography variant="caption">来月のイベント準備</Typography>
                    </Paper>
                  </Box>
                </Paper>
              </Grid>
              
              <Grid item xs={4}>
                <Paper elevation={1} sx={{ p: 1.5, height: '100%' }}>
                  <Typography variant="subtitle2" textAlign="center" fontWeight="bold" mb={1} sx={{ borderBottom: '1px solid #eee', pb: 0.5 }}>
                    完了
                  </Typography>
                  <Box sx={{ '& > div': { mb: 1 } }}>
                    <Paper variant="outlined" sx={{ p: 1, bgcolor: 'grey.100' }}>
                      <Typography variant="caption">Q1レポートの提出</Typography>
                    </Paper>
                    <Paper variant="outlined" sx={{ p: 1, bgcolor: 'grey.100' }}>
                      <Typography variant="caption">チームミーティング</Typography>
                    </Paper>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
          
          <Typography variant="body2" fontWeight="medium" textAlign="center">
            💡 カンバンボードはTrelloやNotionと似た使い勝手です
          </Typography>
          <Typography variant="caption" textAlign="center" display="block" color="text.secondary" mt={0.5}>
            タスクを列間でドラッグ＆ドロップして進捗管理できます
          </Typography>
        </Box>
      )
    },
    {
      title: "Gitの基本コマンド",
      content: (
        <Box>
          <Typography variant="h6" textAlign="center" mb={3}>
            主なGitコマンドと基本的な使い方
          </Typography>
          
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Paper elevation={1} sx={{ p: 2, bgcolor: 'primary.light', height: '100%' }}>
                <Typography variant="subtitle1" fontWeight="bold" mb={1} textAlign="center">リポジトリ操作</Typography>
                <List dense>
                  <ListItem>
                    <Box component="span" sx={{ bgcolor: 'background.paper', px: 1, py: 0.5, borderRadius: 1, mr: 1, fontFamily: 'monospace', fontSize: '0.8rem' }}>
                      git init
                    </Box>
                    <ListItemText primary="新しいリポジトリを作成" />
                  </ListItem>
                  <ListItem>
                    <Box component="span" sx={{ bgcolor: 'background.paper', px: 1, py: 0.5, borderRadius: 1, mr: 1, fontFamily: 'monospace', fontSize: '0.8rem' }}>
                      git clone
                    </Box>
                    <ListItemText primary="リポジトリをコピー" />
                  </ListItem>
                  <ListItem>
                    <Box component="span" sx={{ bgcolor: 'background.paper', px: 1, py: 0.5, borderRadius: 1, mr: 1, fontFamily: 'monospace', fontSize: '0.8rem' }}>
                      git status
                    </Box>
                    <ListItemText primary="作業状態を確認" />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
            
            <Grid item xs={6}>
              <Paper elevation={1} sx={{ p: 2, bgcolor: 'success.light', height: '100%' }}>
                <Typography variant="subtitle1" fontWeight="bold" mb={1} textAlign="center">変更操作</Typography>
                <List dense>
                  <ListItem>
                    <Box component="span" sx={{ bgcolor: 'background.paper', px: 1, py: 0.5, borderRadius: 1, mr: 1, fontFamily: 'monospace', fontSize: '0.8rem' }}>
                      git add .
                    </Box>
                    <ListItemText primary="変更をステージングに追加" />
                  </ListItem>
                  <ListItem>
                    <Box component="span" sx={{ bgcolor: 'background.paper', px: 1, py: 0.5, borderRadius: 1, mr: 1, fontFamily: 'monospace', fontSize: '0.8rem' }}>
                      git commit
                    </Box>
                    <ListItemText primary="変更を記録" />
                  </ListItem>
                  <ListItem>
                    <Box component="span" sx={{ bgcolor: 'background.paper', px: 1, py: 0.5, borderRadius: 1, mr: 1, fontFamily: 'monospace', fontSize: '0.8rem' }}>
                      git push
                    </Box>
                    <ListItemText primary="変更をGitHubに送信" />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
          </Grid>
          
          <Box mt={3}>
            <Stepper alternativeLabel>
              <Step active>
                <StepLabel>変更</StepLabel>
              </Step>
              <Step active>
                <StepLabel>git add</StepLabel>
              </Step>
              <Step active>
                <StepLabel>git commit</StepLabel>
              </Step>
              <Step active>
                <StepLabel>git push</StepLabel>
              </Step>
            </Stepper>
          </Box>
        </Box>
      )
    },
    {
      title: "GitHub活用のメリット",
      content: (
        <Box>
          <Typography variant="h6" textAlign="center" mb={3}>
            GitHubを使うことでこんなメリットがあります
          </Typography>
          
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Paper elevation={1} sx={{ p: 2, bgcolor: 'primary.light', height: '100%' }}>
                <Typography variant="subtitle1" fontWeight="bold" mb={1} textAlign="center">チーム開発</Typography>
                <List dense>
                  <ListItem>
                    <ListItemText primary="分散開発のサポート" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="コードレビューの簡素化" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="コミュニケーションの円滑化" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="作業の可視化" />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
            
            <Grid item xs={6}>
              <Paper elevation={1} sx={{ p: 2, bgcolor: 'success.light', height: '100%' }}>
                <Typography variant="subtitle1" fontWeight="bold" mb={1} textAlign="center">プロジェクト管理</Typography>
                <List dense>
                  <ListItem>
                    <ListItemText primary="タスク管理の一元化" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="進捗の可視化" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="プロジェクト全体の把握" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="自動化による効率化" />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
            
            <Grid item xs={6}>
              <Paper elevation={1} sx={{ p: 2, bgcolor: 'warning.light', height: '100%' }}>
                <Typography variant="subtitle1" fontWeight="bold" mb={1} textAlign="center">品質向上</Typography>
                <List dense>
                  <ListItem>
                    <ListItemText primary="バグの早期発見" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="コード品質の向上" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="CIによる自動テスト" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="ドキュメントの管理" />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
            
            <Grid item xs={6}>
              <Paper elevation={1} sx={{ p: 2, bgcolor: 'secondary.light', height: '100%' }}>
                <Typography variant="subtitle1" fontWeight="bold" mb={1} textAlign="center">エコシステム</Typography>
                <List dense>
                  <ListItem>
                    <ListItemText primary="豊富な連携ツール" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="GitHubアクション" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="コミュニティサポート" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="継続的な機能改善" />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      )
    },
    {
      title: "まとめ：GitHubを始めよう",
      content: (
        <Box>
          <Typography variant="h6" textAlign="center" mb={3}>
            GitHubで効率的な開発・協業を始めましょう
          </Typography>
          
          <Paper elevation={3} sx={{ p: 3, bgcolor: 'primary.light', mb: 3 }}>
            <List>
              <ListItem>
                <ListItemText 
                  primary="アカウント作成から始める" 
                  secondary="github.comでアカウントを作成しましょう" 
                />
              </ListItem>
              <Divider variant="middle" />
              <ListItem>
                <ListItemText 
                  primary="リポジトリを作成する" 
                  secondary="プロジェクトの保管場所を用意します" 
                />
              </ListItem>
              <Divider variant="middle" />
              <ListItem>
                <ListItemText 
                  primary="ファイルをコミットする" 
                  secondary="変更を記録していきましょう" 
                />
              </ListItem>
              <Divider variant="middle" />
              <ListItem>
                <ListItemText 
                  primary="Issueやプロジェクトボードを活用する" 
                  secondary="タスク管理で効率アップ" 
                />
              </ListItem>
            </List>
          </Paper>
          
          <Typography variant="body1" fontStyle="italic" textAlign="center">
            「GitHubはただのコード保管場所ではなく、ソフトウェア開発の全工程を支える総合プラットフォームです」
          </Typography>
        </Box>
      )
    }
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  return (
    <Box component="section">
      <Paper elevation={3} sx={{ p: 4, maxWidth: '800px', mx: 'auto' }}>
        {/* スライドヘッダー */}
        <Box mb={3}>
          <Typography variant="h4" textAlign="center" color="primary.main" mb={1}>
            GitHub入門
          </Typography>
          <Typography variant="subtitle1" textAlign="center" color="text.secondary">
            リポジトリ、Issue、Projectsの基本と効果的なタスク管理
          </Typography>
          <Box sx={{ position: 'relative', mt: 3 }}>
            <Box sx={{ height: '4px', width: '100%', bgcolor: 'grey.200' }} />
            <Box 
              sx={{ 
                position: 'absolute',
                top: 0,
                left: 0,
                height: '4px',
                width: `${((currentSlide + 1) / slides.length) * 100}%`,
                bgcolor: 'primary.main'
              }}
            />
            <Typography variant="caption" display="block" textAlign="right" mt={0.5}>
              {currentSlide + 1} / {slides.length}
            </Typography>
          </Box>
        </Box>
        
        {/* スライドコンテンツ */}
        <Box>
          <Typography variant="h5" textAlign="center" color="text.primary" mb={3} pb={1} sx={{ borderBottom: '2px solid', borderColor: 'primary.light' }}>
            {slides[currentSlide].title}
          </Typography>
          
          <Box sx={{ minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {slides[currentSlide].content}
          </Box>
        </Box>
        
        {/* スライドナビゲーション */}
        <Box mt={3} display="flex" justifyContent="space-between">
          <Button 
            variant="contained" 
            color="primary"
            onClick={handlePrev}
            disabled={currentSlide === 0}
          >
            前へ
          </Button>
          
          <Button 
            variant="contained" 
            color="primary"
            onClick={handleNext}
            disabled={currentSlide === slides.length - 1}
          >
            次へ
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};