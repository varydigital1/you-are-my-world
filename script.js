const _0x2b7d4d = _0xab66;
function _0xab66(_0x16a646, _0x5ba7d9) {
    const _0x6b4281 = _0x6b42();
    return (
        (_0xab66 = function (_0xab66c4, _0x58d605) {
            _0xab66c4 = _0xab66c4 - 0x1de;
            let _0x35d8a2 = _0x6b4281[_0xab66c4];
            return _0x35d8a2;
        }),
        _0xab66(_0x16a646, _0x5ba7d9)
    );
}
(function (_0x27539a, _0x208fb7) {
    const _0x41f0c8 = _0xab66,
        _0x31119d = _0x27539a();
    while (!![]) {
        try {
            const _0x48fb38 =
                (parseInt(_0x41f0c8(0x1fe)) / 0x1) * (-parseInt(_0x41f0c8(0x1f1)) / 0x2) +
                parseInt(_0x41f0c8(0x1fa)) / 0x3 +
                (parseInt(_0x41f0c8(0x1ff)) / 0x4) * (parseInt(_0x41f0c8(0x1f4)) / 0x5) +
                (parseInt(_0x41f0c8(0x1f9)) / 0x6) * (-parseInt(_0x41f0c8(0x1fd)) / 0x7) +
                parseInt(_0x41f0c8(0x1e1)) / 0x8 +
                -parseInt(_0x41f0c8(0x1ee)) / 0x9 +
                (-parseInt(_0x41f0c8(0x1f2)) / 0xa) * (-parseInt(_0x41f0c8(0x201)) / 0xb);
            if (_0x48fb38 === _0x208fb7) break;
            else _0x31119d["push"](_0x31119d["shift"]());
        } catch (_0x50667a) {
            _0x31119d["push"](_0x31119d["shift"]());
        }
    }
})(_0x6b42, 0x69b57);
const musicManager = {
    audio: null,
    isPlaying: ![],
    init() {
        const _0x57df85 = _0xab66;
        (this[_0x57df85(0x1df)] = new Audio(_0x57df85(0x1e6))),
            (this[_0x57df85(0x1df)][_0x57df85(0x200)] = !![]),
            (this[_0x57df85(0x1df)][_0x57df85(0x1ef)] = 0.7),
            (this["audio"][_0x57df85(0x1de)] = _0x57df85(0x203)),
            this[_0x57df85(0x1df)]["setAttribute"](_0x57df85(0x1e8), ""),
            (this[_0x57df85(0x1df)]["onplay"] = () => {
                const _0x3eeca5 = _0x57df85;
                (this[_0x3eeca5(0x1f8)] = !![]), this[_0x3eeca5(0x1e3)]();
            }),
            (this["audio"]["onpause"] = () => {
                const _0x39c9a2 = _0x57df85;
                (this[_0x39c9a2(0x1f8)] = ![]), this["updateUI"]();
            }),
            document[_0x57df85(0x1ec)](
                _0x57df85(0x1e5),
                () => {
                    const _0x3af32a = _0x57df85;
                    !this[_0x3af32a(0x1f8)] &&
                        this[_0x3af32a(0x1df)]["play"]()[_0x3af32a(0x1e7)]((_0x13d798) => {
                            const _0x6c0f53 = _0x3af32a;
                            console[_0x6c0f53(0x1fb)]("Không\x20thể\x20phát\x20nhạc:", _0x13d798);
                        });
                },
                { once: !![] }
            ),
            this[_0x57df85(0x1e3)]();
    },
    togglePlayback() {
        const _0x3c838b = _0xab66;
        if (!this[_0x3c838b(0x1df)]) return;
        this[_0x3c838b(0x1df)][_0x3c838b(0x1f7)]
            ? this[_0x3c838b(0x1df)][_0x3c838b(0x1e9)]()["catch"]((_0xb8a46a) => {
                  const _0x5ac02f = _0x3c838b;
                  console[_0x5ac02f(0x1fb)](_0x5ac02f(0x1ed), _0xb8a46a);
              })
            : this[_0x3c838b(0x1df)][_0x3c838b(0x1f5)]();
    },
    updateUI() {
        const _0x309de1 = _0xab66,
            _0x178346 = document["getElementById"]("audio-icon");
        this["isPlaying"]
            ? (_0x178346[_0x309de1(0x1f6)][_0x309de1(0x1e2)]("fa-volume-xmark"), _0x178346[_0x309de1(0x1f6)][_0x309de1(0x1e4)](_0x309de1(0x1f0)))
            : (_0x178346["classList"]["remove"]("fa-volume-high"), _0x178346[_0x309de1(0x1f6)][_0x309de1(0x1e4)](_0x309de1(0x1eb)));
    },
};
document[_0x2b7d4d(0x1ec)](_0x2b7d4d(0x1e0), () => {
    const _0x552f01 = _0x2b7d4d;
    musicManager[_0x552f01(0x1ea)](),
        document[_0x552f01(0x1fc)](_0x552f01(0x202))[_0x552f01(0x1ec)](_0x552f01(0x1e5), () => {
            const _0x4172c5 = _0x552f01;
            musicManager[_0x4172c5(0x1f3)]();
        });
});
function _0x6b42() {
    const _0x41745e = [
        "classList",
        "paused",
        "isPlaying",
        "12phpwXf",
        "1293333FUxZXO",
        "warn",
        "getElementById",
        "1299816JrrRep",
        "1qiPhzK",
        "8IhSUti",
        "loop",
        "3289cAxiLY",
        "toggle-audio",
        "auto",
        "preload",
        "audio",
        "DOMContentLoaded",
        "1863896GXvljK",
        "remove",
        "updateUI",
        "add",
        "click",
        "https://res.cloudinary.com/diqseuweg/video/upload/v1755843434/SS_pyutc9.mp4",
        "catch",
        "playsinline",
        "play",
        "init",
        "fa-volume-xmark",
        "addEventListener",
        "Lỗi\x20phát\x20nhạc:",
        "6323310DRwZRz",
        "volume",
        "fa-volume-high",
        "352856XfSyzD",
        "29570zncATQ",
        "togglePlayback",
        "337840QlFHUM",
        "pause",
    ];
    _0x6b42 = function () {
        return _0x41745e;
    };
    return _0x6b42();
}
