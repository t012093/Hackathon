import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Github, GitBranch, GitMerge, GitPullRequest, MessageSquare, Trello, CheckCircle, Users, Clock, FileText } from 'lucide-react';

interface Slide {
  title: string;
  content: React.ReactNode;
}

const GitHubPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      title: "GitHubとは？",
      content: (
        <div className="space-y-4">
          <div className="flex justify-center mb-6">
            <Github size={80} className="text-gray-700" />
          </div>
          <p className="text-lg mb-4 text-center">
            GitHubはチームでファイルを管理・共有するためのクラウドサービスです
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="border rounded-lg p-4 bg-blue-50 text-left">
              <h3 className="font-bold mb-2 text-center">基本的な機能</h3>
              <ul className="space-y-2">
                <li>✅ ファイルの保存と共有</li>
                <li>✅ 変更履歴の管理</li>
                <li>✅ チームでの共同作業</li>
                <li>✅ プロジェクト管理</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4 bg-green-50 text-left">
              <h3 className="font-bold mb-2 text-center">活用例</h3>
              <ul className="space-y-2">
                <li>📱 アプリ開発</li>
                <li>📊 データ分析プロジェクト</li>
                <li>📝 ドキュメント管理</li>
                <li>🎯 タスク・進捗管理</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "リポジトリ（Repository）とは？",
      content: (
        <div className="space-y-4">
          <div className="flex justify-center mb-4">
            <FileText size={60} className="text-gray-700" />
          </div>
          <p className="text-lg mb-4 text-center">
            リポジトリは「プロジェクトのファイルを保管する場所」と考えてください
          </p>
          <div className="border rounded-lg p-6 bg-blue-50">
            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center justify-center w-full">
                <div className="border rounded-lg p-3 bg-white shadow-sm flex flex-col items-center mx-4">
                  <p className="font-semibold">Webサイト用</p>
                  <p className="text-sm text-gray-600">リポジトリ</p>
                </div>
                <div className="border rounded-lg p-3 bg-white shadow-sm flex flex-col items-center mx-4">
                  <p className="font-semibold">マーケティング資料</p>
                  <p className="text-sm text-gray-600">リポジトリ</p>
                </div>
                <div className="border rounded-lg p-3 bg-white shadow-sm flex flex-col items-center mx-4">
                  <p className="font-semibold">顧客データ</p>
                  <p className="text-sm text-gray-600">リポジトリ</p>
                </div>
              </div>
              <p className="text-center text-gray-600 italic">
                リポジトリはプロジェクトごとに分けて作成するのが一般的です
              </p>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p>💡 共有フォルダやクラウドストレージと似ていますが、<br />変更履歴も記録される点が大きな違いです</p>
          </div>
        </div>
      )
    },
    {
      title: "Issue（課題）とは？",
      content: (
        <div className="space-y-4">
          <div className="flex justify-center mb-4">
            <MessageSquare size={60} className="text-gray-700" />
          </div>
          <p className="text-lg mb-4 text-center">
            Issueは「やるべきこと」や「問題点」を記録するためのメモのようなものです
          </p>
          <div className="border rounded-lg p-5 bg-yellow-50">
            <div className="space-y-3">
              <div className="border rounded p-3 bg-white shadow-sm">
                <div className="flex items-center">
                  <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs mr-2">バグ</span>
                  <p className="font-medium">ログインページのボタンが動作しない</p>
                </div>
              </div>
              <div className="border rounded p-3 bg-white shadow-sm">
                <div className="flex items-center">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs mr-2">新機能</span>
                  <p className="font-medium">お問い合わせフォームを追加する</p>
                </div>
              </div>
              <div className="border rounded p-3 bg-white shadow-sm">
                <div className="flex items-center">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs mr-2">改善</span>
                  <p className="font-medium">商品ページのデザインを更新する</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <p>💡 Issueには担当者やラベル、期限などを設定できます</p>
            <p className="text-sm text-gray-600 mt-1">チームメンバーはIssueにコメントを追加して議論することもできます</p>
          </div>
        </div>
      )
    },
    {
      title: "Projects（プロジェクト管理）とは？",
      content: (
        <div className="space-y-4">
          <div className="flex justify-center mb-4">
            <Trello size={60} className="text-gray-700" />
          </div>
          <p className="text-lg mb-4 text-center">
            Projectsは「Issueをカンバンボードで視覚的に管理できるツール」です
          </p>
          <div className="border rounded-lg p-4 bg-indigo-50">
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white rounded-lg p-2 shadow-sm">
                <h3 className="text-center font-bold mb-2 text-gray-700 border-b pb-1">ToDo（予定）</h3>
                <div className="space-y-2">
                  <div className="border rounded p-2 bg-yellow-50 text-sm">Q2マーケティング計画の作成</div>
                  <div className="border rounded p-2 bg-green-50 text-sm">新商品の写真撮影</div>
                  <div className="border rounded p-2 bg-blue-50 text-sm">採用ページの更新</div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-2 shadow-sm">
                <h3 className="text-center font-bold mb-2 text-gray-700 border-b pb-1">進行中</h3>
                <div className="space-y-2">
                  <div className="border rounded p-2 bg-purple-50 text-sm">新規顧客向けメールの作成</div>
                  <div className="border rounded p-2 bg-red-50 text-sm">来月のイベント準備</div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-2 shadow-sm">
                <h3 className="text-center font-bold mb-2 text-gray-700 border-b pb-1">完了</h3>
                <div className="space-y-2">
                  <div className="border rounded p-2 bg-gray-50 text-sm">Q1レポートの提出</div>
                  <div className="border rounded p-2 bg-gray-50 text-sm">チームミーティング</div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-2">
            <p>💡 カンバンボードはTrelloやNotionと似た使い勝手です</p>
            <p className="text-sm text-gray-600">タスクを列間でドラッグ＆ドロップして進捗管理できます</p>
          </div>
        </div>
      )
    },
    {
      title: "非エンジニアのためのGitHub Projects活用法",
      content: (
        <div className="space-y-4">
          <div className="flex justify-center gap-2 mb-6">
            <Users size={40} className="text-blue-500" />
            <span className="text-xl font-semibold">+</span>
            <Trello size={40} className="text-purple-500" />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="border rounded-lg p-4 bg-blue-50">
              <h3 className="font-bold mb-3 text-center">こんな方におすすめ</h3>
              <ul className="space-y-3 text-left">
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-blue-600">●</span>
                  <span>マーケティングチーム</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-blue-600">●</span>
                  <span>イベント企画担当者</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-blue-600">●</span>
                  <span>コンテンツ制作者</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-blue-600">●</span>
                  <span>プロジェクトマネージャー</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-blue-600">●</span>
                  <span>製品管理担当者</span>
                </li>
              </ul>
            </div>
            <div className="border rounded-lg p-4 bg-purple-50">
              <h3 className="font-bold mb-3 text-center">活用例</h3>
              <ul className="space-y-3 text-left">
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-purple-600">●</span>
                  <span>マーケティングキャンペーンの進行管理</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-purple-600">●</span>
                  <span>新製品発売のスケジュール管理</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-purple-600">●</span>
                  <span>ブログ記事やSNS投稿の編集フロー</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-purple-600">●</span>
                  <span>チームのタスク分担と進捗確認</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-purple-600">●</span>
                  <span>顧客フィードバックの管理</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "非エンジニアがGitHub Projectsを使うメリット",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="border rounded-lg p-4 bg-green-50 flex flex-col items-center text-center">
              <CheckCircle size={40} className="text-green-600 mb-3" />
              <h3 className="font-bold mb-2">エンジニアとの連携が簡単</h3>
              <p className="text-sm">
                開発チームと同じプラットフォームで作業することで、コミュニケーションがスムーズになります。技術チームとの壁がなくなります。
              </p>
            </div>
            <div className="border rounded-lg p-4 bg-blue-50 flex flex-col items-center text-center">
              <Users size={40} className="text-blue-600 mb-3" />
              <h3 className="font-bold mb-2">透明性の向上</h3>
              <p className="text-sm">
                誰が何をしているか、どのタスクが完了したかが一目でわかります。チーム全体の進捗が可視化されます。
              </p>
            </div>
            <div className="border rounded-lg p-4 bg-yellow-50 flex flex-col items-center text-center">
              <Clock size={40} className="text-yellow-600 mb-3" />
              <h3 className="font-bold mb-2">効率的な進捗管理</h3>
              <p className="text-sm">
                タスクの状態や優先度を視覚的に管理できるため、締め切りの管理や重要な作業の把握が容易になります。
              </p>
            </div>
            <div className="border rounded-lg p-4 bg-purple-50 flex flex-col items-center text-center">
              <GitMerge size={40} className="text-purple-600 mb-3" />
              <h3 className="font-bold mb-2">一元管理</h3>
              <p className="text-sm">
                ファイル、タスク、ディスカッションなどをすべて一か所で管理できるため、複数のツールを行き来する手間が省けます。
              </p>
            </div>
          </div>
          <div className="border-2 border-green-500 rounded-lg p-4 bg-green-50 text-center">
            <h3 className="font-bold mb-2">最大のメリット：チーム全体の連携強化</h3>
            <p>
              技術チームと非技術チームが同じプラットフォームで協力することで、<br />
              <span className="font-semibold">プロジェクト全体のスピードと品質が向上します</span>
            </p>
          </div>
        </div>
      )
    },
    {
      title: "GitHub Projectsの基本的な使い方",
      content: (
        <div className="space-y-4">
          <div className="border rounded-lg p-6 bg-gray-50">
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-700 font-bold mr-3">1</div>
                <div className="flex-1">
                  <h3 className="font-bold mb-1">プロジェクトボードを作成する</h3>
                  <p className="text-sm text-gray-600">
                    GitHubのプロジェクトタブから「New project」をクリックします
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-700 font-bold mr-3">2</div>
                <div className="flex-1">
                  <h3 className="font-bold mb-1">ボードの列（ステータス）を設定する</h3>
                  <p className="text-sm text-gray-600">
                    「To Do」「進行中」「レビュー待ち」「完了」などの列を追加します
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-700 font-bold mr-3">3</div>
                <div className="flex-1">
                  <h3 className="font-bold mb-1">タスク（Issue）を作成する</h3>
                  <p className="text-sm text-gray-600">
                    「＋」ボタンから新しいタスクを追加し、詳細を入力します
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-700 font-bold mr-3">4</div>
                <div className="flex-1">
                  <h3 className="font-bold mb-1">タスクを整理・管理する</h3>
                  <p className="text-sm text-gray-600">
                    担当者、ラベル、期限などを設定し、進捗に合わせて列間で移動します
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-2">
            <p className="font-medium">
              使い方は直感的なので、プロジェクト管理ツールの経験があれば<br />
              すぐに使いこなせるようになります！
            </p>
          </div>
        </div>
      )
    },
    {
      title: "まとめ：GitHubの非エンジニア向け活用法",
      content: (
        <div className="space-y-6">
          <p className="text-lg font-semibold text-center mb-2">
            GitHubは「エンジニアだけのツール」ではありません
          </p>
          <div className="border-2 border-blue-500 rounded-lg p-6 bg-blue-50">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-bold text-center border-b border-blue-200 pb-1">主要機能のおさらい</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <FileText size={18} className="text-gray-700 mr-2" />
                    <span><strong>リポジトリ</strong>：プロジェクトファイルの保管場所</span>
                  </li>
                  <li className="flex items-center">
                    <MessageSquare size={18} className="text-gray-700 mr-2" />
                    <span><strong>Issue</strong>：タスクや課題の管理ツール</span>
                  </li>
                  <li className="flex items-center">
                    <Trello size={18} className="text-gray-700 mr-2" />
                    <span><strong>Projects</strong>：視覚的なプロジェクト管理ボード</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-bold text-center border-b border-blue-200 pb-1">非エンジニアが始めるステップ</h3>
                <ol className="space-y-2 list-decimal pl-6">
                  <li>GitHubアカウントを作成</li>
                  <li>チームのリポジトリにアクセス</li>
                  <li>基本的なIssueの作り方を学ぶ</li>
                  <li>Projectsでタスク管理を始める</li>
                </ol>
              </div>
            </div>
          </div>
          <p className="text-center italic mt-2">
            「GitHubは技術と非技術チームをつなぐ架け橋です。<br />
            全員が同じ場所で協力することで、プロジェクトの成功率が高まります」
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
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white p-4 shadow-md text-center">
        <h1 className="text-xl font-bold text-blue-700">
          非エンジニアのためのGitHub入門
        </h1>
        <p className="text-sm text-gray-600">
          リポジトリ、Issue、Projectsの基本と効果的なタスク管理
        </p>
      </div>
      
      {/* Progress bar */}
      <div className="bg-white px-4 pb-3 shadow-md">
        <div className="w-full bg-gray-200 h-2 rounded-full">
          <div 
            className="bg-blue-500 h-2 rounded-full" 
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          ></div>
        </div>
        <div className="text-right text-sm text-gray-500 mt-1">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>
      
      {/* Slide content */}
      <div className="flex-grow flex flex-col items-center justify-center p-6 bg-white mx-6 my-4 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-8 text-blue-700 border-b-2 border-blue-200 pb-2 w-full text-center">
          {slides[currentSlide].title}
        </h2>
        
        <div className="w-full max-w-4xl flex-grow flex items-center justify-center">
          {slides[currentSlide].content}
        </div>
      </div>
      
      {/* Navigation buttons */}
      <div className="flex justify-between p-4">
        <button 
          onClick={prevSlide} 
          disabled={currentSlide === 0}
          className={`flex items-center space-x-1 px-4 py-2 rounded-lg ${
            currentSlide === 0 
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
        >
          <ArrowLeft size={16} />
          <span>前へ</span>
        </button>
        
        <button 
          onClick={nextSlide} 
          disabled={currentSlide === slides.length - 1}
          className={`flex items-center space-x-1 px-4 py-2 rounded-lg ${
            currentSlide === slides.length - 1 
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
        >
          <span>次へ</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default GitHubPresentation;