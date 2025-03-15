import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, GitBranch, Github, Save, Upload, RefreshCw, CheckCircle, FileText } from 'lucide-react';

const GitSlides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Gitとは？",
      content: (
        <div className="text-center space-y-6">
          <GitBranch size={80} className="mx-auto text-gray-700" />
          <div className="text-xl">
            ファイルの<span className="font-bold text-blue-600">変更履歴を記録・管理</span>するためのツール
          </div>
          <div className="grid grid-cols-2 gap-4 text-left">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2 text-center">Gitの主な役割</h3>
              <ul className="space-y-2">
                <li>✅ ファイルの変更履歴を記録</li>
                <li>✅ 複数人での共同作業をサポート</li>
                <li>✅ 過去の状態に簡単に戻れる</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2 text-center">解決する問題</h3>
              <ul className="space-y-2">
                <li>❌ 「最新版はどれ？」という混乱</li>
                <li>❌ 誰がいつ何を変更したか不明</li>
                <li>❌ ファイルの上書き事故</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "GitとGitHubの違い",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col items-center">
              <GitBranch size={60} className="text-gray-700 mb-4" />
              <h3 className="font-bold mb-2 text-xl">Git</h3>
              <div className="bg-blue-50 p-4 rounded-lg w-full">
                <ul className="space-y-2 text-left">
                  <li>• ローカルで動作するツール</li>
                  <li>• ファイルの変更を記録</li>
                  <li>• コマンドラインから操作</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <Github size={60} className="text-gray-700 mb-4" />
              <h3 className="font-bold mb-2 text-xl">GitHub</h3>
              <div className="bg-purple-50 p-4 rounded-lg w-full">
                <ul className="space-y-2 text-left">
                  <li>• クラウドサービス</li>
                  <li>• Gitリポジトリのホスティング</li>
                  <li>• チーム協業機能を提供</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border-2 border-gray-300">
            <p className="text-center">
              Gitは「変更管理システム」、GitHubは「Gitリポジトリのホスティングサービス」
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Gitの基本サイクル：作業フロー",
      content: (
        <div className="space-y-4">
          <div className="mx-auto w-64 h-64 relative mb-8">
            <div className="absolute inset-0 border-4 border-dashed border-gray-300 rounded-full"></div>
            
            {/* 4つの主要ポイント */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-100 p-3 rounded-full border-2 border-blue-300">
              <FileText size={24} className="text-blue-600" />
            </div>
            <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 bg-green-100 p-3 rounded-full border-2 border-green-300">
              <Save size={24} className="text-green-600" />
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-purple-100 p-3 rounded-full border-2 border-purple-300">
              <GitBranch size={24} className="text-purple-600" />
            </div>
            <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-red-100 p-3 rounded-full border-2 border-red-300">
              <Github size={24} className="text-red-600" />
            </div>
            
            {/* テキストラベル */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center">
              <p className="font-bold text-sm">作業ディレクトリ</p>
            </div>
            <div className="absolute top-1/2 right-8 transform -translate-y-1/2 text-center">
              <p className="font-bold text-sm">ステージングエリア</p>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
              <p className="font-bold text-sm">ローカルリポジトリ</p>
            </div>
            <div className="absolute top-1/2 left-8 transform -translate-y-1/2 text-center">
              <p className="font-bold text-sm">リモートリポジトリ</p>
            </div>
            
            {/* 矢印とコマンド */}
            <div className="absolute top-1/4 right-1/4 text-xs bg-white px-1 py-0.5 rounded shadow">git add</div>
            <div className="absolute bottom-1/4 right-1/4 text-xs bg-white px-1 py-0.5 rounded shadow">git commit</div>
            <div className="absolute bottom-1/4 left-1/4 text-xs bg-white px-1 py-0.5 rounded shadow">git push</div>
            <div className="absolute top-1/4 left-1/4 text-xs bg-white px-1 py-0.5 rounded shadow">git pull</div>
          </div>
          
          <div className="border-2 border-gray-300 rounded-lg p-4 bg-gray-50 text-center">
            <p className="font-bold">
              基本的なGitワークフロー: 編集 → add → commit → push
            </p>
            <p className="text-sm text-gray-600 mt-1">
              ファイルを編集し、変更をステージングし、コミットして、GitHubにアップロード
            </p>
          </div>
        </div>
      )
    },
    {
      title: "git add：変更を準備する",
      content: (
        <div className="space-y-6">
          <div className="flex justify-center mb-4">
            <div className="bg-green-100 rounded-full p-3 border-2 border-green-300">
              <Save size={50} className="text-green-600" />
            </div>
          </div>
          
          <p className="text-center mb-6">
            <code className="bg-gray-100 px-2 py-1 rounded">git add</code> は変更したファイルを「次のコミット」に含める準備をします
          </p>
          
          <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
            <div className="space-y-2">
              <h3 className="font-bold text-center">実行前</h3>
              <div className="bg-red-50 p-2 rounded border">
                <p className="text-sm">index.html <span className="text-red-500 text-xs">(修正済み)</span></p>
              </div>
              <div className="bg-red-50 p-2 rounded border">
                <p className="text-sm">style.css <span className="text-red-500 text-xs">(修正済み)</span></p>
              </div>
              <div className="bg-gray-100 p-2 rounded border border-dashed">
                <p className="text-sm text-center text-gray-500">ステージングエリア（空）</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-bold text-center">
                <code className="bg-green-100 px-2 rounded">git add .</code> 実行後
              </h3>
              <div className="bg-gray-100 p-2 rounded border">
                <p className="text-sm">index.html</p>
              </div>
              <div className="bg-gray-100 p-2 rounded border">
                <p className="text-sm">style.css</p>
              </div>
              <div className="bg-green-50 p-2 rounded border">
                <p className="text-sm text-center text-green-600">
                  ステージングエリア (index.html, style.css)
                </p>
              </div>
            </div>
          </div>
          
          <p className="text-center text-sm">
            「<code className="bg-gray-100 px-1 rounded">git add .</code>」はすべての変更ファイルを一度に追加します
          </p>
        </div>
      )
    },
    {
      title: "git commit：変更を記録する",
      content: (
        <div className="space-y-6">
          <div className="flex justify-center mb-4">
            <div className="bg-purple-100 rounded-full p-3 border-2 border-purple-300">
              <CheckCircle size={50} className="text-purple-600" />
            </div>
          </div>
          
          <p className="text-center mb-6">
            <code className="bg-gray-100 px-2 py-1 rounded">git commit</code> はステージングされた変更を履歴に記録します
          </p>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-center items-center mb-6">
              <div className="bg-green-50 p-3 rounded-lg border w-48 text-center">
                <p className="text-sm">ステージングエリア</p>
                <p className="text-xs">(index.html, style.css)</p>
              </div>
              <div className="mx-4">
                <div className="bg-white px-2 py-1 rounded border shadow-sm text-xs mb-1 text-center">
                  git commit -m "メッセージ"
                </div>
                <div className="h-0.5 bg-purple-500 w-full"></div>
              </div>
              <div className="bg-purple-50 p-3 rounded-lg border w-48 text-center">
                <p className="text-sm">ローカルリポジトリ</p>
                <p className="text-xs">(履歴に記録)</p>
              </div>
            </div>
            
            <div className="bg-purple-50 p-3 rounded-lg border mx-auto max-w-sm">
              <div className="flex items-center mb-2">
                <div className="w-4 h-4 rounded-full bg-purple-500 mr-2"></div>
                <p className="font-bold text-sm">コミット: a7d3f9e</p>
              </div>
              <p className="text-sm mb-1">メッセージ: "ヘッダーデザインを更新"</p>
              <p className="text-xs mb-1">作成者: 山田太郎</p>
              <p className="text-xs">変更: index.html, style.css</p>
            </div>
          </div>
          
          <p className="text-center text-sm">
            コミットは「プロジェクトのセーブポイント」のようなものです
          </p>
        </div>
      )
    },
    {
      title: "git push：変更を共有する",
      content: (
        <div className="space-y-6">
          <div className="flex justify-center mb-4">
            <div className="bg-red-100 rounded-full p-3 border-2 border-red-300">
              <Upload size={50} className="text-red-600" />
            </div>
          </div>
          
          <p className="text-center mb-6">
            <code className="bg-gray-100 px-2 py-1 rounded">git push</code> はローカルの変更をGitHubなどのリモートリポジトリにアップロードします
          </p>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-center items-center mb-6">
              <div className="bg-purple-50 p-3 rounded-lg border w-48 text-center">
                <p className="text-sm">ローカルリポジトリ</p>
                <p className="text-xs">(あなたのPC)</p>
              </div>
              <div className="mx-4">
                <div className="bg-white px-2 py-1 rounded border shadow-sm text-xs mb-1 text-center">
                  git push
                </div>
                <div className="h-0.5 bg-red-500 w-full"></div>
              </div>
              <div className="bg-red-50 p-3 rounded-lg border w-48 text-center">
                <p className="text-sm">リモートリポジトリ</p>
                <p className="text-xs">(GitHub)</p>
              </div>
            </div>
            
            <div className="flex justify-center text-sm text-center">
              <div className="mx-2">
                <div className="bg-purple-50 p-2 rounded-lg border mb-2">
                  <p>ローカルのコミット</p>
                  <p className="text-xs">記録された変更</p>
                </div>
                <GitBranch size={20} className="mx-auto text-purple-600" />
              </div>
              
              <div className="mx-8 flex items-center">
                <div className="h-0.5 bg-red-500 w-16"></div>
                <div className="text-xs">アップロード</div>
                <div className="h-0.5 bg-red-500 w-16"></div>
              </div>
              
              <div className="mx-2">
                <div className="bg-red-50 p-2 rounded-lg border mb-2">
                  <p>GitHubのリポジトリ</p>
                  <p className="text-xs">共有された変更</p>
                </div>
                <Github size={20} className="mx-auto text-red-600" />
              </div>
            </div>
          </div>
          
          <p className="text-center text-sm">
            pushすると他のチームメンバーがあなたの変更を見られるようになります
          </p>
        </div>
      )
    },
    {
      title: "基本サイクルのまとめ",
      content: (
        <div className="space-y-6 max-w-2xl mx-auto">
          <div className="flex justify-between items-center">
            <div className="bg-blue-50 p-3 rounded-lg text-center w-40">
              <FileText size={30} className="mx-auto text-blue-600 mb-2" />
              <p className="font-bold">1. 編集</p>
              <p className="text-xs text-gray-600">ファイルを変更する</p>
            </div>
            
            <div className="h-0.5 bg-gray-300 w-12"></div>
            
            <div className="bg-green-50 p-3 rounded-lg text-center w-40">
              <Save size={30} className="mx-auto text-green-600 mb-2" />
              <p className="font-bold">2. git add</p>
              <p className="text-xs text-gray-600">変更をステージングに追加</p>
            </div>
            
            <div className="h-0.5 bg-gray-300 w-12"></div>
            
            <div className="bg-purple-50 p-3 rounded-lg text-center w-40">
              <CheckCircle size={30} className="mx-auto text-purple-600 mb-2" />
              <p className="font-bold">3. git commit</p>
              <p className="text-xs text-gray-600">変更を記録</p>
            </div>
            
            <div className="h-0.5 bg-gray-300 w-12"></div>
            
            <div className="bg-red-50 p-3 rounded-lg text-center w-40">
              <Upload size={30} className="mx-auto text-red-600 mb-2" />
              <p className="font-bold">4. git push</p>
              <p className="text-xs text-gray-600">変更を共有</p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg border-2 border-blue-300">
            <h3 className="font-bold text-center mb-2">GitとGitHubの活用メリット</h3>
            <ul className="space-y-1">
              <li>✅ 変更履歴の完全な記録が残る</li>
              <li>✅ 複数人での同時作業が可能</li>
              <li>✅ 問題が発生した場合に過去の状態に戻せる</li>
              <li>✅ どこで何を変更したか誰が見ても分かる</li>
              <li>✅ クラウドにバックアップされるので安心</li>
            </ul>
          </div>
          
          <p className="text-center font-medium">
            この基本サイクルを繰り返すことで、安全に効率よく作業できます
          </p>
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
      <div className="min-h-[400px] flex items-center justify-center p-4">
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

export default GitSlides;