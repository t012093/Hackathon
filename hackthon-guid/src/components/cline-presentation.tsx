import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Code, Bot, Sparkles, Brain, Rocket, Zap, Clock, Lightbulb, Check, HelpCircle, PenTool, FileText } from 'lucide-react';

const ClinePresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Clineとは？",
      content: (
        <div className="space-y-6">
          <div className="flex justify-center">
            <div className="flex items-center">
              <Code size={60} className="text-blue-600 mr-2" />
              <span className="text-4xl font-bold">Cline</span>
            </div>
          </div>
          <p className="text-xl text-center mb-6">
            VSCodeで使える<span className="font-bold text-blue-600">AIコーディングアシスタント</span>
          </p>
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <p className="text-center mb-4">
              ChatGPTやClaude 3.5 Sonnetなどの<br />
              <span className="font-bold">最新のAI技術を活用</span>して<br />
              プログラミング作業をサポートしてくれる便利ツール
            </p>
            <div className="flex justify-center mt-4">
              <Bot size={40} className="text-blue-600 mx-2" />
              <Sparkles size={40} className="text-purple-600 mx-2" />
              <Code size={40} className="text-green-600 mx-2" />
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Clineでできること",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <div className="flex items-center mb-3">
                <PenTool size={24} className="text-green-600 mr-2" />
                <h3 className="font-bold text-lg">コード作成</h3>
              </div>
              <p className="text-sm">
                「ボタンを3つ並べたHTMLを作って」など、<br />
                自然な言葉でコードを生成
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <div className="flex items-center mb-3">
                <HelpCircle size={24} className="text-blue-600 mr-2" />
                <h3 className="font-bold text-lg">質問応答</h3>
              </div>
              <p className="text-sm">
                「このエラーの意味は？」など、<br />
                プログラミングの質問に回答
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <div className="flex items-center mb-3">
                <FileText size={24} className="text-purple-600 mr-2" />
                <h3 className="font-bold text-lg">コード説明</h3>
              </div>
              <p className="text-sm">
                複雑なコードを<br />
                分かりやすく解説してくれる
              </p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <div className="flex items-center mb-3">
                <Lightbulb size={24} className="text-yellow-600 mr-2" />
                <h3 className="font-bold text-lg">改善提案</h3>
              </div>
              <p className="text-sm">
                既存のコードをより良く<br />
                するためのアイデアを提供
              </p>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-4">
            <p className="text-center">
              <span className="font-bold">プログラミング言語を問わず</span>サポートしてくれます<br />
              HTMLからPython、JavaScriptなど多くの言語に対応
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Clineの基本的な使い方",
      content: (
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="space-y-6">
              <div className="flex">
                <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-600 font-bold mr-3 flex-shrink-0">1</div>
                <div>
                  <h3 className="font-bold mb-1">VSCodeにCline拡張機能をインストール</h3>
                  <p className="text-sm text-gray-600">
                    VSCodeの拡張機能タブから「Cline」を検索してインストール
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-600 font-bold mr-3 flex-shrink-0">2</div>
                <div>
                  <h3 className="font-bold mb-1">AIプロバイダーを設定する</h3>
                  <p className="text-sm text-gray-600">
                    OpenAI（ChatGPT）やAnthropicのAPIキーを設定
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-600 font-bold mr-3 flex-shrink-0">3</div>
                <div>
                  <h3 className="font-bold mb-1">コマンドを使って会話を開始</h3>
                  <p className="text-sm text-gray-600">
                    右クリックメニューや、サイドパネルからClineとの会話を始める
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-600 font-bold mr-3 flex-shrink-0">4</div>
                <div>
                  <h3 className="font-bold mb-1">自然言語でリクエスト</h3>
                  <p className="text-sm text-gray-600">
                    「ログインフォームを作成して」など、やりたいことを普通の言葉で伝える
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <p className="font-medium">
              プログラミングの専門用語を知らなくても直感的に使えます！
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Clineを使うメリット",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
              <div className="flex justify-center mb-4">
                <Clock size={40} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-center mb-2">時間の節約</h3>
              <p className="text-sm text-center">
                コードを一から書く時間を大幅に削減<br />
                調査や検索の手間も省ける
              </p>
            </div>
            
            <div className="bg-green-50 p-5 rounded-lg border border-green-200">
              <div className="flex justify-center mb-4">
                <Brain size={40} className="text-green-600" />
              </div>
              <h3 className="font-bold text-center mb-2">学習サポート</h3>
              <p className="text-sm text-center">
                初心者でも簡単にコードが書ける<br />
                AIの説明から学びながら進められる
              </p>
            </div>
            
            <div className="bg-purple-50 p-5 rounded-lg border border-purple-200">
              <div className="flex justify-center mb-4">
                <Rocket size={40} className="text-purple-600" />
              </div>
              <h3 className="font-bold text-center mb-2">生産性向上</h3>
              <p className="text-sm text-center">
                繰り返し作業の自動化<br />
                複雑な問題も素早く解決
              </p>
            </div>
            
            <div className="bg-yellow-50 p-5 rounded-lg border border-yellow-200">
              <div className="flex justify-center mb-4">
                <Zap size={40} className="text-yellow-600" />
              </div>
              <h3 className="font-bold text-center mb-2">アイデア創出</h3>
              <p className="text-sm text-center">
                行き詰まったときのインスピレーション<br />
                新しいアプローチの提案
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Clineの活用シーン",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-5 rounded-lg border border-blue-100">
              <h3 className="font-bold mb-3 text-center">Webサイト制作</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start">
                  <Check size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p>「ナビゲーションメニューを作成して」</p>
                </div>
                <div className="flex items-start">
                  <Check size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p>「このデザインをレスポンシブにする方法は？」</p>
                </div>
                <div className="flex items-start">
                  <Check size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p>「お問い合わせフォームのバリデーションを追加」</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-5 rounded-lg border border-purple-100">
              <h3 className="font-bold mb-3 text-center">プログラム開発</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start">
                  <Check size={18} className="text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p>「CSVファイルを読み込むコードを書いて」</p>
                </div>
                <div className="flex items-start">
                  <Check size={18} className="text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p>「このエラーメッセージの意味は？」</p>
                </div>
                <div className="flex items-start">
                  <Check size={18} className="text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p>「このコードをより効率的にする方法は？」</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-5 rounded-lg border border-yellow-100">
              <h3 className="font-bold mb-3 text-center">データ分析</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start">
                  <Check size={18} className="text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                  <p>「このデータセットを可視化するコードは？」</p>
                </div>
                <div className="flex items-start">
                  <Check size={18} className="text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                  <p>「Pythonでグラフを描画する方法」</p>
                </div>
                <div className="flex items-start">
                  <Check size={18} className="text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                  <p>「統計分析のコードを書いてほしい」</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-5 rounded-lg border border-red-100">
              <h3 className="font-bold mb-3 text-center">学習サポート</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start">
                  <Check size={18} className="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p>「JavaScriptの配列操作について教えて」</p>
                </div>
                <div className="flex items-start">
                  <Check size={18} className="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p>「このコードの仕組みを解説して」</p>
                </div>
                <div className="flex items-start">
                  <Check size={18} className="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p>「簡単な例を使ってAPIの使い方を説明して」</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Clineと他のAIツールとの違い",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h3 className="font-bold mb-3 text-center border-b pb-2">一般的なAIチャットツール</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center mr-2 flex-shrink-0">
                    <span className="text-xs">→</span>
                  </div>
                  <span>ブラウザやアプリで別画面で操作</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center mr-2 flex-shrink-0">
                    <span className="text-xs">→</span>
                  </div>
                  <span>コードをコピー＆ペーストする手間</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center mr-2 flex-shrink-0">
                    <span className="text-xs">→</span>
                  </div>
                  <span>プロジェクトの文脈が伝わりにくい</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
              <h3 className="font-bold mb-3 text-center border-b pb-2">Clineの特徴</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-200 flex items-center justify-center mr-2 flex-shrink-0">
                    <span className="text-xs">✓</span>
                  </div>
                  <span>VSCode内で直接操作できる</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-200 flex items-center justify-center mr-2 flex-shrink-0">
                    <span className="text-xs">✓</span>
                  </div>
                  <span>コードを直接エディタに挿入できる</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-200 flex items-center justify-center mr-2 flex-shrink-0">
                    <span className="text-xs">✓</span>
                  </div>
                  <span>プロジェクトの文脈を理解している</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg border border-green-200 mt-4">
            <p className="text-center">
              <span className="font-bold">Clineの最大の特徴：</span><br />
              コーディング作業の流れを中断せずに、<br />
              エディタ内でAIの力を活用できる点です
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Clineが特に役立つのはこんな人",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
              <h3 className="font-bold mb-4 text-center">プログラミング初心者</h3>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded border border-blue-100">
                  <p className="text-sm">
                    基本的なコード構造を学べる
                  </p>
                </div>
                <div className="bg-white p-3 rounded border border-blue-100">
                  <p className="text-sm">
                    エラーの意味と解決方法を教えてくれる
                  </p>
                </div>
                <div className="bg-white p-3 rounded border border-blue-100">
                  <p className="text-sm">
                    簡単な言葉で複雑な概念を説明してくれる
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 p-5 rounded-lg border border-green-200">
              <h3 className="font-bold mb-4 text-center">ビジネスパーソン</h3>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded border border-green-100">
                  <p className="text-sm">
                    基本的なコードを自分で書ける
                  </p>
                </div>
                <div className="bg-white p-3 rounded border border-green-100">
                  <p className="text-sm">
                    エンジニアとのコミュニケーションが円滑に
                  </p>
                </div>
                <div className="bg-white p-3 rounded border border-green-100">
                  <p className="text-sm">
                    小規模な業務自動化スクリプトの作成
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 p-5 rounded-lg border border-purple-200">
              <h3 className="font-bold mb-4 text-center">学生・研究者</h3>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded border border-purple-100">
                  <p className="text-sm">
                    プログラミングを効率的に学べる
                  </p>
                </div>
                <div className="bg-white p-3 rounded border border-purple-100">
                  <p className="text-sm">
                    データ分析や可視化に役立つ
                  </p>
                </div>
                <div className="bg-white p-3 rounded border border-purple-100">
                  <p className="text-sm">
                    プロジェクトの実装を加速できる
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-50 p-5 rounded-lg border border-yellow-200">
              <h3 className="font-bold mb-4 text-center">プロの開発者</h3>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded border border-yellow-100">
                  <p className="text-sm">
                    定型的なコードを素早く生成
                  </p>
                </div>
                <div className="bg-white p-3 rounded border border-yellow-100">
                  <p className="text-sm">
                    新しい技術やライブラリの使い方を学べる
                  </p>
                </div>
                <div className="bg-white p-3 rounded border border-yellow-100">
                  <p className="text-sm">
                    コードレビューやリファクタリングの提案
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "まとめ：Clineの魅力",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-200">
            <h3 className="font-bold text-xl text-center mb-4">Clineを使うことで...</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3 flex-shrink-0">
                  <Rocket size={20} />
                </div>
                <div>
                  <p className="font-medium">プログラミングの<span className="text-blue-600">敷居が大幅に下がる</span></p>
                  <p className="text-sm text-gray-600">専門知識がなくても自然言語でコードが書ける</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3 flex-shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="font-medium">作業時間を<span className="text-green-600">大幅に短縮</span>できる</p>
                  <p className="text-sm text-gray-600">調査や実装にかかる時間を削減</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-3 flex-shrink-0">
                  <Brain size={20} />
                </div>
                <div>
                  <p className="font-medium">プログラミングを<span className="text-purple-600">楽しく学べる</span></p>
                  <p className="text-sm text-gray-600">対話形式でコードの仕組みを理解できる</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 mr-3 flex-shrink-0">
                  <Lightbulb size={20} />
                </div>
                <div>
                  <p className="font-medium">アイデアを<span className="text-yellow-600">すばやく形にできる</span></p>
                  <p className="text-sm text-gray-600">思いついたことをすぐにコードとして実現</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="text-center mt-6">
            <p className="font-bold text-lg">
              Clineは<span className="text-blue-600">AIの力</span>を活用して、<br />
              あなたのプログラミング体験を<span className="text-green-600">もっと簡単に、もっと楽しく</span>します
            </p>
          </div>
        </div>
      )
    }
  ];
  
  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
      {/* スライドヘッダー */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-center text-blue-700 border-b-2 border-blue-200 pb-2">
          {slides[currentSlide].title}
        </h2>
      </div>
      
      {/* スライドコンテンツ */}
      <div className="min-h-[450px] flex items-center justify-center p-4">
        {slides[currentSlide].content}
      </div>
      
      {/* ナビゲーション */}
      <div className="flex justify-between items-center mt-6">
        <div className="text-sm text-gray-500">
          {currentSlide + 1} / {slides.length}
        </div>
        
        <div className="flex space-x-4">
          <button 
            onClick={prevSlide} 
            disabled={currentSlide === 0}
            className={`flex items-center px-4 py-2 rounded-lg ${
              currentSlide === 0 
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            <ArrowLeft size={16} className="mr-1" />
            <span>前へ</span>
          </button>
          
          <button 
            onClick={nextSlide} 
            disabled={currentSlide === slides.length - 1}
            className={`flex items-center px-4 py-2 rounded-lg ${
              currentSlide === slides.length - 1 
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            <span>次へ</span>
            <ArrowRight size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClinePresentation;