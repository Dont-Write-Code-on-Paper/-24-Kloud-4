/*
このコード動きません。

一応動作機序としては、
Divで箱を生成
Divの中に1つづつ駒が入ってる
駒はCSSで表示･非表示のスタイルを持ってる
ランダム出でた数字だけ駒の場所を変更
ボタンを押す前の駒を非表示にし、新しく進んだあとの駒を表示させる(JSでCSSのスタイルを変更)
ゴール判定
*/

const stage = document.getElementById("stage");
const squareTemplate = document.getElementById("square-template");

const BUTTON_CLICK_EVENT = document.getElementById('btn');

let sum = 0;

const stoneStateList = [];

const createSquares = () => {
    for (let i = 0; i < 10; i++) {
        const square = squareTemplate.cloneNode(true);
        square.removeAttribute("id");
        stage.appendChild(square);

        const stone = square.querySelector('.stone');

        let defaultState;
        if (i == 0) {
            defaultState = 1;
        } else {
            defaultState = 0;
        }

        stone.setAttribute("data-state", defaultState);

        stone.setAttribute("data-index", i);
        stoneStateList.push(defaultState);
    }
};

window.onload = () => {
    createSquares();
};


BUTTON_CLICK_EVENT.addEventListener('click', () => {
    var random = Math.floor(Math.random() * 7) + 1; //ランダムで1-6の目を出す
    stoneStateList[sum] = 0; //さっきまで駒があった位置を非表示にする

    sum += random; //ランダムで出た数だけ駒を進める
    if (sum == 9) { // 10マス目(配列9番)まで来たときの処理
        //ここにコードあったはず(消しちゃった)
        stoneStateList[sum] = 1;
        alert("Done!");
    } else {
        stoneStateList[sum] = 1;
    }
});
