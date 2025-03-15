# UIデザイン仕様書

## 1. デザインシステム

### カラーパレット
```typescript
const theme = {
  primary: {
    main: '#007FFF',      // メインカラー
    light: '#66B2FF',     // ライトバリエーション
    dark: '#0059B2'       // ダークバリエーション
  },
  secondary: {
    main: '#9c27b0',      // セカンダリーカラー
    light: '#ba68c8',     // ライトバリエーション
    dark: '#7b1fa2'       // ダークバリエーション
  },
  background: {
    default: '#ffffff',   // 背景色
    paper: '#f5f5f5'      // カード背景色
  },
  text: {
    primary: '#1a1a1a',   // メインテキスト
    secondary: '#666666'   // サブテキスト
  }
}
```

### タイポグラフィ
```typescript
const typography = {
  h1: {
    fontSize: '2.5rem',
    fontWeight: 600,
    lineHeight: 1.2
  },
  h2: {
    fontSize: '2rem',
    fontWeight: 600,
    lineHeight: 1.3
  },
  h3: {
    fontSize: '1.5rem',
    fontWeight: 600,
    lineHeight: 1.4
  },
  body1: {
    fontSize: '1rem',
    lineHeight: 1.5
  },
  body2: {
    fontSize: '0.875rem',
    lineHeight: 1.6
  }
}
```

### スペーシング
```typescript
const spacing = {
  xs: '0.5rem',    // 8px
  sm: '1rem',      // 16px
  md: '1.5rem',    // 24px
  lg: '2rem',      // 32px
  xl: '3rem'       // 48px
}
```

## 2. コンポーネント構造

### ベースレイアウト
```tsx
<Layout>
  <Header />
  <Sidebar />
  <MainContent>
    {sections.map(section => (
      <Section key={section.id}>
        <SectionHeader />
        <SectionContent />
      </Section>
    ))}
  </MainContent>
  <Footer />
</Layout>
```

### セクションコンポーネント
```tsx
<Section>
  <Typography variant="h2">セクションタイトル</Typography>
  <Card>
    <CardContent>
      <Grid container spacing={4}>
        {items.map(item => (
          <Grid item xs={12}>
            <Paper elevation={3}>
              <ImageContainer>
                <Image />
                <ZoomButton />
              </ImageContainer>
              <Description />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </CardContent>
  </Card>
</Section>
```

### イメージダイアログ
```tsx
<ImageDialog>
  <DialogTitle />
  <DialogContent>
    <Image />
    <NavigationButtons>
      <PrevButton />
      <NextButton />
    </NavigationButtons>
  </DialogContent>
</ImageDialog>
```

## 3. レスポンシブデザイン

### ブレークポイント
```typescript
const breakpoints = {
  xs: '0px',
  sm: '600px',
  md: '960px',
  lg: '1280px',
  xl: '1920px'
}
```

### グリッドシステム
- xs: 12列（モバイル）
- sm: 6列（タブレット）
- md: 4列（小型デスクトップ）
- lg: 3列（大型デスクトップ）

### レスポンシブ調整
```typescript
const responsiveStyles = {
  section: {
    padding: {
      xs: spacing.sm,
      sm: spacing.md,
      md: spacing.lg
    }
  },
  card: {
    margin: {
      xs: spacing.xs,
      sm: spacing.sm,
      md: spacing.md
    }
  },
  image: {
    width: {
      xs: '100%',
      sm: '80%',
      md: '70%'
    }
  }
}
```

## 4. アニメーション

### ページ遷移アニメーション
```typescript
const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3 }
}
```

### セクションアニメーション
```typescript
const sectionAnimation = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { delay: 0.2 }
}
```

### イメージダイアログアニメーション
```typescript
const dialogAnimation = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.9, opacity: 0 },
  transition: { type: 'spring', duration: 0.3 }
}
```

## 5. インタラクションデザイン

### ホバーエフェクト
```typescript
const hoverEffects = {
  card: {
    transform: 'translateY(-4px)',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease'
  },
  button: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    transform: 'scale(1.05)',
    transition: 'all 0.2s ease'
  }
}
```

### クリックエフェクト
```typescript
const clickEffects = {
  button: {
    transform: 'scale(0.95)',
    transition: 'transform 0.1s ease'
  }
}
```

## 6. アクセシビリティ

### コントラスト比
- テキスト: WCAG AAA基準（7:1以上）
- 見出し: WCAG AA基準（4.5:1以上）
- ボタン: WCAG AA基準（4.5:1以上）

### キーボードナビゲーション
- フォーカス可視化
- ショートカットキー
- スキップリンク

### スクリーンリーダー対応
- 適切なaria-labels
- 意味のあるalt属性
- ランドマーク要素の使用

## 7. パフォーマンス最適化

### 画像最適化
- サイズ: 最大1280x720px
- 形式: WebP（fallback: PNG）
- 遅延読み込み対応
- srcset対応

### コード分割
- ルートベースの分割
- コンポーネントの遅延読み込み
- 重要なスタイルの優先読み込み

### キャッシュ戦略
- 静的アセットのキャッシュ
- プリフェッチ指定
- サービスワーカー活用

## 8. 使用ライブラリ

### UIコンポーネント
- Material-UI v5
- Framer Motion
- React Icons

### ユーティリティ
- date-fns
- lodash-es
- react-intersection-observer
