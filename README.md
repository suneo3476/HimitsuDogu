#HimitsuDogu

これは仮レジュメです。

##要旨

　本稿は、個人開発レベルで利用できるオープンテクノロジーによって実現可能なひみつ道具を、実装手段も含めて列挙した情報提供を目標とする。現在は、道具全体から試験的に機械類の道具を名前で抽出し、全体の1割程度であるものの163個の道具を抽出するこに成功している。今後の課題として、名前によらない抽出方法の検討と、今回抽出した道具の実現可能性を判定するにあたっての具体的な手順の策定が挙げられる。

##背景
　「ドラえもん」は、藤子・F・不二雄原作の22世紀の猫型ロボット「ドラえもん」が出来の悪い小学生を助けるストーリーの漫画作品である。作品の特徴としてドラえもんが提供する22世紀の「ひみつ道具」が挙げられ、横山泰行（富山大学名誉教授）によると一連の作品の登場数は1682個である。

　ひみつ道具の多くは作品執筆時点の科学では実現不可能であったが、2014年富士ゼロックスは「四次元ポケットPROJECT」（http://www.fujixerox.co.jp/company/ad/4d-project/ ）を立ち上げ、中堅・中小企業の連携を支援することで、第一弾「セルフ将棋」、第二弾「望遠メガフォン」を実現させている。例えば、「セルフ将棋」はプログラム開発、筐体とロボットアームの制作、ディスプレイ映像、将棋駒の制作をそれぞれ専門とする６つの中小企業が３ヶ月あまりで完成させている。このように、現代の技術の複合によるひみつ道具の実現が可能な時代に突入している。

　高度な機械工作やハードウェア・ソフトウェアのフルスタックな開発を行うには、機材を購入する経済的余裕や情報工学に関する包括的な知識が要求される、１つの機械を個人制作するコストは大きい。しかし、市販の3DプリンタやArduinoの登場により、開発者が個人レベルで工作や開発に専念できる環境が整いつつある。本稿では、個人で利用可能な技術による実現可能性に基づいたひみつ道具の分類を行い、個人開発者への情報提供を目的とする。

##方法と結果
　オンライン百科事典のWikipedia（http://ja.wikipedia.org ）から「ひみつ道具一覧（あ-そ）」と「ひみつ道具一覧（た-わ）」の記事本文テキストを取得・加工することで1843個のひみつ道具の名前テキストを得た。

　今回は情報工学的に実現可能なひみつ道具を探すため、あるひみつ道具の機能を満足するにあたって情報工学的なモジュールを利用していると思われるひみつ道具を選択する。情報工学的なモジュールとは、任意の状況において処理を行い出力を伴うもの（例：「進路アドバイザー」、「災難予報機」）、モニターを通じた操作を意図するもの（例：「反応テストロボット」、「観光旅行窓」）、家電機器を模倣するもの（例：「テレテレビ」、「イージー特撮カメラ」）といったものを指す。

　低コストな選択方法として「機」、「器」、「メカ」、「マシン」、「装置」の語句を名前に含むひみつ道具を抽出するやり方が考えられる。ただし、ドラえもんは児童を読者に含む作品であり、漢字がひらがなで表記される場合を考慮して、「そうち」、「きかい」を合わせて抽出する。この方法では、想定外の名前を持つひみつ道具を抽出できない弱点がある。今回抽出できなかったひみつ道具は、経験的に探し出して補う処置を取る。

##ファイル##
* itemlist.txt　：　Wikipedia記事の生テキストを合成したもの
* extract.js ：　itemlist.txt　から output.txt を生成するスクリプト
* output.txt　：　全ひみつ道具の名前を1行毎に列挙したもの
* machine.js/txt　：　機械類のひみつ道具を抽出するスクリプトおよびテキスト
* resume_pre.txt　：　本稿


#元々のテキスト
成果物は output.txt です。

用途は横に置いといて、ひみつ道具のリストが欲しかった。

テキストとして取得が容易であることを考えて、Wikipediaを選んだ。

スクリプトでは名前を取り出すさいの正規表現に工夫が必要だった。

最新の書籍では1868個掲載されていたけど、今回は1820個取得できた。

Wikipedia記事のライセンスはクリエイティブ・コモンズ 表示-継承 3.0 非移植です。

要はライセンスを示せば二次利用オッケー(だったはず)。

作成手順

1. Wikipediaにアカウント作って編集権限得る
2. 一連のひみつ道具記事(例:[https://ja.wikipedia.org/wiki/ひみつ道具一覧_(あ-そ)](https://ja.wikipedia.org/wiki/ひみつ道具一覧_(あ-そ)) )を編集モードにして全文をコピペ&1つのファイル(itemlist.txt)にまとめる
3. 抽出スクリプト書いて "node extract.js | output.txt" と叩いてテキストに流し込む

Hack Himitsu-Dogu
