import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Terminal, Code, Github, Download, CheckCircle, FileCode, Settings, GitBranch } from 'lucide-react';

interface Slide {
  title: string;
  content: React.ReactNode;
}

const VSCodeGitIssueSlides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      title: "VSCodeでGitを使ったIssue作成フロー",
      content: (
        <div className="space-y-6">
          <div className="flex justify-center">
            <div className="flex items-center">
              <Code size={50} className="text-blue-600 mr-3" />
              <Github size={50} className="text-purple-600" />
            </div>
          </div>
          
          <h3 className="text-xl text-center font-medium mt-4">
            環境構築からIssue作成までのステップバイステップガイド
          </h3>
          
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <ol className="space-y-2">
              <li className="flex items-start">
                <div className="bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-blue-600 font-bold mr-2 flex-shrink-0">1</div>
                <span>必要なソフトウェアのインストール</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-blue-600 font-bold mr-2 flex-shrink-0">2</div>
                <span>VSCodeの設定とGit連携</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-blue-600 font-bold mr-2 flex-shrink-0">3</div>
                <span>GitHubリポジトリのクローン</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-blue-600 font-bold mr-2 flex-shrink-0">4</div>
                <span>コマンドラインからのIssue作成</span>
              </li>
            </ol>
          </div>
          
          <p className="text-center text-gray-600 italic">
            このガイドではVSCodeとGitを使って効率的に開発を行うワークフローを紹介します
          </p>
        </div>
      )
    },
    {
      title: "前提条件と準備",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="font-bold text-center mb-3">必要なアカウント</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Github size={18} className="text-gray-700 mr-2 flex-shrink-0" />
                  <span>GitHubアカウント</span>
                </li>
              </ul>
              <div className="mt-4 bg-white p-2 rounded border text-sm">
                <p className="font-medium">GitHubアカウントの作成</p>
                <p className="text-xs text-gray-600">1. <a href="https://github.com" className="text-blue-600">github.com</a>にアクセス</p>
                <p className="text-xs text-gray-600">2. 「Sign up」から登録フォームに記入</p>
                <p className="text-xs text-gray-600">3. メール認証を完了</p>
              </div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h3 className="font-bold text-center mb-3">インストールするもの</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Download size={18} className="text-gray-700 mr-2 flex-shrink-0" />
                  <span>Git</span>
                </li>
                <li className="flex items-center">
                  <Download size={18} className="text-gray-700 mr-2 flex-shrink-0" />
                  <span>Visual Studio Code</span>
                </li>
                <li className="flex items-center">
                  <Download size={18} className="text-gray-700 mr-2 flex-shrink-0" />
                  <span>GitHub CLI (gh)</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h3 className="font-bold text-center mb-2">なぜGitHub CLIが必要か？</h3>
            <p className="text-sm">
              GitHub CLI（gh）は、コマンドラインからGitHubのIssueやPull Requestを作成・管理するためのツールです。
              VSCode内のターミナルから直接Issueを作成するために必要になります。
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Step 1: Gitのインストール",
      content: (
        <div className="space-y-6">
          <div className="flex justify-center mb-4">
            <GitBranch size={60} className="text-gray-700" />
          </div>
          
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 p-3 rounded-lg border border-blue-200 flex flex-col items-center">
              <h3 className="font-bold mb-2">Windows</h3>
              <ul className="text-sm text-left w-full space-y-1">
                <li>1. <a href="https://git-scm.com/download/win" className="text-blue-600">Git for Windows</a>をダウンロード</li>
                <li>2. インストーラーを実行</li>
                <li>3. デフォルト設定で「Next」をクリック</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-3 rounded-lg border border-green-200 flex flex-col items-center">
              <h3 className="font-bold mb-2">macOS</h3>
              <ul className="text-sm text-left w-full space-y-1">
                <li>1. ターミナルを開く</li>
                <li>2. <code className="bg-gray-100 px-1 rounded">git --version</code>を実行</li>
                <li>3. 未インストールなら自動的にインストーラーが起動</li>
                <li>4. または<code className="bg-gray-100 px-1 rounded">brew install git</code>（Homebrewを使用）</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-3 rounded-lg border border-purple-200 flex flex-col items-center">
              <h3 className="font-bold mb-2">Linux</h3>
              <ul className="text-sm text-left w-full space-y-1">
                <li>Ubuntu/Debian:</li>
                <li><code className="bg-gray-100 px-1 rounded text-xs">sudo apt update</code></li>
                <li><code className="bg-gray-100 px-1 rounded text-xs">sudo apt install git</code></li>
                <li>Fedora:</li>
                <li><code className="bg-gray-100 px-1 rounded text-xs">sudo dnf install git</code></li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold mb-2">インストール確認</h3>
            <div className="bg-black text-green-400 p-3 rounded font-mono text-sm">
              $ git --version<br />
              git version 2.39.1
            </div>
            <p className="text-sm mt-2">
              上記のようにバージョン情報が表示されればインストール成功です。
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Step 2: VSCodeのインストール",
      content: (
        <div className="space-y-6">
          <div className="flex justify-center mb-4">
            <Code size={60} className="text-blue-600" />
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
            <h3 className="font-bold mb-3">VSCodeのインストール手順</h3>
            <ol className="space-y-2">
              <li className="flex items-start">
                <div className="bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-blue-600 font-bold mr-2 flex-shrink-0">1</div>
                <div>
                  <p><a href="https://code.visualstudio.com/" className="text-blue-600">Visual Studio Codeの公式サイト</a>にアクセス</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-blue-600 font-bold mr-2 flex-shrink-0">2</div>
                <div>
                  <p>お使いのOS（Windows/macOS/Linux）に合わせたインストーラーをダウンロード</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-blue-600 font-bold mr-2 flex-shrink-0">3</div>
                <div>
                  <p>インストーラーを実行し、画面の指示に従って進める</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-blue-600 font-bold mr-2 flex-shrink-0">4</div>
                <div>
                  <p>インストールが完了したらVSCodeを起動</p>
                </div>
              </li>
            </ol>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h3 className="font-bold mb-3">おすすめの拡張機能</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white p-2 rounded border">
                <p className="font-medium">GitLens</p>
                <p className="text-xs">Gitの機能を強化し、コミット履歴や変更を視覚的に表示</p>
              </div>
              <div className="bg-white p-2 rounded border">
                <p className="font-medium">GitHub Pull Requests</p>
                <p className="text-xs">VSCode内でGitHubのPR操作を可能に</p>
              </div>
            </div>
            <p className="text-sm mt-3">
              拡張機能は左側のExtensionsタブ（または<code className="bg-gray-100 px-1 rounded">Ctrl+Shift+X</code>）から検索してインストールできます。
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Step 3: GitHub CLIのインストール",
      content: (
        <div className="space-y-6">
          <div className="flex justify-center mb-4">
            <Terminal size={60} className="text-purple-600" />
          </div>
          
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
              <h3 className="font-bold mb-2 text-center">Windows</h3>
              <ul className="text-xs space-y-1">
                <li>1. <a href="https://cli.github.com/" className="text-blue-600">GitHub CLI</a>からインストーラーをダウンロード</li>
                <li>2. インストーラーを実行</li>
                <li>3. デフォルト設定で「Next」をクリック</li>
              </ul>
              <p className="text-xs mt-2">または</p>
              <div className="bg-gray-100 p-1 rounded text-xs mt-1">
                winget install --id GitHub.cli
              </div>
            </div>
            
            <div className="bg-green-50 p-3 rounded-lg border border-green-200">
              <h3 className="font-bold mb-2 text-center">macOS</h3>
              <p className="text-xs mb-2">Homebrewを使用:</p>
              <div className="bg-gray-100 p-1 rounded text-xs">
                brew install gh
              </div>
              <p className="text-xs mt-2">MacPorts を使用:</p>
              <div className="bg-gray-100 p-1 rounded text-xs">
                sudo port install gh
              </div>
            </div>
            
            <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
              <h3 className="font-bold mb-2 text-center">Linux</h3>
              <p className="text-xs mb-1">Debian/Ubuntu:</p>
              <div className="bg-gray-100 p-1 rounded text-xs mb-2">
                sudo apt install gh
              </div>
              <p className="text-xs mb-1">Fedora/RHEL:</p>
              <div className="bg-gray-100 p-1 rounded text-xs">
                sudo dnf install gh
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold mb-2">インストール確認とGitHubへの認証</h3>
            <div className="bg-black text-green-400 p-3 rounded font-mono text-sm mb-3">
              $ gh --version<br />
              gh version 2.30.0
            </div>
            <p className="text-sm mb-2">認証を行います：</p>
            <div className="bg-black text-green-400 p-3 rounded font-mono text-sm">
              $ gh auth login<br />
              ? What account do you want to log into? GitHub.com<br />
              ? What is your preferred protocol for Git operations? HTTPS<br />
              ? Authenticate Git with your GitHub credentials? Yes<br />
              ? How would you like to authenticate GitHub CLI? Login with a web browser
            </div>
            <p className="text-sm mt-2">
              表示されたコードをブラウザに入力して認証を完了します。
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Step 4: GitとVSCodeの初期設定",
      content: (
        <div className="space-y-6">
          <div className="flex justify-center mb-4">
            <Settings size={60} className="text-gray-700" />
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
            <h3 className="font-bold mb-3">Gitの初期設定</h3>
            <p className="text-sm mb-2">
              以下のコマンドを実行して、Gitに自分の名前とメールアドレスを設定します：
            </p>
            <div className="bg-black text-green-400 p-3 rounded font-mono text-sm">
              $ git config --global user.name "あなたの名前"<br />
              $ git config --global user.email "あなたのメールアドレス"
            </div>
            <p className="text-xs mt-2 text-gray-600">
              ※GitHubに登録したものと同じメールアドレスを使用するのがベストプラクティスです
            </p>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h3 className="font-bold mb-3">VSCodeでのGit設定</h3>
            <ol className="space-y-2 text-sm">
              <li className="flex items-start">
                <div className="bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-blue-600 font-bold mr-2 flex-shrink-0">1</div>
                <div>
                  <p>VSCodeを起動して<code className="bg-gray-100 px-1 rounded">Ctrl+,</code>（または「File」→「Preferences」→「Settings」）で設定を開く</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-blue-600 font-bold mr-2 flex-shrink-0">2</div>
                <div>
                  <p>検索ボックスに「git path」と入力</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-blue-600 font-bold mr-2 flex-shrink-0">3</div>
                <div>
                  <p>「Git: Path」にGit実行ファイルへのパスが正しく設定されていることを確認</p>
                  <p className="text-xs text-gray-600">通常は自動的に設定されています</p>
                </div>
              </li>
            </ol>
            <div className="mt-3 bg-white p-2 rounded border text-xs">
              <p className="font-medium">ターミナルの設定</p>
              <p>VSCode内でターミナルを使うには<code className="bg-gray-100 px-1 rounded">Ctrl+`</code>（バッククォート）を押すか、「Terminal」→「New Terminal」を選択</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Step 5: GitHubリポジトリのクローン",
      content: (
        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
            <h3 className="font-bold mb-3">GitHubからリポジトリをクローンする</h3>
            <ol className="space-y-2 text-sm">
              <li className="flex items-start">
                <div className="bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-blue-600 font-bold mr-2 flex-shrink-0">1</div>
                <div>
                  <p>VSCodeを起動し、「View」→「Command Palette」を選択 (または<code className="bg-gray-100 px-1 rounded">Ctrl+Shift+P</code>)</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-blue-600 font-bold mr-2 flex-shrink-0">2</div>
                <div>
                  <p>「Git: Clone」と入力して選択</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-blue-600 font-bold mr-2 flex-shrink-0">3</div>
                <div>
                  <p>GitHubリポジトリのURLを入力（例：<code className="bg-gray-100 px-1 rounded">https://github.com/ユーザー名/リポジトリ名.git</code>）</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-blue-600 font-bold mr-2 flex-shrink-0">4</div>
                <div>
                  <p>クローンの保存先フォルダを選択</p>
                </div>
              </li>
            </ol>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mb-4">
            <h3 className="font-bold mb-2">または、ターミナルからクローンする方法</h3>
            <div className="bg-black text-green-400 p-3 rounded font-mono text-sm">
              $ cd 作業ディレクトリ<br />
              $ git clone https://github.com/ユーザー名/リポジトリ名.git<br />
              $ cd リポジトリ名<br />
              $ code .  # このフォルダをVSCodeで開く
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="bg-green-100 p-3 rounded-lg border border-green-300 max-w-md">
              <div className="flex items-center">
                <CheckCircle size={24} className="text-green-600 mr-2" />
                <p className="font-medium">クローン成功！</p>
              </div>
              <p className="text-sm mt-1">
                これでVSCode内でリポジトリが開かれ、ファイルの編集や変更の追跡が可能になりました。
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Step 6: VSCodeのターミナルからIssueを作成",
      content: (
        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
            <h3 className="font-bold mb-3">GitHub CLIでIssueを作成する</h3>
            <p className="text-sm mb-2">
              VSCodeで統合ターミナルを開いて（<code className="bg-gray-100 px-1 rounded">Ctrl+`</code>）、以下のコマンドを実行します：
            </p>
            <div className="bg-black text-green-400 p-3 rounded font-mono text-sm">
              $ gh issue create
            </div>
            <p className="text-sm mt-2">
              対話形式でIssueの詳細を入力していきます：
            </p>
            <div className="bg-black text-green-400 p-3 rounded font-mono text-sm mt-2">
              ? Title バグ：ログイン画面でエラーが発生する<br />
              ? Body [(e) to launch editor] ログイン画面で認証を試みると、以下のエラーが発生します。<br /><br />
              エラーメッセージ：Authentication failed<br /><br />
              再現手順：<br />
              1. ログイン画面にアクセス<br />
              2. ユーザー名とパスワードを入力<br />
              3. ログインボタンをクリック<br /><br />
              環境：Windows 11, Chrome 98.0<br />
              ? What's next? Submit
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-4">
            <h3 className="font-bold mb-2">オプションを指定してIssueを作成</h3>
            <p className="text-sm mb-2">
              コマンドオプションを使ってより詳細に指定することもできます：
            </p>
            <div className="bg-black text-green-400 p-3 rounded font-mono text-sm">
              $ gh issue create --title "新機能：ダークモードの追加" --body "ユーザーからの要望に応えて、アプリにダークモードを追加する必要があります。" --label "enhancement" --assignee "@me"
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h3 className="font-bold mb-2">主なオプション一覧</h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-white p-2 rounded border">
                <p className="font-medium">--title</p>
                <p className="text-xs">Issueのタイトルを指定</p>
              </div>
              <div className="bg-white p-2 rounded border">
                <p className="font-medium">--body</p>
                <p className="text-xs">Issue本文の内容を指定</p>
              </div>
              <div className="bg-white p-2 rounded border">
                <p className="font-medium">--label</p>
                <p className="text-xs">ラベルを付与（複数可）</p>
              </div>
              <div className="bg-white p-2 rounded border">
                <p className="font-medium">--assignee</p>
                <p className="text-xs">担当者を割り当て</p>
              </div>
              <div className="bg-white p-2 rounded border">
                <p className="font-medium">--milestone</p>
                <p className="text-xs">マイルストーンを設定</p>
              </div>
              <div className="bg-white p-2 rounded border">
                <p className="font-medium">--project</p>
                <p className="text-xs">プロジェクトに追加</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Step 7: Issueの一覧と確認",
      content: (
        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
            <h3 className="font-bold mb-3">作成したIssueの確認</h3>
            <p className="text-sm mb-2">
              リポジトリ内の全Issueを一覧表示：
            </p>
            <div className="bg-black text-green-400 p-3 rounded font-mono text-sm">
              $ gh issue list
            </div>
            <div className="bg-gray-100 p-2 rounded text-xs mt-2">
              出力例：<br />
              #42  バグ：ログイン画面でエラーが発生する  OPEN<br />
              #41  新機能：ダークモードの追加          OPEN<br />
              #38  ドキュメントの更新が必要          CLOSED
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-4">
            <h3 className="font-bold mb-2">特定のIssueの詳細表示</h3>
            <div className="bg-black text-green-400 p-3 rounded font-mono text-sm">
              $ gh issue view 42
            </div>
            <p className="text-sm mt-2">
              ブラウザで確認する場合：
            </p>
            <div className="bg-black text-green-400 p-3 rounded font-mono text-sm">
              $ gh issue view 42 --web
            </div>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <h3 className="font-bold mb-3">Issueへのコメント追加</h3>
            <div className="bg-black text-green-400 p-3 rounded font-mono text-sm">
              $ gh issue comment 42 --body "ブラウザのキャッシュをクリアすると解決する可能性があります。"
            </div>
            <div className="mt-3 bg-white p-3 rounded-lg border text-sm">
              <p className="font-medium">便利なIssue操作コマンド</p>
              <ul className="text-xs mt-1 space-y-1">
                <li></li>