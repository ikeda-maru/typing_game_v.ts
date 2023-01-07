// 変数の初期化
var untyped = '';
var typed = '';
// 必要なHTML要素の取得
var untypedfield = document.getElementById('untyped');
var typedfield = document.getElementById('typed');
// 複数のテキストを格納する配列
var textLists = [
    'Hello World', 'This is my App', 'How are you?',
    'Today is sunny', 'I love JavaScript!', 'Good morning',
    'I am Japanese', 'Let it be', 'Samurai',
    'Typing Game', 'Information Technology',
    'I want to be a programmer', 'What day is today?',
    'I want to build a web app', 'Nice to meet you',
    'Chrome Firefox Edge Safari', 'machine learning',
    'Brendan Eich', 'John Resig', 'React Vue Angular',
    'Netscape Communications', 'undefined null NaN',
    'Thank you very much', 'Google Apple Facebook Amazon',
    'ECMAScript', 'console.log', 'for while if switch',
    'var let const', 'Windows Mac Linux iOS Android',
    'programming'
];
// ランダムなテキストを表示
var createText = function () {
    // 性タイプした文字列をクリア
    typed = '';
    typedfield.textContent = typed;
    // 配列のインデックス数からランダムな数値を生成する
    var random = Math.floor(Math.random() * textLists.length);
    // 配列からランダムにテキストを取得し画面に表示する
    untyped = textLists[random];
    untypedfield.textContent = untyped;
};
createText();
// キー入力の判定
var keyPress = function (e) {
    typed += untyped.substring(0, 1);
    untyped = untyped.substring(1);
    typedfield.textContent = typed;
    untypedfield.textContent = untyped;
    // テキストがなくなったら新しいテキストを表示
    if (untyped === '') {
        createText();
    }
};
// タイピングスキルのランクを判定
var rankCheck = function (score) { };
// ゲームを終了
var gameOver = function (id) { };
// カウントダウンタイマー
var timer = function () { };
// キーボードのイベント処理
document.addEventListener('keypress', keyPress);
