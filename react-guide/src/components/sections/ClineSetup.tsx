import { Box, Typography, Stepper, Step, StepLabel, StepContent, Button, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import ExtensionIcon from '@mui/icons-material/Extension';
import SettingsIcon from '@mui/icons-material/Settings';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const steps = [
  {
    label: 'VS Code拡張機能のインストール',
    icon: <ExtensionIcon />,
    description: `
      1. VS Codeを起動します
      2. 左サイドバーの拡張機能アイコン（四角が4つ並んだアイコン）をクリック
      3. 検索バーに「Cline」と入力
      4. Cline拡張機能を見つけたら「Install」をクリック
      5. インストールが完了するまで待機
    `,
    image: '拡張機能のインストール手順のスクリーンショット'
  },
  {
    label: '初期設定',
    icon: <SettingsIcon />,
    description: `
      1. コマンドパレットを開く（Windowsの場合：Ctrl+Shift+P、Macの場合：Cmd+Shift+P）
      2. 「Cline: Initialize」と入力して選択
      3. 設定ウィザードに従って基本設定を完了
      4. VS Codeを再起動して設定を反映
    `,
    image: '初期設定手順のスクリーンショット'
  },
  {
    label: '動作確認',
    icon: <PlayArrowIcon />,
    description: `
      1. 新しいフォルダまたはプロジェクトを開く
      2. コマンドパレットから「Cline: Open」を実行
      3. Clineのサイドパネルが表示されることを確認
      4. 基本的な機能（コマンド実行、ファイル操作など）を試してみる
    `,
    image: '動作確認手順のスクリーンショット'
  }
];

export const ClineSetup = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box component="section" mb={6}>
      <Typography
        variant="h2"
        component={motion.h2}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        mb={4}
      >
        Cline拡張機能のセットアップ
      </Typography>

      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                StepIconComponent={() => (
                  <Box
                    component={motion.div}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    sx={{ color: 'primary.main' }}
                  >
                    {step.icon}
                  </Box>
                )}
              >
                <Typography variant="h6">{step.label}</Typography>
              </StepLabel>
              <StepContent>
                <Box sx={{ mb: 2 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      whiteSpace: 'pre-line',
                      mb: 2,
                      backgroundColor: 'background.paper',
                      p: 2,
                      borderRadius: 1,
                    }}
                  >
                    {step.description}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {index === steps.length - 1 ? '完了' : '次へ'}
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      戻る
                    </Button>
                  </Box>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>セットアップ完了！Clineの機能を使い始めることができます。</Typography>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              手順を最初から見る
            </Button>
          </Paper>
        )}
      </Box>

      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        mt={4}
      >
        <Typography variant="h3" mb={2}>
          補足情報
        </Typography>
        <Typography paragraph>
          • Clineは定期的にアップデートされます。VS Codeの自動更新を有効にしておくことをお勧めします。
        </Typography>
        <Typography paragraph>
          • 特定の機能は追加の設定やツールのインストールが必要な場合があります。
        </Typography>
        <Typography>
          • 困ったときは、VS Code内のヘルプ機能やClineの公式ドキュメントを参照してください。
        </Typography>
      </Box>
    </Box>
  );
};
