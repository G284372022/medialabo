// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 1;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
// ボタンを押した後の処理をする関数 hantei() の定義
let b1 = document.querySelector('button#print');
b1.addEventListener('click', hantei);

function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を kazu に代入する
  let i = document.querySelector('input[name="kazu"]');
  let kazu = i.value; 
  let x = document.querySelector('span#kaisu');
  x.textContent = kaisu;
  let y = document.querySelector('span#answer');
  y.textContent = kazu;
  let z = document.querySelector('p#result');

   // 課題3-1: 正解判定する
  // kotae と kazu が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
    console.log(kaisu + '回目の予想: ' + kazu);
    if(kaisu<3) {
        if(kazu>kotae) {
            z.textContent = 'まちがい. 答えはもっと小さいですよ';
        } else if (kotae>kazu) {
            z.textContent = 'まちがい. 答えはもっと大きいですよ';
        } else {
            z.textContent = '正解です、おめでとう!';
        }
    } else if (kaisu==3) {
        if (kotae==kazu) {
            z.textContent = '正解です、おめでとう!';
        } else {
            z.textContent = 'まちがい．残念でした答えは' + kotae + 'です．';
        }
    } else if (kaisu>3){
        z.textContent = '答えは' + kotae + 'でした. すでにゲームは終わっています';
    }
    kaisu++;
}