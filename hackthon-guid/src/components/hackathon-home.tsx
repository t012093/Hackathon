import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HackathonHome = () => {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const navigate = useNavigate();
  
  const sections = [
    {
      id: "github",
      title: "GitHub入門",
      description: "リポジトリ、Issue、Projectsの基本と効果的なタスク管理",
      color: "blue",
      topics: [
        "GitHubの基本概念と主な機能",
        "リポジトリの作成と管理",
        "Issue管理によるタスク追跡",
        "Projectsでのプロジェクト進行管理",
        "非エンジニアのための活用法"
      ]
    },
    {
      id: "git",
      title: "Git基礎",
      description: "バージョン管理の基本とGitフロー",
      color: "green",
      topics: [
        "Gitとは何か？その主な役割",
        "GitとGitHubの違い",
        "基本的なGitコマンド（add, commit, push）",
        "ブランチの概念と活用方法",
        "効率的な開発ワークフロー"
      ]
    },
    {
      id: "cline",
      title: "Cline AIアシスタント",
      description: "AIを活用したコーディング支援ツール",
      color: "purple",
      topics: [
        "ClineとはどのようなVSCode拡張機能か",
        "各種AIプロバイダー（Claude, GPT, Gemini）の利用",
        "コードの生成と問題解決",
        "従量課金とCopilot連携モデル",
        "非エンジニアによる活用シーン"
      ]
    },
    {
      id: "cline-github",
      title: "Cline + GitHub連携",
      description: "AIとタスク管理の統合フロー",
      color: "pink",
      topics: [
        "ClineからGitHub Issueの作成",
        "Projectsボードへの自動連携",
        "コード修正からPull Requestまで",
        "開発効率の向上とコンテキスト切り替えの削減",
        "チームコラボレーションの改善"
      ]
    }
  ];

  const navigateTo = (sectionId: string) => {
    if (sectionId === "github") {
      navigate("/github-presentation");
    } else if (sectionId === "git") {
      navigate("/git-basics-slides");
    } else if (sectionId === "cline") {
      navigate("/cline-presentation");
    } else if (sectionId === "cline-github") {
      navigate("/cline-github-basic");
    }
  };

  const getBgColor = (color: string, isSelected: boolean) => {
    if (color === "blue") return isSelected ? "bg-blue-100" : "bg-blue-50";
    if (color === "green") return isSelected ? "bg-green-100" : "bg-green-50";
    if (color === "purple") return isSelected ? "bg-purple-100" : "bg-purple-50";
    if (color === "pink") return isSelected ? "bg-pink-100" : "bg-pink-50";
    return "bg-gray-50";
  };

  const getBorderColor = (color: string) => {
    if (color === "blue") return "border-blue-300";
    if (color === "green") return "border-green-300";
    if (color === "purple") return "border-purple-300";
    if (color === "pink") return "border-pink-300";
    return "border-gray-300";
  };

  const getButtonColor = (color: string) => {
    if (color === "blue") return "bg-blue-500 hover:bg-blue-600";
    if (color === "green") return "bg-green-500 hover:bg-green-600";
    if (color === "purple") return "bg-purple-500 hover:bg-purple-600";
    if (color === "pink") return "bg-pink-500 hover:bg-pink-600";
    return "bg-gray-500";
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* ヘッダー */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">ハッカソン講義：開発ツール入門</h1>
          <p className="text-xl text-gray-600">
            Git, GitHub, Clineなどの開発ツールを効率的に活用しよう
          </p>
        </div>
        
        {/* セクション選択 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {sections.map((section) => (
            <div 
              key={section.id}
              className={`${getBgColor(section.color, selectedSection === section.id)} border-2 ${getBorderColor(section.color)} rounded-xl p-6 cursor-pointer transition-all duration-300 transform hover:scale-105`}
              onClick={() => setSelectedSection(section.id)}
            >
              <h2 className="text-2xl font-bold mb-3">{section.title}</h2>
              <p className="text-gray-700 mb-4">{section.description}</p>
              <ul className="space-y-1 mb-4">
                {section.topics.map((topic, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-sm mr-2">•</span>
                    <span className="text-sm">{topic}</span>
                  </li>
                ))}
              </ul>
              <button 
                className={`${getButtonColor(section.color)} text-white py-2 px-4 rounded-lg mt-2 w-full`}
                onClick={() => navigateTo(section.id)}
              >
                プレゼンテーションを見る
              </button>
            </div>
          ))}
        </div>
        
        {/* 講義情報 */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">ハッカソン講義について</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">講義の目的</h3>
              <p className="text-gray-700 mb-4">
                このハッカソン講義は、エンジニアだけでなく非エンジニアの方々も含めたチームでの開発をスムーズに行うための
                ツールの基本的な使い方と連携方法を学ぶことを目的としています。
              </p>
              <p className="text-gray-700">
                特に、AIツールを活用した開発効率の向上と、タスク管理の一元化による
                コラボレーション改善に焦点を当てています。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">対象者</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>エンジニア（新しいツールの活用方法を学びたい方）</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>非エンジニア（開発チームとの協業を円滑にしたい方）</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>プロジェクトマネージャー（タスク管理の効率化を図りたい方）</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>学生（最新の開発ツールについて学びたい方）</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* 次回ハッカソン告知 */}
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl shadow-lg p-6 mb-8 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-white opacity-10 rounded-full -ml-10 -mb-10"></div>
          
          <h2 className="text-3xl font-bold mb-4 relative z-10">次回ハッカソン：MCPサーバーを設定しよう！</h2>
          <p className="text-lg mb-6 relative z-10">
            Minecraftのマルチプレイヤーサーバーを構築して、みんなで遊べる環境を作り上げるハッカソンイベント開催決定！
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 relative z-10">
            <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-filter backdrop-blur-sm hover:bg-opacity-30 transition duration-300">
              <h3 className="text-xl font-bold mb-2 text-yellow-300">サーバー構築</h3>
              <p className="text-sm">
                仮想プライベートサーバー（VPS）を使って、自分だけのMinecraftサーバーを立ち上げる方法を学びます。
                クラウドインフラストラクチャの基礎知識も身につきます。
              </p>
            </div>
            
            <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-filter backdrop-blur-sm hover:bg-opacity-30 transition duration-300">
              <h3 className="text-xl font-bold mb-2 text-green-300">モッドとプラグイン</h3>
              <p className="text-sm">
                サーバーの機能を拡張するためのプラグインやモッドの導入方法について学びます。
                自分だけのオリジナルサーバー環境をカスタマイズしましょう。
              </p>
            </div>
            
            <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-filter backdrop-blur-sm hover:bg-opacity-30 transition duration-300">
              <h3 className="text-xl font-bold mb-2 text-blue-300">セキュリティと運用</h3>
              <p className="text-sm">
                サーバーを安全に運用するためのセキュリティ対策やバックアップの方法、
                トラブルシューティングの基本について学びます。
              </p>
            </div>
          </div>
          
          <div className="flex justify-center relative z-10">
            <button className="bg-white text-purple-600 font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition duration-300 transform hover:scale-105">
              事前登録する
            </button>
            <div className="text-white text-sm bg-pink-600 px-3 py-1 rounded-full absolute -top-1 right-0 -mr-2 font-bold">
              4月開催予定
            </div>
          </div>
        </div>
        
        {/* 今後のハッカソン予定 */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">今後のハッカソン予定</h2>
          <p className="text-gray-600 mb-6">
            より多くの技術を学び、実践するチャンスです。ぜひ予定に入れてご参加ください！
          </p>
          
          <div className="space-y-8">
            {/* 5月のハッカソン */}
            <div className="border border-emerald-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-emerald-50 to-white">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/4 bg-gradient-to-br from-emerald-500 to-teal-600 p-4 flex flex-col justify-center items-center text-white relative overflow-hidden">
                  <div className="absolute -right-6 -top-6 w-16 h-16 bg-white opacity-10 rounded-full"></div>
                  <div className="absolute -left-4 -bottom-4 w-12 h-12 bg-white opacity-10 rounded-full"></div>
                  
                  <span className="text-3xl font-bold z-10">5月</span>
                  <span className="text-lg mb-2 z-10">2025年</span>
                  <div className="hidden md:flex items-center justify-center mt-3 bg-white bg-opacity-20 rounded-full p-2 w-12 h-12">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                
                <div className="w-full md:w-3/4 p-5">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <span className="inline-block px-2 py-1 bg-emerald-100 text-emerald-800 text-xs font-medium rounded mb-2">
                        5/21 (水) - 5/22 (木)
                      </span>
                      <h3 className="text-2xl font-bold text-gray-800 flex items-center">
                        Dockerコンテナでアプリ開発
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-3 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      </h3>
                    </div>
                    <span className="bg-emerald-100 text-emerald-800 text-xs font-medium px-3 py-1.5 rounded-full border border-emerald-200">
                      中級者向け
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 border-l-4 border-emerald-300 pl-4">
                    Dockerを活用した開発環境の構築とコンテナ化されたアプリケーションのデプロイメントを学びます。
                    クラウドサービスと連携したCI/CDパイプラインの構築も体験できます。
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">Docker</span>
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">コンテナ</span>
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">AWS</span>
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">CI/CD</span>
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">デプロイ</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <button className="text-white bg-emerald-500 hover:bg-emerald-600 font-medium py-2 px-4 rounded-lg flex items-center transition-colors">
                      詳細を見る
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    <span className="text-sm text-gray-500">参加者募集中</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 6月のハッカソン */}
            <div className="border border-blue-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-blue-50 to-white">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/4 bg-gradient-to-br from-blue-500 to-indigo-600 p-4 flex flex-col justify-center items-center text-white relative overflow-hidden">
                  <div className="absolute -right-6 -top-6 w-16 h-16 bg-white opacity-10 rounded-full"></div>
                  <div className="absolute -left-4 -bottom-4 w-12 h-12 bg-white opacity-10 rounded-full"></div>
                  
                  <span className="text-3xl font-bold z-10">6月</span>
                  <span className="text-lg mb-2 z-10">2025年</span>
                  <div className="hidden md:flex items-center justify-center mt-3 bg-white bg-opacity-20 rounded-full p-2 w-12 h-12">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                </div>
                
                <div className="w-full md:w-3/4 p-5">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded mb-2">
                        6/18 (水) - 6/19 (木)
                      </span>
                      <h3 className="text-2xl font-bold text-gray-800 flex items-center">
                        LINEボット開発チャレンジ
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </h3>
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1.5 rounded-full border border-blue-200">
                      初心者歓迎
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 border-l-4 border-blue-300 pl-4">
                    LINE Messaging APIを使って、便利な機能を持ったオリジナルのLINEボットを開発します。
                    天気予報、スケジュール管理、クイズなど、アイデア次第で様々なボットが作れます。
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">LINE API</span>
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">チャットボット</span>
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">JavaScript</span>
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">Node.js</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <button className="text-white bg-blue-500 hover:bg-blue-600 font-medium py-2 px-4 rounded-lg flex items-center transition-colors">
                      詳細を見る
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    <span className="text-sm text-gray-500">まもなく募集開始</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 7月のハッカソン */}
            <div className="border border-amber-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-amber-50 to-white">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/4 bg-gradient-to-br from-amber-500 to-orange-600 p-4 flex flex-col justify-center items-center text-white relative overflow-hidden">
                  <div className="absolute -right-6 -top-6 w-16 h-16 bg-white opacity-10 rounded-full"></div>
                  <div className="absolute -left-4 -bottom-4 w-12 h-12 bg-white opacity-10 rounded-full"></div>
                  
                  <span className="text-3xl font-bold z-10">7月</span>
                  <span className="text-lg mb-2 z-10">2025年</span>
                  <div className="hidden md:flex items-center justify-center mt-3 bg-white bg-opacity-20 rounded-full p-2 w-12 h-12">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
                
                <div className="w-full md:w-3/4 p-5">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <span className="inline-block px-2 py-1 bg-amber-100 text-amber-800 text-xs font-medium rounded mb-2">
                        7/23 (水) - 7/24 (木)
                      </span>
                      <h3 className="text-2xl font-bold text-gray-800 flex items-center">
                        AIを活用したWebアプリ制作
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-3 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        </svg>
                      </h3>
                    </div>
                    <span className="bg-amber-100 text-amber-800 text-xs font-medium px-3 py-1.5 rounded-full border border-amber-200">
                      全レベル対応
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 border-l-4 border-amber-300 pl-4">
                    OpenAI APIやGoogle Cloud Vision APIなどのAIサービスを活用した革新的なWebアプリケーションを作成します。
                    画像認識、テキスト生成、感情分析など、様々なAI技術を実際のアプリに組み込む方法を学びます。
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">OpenAI</span>
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">画像認識</span>
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">React</span>
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">Cloud API</span>
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">AI</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <button className="text-white bg-amber-500 hover:bg-amber-600 font-medium py-2 px-4 rounded-lg flex items-center transition-colors">
                      詳細を見る
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    <span className="text-sm text-gray-500">準備中</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        
        {/* コミュニティ参加勧誘 */}
        <div className="bg-gray-800 rounded-xl shadow-md p-6 mb-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-6 max-w-xl">
              <h2 className="text-2xl font-bold mb-3">コミュニティに参加しよう</h2>
              <p className="text-gray-300 mb-4">
                開発ツールやMinecraftサーバーの設定などについて、いつでも質問したり、
                アイデアを共有したり、一緒に学び合える仲間が待っています。
                Discord サーバーに参加して、次回ハッカソンの最新情報もいち早くゲットしましょう！
              </p>
              <ul className="text-gray-300 mb-4 space-y-1">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>質問や相談ができる専用チャンネル</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>定期的な勉強会やミニイベントの開催</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>参加者同士のプロジェクト相談</span>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-discord-blue w-20 h-20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </div>
              <button className="bg-discord-blue hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105">
                Discordに参加する
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Discord色の定義のためにTailwindの設定を拡張する場合は以下のようなクラスを使用します
// ここでは直接bg-discord-blueというクラス名を使用していますが、実際の実装ではTailwind configの拡張が必要かもしれません
// この例ではデフォルトの青色を使用することを想定しています

export default HackathonHome;