import React, { useState } from 'react';

const ClineGitHubFlow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "ClineからGitHub連携フロー",
      content: (
        <div className="text-center space-y-4">
          <p className="text-xl">
            AIアシスタント「Cline」からGitHubの
            <br />
            IssueとProjectsへの連携フロー
          </p>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-blue-50 p-3 rounded-lg border border-blue-200 text-center">
              <h3 className="font-medium">Cline</h3>
              <p className="text-xs">AIによるコード生成</p>
            </div>
            <div className="bg-purple-50 p-3 rounded-lg border border-purple-200 text-center">
              <h3 className="font-medium">GitHub Issues</h3>
              <p className="text-xs">タスク・課題管理</p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg border border-green-200 text-center">
              <h3 className="font-medium">GitHub Projects</h3>
              <p className="text-xs">プロジェクト管理</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "なぜClineからGitHub連携が便利か",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="font-bold mb-3 text-center">従来のフロー</h3>
              <div className="space-y-2">
                <p className="text-sm">1. コードの問題や要件を確認</p>
                <p className="text-sm">2. GitHubのブラウザを開く</p>
                <p className="text-sm">3. 手動でIssueを作成</p>
                <p className="text-sm">4. Projectsボードに追加</p>
                <p className="text-sm">5. VSCodeに戻り開発再開</p>
              </div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h3 className="font-bold mb-3 text-center">Cline活用フロー</h3>
              <div className="space-y-2">
                <p className="text-sm">1. VSCode内でClineと対話</p>
                <p className="text-sm">2. AIがコード問題を分析</p>
                <p className="text-sm">3. Clineコマンドでissue作成</p>
                <p className="text-sm">4. Projectsにも連携</p>
              </div>
              <div className="mt-4 bg-white p-2 rounded border border-green-100">
                <p className="text-center text-sm font-medium text-green-600">
                  VSCode内で完結！
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "ステップ1：問題分析",
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-4">
            <h3 className="font-bold mb-3 text-center">VSCode内でClineを起動</h3>
            
            <div className="bg-white p-3 rounded border border-gray-200 mb-3">
              <p className="text-xs text-gray-500 mb-1">ユーザー</p>
              <p className="text-sm">ログイン機能に問題があります。</p>
            </div>
            
            <div className="bg-blue-100 p-3 rounded border border-blue-200">
              <p className="text-xs text-blue-600 mb-1">Cline (AI)</p>
              <p className="text-sm mb-2">問題を確認しました。以下の修正を提案します：</p>
              <div className="bg-gray-800 text-green-400 p-2 rounded text-xs font-mono mb-2">
                function authenticateUser() {"{"}<br />
                {"  // コード"}
                <br />
                {"}"}
              </div>
              <p className="text-sm">この問題をIssueとして記録しますか？</p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
            <p className="text-center font-medium mb-2">このステップのポイント</p>
            <ul className="text-sm space-y-1">
              <li>・ VSCode内でClineと対話</li>
              <li>・ AIがコードの解決策を提案</li>
              <li>・ Issue記録の提案</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "ステップ2：Issue作成",
      content: (
        <div className="space-y-4">
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 mb-4">
            <h3 className="font-bold mb-3 text-center">Clineを使ってIssue作成</h3>
            
            <div className="bg-white p-3 rounded border border-gray-200 mb-3">
              <p className="text-xs text-gray-500 mb-1">ユーザー</p>
              <p className="text-sm">はい、Issueとして記録してください。</p>
            </div>
            
            <div className="bg-blue-100 p-3 rounded border border-blue-200 mb-3">
              <p className="text-xs text-blue-600 mb-1">Cline (AI)</p>
              <p className="text-sm">以下の内容でIssueを作成します：</p>
              <div className="bg-white p-2 rounded border border-gray-200 mt-2">
                <p className="text-sm font-medium">タイトル: 認証エラー</p>
                <p className="text-xs font-medium mt-1">説明:</p>
                <p className="text-xs">ログイン機能に問題があります</p>
              </div>
            </div>
            
            <div className="bg-white p-3 rounded border border-gray-200">
              <p className="text-xs text-gray-500 mb-1">ユーザー</p>
              <p className="text-sm">はい、重要度は「高」でお願いします。</p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
            <p className="text-center font-medium mb-2">このステップのポイント</p>
            <ul className="text-sm space-y-1">
              <li>・ AIがIssueドラフトを作成</li>
              <li>・ タイトル、説明文を自動生成</li>
              <li>・ ラベルの設定も会話で指定</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "ステップ3：Projectsへの連携",
      content: (
        <div className="space-y-4">
          <div className="bg-green-50 p-4 rounded-lg border border-green-200 mb-4">
            <h3 className="font-bold mb-3 text-center">GitHub Projectsへの連携</h3>
            
            <div className="bg-blue-100 p-3 rounded border border-blue-200 mb-3">
              <p className="text-xs text-blue-600 mb-1">Cline (AI)</p>
              <p className="text-sm mb-2">Issue #42 を作成しました。プロジェクトに追加しますか？</p>
              <div className="bg-white p-2 rounded border border-gray-200">
                <p className="text-xs font-medium">利用可能なプロジェクト:</p>
                <ul className="text-xs mt-1">
                  <li>・ ウェブアプリ開発</li>
                  <li>・ バグ修正トラッカー</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-3 rounded border border-gray-200 mb-3">
              <p className="text-xs text-gray-500 mb-1">ユーザー</p>
              <p className="text-sm">「バグ修正トラッカー」に追加して、ステータスを「修正待ち」にしてください。</p>
            </div>
            
            <div className="bg-blue-100 p-3 rounded border border-blue-200">
              <p className="text-xs text-blue-600 mb-1">Cline (AI)</p>
              <p className="text-sm">Issue #42 をプロジェクトに追加し、ステータスを設定しました。</p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
            <p className="text-center font-medium mb-2">このステップのポイント</p>
            <ul className="text-sm space-y-1">
              <li>・ IssueをProjectsボードに連携</li>
              <li>・ プロジェクトの選択と初期ステータスの設定</li>
              <li>・ VSCodeを離れることなく管理</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "ステップ4：修正作業とPR作成",
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-4">
            <div className="space-y-4">
              <h3 className="font-bold text-center">Issue解決の作業</h3>
              
              <div className="bg-white p-3 rounded border border-gray-200">
                <p className="text-sm">1. 修正ブランチを作成</p>
                <div className="bg-gray-800 text-green-400 p-2 rounded text-xs font-mono mt-1">
                  git checkout -b fix/issue-42
                </div>
              </div>
              
              <div className="bg-white p-3 rounded border border-gray-200">
                <p className="text-sm">2. Clineと一緒にコード修正</p>
              </div>
              
              <div className="bg-white p-3 rounded border border-gray-200">
                <p className="text-sm">3. コミットとプッシュ</p>
                <div className="bg-gray-800 text-green-400 p-2 rounded text-xs font-mono mt-1">
                  git commit -m "Fix auth error (Fixes #42)"
                </div>
              </div>
              
              <div className="bg-white p-3 rounded border border-gray-200">
                <p className="text-sm">4. Clineを使ってPR作成</p>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 p-3 rounded-lg border border-green-200">
            <h3 className="font-bold text-center mb-2">完了したフロー</h3>
            <div className="flex justify-center flex-wrap">
              <div className="bg-blue-100 rounded-lg px-2 py-1 text-xs m-1">
                問題分析
              </div>
              <div className="text-gray-400 mx-1">→</div>
              <div className="bg-purple-100 rounded-lg px-2 py-1 text-xs m-1">
                Issue作成
              </div>
              <div className="text-gray-400 mx-1">→</div>
              <div className="bg-green-100 rounded-lg px-2 py-1 text-xs m-1">
                Projects連携
              </div>
              <div className="text-gray-400 mx-1">→</div>
              <div className="bg-blue-100 rounded-lg px-2 py-1 text-xs m-1">
                PR作成
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "メリットとまとめ",
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h3 className="font-bold text-center mb-3">Cline + GitHub 連携のメリット</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded-lg border border-blue-100">
                <h4 className="font-medium text-center mb-2 text-blue-700">効率性</h4>
                <ul className="text-sm space-y-1">
                  <li>・ コンテキスト切り替え削減</li>
                  <li>・ VSCode内で完結</li>
                  <li>・ 手作業入力時間短縮</li>
                </ul>
              </div>
              
              <div className="bg-white p-3 rounded-lg border border-blue-100">
                <h4 className="font-medium text-center mb-2 text-blue-700">品質向上</h4>
                <ul className="text-sm space-y-1">
                  <li>・ AIによる問題の整理</li>
                  <li>・ 詳細なIssue記述の自動生成</li>
                  <li>・ 一貫性のあるワークフロー</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
            <p className="text-center font-medium">
              非エンジニアも含めたチーム全体の<br />
              コラボレーション効率が向上します
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
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClineGitHubFlow;