import {
  Box,
  Typography,
  Card,
  CardContent,
  IconButton,
  Paper,
  Avatar,
  Chip,
  Grid,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PersonIcon from '@mui/icons-material/Person';
import CodeIcon from '@mui/icons-material/Code';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import BuildIcon from '@mui/icons-material/Build';
import PsychologyIcon from '@mui/icons-material/Psychology';
import LanguageIcon from '@mui/icons-material/Language';
import {
  People as PeopleIcon,
  EmojiPeople as EmojiPeopleIcon,
  Palette as PaletteIcon,
  Business as BusinessIcon,
  Diversity3 as Diversity3Icon,
  Handshake as HandshakeIcon,
} from '@mui/icons-material';
import { useState, useEffect, useCallback } from 'react';

// スライドの種類を定義
type SlideType = 'intro' | 'feature' | 'future' | 'ai-capabilities' | 'ai-society' | 'community';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface ProfileItem {
  label: string;
  value: string;
}

interface AiCapability {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface AiSocietyImpact {
  area: string;
  impact: string;
  icon: React.ReactNode;
}

interface BaseSlide {
  type: SlideType;
  title: string;
  subtitle: string;
}

interface FeatureSlide extends BaseSlide {
  type: 'feature';
  features: Feature[];
}

interface IntroSlide extends BaseSlide {
  type: 'intro';
  profile: {
    name: string;
    title: string;
    avatar: string;
    bio: string;
    items: ProfileItem[];
  };
}

interface AiCapabilitiesSlide extends BaseSlide {
  type: 'ai-capabilities';
  capabilities: AiCapability[];
}

interface AiSocietySlide extends BaseSlide {
  type: 'ai-society';
  impacts: AiSocietyImpact[];
}

interface CommunityMember {
  type: string;
  description: string;
  icon: React.ReactNode;
}

interface CommunitySlide extends BaseSlide {
  type: 'community';
  members: CommunityMember[];
  mission: string;
}

type Slide = FeatureSlide | IntroSlide | AiCapabilitiesSlide | AiSocietySlide | CommunitySlide;

const slideData: Slide[] = [
  {
    type: 'intro',
    title: "はじめまして",
    subtitle: "自己紹介",
    profile: {
      name: "草野 直弥",
      title: "エンジニア / デザインエンサイアスト",
      avatar: "/avatar.png",
      bio: "AIとデザインの融合に興味を持つエンジニアです。新しい技術で、より良いユーザー体験を創造することを目指しています。",
      items: [
        { label: "専門", value: "フロントエンド開発, UXデザイン" },
        { label: "趣味", value: "写真撮影, 旅行, 読書" },
        { label: "連絡先", value: "email@example.com" }
      ]
    }
  },
  {
    type: 'community',
    title: "クリエイティブコミュニティー",
    subtitle: "共創で実現する新しい可能性",
    mission: "エンジニア、クリエイター、アーティスト、起業家、非エンジニア、NPOや投資家とプロジェクトベースでつながり、今までやりたかったことを実現できるコミュニティーを構築しています。",
    members: [
      {
        type: "エンジニア",
        description: "技術的な専門知識で構想を形にし、システム設計から実装までをサポート",
        icon: <CodeIcon />
      },
      {
        type: "クリエイター",
        description: "ビジュアル、コンテンツ、UI/UXなど、表現力で価値を創出",
        icon: <PaletteIcon />
      },
      {
        type: "アーティスト",
        description: "独自の視点と表現方法で、プロジェクトに創造性と感性を注入",
        icon: <EmojiPeopleIcon />
      },
      {
        type: "起業家",
        description: "ビジョンを持ち、実践的な戦略でプロジェクトを成功に導く",
        icon: <BusinessIcon />
      },
      {
        type: "非エンジニア",
        description: "多様な専門知識と視点で、技術以外の側面からプロジェクトを強化",
        icon: <Diversity3Icon />
      },
      {
        type: "NPO・投資家",
        description: "社会的なインパクトと持続可能性を追求し、必要なリソースを提供",
        icon: <HandshakeIcon />
      }
    ]
  },
  {
    type: 'feature',
    title: "クリエイティブコミュニティの実現手法",
    subtitle: "AIを活用したプロジェクト推進",
    features: [
      {
        title: "知的業務の高速化",
        description: "企画書・仕様書・報告書などのドキュメント作成をAIが支援し、アイデアから形式化までのプロセスを劇的に短縮します。",
        icon: "📝"
      },
      {
        title: "創造性の増幅",
        description: "プロトタイプ作成、コード生成、デザイン案提案など、AIがクリエイティブワークをサポートし、アイデアから実装までの障壁を低減します。",
        icon: "🚀"
      },
      {
        title: "知識の統合と活用",
        description: "情報収集、事例分析、ベストプラクティスの提示をAIが行い、プロジェクトに最適な方向性と具体的なアクションステップを導き出します。",
        icon: "🧠"
      }
    ]
  },
   // Insert after the "クリエイティブコミュニティの実現手法" slide (3rd slide)
   {
    type: 'feature',
    title: "プロジェクト実現のエコシステム",
    subtitle: "多層的サポート構造による確実な成功へのパス",
    features: [
      {
        title: "仕組みされたガイダンス",
        description: "アイデア検証、計画策定、実装、スケーリングの各段階に最適化された体系的なワークフローと具体的なマイルストーン設定を提供します。",
        icon: "🔄"
      },
      {
        title: "専門知識へのアクセス",
        description: "業界メンターのガイダンス、AIによる文脈に応じた専門情報提供、ドキュメントテンプレート、成功事例の分析を通じて、専門的支援を受けられます。",
        icon: "👥"
      },
      {
        title: "リソース調達支援",
        description: "投資家とのマッチング、クラウドファンディング支援、助成金情報提供、リソースシェアリングの仕組みで、プロジェクトの実現可能性を高めます。",
        icon: "💰"
      }
    ]
  },
  
  // Insert after the above slide (4th slide)
  {
    type: 'feature',
    title: "新しいコミュニティーモデル",
    subtitle: "グローバル×ローカルの相乗効果を生み出す新しい協創形態",
    features: [
      {
        title: "プロジェクトでつながる",
        description: "ローカルコミュニティの課題に対して、世界中の専門家やイノベーターがソリューションを提案・協働できる、目的駆動型のネットワークを構築します。",
        icon: "🌏"
      },
      {
        title: "知見の循環システム",
        description: "異なる地域や分野で生まれたアイデアや成功事例を体系化し、他のコミュニティでも応用できる形で共有・進化させるプラットフォームを提供します。",
        icon: "♻️"
      },
      {
        title: "価値の共創と分配",
        description: "プロジェクトから生まれる成果や価値を参加者間で透明かつ公平に分配する仕組みにより、持続可能な協力関係を促進します。",
        icon: "🤝"
      }
    ]
  },
  {
    type: 'feature',
    title: "AIを活用したワークフローの革新",
    subtitle: "クリエイティブワークの未来",
    features: [
      {
        title: "作業時間の大幅削減",
        description: "定型タスクの自動化により、以前は数時間かかっていた作業が数分で完了。創造的な活動に時間を集中できます。",
        icon: "⚡️"
      },
      {
        title: "クオリティの向上",
        description: "AIによる高度な品質チェック、最適化提案、エラー検出により、人間だけでは見落としがちな細部まで完璧に。",
        icon: "✨"
      },
      {
        title: "創造性の拡張",
        description: "AIがアイデアの発想や代替案を提案し、人間の創造力の限界を超える新しい視点とソリューションを実現。",
        icon: "🎨"
      }
    ]
  },
  {
    type: 'ai-capabilities',
    title: "生成AIでできるようになったこと",
    subtitle: "創造性と効率性の新境地",
    capabilities: [
      {
        title: "コード生成とリファクタリング",
        description: "より少ない労力で高品質なコードを開発。バグ検出やコードレビューも自動化。",
        icon: <CodeIcon />
      },
      {
        title: "クリエイティブ支援",
        description: "アイデアの発案、デザイン案の作成、文章の校正など、創作活動を幅広くサポート。",
        icon: <AutoAwesomeIcon />
      },
      {
        title: "業務プロセスの自動化",
        description: "レポート作成や分析、データ整理などのタスクを自動化し、複雑な処理も簡単に。",
        icon: <BuildIcon />
      },
      {
        title: "個人化された学習支援",
        description: "個々のペースやスタイルに合わせた学習コンテンツの提供と、疑問への即時回答。",
        icon: <PsychologyIcon />
      }
    ]
  },
  {
    type: 'ai-society',
    title: "生成AIが創る未来社会",
    subtitle: "テクノロジーと人間の新しい共存",
    impacts: [
      {
        area: "働き方の変革",
        impact: "創造的思考に集中できる環境へ。定型業務からの解放と新しい職種の創出。",
        icon: <AutoAwesomeIcon />
      },
      {
        area: "教育革命",
        impact: "一人ひとりに最適化された学習体験。地理的・経済的障壁を超えた教育機会の均等化。",
        icon: <PsychologyIcon />
      },
      {
        area: "医療・健康の進化",
        impact: "診断精度の向上と治療法の個別最適化。予防医療の強化と医療リソースの効率的配分。",
        icon: <LanguageIcon />
      }
    ]
  },
  {
    type: 'feature',
    title: "効率的なプロジェクト管理",
    subtitle: "タスク管理の最適化",
    features: [
      {
        title: "自動タスク分類",
        description: "AIによる適切なカテゴリ分け",
        icon: "📋"
      },
      {
        title: "工数予測",
        description: "過去のデータに基づく精度の高い予測",
        icon: "📊"
      },
      {
        title: "リソース最適化",
        description: "チームの生産性を最大化",
        icon: "⚙️"
      }
    ]
  },
  {
    type: 'feature',
    title: "GitHub Projects + Cline",
    subtitle: "最新ツールの統合",
    features: [
      {
        title: "自動化された管理",
        description: "プロジェクトの進捗を自動追跡",
        icon: "🔄"
      },
      {
        title: "スマートな連携",
        description: "ツール間のシームレスな統合",
        icon: "🔗"
      },
      {
        title: "カスタマイズ",
        description: "柔軟なワークフロー設定",
        icon: "🛠️"
      }
    ]
  },
  {
    type: 'feature',
    title: "未来のワークスタイル",
    subtitle: "AIとの共創",
    features: [
      {
        title: "継続的な改善",
        description: "AIによる最適化提案",
        icon: "📈"
      },
      {
        title: "知識の共有",
        description: "ナレッジベースの自動構築",
        icon: "💡"
      },
      {
        title: "革新的な協業",
        description: "新しい働き方の実現",
        icon: "🤝"
      }
    ]
  }
];

export const SlideShowSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  // キーボードイベントのハンドラー
  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (event.key === 'ArrowRight') {
      nextSlide();
    } else if (event.key === 'ArrowLeft') {
      prevSlide();
    }
  }, []);

  // タッチイベントの状態管理
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStart) return;

    const currentTouch = e.touches[0].clientX;
    const diff = touchStart - currentTouch;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      setTouchStart(null);
    }
  };

  const handleTouchEnd = () => {
    setTouchStart(null);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideData.length) % slideData.length);
  };

  // 自動スライドショー機能
  useEffect(() => {
    const interval = setInterval(() => {
      // nextSlide();
    }, 8000); // 8秒ごとに自動で次のスライドに切り替え
    return () => clearInterval(interval);
  }, []);

  const renderSlideContent = (slide: Slide) => {
    switch (slide.type) {
      case 'intro':
        return (
          <Box sx={{ width: '100%', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, alignItems: 'center' }}>
            <Box sx={{ textAlign: 'center' }}>
              <Avatar
                src={slide.profile.avatar}
                sx={{ width: { xs: 120, md: 180 }, height: { xs: 120, md: 180 }, mx: 'auto', mb: 2, 
                     border: `4px solid ${theme.palette.primary.main}` }}
              >
                <PersonIcon sx={{ fontSize: 100 }} />
              </Avatar>
              <Typography variant="h4" sx={{ mb: 1, fontWeight: 'bold' }}>
                {slide.profile.name}
              </Typography>
              <Chip 
                label={slide.profile.title} 
                color="primary" 
                sx={{ mb: 2 }} 
              />
            </Box>
            
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', fontStyle: 'italic' }}>
                "{slide.profile.bio}"
              </Typography>
              
              <Grid container spacing={2}>
                {slide.profile.items.map((item, i) => (
                  <Grid item xs={12} key={i}>
                    <Paper elevation={1} sx={{ p: 1.5, display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="subtitle2" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                        {item.label}:
                      </Typography>
                      <Typography variant="body2">
                        {item.value}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        );
        
      case 'feature':
        return (
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: 3,
              mt: 4,
              width: '100%',
            }}
          >
            {slide.features.map((feature, index) => (
              <Paper
                key={index}
                elevation={3}
                component={motion.div}
                whileHover={{ y: -8, boxShadow: theme.shadows[10] }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                sx={{
                  p: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  minHeight: 180,
                  borderTop: `4px solid ${theme.palette.primary.main}`,
                  borderRadius: 2,
                  background: `linear-gradient(145deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
                  position: 'relative',
                  overflow: 'hidden',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    width: '40%',
                    height: '40%',
                    opacity: 0.05,
                    backgroundImage: 'radial-gradient(circle, rgba(25,118,210,1) 0%, rgba(255,255,255,0) 70%)',
                    zIndex: 1,
                  }
                }}
              >
                <Box display="flex" alignItems="center" gap={2}>
                  <Typography 
                    variant="h2" 
                    sx={{ 
                      fontSize: '2.5rem',
                      background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {feature.icon}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{feature.title}</Typography>
                </Box>
                <Typography 
                  variant="body1" 
                  color="text.secondary" 
                  sx={{ 
                    position: 'relative',
                    zIndex: 2,
                    lineHeight: 1.7 
                  }}
                >
                  {feature.description}
                </Typography>
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
                  style={{ alignSelf: 'flex-end', marginTop: 'auto' }}
                >
                  <Chip 
                    label={index === 0 ? "時間効率" : index === 1 ? "品質向上" : "イノベーション"} 
                    size="small" 
                    color={index === 0 ? "success" : index === 1 ? "primary" : "secondary"}
                    sx={{ fontWeight: 'bold' }} 
                  />
                </motion.div>
              </Paper>
            ))}
          </Box>
        );

      case 'ai-capabilities':
        return (
          <Box sx={{ width: '100%' }}>
            <Grid container spacing={3}>
              {slide.capabilities.map((capability, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Paper
                    elevation={3}
                    component={motion.div}
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.15 }}
                    sx={{
                      p: 3,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 2,
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '5px',
                        background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      }
                    }}
                  >
                    <Box display="flex" alignItems="center" gap={2} mb={2}>
                      <Avatar
                        sx={{
                          bgcolor: 'primary.main',
                          width: 48,
                          height: 48,
                        }}
                      >
                        {capability.icon}
                      </Avatar>
                      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        {capability.title}
                      </Typography>
                    </Box>
                    <Typography variant="body1">
                      {capability.description}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        );

      case 'ai-society':
        return (
          <Box sx={{ width: '100%' }}>
            {slide.impacts.map((impact, index) => (
              <Paper
                key={index}
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                elevation={2}
                sx={{ 
                  p: 3, 
                  mb: 3,
                  borderRadius: '16px',
                  background: `linear-gradient(135deg, ${theme.palette.background.paper}, ${theme.palette.background.default})`,
                  border: `1px solid ${theme.palette.divider}`
                }}
              >
                <Box display="flex" alignItems="flex-start" gap={2}>
                  <Avatar
                    sx={{
                      bgcolor: theme.palette.primary.main,
                      width: 54,
                      height: 54,
                      mt: 0.5
                    }}
                  >
                    {impact.icon}
                  </Avatar>
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      {impact.area}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {impact.impact}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            ))}
          </Box>
        );

        case 'community':
          return (
            <Box sx={{ width: '100%' }}>
              <Paper
                elevation={2}
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                sx={{ 
                  p: 3, 
                  mb: 4,
                  borderRadius: '16px',
                  background: `linear-gradient(135deg, ${theme.palette.background.paper}, ${theme.palette.background.default})`,
                  borderLeft: `4px solid ${theme.palette.primary.main}`,
                }}
              >
             <Typography 
          variant="body1" 
          sx={{ 
            fontSize: '1.1rem', 
            fontStyle: 'italic',
          }}
        >
          {slide.mission}
        </Typography>
      </Paper>
      
      <Grid container spacing={2}>
        {slide.members.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              elevation={3}
              component={motion.div}
              whileHover={{ y: -5, boxShadow: theme.shadows[6] }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              sx={{
                p: 3,
                height: '100%',
                minHeight: 160,
                borderRadius: 2,
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: '4px',
                  width: '100%',
                  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                }
              }}
            >
              <Box display="flex" alignItems="center" gap={2} mb={2}>
                <Avatar
                  sx={{
                    bgcolor: theme.palette.primary.main,
                    color: 'white',
                  }}
                >
                  {member.icon}
                </Avatar>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {member.type}
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                {member.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

      default:
        return null;
    }
  };

  return (
    <Box
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: 'background.default',
        py: { xs: 8, md: 4 },
        px: { xs: 2, md: 0 },
        position: 'relative',
      }}
    >
      <Card
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        sx={{
          width: '94%',
          maxWidth: 1200,
          minHeight: { xs: 500, md: 600 },
          position: 'relative',
          overflow: 'visible',
          borderRadius: 4,
          boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
          background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.paper} 100%)`,
        }}
      >
        <CardContent
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            p: { xs: 2, md: 5 },
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              style={{ width: '100%' }}
            >
              <Box sx={{ mb: 4, textAlign: 'center' }}>
                <Typography
                  variant="h2"
                  component={motion.h2}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  sx={{
                    fontSize: { xs: '1.8rem', sm: '2.2rem', md: '3rem' },
                    mb: 2,
                    textAlign: 'center',
                    fontWeight: 'bold',
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'inline-block',
                  }}
                >
                  {slideData[currentSlide].title}
                </Typography>
                <Typography
                  variant="h5"
                  color="text.secondary"
                  component={motion.h5}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  sx={{ mb: 4, textAlign: 'center' }}
                >
                  {slideData[currentSlide].subtitle}
                </Typography>
              </Box>
              <Box sx={{ width: '100%' }}>
                {renderSlideContent(slideData[currentSlide])}
              </Box>
            </motion.div>
          </AnimatePresence>
        </CardContent>

        <Box
          sx={{
            position: 'absolute',
            bottom: { xs: -25, md: -30 },
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 1,
            zIndex: 2,
          }}
        >
          {slideData.map((_, index) => (
            <Box
              key={index}
              component={motion.div}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              sx={{
                width: index === currentSlide ? 14 : 10,
                height: index === currentSlide ? 14 : 10,
                borderRadius: '50%',
                bgcolor: index === currentSlide ? 'primary.main' : 'grey.400',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                opacity: index === currentSlide ? 1 : 0.6,
                boxShadow: index === currentSlide ? '0 0 6px rgba(0,0,0,0.3)' : 'none',
              }}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </Box>

        {/* Previous Button - Left Side */}
        <IconButton
          onClick={prevSlide}
          component={motion.button}
          whileHover={{ scale: 1.1, boxShadow: theme.shadows[8] }}
          whileTap={{ scale: 0.9 }}
          sx={{
            position: 'absolute',
            left: { xs: -35, sm: -40, md: -50 },
            top: '50%',
            transform: 'translateY(-50%)',
            bgcolor: 'background.paper',
            color: 'primary.main',
            '&:hover': { bgcolor: 'background.paper', color: 'primary.dark' },
            width: { xs: 60, md: 70 },
            height: { xs: 60, md: 70 },
            boxShadow: 4,
            zIndex: 2,
            border: `2px solid ${theme.palette.primary.main}`,
            transition: 'all 0.3s ease',
          }}
        >
          <ArrowBackIcon fontSize={isMobile ? "large" : "large"} />
        </IconButton>

        {/* Next Button - Right Side */}
        <IconButton
          onClick={nextSlide}
          component={motion.button}
          whileHover={{ scale: 1.1, boxShadow: theme.shadows[8] }}
          whileTap={{ scale: 0.9 }}
          sx={{
            position: 'absolute',
            right: { xs: -35, sm: -40, md: -50 },
            top: '50%',
            transform: 'translateY(-50%)',
            bgcolor: 'background.paper',
            color: 'primary.main',
            '&:hover': { bgcolor: 'background.paper', color: 'primary.dark' },
            width: { xs: 60, md: 70 },
            height: { xs: 60, md: 70 },
            boxShadow: 4,
            zIndex: 2,
            border: `2px solid ${theme.palette.primary.main}`,
            transition: 'all 0.3s ease',
          }}
        >
          <ArrowForwardIcon fontSize={isMobile ? "large" : "large"} />
        </IconButton>
      </Card>
    </Box>
  );
};
