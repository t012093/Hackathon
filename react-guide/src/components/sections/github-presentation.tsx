import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, GitBranch, Github, Save, Upload, RefreshCw, CheckCircle, FileText } from 'lucide-react';

interface Slide {
  title: string;
  content: React.ReactNode;
}

export const GitHubPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      title: "Gitとは？",
      content: (
        <div className="space-y-4">
          <div className="flex justify-center mb-6">
            <GitBranch size={80} className="text-gray-700" />
          </div>
          <p className="text-lg mb-6 text-center">
            Gitはファイルの<span className="font-bold text-blue-600">変更履歴を記録・管理</span>するためのツールです
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="border rounded-lg p-4 bg-blue-50 text-left">
              <h3 className="font-bold mb-2 text-center">Gitの主な役割</h3>
              <ul className="space-y-2">
                <li>✅ ファイルの変更履歴を記録</li>
                <li>✅ 複数人での共同作業をサポート</li>
                <li>✅ 同時に複数の作業を並行管理</li>
                <li>✅ 過去の状態に簡単に戻れる</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4 bg-green-50 text-left">
              <h3 className="font-bold mb-2 text-center">こんな問題を解決</h3>
              <ul className="space-y-2">
                <li>❌ 「最新版はどれ？」という混乱</li>
                <li>❌ 誰がいつ何を変更したか不明</li>
                <li>❌ 変更を元に戻せない</li>
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
          <div className="grid grid-cols-2 gap-8 mb-4">
            <div className="flex flex-col items-center">
              <GitBranch size={60} className="text-gray-700 mb-4" />
              <h3 className="font-bold mb-2 text-xl">Git</h3>
              <div className="border rounded-lg p-4 bg-blue-50 w-full">
                <ul className="space-y-2 text-left">
                  <li>• ローカルで動作するツール</li>
                  <li>• ファイルの変更を記録</li>
                  <li>• コマンドラインから操作</li>
                  <li>• 無料のオープンソース</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <Github size={60} className="text-gray-700 mb-4" />
              <h3 className="font-bold mb-2 text-xl">GitHub</h3>
              <div className="border rounded-lg p-4 bg-purple-50 w-full">
                <ul className="space-y-2 text-left">
                  <li>• クラウドサービス</li>
                  <li>• Gitリポジトリのホスティング</li>
                  <li>• チーム協業機能を提供</li>
                  <li>• WebブラウザUIも提供</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-2 border-gray-300 rounded-lg p-4 bg-gray-50">
            <p className="text-center font-medium">
              Gitは「変更管理システム」、GitHubは「Gitリポジトリのホスティングサービス」
            </p>
          </div>
        </div>
      )
    },
    {
      title: "基本的なGitコマンド",
      content: (
        <div className="space-y-6">
          <div className="flex justify-center mb-6">
            <Save size={60} className="text-gray-700" />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="border rounded-lg p-4 bg-blue-50">
              <h3 className="font-bold mb-3 text-center">基本コマンド</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <code className="bg-white px-2 py-1 rounded text-sm">git init</code>
                  <span>新しいリポジトリを作成</span>
                </li>
                <li className="flex items-center space-x-2">
                  <code className="bg-white px-2 py-1 rounded text-sm">git clone</code>
                  <span>リポジトリをコピー</span>
                </li>
                <li className="flex items-center space-x-2">
                  <code className="bg-white px-2 py-1 rounded text-sm">git status</code>
                  <span>変更状態を確認</span>
                </li>
              </ul>
            </div>
            <div className="border rounded-lg p-4 bg-green-50">
              <h3 className="font-bold mb-3 text-center">変更の記録</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <code className="bg-white px-2 py-1 rounded text-sm">git add</code>
                  <span>変更をステージング</span>
                </li>
                <li className="flex items-center space-x-2">
                  <code className="bg-white px-2 py-1 rounded text-sm">git commit</code>
                  <span>変更を記録</span>
                </li>
                <li className="flex items-center space-x-2">
                  <code className="bg-white px-2 py-1 rounded text-sm">git push</code>
                  <span>変更を送信</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center items-center space-x-4 mt-6">
            <div className="flex items-center space-x-2 text-gray-600">
              <RefreshCw size={20} />
              <span>変更を記録</span>
            </div>
            <div className="w-8 h-px bg-gray-300"></div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Upload size={20} />
              <span>GitHubへ送信</span>
            </div>
            <div className="w-8 h-px bg-gray-300"></div>
            <div className="flex items-center space-x-2 text-gray-600">
              <CheckCircle size={20} />
              <span>完了</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Issues（課題管理）とは",
      content: (
        <div className="space-y-6">
          <div className="flex justify-center mb-6">
            <FileText size={60} className="text-gray-700" />
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-4">
              <div className="border rounded-lg p-4 bg-white shadow-sm">
                <div className="flex items-center">
                  <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">バグ</span>
                  <h4 className="ml-2 font-medium">ログインボタンが動作しない</h4>
                </div>
              </div>
              <div className="border rounded-lg p-4 bg-white shadow-sm">
                <div className="flex items-center">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">機能改善</span>
                  <h4 className="ml-2 font-medium">検索機能の追加</h4>
                </div>
              </div>
              <div className="border rounded-lg p-4 bg-white shadow-sm">
                <div className="flex items-center">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">提案</span>
                  <h4 className="ml-2 font-medium">UIデザインの刷新</h4>
                </div>
              </div>
            </div>
            <div className="mt-6 bg-gray-50 border rounded-lg p-4">
              <p className="text-center text-sm text-gray-600">
                Issueでは、担当者の割り当て、ラベル付け、期限設定などができます
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Project（プロジェクト）機能",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="border rounded-lg p-4 bg-gray-50">
              <h3 className="font-bold mb-3 text-center text-gray-700">ToDo</h3>
              <div className="space-y-2">
                <div className="bg-white p-3 rounded border shadow-sm">
                  <span className="block text-sm">検索機能の実装</span>
                  <span className="text-xs text-gray-500">優先度: 高</span>
                </div>
                <div className="bg-white p-3 rounded border shadow-sm">
                  <span className="block text-sm">デザインの改善</span>
                  <span className="text-xs text-gray-500">優先度: 中</span>
                </div>
              </div>
            </div>
            <div className="border rounded-lg p-4 bg-blue-50">
              <h3 className="font-bold mb-3 text-center text-gray-700">進行中</h3>
              <div className="space-y-2">
                <div className="bg-white p-3 rounded border shadow-sm">
                  <span className="block text-sm">ログイン機能の修正</span>
                  <span className="text-xs text-gray-500">担当: 田中</span>
                </div>
              </div>
            </div>
            <div className="border rounded-lg p-4 bg-green-50">
              <h3 className="font-bold mb-3 text-center text-gray-700">完了</h3>
              <div className="space-y-2">
                <div className="bg-white p-3 rounded border shadow-sm">
                  <span className="block text-sm">新規登録画面の作成</span>
                  <span className="text-xs text-gray-500">完了日: 3/10</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium text-center mb-2">プロジェクト機能の特徴</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <CheckCircle size={16} className="text-green-500 mr-2" />
                カンバン形式でタスクを視覚的に管理
              </li>
              <li className="flex items-center">
                <CheckCircle size={16} className="text-green-500 mr-2" />
                Issueと連携してステータスを自動更新
              </li>
              <li className="flex items-center">
                <CheckCircle size={16} className="text-green-500 mr-2" />
                進捗状況を簡単に把握可能
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "チーム開発のベストプラクティス",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="border rounded-lg p-4 bg-blue-50">
              <h3 className="font-bold mb-3 text-center">コミュニケーション</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-green-500 mt-1 mr-2" />
                  <span>Issueでタスクの詳細を明確に記述</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-green-500 mt-1 mr-2" />
                  <span>プルリクエストで変更内容を丁寧に説明</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-green-500 mt-1 mr-2" />
                  <span>定期的な進捗報告とレビュー依頼</span>
                </li>
              </ul>
            </div>
            <div className="border rounded-lg p-4 bg-purple-50">
              <h3 className="font-bold mb-3 text-center">品質管理</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-green-500 mt-1 mr-2" />
                  <span>コードレビューの実施</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-green-500 mt-1 mr-2" />
                  <span>自動テストの導入</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-green-500 mt-1 mr-2" />
                  <span>ドキュメントの整備</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <p className="font-medium text-gray-700">
              「個人のスキルも大切ですが、チームとしての開発プロセスがより重要です」
            </p>
          </div>
        </div>
      )
    }
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-8">
        {/* スライドヘッダー */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
            Git/GitHub入門
          </h2>
          <p className="text-center text-gray-600">
            効率的な開発のための基礎知識
          </p>
          {/* プログレスバー */}
          <div className="relative mt-4">
            <div className="h-2 bg-gray-200 rounded-full">
              <div
                className="h-2 bg-blue-500 rounded-full transition-all duration-300"
                style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
              />
            </div>
            <p className="text-right text-sm text-gray-500 mt-1">
              {currentSlide + 1} / {slides.length}
            </p>
          </div>
        </div>

        {/* スライドコンテンツ */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-6 pb-2 border-b-2 border-blue-100">
            {slides[currentSlide].title}
          </h3>
          <div className="min-h-[400px] flex items-center justify-center">
            {slides[currentSlide].content}
          </div>
        </div>

        {/* スライドナビゲーション */}
        <div className="flex justify-between items-center">
          <button
            onClick={handlePrev}
            disabled={currentSlide === 0}
            className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
              currentSlide === 0
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            前へ
          </button>
          
          <button
            onClick={handleNext}
            disabled={currentSlide === slides.length - 1}
            className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
              currentSlide === slides.length - 1
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            次へ
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};
