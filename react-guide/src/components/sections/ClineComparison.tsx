import { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { MermaidDiagram } from '../MermaidDiagram';

interface Slide {
  title: string;
  content: string[];
  mermaid?: string;
}

const slides: Slide[] = [
  {
    title: "Clineによるアクセス方法の比較",
    content: [
      "• 直接利用とGitHub Copilot経由の2つの方法",
      "• コストと利用方法の違いを理解",
      "• 最適な選択方法の提案",
    ],
    mermaid: `graph TB
    subgraph "直接利用" 
        A[Cline] -->|"従量課金<br>(使用分のみ)"| B[Claude-3.5 Sonnet]
    end
    
    subgraph "GitHub Copilot経由"
        C[Cline] -->|"無料"| D[GitHub Copilot]
        D -->|"無料 or $10/月"| E[Claude-3.5 Sonnet]
        style C fill:#90EE90
        style D fill:#FFB6C1
        style E fill:#90EE90
    end
    
    classDef default fill:#f9f,stroke:#333,stroke-width:2px
    classDef free fill:#90EE90,stroke:#333,stroke-width:2px
    
    style A fill:#FFB6C1
    style B fill:#FFB6C1`
  },
  {
    title: "詳細な機能比較",
    content: [
      "• 直接利用：シンプルな設定で即時利用可能",
      "• GitHub Copilot経由：学生は無料で利用可能",
      "• 使用頻度に応じた最適な選択が重要",
    ],
    mermaid: `classDiagram
    class "直接利用" {
        開始点: Cline
        経由: なし
        コスト: 従量課金（使用分）
        設定: シンプル
        制限: 使用量に応じた課金
    }
    class "GitHub Copilot経由" {
        開始点: Cline
        経由: GitHub Copilot
        コスト: GitHub Copilot無料 or $10/月
        設定: VSCode拡張機能必要
        制限: GitHub学生プログラムで無料
    }`
  }
];

export const ClineComparison = () => {
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
        Clineのアクセス方法比較
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

          {slides[currentSlide].mermaid && (
            <Box sx={{ my: 2 }}>
              <MermaidDiagram chart={slides[currentSlide].mermaid} />
            </Box>
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

export default ClineComparison;
