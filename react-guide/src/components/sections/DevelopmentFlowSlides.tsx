import { useState } from 'react';
import { Box, Button, Typography, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface Slide {
  title: string;
  content: string[];
  image?: string;
}

const slides: Slide[] = [
  {
    title: "Visual Studio Code による開発効率向上",
    content: [
      "• 直感的なコードエディタで初心者にも優しい",
      "• 豊富な拡張機能でカスタマイズ可能",
      "• インテリセンスによる強力なコード補完",
      "• デバッグ機能の充実",
    ],
    image: "/src/assets/images/guide/vs/vsset01.png"
  },
  {
    title: "Git による効率的なバージョン管理",
    content: [
      "• コードの変更履歴を簡単に管理",
      "• チーム開発での作業の統合が容易",
      "• ブランチ機能で並行開発が可能",
      "• VSCodeとの完璧な統合",
    ],
    image: "/src/assets/images/guide/team-workflow.svg"
  },
  {
    title: "GitHub でのチーム開発",
    content: [
      "• プロジェクト管理が視覚的に可能",
      "• イシュー管理でタスクの整理が簡単",
      "• プルリクエストでコードレビューが効率的",
      "• チーム全体の進捗が一目で分かる",
    ],
    image: "/src/assets/images/guide/team-structure.svg"
  },
  {
    title: "GitHub Copilot で非エンジニアでも開発可能",
    content: [
      "• AIによるコード補完で開発をサポート",
      "• 自然言語でコードの生成が可能",
      "• プログラミング初心者でも素早く開発",
      "• 開発時間の大幅な短縮が可能",
    ],
    image: "/src/assets/images/guide/vs/vsset02.png"
  }
];

export const DevelopmentFlowSlides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <Box sx={{ padding: 4, maxWidth: '1200px', margin: '0 auto' }}>
      <Typography variant="h4" align="center" gutterBottom>
        開発効率化とアクセシビリティの向上
      </Typography>
      
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        gap: 2,
        my: 4 
      }}>
        <IconButton onClick={prevSlide} color="primary">
          <ArrowBackIcon />
        </IconButton>

        <Box sx={{ 
          flex: 1,
          maxWidth: '800px',
          minHeight: '500px',
          p: 4,
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 3
        }}>
          <Typography variant="h5" gutterBottom>
            {slides[currentSlide].title}
          </Typography>

          {slides[currentSlide].image && (
            <Box
              component="img"
              src={slides[currentSlide].image}
              sx={{
                width: '100%',
                height: '300px',
                objectFit: 'contain',
                my: 2
              }}
              alt={slides[currentSlide].title}
            />
          )}

          {slides[currentSlide].content.map((point, index) => (
            <Typography key={index} paragraph>
              {point}
            </Typography>
          ))}
        </Box>

        <IconButton onClick={nextSlide} color="primary">
          <ArrowForwardIcon />
        </IconButton>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 2 }}>
        {slides.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              bgcolor: currentSlide === index ? 'primary.main' : 'grey.300',
              cursor: 'pointer',
            }}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default DevelopmentFlowSlides;
