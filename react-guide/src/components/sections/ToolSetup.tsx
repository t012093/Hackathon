import { Card, CardContent, Grid, Typography, Box, IconButton, Collapse, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CodeIcon from '@mui/icons-material/Code';
import TerminalIcon from '@mui/icons-material/Terminal';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';

const SetupCard = motion(Card);

interface SetupStepProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const SetupStep = ({ title, icon, children }: SetupStepProps) => {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();

  return (
    <SetupCard
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      sx={{
        height: '100%',
        position: 'relative',
        '&:hover': {
          boxShadow: `0 4px 20px ${theme.palette.primary.main}20`,
          transform: 'translateY(-2px)',
        },
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
      }}
    >
      <CardContent>
        <Box 
          display="flex" 
          alignItems="center" 
          mb={2}
          sx={{
            borderBottom: `2px solid ${theme.palette.primary.main}20`,
            pb: 1,
          }}
        >
          {icon}
          <Typography 
            variant="h3" 
            ml={2}
            sx={{ 
              color: 'primary.main',
              fontWeight: 500,
            }}
          >
            {title}
          </Typography>
        </Box>
        <Collapse in={expanded} collapsedSize={100}>
          <Box sx={{ mb: 2 }}>
            {children}
          </Box>
        </Collapse>
        <IconButton
          onClick={() => setExpanded(!expanded)}
          sx={{
            position: 'absolute',
            bottom: 8,
            right: 8,
            transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s',
            color: 'primary.main',
            backgroundColor: (theme) => theme.palette.primary.main + '10',
            '&:hover': {
              backgroundColor: (theme) => theme.palette.primary.main + '20',
            },
          }}
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardContent>
    </SetupCard>
  );
};

export const ToolSetup = () => {
  return (
    <Box component="section" mb={6}>
      <Typography
        variant="h2"
        component={motion.h2}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        mb={4}
        sx={{
          color: 'primary.main',
          borderBottom: (theme) => `2px solid ${theme.palette.primary.main}20`,
          pb: 1,
        }}
      >
        開発環境のセットアップ
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <SetupStep
            title="VS Codeのインストール"
            icon={<CodeIcon sx={{ fontSize: 40, color: 'primary.main' }} />}
          >
            <Typography paragraph color="text.primary">
              1. code.visualstudio.com にアクセス
            </Typography>
            <Typography paragraph color="text.primary">
              2. お使いのOSに合わせてダウンロード
            </Typography>
            <Typography paragraph color="text.primary">
              3. インストーラーを実行し、指示に従う
            </Typography>
            <Typography paragraph color="text.primary">
              4. 日本語拡張機能をインストール（Japanese Language Pack）
            </Typography>
            <Typography 
              variant="subtitle2" 
              sx={{
                color: 'text.secondary',
                backgroundColor: (theme) => theme.palette.primary.main + '08',
                p: 1,
                borderRadius: 1,
                border: (theme) => `1px dashed ${theme.palette.primary.main}20`,
              }}
            >
              ※ワークスペースの設定やキーボードショートカットのカスタマイズも可能です
            </Typography>
          </SetupStep>
        </Grid>
        <Grid item xs={12} md={4}>
          <SetupStep
            title="Git環境の準備"
            icon={<TerminalIcon sx={{ fontSize: 40, color: 'primary.main' }} />}
          >
            <Typography paragraph color="text.primary">
              1. git-scm.com からGitをダウンロード
            </Typography>
            <Typography paragraph color="text.primary">
              2. インストーラーを実行
            </Typography>
            <Typography paragraph color="text.primary">
              3. 基本設定を行う：
            </Typography>
            <Box 
              component="ul" 
              pl={2}
              sx={{
                '& li': {
                  color: 'text.primary',
                },
              }}
            >
              <Typography component="li">ユーザー名の設定</Typography>
              <Typography component="li">メールアドレスの設定</Typography>
              <Typography component="li">エディタの設定</Typography>
            </Box>
            <Typography 
              variant="subtitle2" 
              mt={2}
              sx={{
                color: 'text.secondary',
                backgroundColor: (theme) => theme.palette.primary.main + '08',
                p: 1,
                borderRadius: 1,
                border: (theme) => `1px dashed ${theme.palette.primary.main}20`,
              }}
            >
              ※Gitの基本コマンドについては後述します
            </Typography>
          </SetupStep>
        </Grid>
        <Grid item xs={12} md={4}>
          <SetupStep
            title="GitHubアカウント"
            icon={<AccountCircleIcon sx={{ fontSize: 40, color: 'primary.main' }} />}
          >
            <Typography paragraph color="text.primary">
              1. github.com にアクセス
            </Typography>
            <Typography paragraph color="text.primary">
              2. 「Sign up」からアカウント作成
            </Typography>
            <Typography paragraph color="text.primary">
              3. 必要事項を入力：
            </Typography>
            <Box 
              component="ul" 
              pl={2}
              sx={{
                '& li': {
                  color: 'text.primary',
                },
              }}
            >
              <Typography component="li">ユーザー名</Typography>
              <Typography component="li">メールアドレス</Typography>
              <Typography component="li">パスワード</Typography>
            </Box>
            <Typography paragraph mt={2} color="text.primary">
              4. メール認証を完了
            </Typography>
            <Typography 
              variant="subtitle2"
              sx={{
                color: 'text.secondary',
                backgroundColor: (theme) => theme.palette.primary.main + '08',
                p: 1,
                borderRadius: 1,
                border: (theme) => `1px dashed ${theme.palette.primary.main}20`,
              }}
            >
              ※二要素認証の設定を推奨
            </Typography>
          </SetupStep>
        </Grid>
      </Grid>
    </Box>
  );
};
