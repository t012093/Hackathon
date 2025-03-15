import React, { useState } from 'react';

const MCPPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "モデルコンテキストプロトコル (MCP)",
      content: (
        <div className="text-center space-y-4">
          <p className="text-2xl mb-6">
            AIアシスタントが外部ツールや
            <br />
            データを活用するための共通ルール
          </p>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-blue-50 p-3 rounded-lg border border-blue-200 text-center">
              <h3 className="font-medium text-lg mb-2">AIアシスタント</h3>
              <p className="text-sm">Claude, ChatGPTなど</p>
            </div>
            <div className="bg-purple-50 p-3 rounded-lg border border-purple-200 text-center">
              <h3 className="font-medium text-lg mb-2">つなぎ役</h3>
              <p className="text-sm">ツールやデータの管理</p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg border border-green-200 text-center">
              <h3 className="font-medium text-lg mb-2">便利ツール</h3>
              <p className="text-sm">検索、ファイル管理など</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "なぜモデルコンテキストプロトコルを使うのか？",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="font-bold text-xl mb-4 text-center">従来の方法の課題</h3>
              <div className="space-y-3">
                <p className="text-base">1. ツールごとに個別の連携作業が必要</p>
                <p className="text-base">2. 安全性に関する心配がある</p>
                <p className="text-base">3. 設定や管理が複雑</p>
                <p className="text-base">4. AIの処理能力に制限がある</p>
                <p className="text-base">5. ツールによって操作方法が違う</p>
              </div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h3 className="font-bold text-xl mb-4 text-center">MCPの解決方法</h3>
              <div className="space-y-3">
                <p className="text-base">1. 全てのツールで共通のルールを使用</p>
                <p className="text-base">2. 安全で管理されたアクセス方法</p>
                <p className="text-base">3. 簡単にツールを追加・利用可能</p>
                <p className="text-base">4. AIの処理能力を柔軟に拡張</p>
                <p className="text-base">5. 全てのAIで同じ使い方</p>
              </div>
              <div className="mt-4 bg-white p-2 rounded border border-green-100">
                <p className="text-center text-sm font-medium text-green-600">
                  すべてを繋ぐ一つのプロトコル！
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "MCP参照サーバー",
      content: (
        <div className="space-y-4">
          <p className="text-center text-lg mb-6">
            さまざまなツールやサービスとAIをつなぐ例
          </p>
          
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
              <h3 className="font-medium text-lg text-center mb-3">データの保管場所</h3>
              <ul className="text-sm space-y-2">
                <li>• AWSナレッジベース</li>
                <li>• Googleドライブ</li>
                <li>• PostgreSQL/SQLite</li>
                <li>• Redis</li>
                <li>• メモリシステム</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
              <h3 className="font-medium text-lg text-center mb-3">便利な開発ツール</h3>
              <ul className="text-sm space-y-2">
                <li>• Git/GitHub/GitLab</li>
                <li>• ファイルシステムアクセス</li>
                <li>• Puppeteer</li>
                <li>• 時間ユーティリティ</li>
                <li>• フェッチ機能</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-3 rounded-lg border border-green-200">
              <h3 className="font-medium text-lg text-center mb-3">業務効率化ツール</h3>
              <ul className="text-sm space-y-2">
                <li>• Slack連携</li>
                <li>• Googleマップ</li>
                <li>• Brave検索</li>
                <li>• EverArt</li>
                <li>• 連続思考</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 mt-2">
            <p className="text-center text-base font-medium">
              これらのツールを同じルールで簡単に利用できます！
            </p>
          </div>
        </div>
      )
    },
    {
      title: "公式＆コミュニティ統合",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
              <h3 className="font-bold text-xl text-center mb-4">公式サポート</h3>
              <ul className="text-sm space-y-2">
                <li>• Apify - Webデータ抽出</li>
                <li>• Axiom - ログ＆イベント分析</li>
                <li>• Chroma - ベクトルデータベース</li>
                <li>• E2B - 安全なサンドボックス</li>
                <li>• Exa - AI検索エンジン</li>
                <li>• Kagi - Web検索</li>
                <li>• Langfuse - プロンプト管理</li>
                <li>• Neo4j - グラフデータベース</li>
                <li>• Stripe - 決済API</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-3 rounded-lg border border-green-200">
              <h3 className="font-bold text-xl text-center mb-4">コミュニティ開発</h3>
              <ul className="text-sm space-y-2">
                <li>• Ableton Live - 音楽制作</li>
                <li>• Airtable - データベース管理</li>
                <li>• Googleカレンダー - スケジュール管理</li>
                <li>• Discord - チャット連携</li>
                <li>• Kubernetes - コンテナオーケストレーション</li>
                <li>• MongoDB - NoSQLデータベース</li>
                <li>• Obsidian - ノート管理</li>
                <li>• Spotify - 音楽ストリーミング</li>
                <li>• Terminal Control - コマンド実行</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
            <p className="text-center font-medium">
              MCPエコシステムは公式とコミュニティの両方からの<br />
              貢献によって急速に成長しています！
            </p>
          </div>
        </div>
      )
    },
    {
      title: "MCP技術アーキテクチャ",
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-4">
            <h3 className="font-bold text-xl mb-6 text-center">MCPの動作の流れ</h3>
            
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-white p-4 rounded border border-gray-200 text-center">
                <h4 className="font-medium text-lg mb-2">1. 発見</h4>
                <p className="text-base">AIが使えるツールを見つける</p>
              </div>
              <div className="bg-white p-2 rounded border border-gray-200 text-center">
                <h4 className="font-medium text-lg mb-2">2. 選択</h4>
                <p className="text-base">最適なツールを選ぶ</p>
              </div>
              <div className="bg-white p-2 rounded border border-gray-200 text-center">
                <h4 className="font-medium text-lg mb-2">3. 実行</h4>
                <p className="text-base">ツールを安全に使用</p>
              </div>
            </div>
            
            <div className="bg-white p-3 rounded border border-gray-200">
              <p className="text-lg mb-3 font-medium">MCPの主な特徴：</p>
              <ul className="text-base space-y-2">
                <li>• 共通のルールでツールを定義</li>
                <li>• 安全性を重視した設計</li>
                <li>• データの効率的な処理</li>
                <li>• エラーへの適切な対応</li>
                <li>• さまざまな接続方法に対応</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
            <p className="text-center text-sm">
              <span className="font-medium">利用可能なSDK:</span> TypeScript, Python<br />
              <span className="text-xs">(コミュニティによるJavaとGolang実装あり)</span>
            </p>
          </div>
        </div>
      )
    },
    {
      title: "MCPを始める",
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-4">
            <h3 className="font-bold text-xl mb-4 text-center">MCPを使ってみる</h3>
            
            <div className="bg-gray-800 text-green-400 p-2 rounded text-xs font-mono mb-3">
              # TypeScriptサーバー<br />
              npx -y @modelcontextprotocol/server-memory<br /><br />
              # Pythonサーバー<br />
              uvx mcp-server-git
            </div>
            
            <p className="text-base mb-2">Claudeでの利用例:</p>
            <div className="bg-gray-800 text-green-400 p-2 rounded text-xs font-mono">
              {"{"}<br />
              &nbsp;&nbsp;"mcpServers": {"{"}<br />
              &nbsp;&nbsp;&nbsp;&nbsp;"memory": {"{"}<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"command": "npx",<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"args": ["-y", "@modelcontextprotocol/server-memory"]<br />
              &nbsp;&nbsp;&nbsp;&nbsp;{"}"},<br />
              &nbsp;&nbsp;&nbsp;&nbsp;"git": {"{"}<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"command": "uvx",<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"args": ["mcp-server-git", "--repository", "パス/リポジトリ"]<br />
              &nbsp;&nbsp;&nbsp;&nbsp;{"}"}<br />
              &nbsp;&nbsp;{"}"}<br />
              {"}"}
            </div>
          </div>
          
          <div className="bg-green-50 p-3 rounded-lg border border-green-200">
            <h3 className="font-bold text-lg mb-3 text-center">自分でMCPを作ってみる</h3>
            <p className="text-sm text-center">
              <span className="font-medium">modelcontextprotocol.io</span> で包括的なガイド、<br />
              リファレンス実装、技術ドキュメントを参照してください。
            </p>
            <div className="mt-2 text-center">
              <span className="bg-white px-3 py-1 rounded-full text-xs font-medium text-green-600 border border-green-200">
                自分のツールでAI機能を拡張しよう！
              </span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "MCPリソース＆コミュニティ",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
              <h3 className="font-bold text-xl text-center mb-4">開発に役立つ情報</h3>
              <ul className="text-sm space-y-3">
                <li>
                  <span className="font-medium">公式ドキュメント:</span><br />
                  modelcontextprotocol.io
                </li>
                <li>
                  <span className="font-medium">サーバーディレクトリ:</span><br />
                  Awesome MCP Servers, PulseMCP, MCP Servers Hub
                </li>
                <li>
                  <span className="font-medium">ツール:</span><br />
                  mcp-cli, mcp-get, MCPHub, mcp-manager
                </li>
                <li>
                  <span className="font-medium">フレームワーク:</span><br />
                  EasyMCP, FastMCP, Foxy Contexts
                </li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-3 rounded-lg border border-green-200">
              <h3 className="font-bold text-xl text-center mb-4">参加方法</h3>
              <ul className="text-sm space-y-3">
                <li>
                  <span className="font-medium">GitHub:</span><br />
                  github.com/anthropics/model-context-protocol
                </li>
                <li>
                  <span className="font-medium">Discord:</span><br />
                  開発者とユーザーのアクティブなコミュニティ
                </li>
                <li>
                  <span className="font-medium">Reddit:</span><br />
                  r/mcp & r/modelcontextprotocol
                </li>
                <li>
                  <span className="font-medium">貢献:</span><br />
                  オープンソース - 独自のサーバーを貢献しよう！
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200 text-center">
            <p className="font-medium">
              成長中のMCPエコシステムに参加して、<br />
              外部ツールとデータでAIの可能性を広げよう！
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
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white p-4 shadow-md text-center">
        <h1 className="text-2xl font-bold text-blue-700">
          AI機能を拡張する新しい仕組み (MCP)
        </h1>
        <p className="text-base text-gray-600">
          AIアシスタントの能力をさらに広げるための共通ルール
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
      <div className="flex-grow flex flex-col items-center justify-center p-8 bg-white mx-8 my-6 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-10 text-blue-700 border-b-2 border-blue-200 pb-3 w-full text-center">
          {slides[currentSlide].title}
        </h2>
        <div className="w-full max-w-5xl flex-grow flex items-center justify-center px-4">
          {slides[currentSlide].content}
        </div>
      </div>
      
      {/* Navigation buttons */}
      <div className="flex justify-between p-4">
        <button 
          onClick={prevSlide} 
          disabled={currentSlide === 0}
          className={`flex items-center space-x-2 px-6 py-3 text-lg rounded-lg ${
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
          className={`flex items-center space-x-2 px-6 py-3 text-lg rounded-lg ${
            currentSlide === slides.length - 1 
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
        >
          <span>次へ</span>
        </button>
      </div>
    </div>
  );
};

export default MCPPresentation;
