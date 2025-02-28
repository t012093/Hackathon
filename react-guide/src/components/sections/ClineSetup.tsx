import { Box, Typography, Stepper, Step, StepLabel, StepContent, Button, Paper, Dialog, IconButton } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { motion } from 'framer-motion';
import { useState } from 'react';
import ExtensionIcon from '@mui/icons-material/Extension';
import SettingsIcon from '@mui/icons-material/Settings';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import clineInstallImage from '../../assets/images/guide/cline1.png';
import clineInstallImage2 from '../../assets/images/guide/cline4.png';
import vsset01 from '../../assets/images/guide/vs/vsset01.png';
import vsset02 from '../../assets/images/guide/vs/vsset02.png';
import vsset03 from '../../assets/images/guide/vs/vsset03.png';
import vsset05 from '../../assets/images/guide/vs/vsset05.png';
import vsset06 from '../../assets/images/guide/vs/vsset06.png';
import vsset07 from '../../assets/images/guide/vs/vsset07.png';
import vsset08 from '../../assets/images/guide/vs/vsset08.png';
import vsset09 from '../../assets/images/guide/vs/vsset09.png';
import vsset10 from '../../assets/images/guide/vs/vsset10.png';
import vsset11 from '../../assets/images/guide/vs/vsset11.png';
import vsset12 from '../../assets/images/guide/vs/vsset12.png';
import vsset13 from '../../assets/images/guide/vs/vsset13.png';
import vsset14 from '../../assets/images/guide/vs/vsset14.png';

const steps = [
  {
    label: 'GitHub Copilotの設定',
    icon: <SettingsIcon />,
    description: `
      1. VS Codeを起動します
      2. welcome ページでSet Up Copilot for Freeをクリック(もしくはCopilotのアイコンをクリック)
      3. GitHubアカウントでサインインしてください
      4. 指示に従いAllowをクリックしてアクセスを許可して下さい。
      5. 右側のchatセクションでcopilot - claude-3.5-sonnetを選択してください
      6. Enableをクリックしてmodelを有効にしてください
      7. これでGitHub Copilotの設定は完了です
    `,
    imageArray: [vsset01, vsset02, vsset03, vsset05, vsset06, vsset07, vsset08, vsset09, vsset10, vsset11, vsset12, vsset13, vsset14]
  },
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
    image: clineInstallImage
  },
  {
    label: '初期設定',
    icon: <SettingsIcon />,
    description: `
      1. 設定を開く（歯車マークアイコンをクリック）
      2. API Providerを選択（VS Code LM APIを推奨）
      3. copilot - claude-3.5-sonnetを選択 (高クオリティのため)
      4. Custom instructionsに以下の内容を記述:

        • 日本語でchatしてください
        • 既存のコードを修正する場合既存のコードを省略しないこと※これ絶対
        • "[後半部分は同じなので省略...]"などを使用しないでください
        • 必要であればブランチを作成して提案する
        • 実行環境はPowerShellであることに注意すること
        • コマンドはGit bash環境で実行されていることを念頭においてください
        • コマンドを打つときは必要なディレクトリにcdで移動した後に打つようにしてください
        
      5. 設定を保存して反映させる
    `,
    image: clineInstallImage2
  },
  {
    label: '動作確認',
    icon: <PlayArrowIcon />,
    description: `
      1. 新しいフォルダまたはプロジェクトを開く(vscodeにドラッグ&ドロップ)
      2. サイドパネルからclineのアイコンをクリック
      3. 基本的な機能（コマンド実行、ファイル操作など）を試してみる
    `,
  }
];

export const ClineSetup = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageSet, setCurrentImageSet] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
    <>
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
                  {(step.image || step.imageArray) && (
                    <Box
                      sx={{
                        mb: 2,
                        overflowX: 'auto',
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          gap: 2,
                          pb: 2, // スクロールバー用の余白
                          minWidth: 'min-content',
                        }}
                      >
                        {step.imageArray ? (
                          step.imageArray.map((img, index) => (
                            <Box
                              key={index}
                              component="img"
                              src={img}
                              alt={`${step.label} - 画像${index + 1}`}
                              onClick={() => {
                                setSelectedImage(img);
                                setCurrentImageSet(step.imageArray || []);
                                setCurrentImageIndex(index);
                              }}
                              sx={{
                                width: '200px',
                                height: '120px',
                                objectFit: 'cover',
                                borderRadius: 1,
                                cursor: 'pointer',
                                transition: 'transform 0.2s',
                                flexShrink: 0,
                                '&:hover': {
                                  transform: 'scale(1.05)',
                                },
                              }}
                            />
                          ))
                        ) : step.image && (
                          <>
                            <Box
                              component="img"
                              src={step.image}
                              alt={step.label}
                              onClick={() => {
                                setSelectedImage(step.image);
                                setCurrentImageSet(step.image === clineInstallImage ? [clineInstallImage, clineInstallImage2] : [step.image]);
                                setCurrentImageIndex(0);
                              }}
                              sx={{
                                width: '33%',
                                height: 'auto',
                                borderRadius: 1,
                                cursor: 'pointer',
                                transition: 'transform 0.2s',
                                '&:hover': {
                                  transform: 'scale(1.05)',
                                },
                              }}
                            />
                            {step.image === clineInstallImage && (
                              <Box
                                component="img"
                                src={clineInstallImage2}
                                alt={`${step.label} - 追加画像`}
                                onClick={() => {
                                  setSelectedImage(clineInstallImage2);
                                  setCurrentImageSet([clineInstallImage, clineInstallImage2]);
                                  setCurrentImageIndex(1);
                                }}
                                sx={{
                                  width: '33%',
                                  height: 'auto',
                                  borderRadius: 1,
                                  cursor: 'pointer',
                                  transition: 'transform 0.2s',
                                  '&:hover': {
                                    transform: 'scale(1.05)',
                                  },
                                }}
                              />
                            )}
                          </>
                        )}
                      </Box>
                    </Box>
                  )}
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
      <Dialog
        open={!!selectedImage}
        onClose={() => {
          setSelectedImage(null);
          setCurrentImageSet([]);
          setCurrentImageIndex(0);
        }}
        maxWidth="lg"
        PaperProps={{
          sx: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
            position: 'relative',
          },
        }}
      >
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {currentImageSet.length > 1 && (
            <>
              <IconButton
                sx={{
                  position: 'absolute',
                  left: 16,
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  },
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  const newIndex = (currentImageIndex - 1 + currentImageSet.length) % currentImageSet.length;
                  setCurrentImageIndex(newIndex);
                  setSelectedImage(currentImageSet[newIndex]);
                }}
              >
                <NavigateBeforeIcon />
              </IconButton>
              <IconButton
                sx={{
                  position: 'absolute',
                  right: 16,
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  },
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  const newIndex = (currentImageIndex + 1) % currentImageSet.length;
                  setCurrentImageIndex(newIndex);
                  setSelectedImage(currentImageSet[newIndex]);
                }}
              >
                <NavigateNextIcon />
              </IconButton>
            </>
          )}
          <Box
            component="img"
            src={selectedImage || ''}
            alt="拡大画像"
            sx={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              objectFit: 'contain',
            }}
            onClick={() => {
              setSelectedImage(null);
              setCurrentImageSet([]);
              setCurrentImageIndex(0);
            }}
          />
        </Box>
      </Dialog>
    </>
  );
};
