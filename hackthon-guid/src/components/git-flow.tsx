import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Terminal, Code, Github, Download, CheckCircle, Laptop, Coffee, BookOpen, Key, Lock } from 'lucide-react';

interface Slide {
  title: string;
  content: React.ReactNode;
}

const GitBasicsSlides: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      title: "はじめてのGit & VSCode",
      content: (
        <div className="space-y-6">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Laptop size={80} className="text-blue-500" />
              <div className="absolute -top-2 -right-2 bg-white rounded-full p-1">
                <Github size={30} className="text-purple-600" />
              </div>
            </div>
          </div>
          
          <h3 className="text-2xl text-center font-medium">
            プログラミングを始める第一歩
          </h3>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-100 shadow-sm">
            <p className="text-center mb-4">
              このガイドでは、プログラミングに必須のツールを<br />
              <span className="font-bold text-blue-600">誰でも簡単に</span>セットアップする方法をご紹介します
            </p>
            
            <div className="flex justify-center">
              <div className="inline-flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                <Coffee size={18} className="text-orange-500 mr-2" />
                <span>5-10分で完了します</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-2">
                <Download size={24} className="text-blue-600" />
              </div>
              <p className="text-center text-sm">必要なアプリを<br />インストール</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-2">
                <Code size={24} className="text-green-600" />
              </div>
              <p className="text-center text-sm">VSCodeの<br />初期設定</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-2">
                <BookOpen size={24} className="text-purple-600" />
              </div>
              <p className="text-center text-sm">課題（Issue）<br />作成を体験</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "なぜGitとVSCodeが必要なの？",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-xl border border-blue-200 shadow-sm">
              <div className="flex items-center mb-4">
                <Code size={28} className="text-blue-600 mr-3" />
                <h3 className="text-xl font-medium">VSCode</h3>
              </div>
              <p className="mb-3">テキストエディタの一種で、プログラミングに特化したメモ帳のようなものです。</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  <span>色分け表示でコードが見やすい</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  <span>入力補完機能で作業が早い</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  <span>拡張機能で様々な作業ができる</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-5 rounded-xl border border-purple-200 shadow-sm">
              <div className="flex items-center mb-4">
                <Github size={28} className="text-purple-600 mr-3" />
                <h3 className="text-xl font-medium">Git & GitHub</h3>
              </div>
              <p className="mb-3">変更履歴を管理し、チームでの共同作業を可能にするツールです。</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  <span>変更内容を記録・管理できる</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  <span>複数人での共同作業が可能</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                  <span>「Issue」で課題管理ができる</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 flex items-start">
            <div className="bg-amber-100 rounded-full p-2 mr-3 flex-shrink-0">
              <BookOpen size={20} className="text-amber-600" />
            </div>
            <div>
              <h4 className="font-medium mb-1">ポイント</h4>
              <p className="text-sm">
                プログラミングの世界では、この2つのツールがとても重要です。どちらもすぐに使えるようになり、
                プログラミング学習の効率がぐんと上がります！
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Step 1: Gitのインストール",
      content: (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <h3 className="text-xl font-medium mb-4 text-center">あなたのパソコンは？</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
                <h4 className="font-bold mb-3 flex items-center">
                  <span className="text-blue-600 mr-2">Windows</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">97%の方</span>
                </h4>
                
                <ol className="space-y-2 text-sm">
                  <li className="flex">
                    <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 flex-shrink-0">1</span>
                    <div>
                      <a href="https://git-scm.com/download/win" className="text-blue-600 underline" target="_blank" rel="noopener">Git for Windows</a> をダウンロード
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 flex-shrink-0">2</span>
                    <div>
                      ダウンロードしたファイルをダブルクリックして実行
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 flex-shrink-0">3</span>
                    <div>
                      すべて「次へ」をクリックしてインストール完了
                    </div>
                  </li>
                </ol>
                
                <div className="mt-3 bg-white p-2 rounded border">
                  <img src="/images/git-windows-install.png" alt="Gitインストール画面" className="w-full h-24 object-cover rounded" />
                </div>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                <h4 className="font-bold mb-3 flex items-center">
                  <span className="text-gray-600 mr-2">Mac</span>
                  <span className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full">3%の方</span>
                </h4>
                
                <ol className="space-y-2 text-sm">
                  <li className="flex">
                    <span className="bg-gray-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 flex-shrink-0">1</span>
                    <div>
                      「Launchpad」→「その他」→「ターミナル」を開く
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-gray-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 flex-shrink-0">2</span>
                    <div>
                      <code className="bg-gray-100 px-1 rounded">git --version</code> と入力して Enter
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-gray-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 flex-shrink-0">3</span>
                    <div>
                      インストールのポップアップが出たら「インストール」をクリック
                    </div>
                  </li>
                </ol>
                
                <div className="mt-3 bg-white p-2 rounded border">
                  <img src="/images/git-mac-install.png" alt="Macでのインストール" className="w-full h-24 object-cover rounded" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg border border-green-200 flex items-start">
            <CheckCircle size={20} className="text-green-600 mr-2 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">確認方法</p>
              <ol className="text-sm mt-1">
                <li>1. 「スタート」→「コマンドプロンプト」を開く（Macの場合はターミナル）</li>
                <li>2. <code className="bg-white px-1 rounded">git --version</code> と入力して Enter</li>
                <li>3. バージョン番号が表示されたら成功です！</li>
              </ol>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Step 2: GitHubとの接続設定",
      content: (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <h3 className="text-xl font-medium mb-4 text-center">GitHub接続方法を選びましょう</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
                <h4 className="font-bold mb-3 flex items-center">
                  <Key size={20} className="text-blue-600 mr-2" />
                  <span>SSH接続（推奨）</span>
                </h4>
                
                <p className="text-sm mb-3">より安全で便利な接続方法です。一度設定すれば、パスワード入力なしで接続できます。</p>
                
                <ol className="space-y-2 text-sm">
                  <li className="flex">
                    <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 flex-shrink-0">1</span>
                    <div>
                      ターミナルで：<code className="bg-white px-1 rounded">ssh-keygen -t ed25519 -C "your_email@example.com"</code>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 flex-shrink-0">2</span>
                    <div>
                      <code className="bg-white px-1 rounded">cat ~/.ssh/id_ed25519.pub</code> で公開鍵を表示
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 flex-shrink-0">3</span>
                    <div>
                      GitHubの設定ページで「SSH and GPG keys」→「New SSH key」で登録
                    </div>
                  </li>
                </ol>
                
                <div className="mt-3 bg-white p-2 rounded border">
                  <img src="/images/ssh-key-github.png" alt="SSH鍵の設定画面" className="w-full h-24 object-cover rounded" />
                </div>
              </div>
              
              <div className="bg-purple-50 p-5 rounded-lg border border-purple-200">
                <h4 className="font-bold mb-3 flex items-center">
                  <Lock size={20} className="text-purple-600 mr-2" />
                  <span>アクセストークン</span>
                </h4>
                
                <p className="text-sm mb-3">SSHが難しい場合は、個人アクセストークンでの接続も可能です。</p>
                
                <ol className="space-y-2 text-sm">
                  <li className="flex">
                    <span className="bg-purple-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 flex-shrink-0">1</span>
                    <div>
                      GitHubで「Settings」→「Developer settings」→「Personal access tokens」を開く
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-purple-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 flex-shrink-0">2</span>
                    <div>
                      「Generate new token」から新しいトークンを作成（repo権限を付与）
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-purple-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 flex-shrink-0">3</span>
                    <div>
                      作成したトークンをパスワードの代わりに使用（必ずコピーして保存）
                    </div>
                  </li>
                </ol>
                
                <div className="mt-3 bg-white p-2 rounded border">
                  <img src="/images/access-token-github.png" alt="アクセストークン設定画面" className="w-full h-24 object-cover rounded" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 flex items-start">
            <div className="bg-amber-100 rounded-full p-2 mr-3 flex-shrink-0">
              <BookOpen size={20} className="text-amber-600" />
            </div>
            <div>
              <h4 className="font-medium mb-1">重要なポイント</h4>
              <p className="text-sm">
                GitHubとの接続設定は一度行えば、以降のプロジェクトでも使用できます。SSH接続を推奨しますが、
                どちらを選んでも問題ありません。接続に問題がある場合は、別の方法を試してみましょう。
              </p>
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg border border-green-200 flex items-start">
            <CheckCircle size={20} className="text-green-600 mr-2 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">接続確認方法</p>
              <ol className="text-sm mt-1">
                <li>1. ターミナルを開く</li>
                <li>2. <code className="bg-white px-1 rounded">ssh -T git@github.com</code> と入力（SSHの場合）</li>
                <li>3. 「Hi ユーザー名! You've successfully...」と表示されたら成功です！</li>
              </ol>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "おめでとう！完了しました",
      content: (
        <div className="space-y-6">
          <div className="flex justify-center">
            <div className="bg-green-100 rounded-full p-4">
              <CheckCircle size={60} className="text-green-600" />
            </div>
          </div>
          
          <h3 className="text-2xl font-medium text-center">
            すべての設定が完了しました！
          </h3>
          
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border shadow-sm">
            <p className="text-center mb-4">
              おめでとうございます！これで<span className="font-bold text-green-600">Git</span>と<span className="font-bold text-blue-600">VSCode</span>を<br />
              活用する準備ができました！
            </p>
            
            <div className="flex justify-center">
              <div className="inline-flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                <CheckCircle size={18} className="text-green-500 mr-2" />
                <span>これからのプログラミング学習に役立ちます</span>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-5">
            <div className="bg-white p-4 rounded-lg border shadow-sm">
              <h4 className="font-medium mb-2 text-center">次のステップ</h4>
              <ul className="text-sm space-y-2">
                <li className="flex items-start">
                  <span className="bg-blue-100 rounded-full w-5 h-5 flex items-center justify-center text-xs text-blue-700 mr-2 mt-0.5">1</span>
                  <span>実際にコードを書いてみる</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 rounded-full w-5 h-5 flex items-center justify-center text-xs text-blue-700 mr-2 mt-0.5">2</span>
                  <span>変更をコミットしてみる</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 rounded-full w-5 h-5 flex items-center justify-center text-xs text-blue-700 mr-2 mt-0.5">3</span>
                  <span>チームで協力する方法を学ぶ</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border shadow-sm">
              <h4 className="font-medium mb-2 text-center">お役立ちリンク</h4>
              <ul className="text-sm space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <a href="https://docs.github.com/ja" className="text-blue-600 hover:underline">GitHub公式ドキュメント</a>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <a href="https://code.visualstudio.com/docs/getstarted/tips-and-tricks" className="text-blue-600 hover:underline">VSCodeのヒントとコツ</a>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <a href="https://learngitbranching.js.org/?locale=ja" className="text-blue-600 hover:underline">Git学習サイト（日本語）</a>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg border shadow-sm">
              <h4 className="font-medium mb-2 text-center">便利なコマンド</h4>
              <div className="text-sm font-mono bg-gray-50 p-2 rounded space-y-1">
                <p><span className="text-green-600">git</span> status</p>
                <p><span className="text-green-600">git</span> add .</p>
                <p><span className="text-green-600">git</span> commit -m "変更内容"</p>
                <p><span className="text-green-600">git</span> push</p>
                <p><span className="text-green-600">gh</span> issue list</p>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 flex items-start">
            <div className="bg-purple-100 rounded-full p-1 mr-3 flex-shrink-0">
              <Terminal size={18} className="text-purple-600" />
            </div>
            <div>
              <h4 className="font-medium">ワンポイントアドバイス</h4>
              <p className="text-sm">
                プログラミングは実践あるのみです。<br />
                小さなプロジェクトから始めて、少しずつ学んでいきましょう！<br />
                わからないことがあれば、必ずGoogle検索してみてください。
              </p>
            </div>
          </div>
        </div>
      )
    }
  ];

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? prev : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? prev : prev + 1));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="p-6 sm:p-8 border-b">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800">
              {slides[currentSlide].title}
            </h2>
            <div className="text-sm font-medium text-gray-500">
              {currentSlide + 1} / {slides.length}
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8 min-h-[500px]">
          {slides[currentSlide].content}
        </div>

        <div className="px-6 sm:px-8 py-4 bg-gray-50 border-t flex justify-between">
          <button
            onClick={goToPrevSlide}
            disabled={currentSlide === 0}
            className={`flex items-center px-4 py-2 rounded-lg ${
              currentSlide === 0
                ? "text-gray-400 bg-gray-100 cursor-not-allowed"
                : "text-gray-700 bg-white border hover:bg-gray-50"
            }`}
          >
            <ChevronLeft size={16} className="mr-1" />
            前へ
          </button>
          
          <button
            onClick={goToNextSlide}
            disabled={currentSlide === slides.length - 1}
            className={`flex items-center px-4 py-2 rounded-lg ${
              currentSlide === slides.length - 1
                ? "text-gray-400 bg-gray-100 cursor-not-allowed"
                : "text-white bg-blue-600 hover:bg-blue-700"
            }`}
          >
            次へ
            <ChevronRight size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GitBasicsSlides;
