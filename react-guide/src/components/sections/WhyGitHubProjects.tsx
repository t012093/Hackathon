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
} from '@mui/material';
import { motion } from 'framer-motion';
import ForumIcon from '@mui/icons-material/Forum';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WorkIcon from '@mui/icons-material/Work';
import BusinessIcon from '@mui/icons-material/Business';

export const WhyGitHubProjects = () => {
  return (
    <Box component="section" mb={6}>
      <Typography
        variant="h2"
        component={motion.h2}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        mb={4}
      >
        なぜGitHub Projectsなのか
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
                プロジェクト管理のベストプラクティス
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                GitHub Projectsは、現代のプロジェクト管理における理想的な選択肢です。
                以下の特長から、多くの組織で採用されています：
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <Paper elevation={3} sx={{ p: 2, height: '100%' }}>
                    <Box display="flex" alignItems="center" mb={2}>
                      <BusinessIcon color="primary" />
                      <Typography variant="h6" ml={1}>
                        コスト効率
                      </Typography>
                    </Box>
                    <List dense>
                      <ListItem>
                        <ListItemIcon>
                          <CheckCircleIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="基本機能は無料で利用可能" secondary="個人プランでもパブリック/プライベートリポジトリでコラボレーション可能" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <CheckCircleIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="充実した無料プラン" secondary="Issueの作成・管理、プロジェクトボード、Wiki、2,000分/月のGitHub Actions、500MB/月のパッケージストレージなど、主要な機能が無料で利用可能です。" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <CheckCircleIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="追加のツール導入が不要" secondary="GitHubの統合機能として利用可能" />
                      </ListItem>
                    </List>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Paper elevation={3} sx={{ p: 2, height: '100%' }}>
                    <Box display="flex" alignItems="center" mb={2}>
                      <WorkIcon color="primary" />
                      <Typography variant="h6" ml={1}>
                        シームレスな開発連携
                      </Typography>
                    </Box>
                    <List dense>
                      <ListItem>
                        <ListItemIcon>
                          <CheckCircleIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText 
                          primary="コードとタスクの直接的な紐付け" 
                          secondary="コミット、Issue、PRとの自動連携"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <CheckCircleIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText 
                          primary="自動化されたステータス更新" 
                          secondary="コードの変更に応じて自動反映"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <CheckCircleIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText 
                          primary="Pull Requestとの連動" 
                          secondary="レビューやマージの進捗を自動追跡"
                        />
                      </ListItem>
                    </List>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Paper elevation={3} sx={{ p: 2, height: '100%' }}>
                    <Box display="flex" alignItems="center" mb={2}>
                      <ForumIcon color="primary" />
                      <Typography variant="h6" ml={1}>
                        柔軟なコラボレーション
                      </Typography>
                    </Box>
                    <List dense>
                      <ListItem>
                        <ListItemIcon>
                          <CheckCircleIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText 
                          primary="部門を超えた情報共有" 
                          secondary="開発・企画・営業など全体で活用可能"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <CheckCircleIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText 
                          primary="カスタマイズ可能なビュー" 
                          secondary="チーム別・役割別の表示切替が可能"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <CheckCircleIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText 
                          primary="豊富な連携機能" 
                          secondary="Slack、TeamsなどのツールとAPI連携"
                        />
                      </ListItem>
                    </List>
                  </Paper>
                </Grid>
              </Grid>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
                これらの特長により、GitHub Projectsはエンジニアリングチームだけでなく、
                組織全体のプロジェクト管理ツールとして最適な選択肢となっています。
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
