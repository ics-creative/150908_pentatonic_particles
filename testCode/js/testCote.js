/// <reference path="../typings/easeljs/easeljs.d.ts" />
/// <reference path="../typings/soundjs/soundjs.d.ts" />
var _this = this;
// ogg形式のファイルが使えない場合にmp3形式のファイルを使う
createjs.Sound.alternateExtensions = ["mp3"];
// マニフェストの作成
var manifest = [
    {
        src: "sounds/150903.ogg",
        data: {
            channels: 5,
            audioSprite: [
                { id: "se_0", startTime: 0, duration: 2600 },
                { id: "se_1", startTime: 4000, duration: 2600 },
                { id: "se_2", startTime: 8000, duration: 2600 }
            ]
        }
    }
];
// マニフェストを登録
createjs.Sound.registerSounds(manifest);
// ファイル読み込み時の処理を設定
createjs.Sound.addEventListener("fileload", function () { return _this.fileLoadHandler(); });
/**
 * ファイルの読み込み完了時に実行される関数
 */
function fileLoadHandler() {
    var _this = this;
    document.getElementById("button1").addEventListener("click", function () { return _this.playSound("se_0"); });
    document.getElementById("button2").addEventListener("click", function () { return _this.playSound("se_1"); });
    document.getElementById("button3").addEventListener("click", function () { return _this.playSound("se_2"); });
}
/**
 * 指定のIDの音を鳴らす
 */
function playSound(soundID) {
    // パンを設定しているのは、Google Chromeで音が片方からしか聞こえないバグの対応のため
    createjs.Sound.play(soundID, { pan: 0.01 });
}
//# sourceMappingURL=testCote.js.map