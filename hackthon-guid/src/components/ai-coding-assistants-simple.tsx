import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const AIComparisonSlides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "GitHub CopilotとCline",
      content: (
        <div className="text-center space-y-4">
          <p className="text-xl">
            AIを活用したコーディングアシスタントツールの比較
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="font-bold text-xl mb-2">GitHub Copilot</h3>
              <p className="text-sm mb-2">
                GitHubとOpenAIが開発した<br />AIコーディングアシスタント
              </p>
              <div className="text-sm bg-blue-100 px-2 py-1 rounded-full">
                2021年リリース
              </div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h3 className="font-bold text-xl mb-2">Cline</h3>
              <p className="text-sm mb-2">
                複数のAIプロバイダーを選択できる<br />VSCode拡張のアシスタント
              </p>
              <div className="text-sm bg-green-100 px-2 py-1 rounded-full">
                比較的新しいツール
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "基本的な違い",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="font-bold mb-2 text-center">GitHub Copilot</h3>
              <ul className="space-y-2 text-sm">
                <li>• コードエディタに統合されたリアルタイム提案</li>
                <li>• 主にOpenAIのモデルが使用されている</li>
                <li>• 月額サブスクリプション（個人$10/月）</li>
                <li>• タイピング中にインラインでコード提案</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h3 className="font-bold mb-2 text-center">Cline</h3>
              <ul className="space-y-2 text-sm">
                <li>• チャットインターフェースでの対話式アシスタント</li>
                <li>• 複数のAIプロバイダー（Claude, GPT, Gemini等）</li>
                <li>• プロバイダーのAPIキーで従量課金制</li>
                <li>• 自然言語でのリクエストに対してコード生成</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-300 pt-2 mt-2">
            <p className="text-center">
              CopilotはAIの「自動補完」に近く、Clineは「AIチャットボット」に近い使用感です
            </p>
          </div>
        </div>
      )
    },
    {
      title: "サポートするAIプロバイダー",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="font-bold mb-2 text-center">GitHub Copilot</h3>
              <div className="space-y-2">
                <div className="bg-white p-2 rounded border">
                  <p className="font-medium">OpenAI GPT</p>
                  <p className="text-xs">GPT-4をベースにしたモデル</p>
                </div>
                <div className="bg-white p-2 rounded border opacity-50">
                  <p className="font-medium">Claude</p>
                  <p className="text-xs">非対応</p>
                </div>
                <div className="bg-white p-2 rounded border opacity-50">
                  <p className="font-medium">Google Gemini</p>
                  <p className="text-xs">非対応</p>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h3 className="font-bold mb-2 text-center">Cline</h3>
              <div className="space-y-2">
                <div className="bg-white p-2 rounded border">
                  <p className="font-medium">OpenAI GPT-4/3.5</p>
                  <p className="text-xs">APIキーで接続可能</p>
                </div>
                <div className="bg-white p-2 rounded border">
                  <p className="font-medium">Anthropic Claude</p>
                  <p className="text-xs">Claude 3.5 Sonnetなど</p>
                </div>
                <div className="bg-white p-2 rounded border">
                  <p className="font-medium">Google Gemini</p>
                  <p className="text-xs">Pro/Advanced対応</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p>Clineは複数のAIプロバイダーを選択できる柔軟性が特徴です</p>
          </div>
        </div>
      )
    },
    {
      title: "料金モデルの比較",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="font-bold text-center mb-2">GitHub Copilot</h3>
              <p className="text-center font-medium mb-2">サブスクリプション</p>
              <ul className="text-sm space-y-1">
                <li className="flex justify-between">
                  <span>個人</span>
                  <span className="font-medium">$10/月</span>
                </li>
                <li className="flex justify-between">
                  <span>ビジネス</span>
                  <span className="font-medium">$19/月/ユーザー</span>
                </li>
                <li className="flex justify-between">
                  <span>学生・教員</span>
                  <span className="font-medium">無料</span>
                </li>
              </ul>
              <p className="text-center text-sm mt-2">固定料金で使い放題</p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h3 className="font-bold text-center mb-2">Cline</h3>
              <p className="text-center font-medium mb-2">従量課金制</p>
              <ul className="text-sm space-y-1">
                <li className="flex justify-between">
                  <span>拡張機能自体</span>
                  <span className="font-medium">無料</span>
                </li>
                <li className="flex justify-between">
                  <span>OpenAI API</span>
                  <span className="font-medium">使用量に応じて課金</span>
                </li>
                <li className="flex justify-between">
                  <span>Claude API</span>
                  <span className="font-medium">使用量に応じて課金</span>
                </li>
              </ul>
              <p className="text-center text-sm mt-2">使った分だけ支払い</p>
            </div>
          </div>
          
          <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
            <p className="text-center">
              ClineからGitHub Copilotを使用するオプションもあり、<br />
              その場合は月額$10の固定料金でClaude 3.5 Sonnetも利用可能です
            </p>
          </div>
        </div>
      )
    },
    {
      title: "AIプロバイダーの連携フロー",
      content: (
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <div className="space-y-6">
              {/* Cline直接連携パス */}
              <div className="flex justify-center items-center">
                <div className="bg-pink-100 p-2 rounded-lg border border-pink-300 w-32 text-center">
                  <p className="font-bold text-sm">Cline</p>
                  <p className="text-xs">(直接接続)</p>
                </div>
                
                <div className="mx-4 flex items-center">
                  <div className="w-16 h-0.5 bg-pink-400"></div>
                  <div className="mx-1 text-xs text-pink-600">従量課金</div>
                  <div className="w-16 h-0.5 bg-pink-400"></div>
                </div>
                
                <div className="bg-pink-100 p-2 rounded-lg border border-pink-300 w-32 text-center">
                  <p className="font-bold text-sm">Claude 3.5</p>
                  <p className="text-xs">Sonnet</p>
                </div>
              </div>
              
              {/* Cline経由Copilotパス */}
              <div className="flex justify-center items-center">
                <div className="bg-green-100 p-2 rounded-lg border border-green-300 w-32 text-center">
                  <p className="font-bold text-sm">Cline</p>
                  <p className="text-xs">(Copilot経由)</p>
                </div>
                
                <div className="mx-2 flex items-center">
                  <div className="w-10 h-0.5 bg-pink-400"></div>
                  <div className="mx-1 text-xs text-pink-600">無料</div>
                  <div className="w-10 h-0.5 bg-pink-400"></div>
                </div>
                
                <div className="bg-pink-100 p-2 rounded-lg border border-pink-300 w-32 text-center">
                  <p className="font-bold text-sm">GitHub</p>
                  <p className="text-xs">Copilot</p>
                </div>
                
                <div className="mx-2 flex items-center">
                  <div className="w-10 h-0.5 bg-green-400"></div>
                  <div className="mx-1 text-xs text-green-600">$10/月</div>
                  <div className="w-10 h-0.5 bg-green-400"></div>
                </div>
                
                <div className="bg-green-100 p-2 rounded-lg border border-green-300 w-32 text-center">
                  <p className="font-bold text-sm">Claude 3.5</p>
                  <p className="text-xs">Sonnet</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-pink-50 p-3 rounded-lg border border-pink-200">
              <h3 className="font-bold text-sm mb-1 text-center">直接API連携パターン</h3>
              <ul className="text-xs space-y-1">
                <li>• Anthropic APIキーを直接設定</li>
                <li>• 使った分だけ料金が発生</li>
                <li>• 複数のAIプロバイダーを切り替え可能</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-3 rounded-lg border border-green-200">
              <h3 className="font-bold text-sm mb-1 text-center">Copilot連携パターン</h3>
              <ul className="text-xs space-y-1">
                <li>• GitHub Copilotアカウントを活用</li>
                <li>• 月額固定料金（$10）または教育機関は無料</li>
                <li>• Claude 3.5 Sonnetを使い放題</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "まとめ：どのツールを選ぶべきか？",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
              <h3 className="font-bold text-sm mb-2 text-center">GitHub Copilot</h3>
              <p className="text-xs text-center mb-2">こんな人におすすめ</p>
              <ul className="text-xs space-y-1">
                <li>• 常にコード提案がほしい</li>
                <li>• 定型的なコードを書くことが多い</li>
                <li>• 予測可能な使用量で固定料金がいい</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-3 rounded-lg border border-green-200">
              <h3 className="font-bold text-sm mb-2 text-center">Cline</h3>
              <p className="text-xs text-center mb-2">こんな人におすすめ</p>
              <ul className="text-xs space-y-1">
                <li>• AIと対話しながら開発したい</li>
                <li>• 複数のAIモデルを使い分けたい</li>
                <li>• 使った分だけ支払う形式がいい</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
              <h3 className="font-bold text-sm mb-2 text-center">Cline + Copilot</h3>
              <p className="text-xs text-center mb-2">ベストな組み合わせ</p>
              <ul className="text-xs space-y-1">
                <li>• 両方の利点を活用したい</li>
                <li>• リアルタイム補完と対話の両方</li>
                <li>• Claude 3.5を定額で使いたい</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
            <p className="text-center">
              あなたの開発スタイルや予算に合わせて選択するのがベストです。<br />
              非エンジニアの方は、自然言語での対話ができるClineがおすすめです。
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
    <div className="bg-white rounded-lg shadow-lg p-4 max-w-3xl mx-auto">
      {/* スライドヘッダー */}
      <div className="mb-4">
        <h2 className="text-xl font-bold text-center text-blue-700 border-b-2 border-blue-200 pb-2">
          {slides[currentSlide].title}
        </h2>
      </div>
      
      {/* スライドコンテンツ */}
      <div className="min-h-[400px] flex items-center justify-center p-4">
        {slides[currentSlide].content}
      </div>
      
      {/* ナビゲーション */}
      <div className="flex justify-between items-center mt-4">
        <div className="text-sm text-gray-500">
          {currentSlide + 1} / {slides.length}
        </div>
        
        <div className="flex space-x-4">
          <button 
            onClick={prevSlide} 
            disabled={currentSlide === 0}
            className={`flex items-center px-3 py-1 rounded-lg ${
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
            className={`flex items-center px-3 py-1 rounded-lg ${
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

export default AIComparisonSlides;