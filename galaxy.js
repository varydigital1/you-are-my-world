const _0x207b43 = _0x35a6;
(function (_0x5295c3, _0x28348c) {
    const _0x391d63 = _0x35a6,
        _0x4a0d6e = _0x5295c3();
    while (!![]) {
        try {
            const _0x49cfbe =
                (-parseInt(_0x391d63(0x2a1)) / 0x1) * (parseInt(_0x391d63(0x213)) / 0x2) +
                (parseInt(_0x391d63(0x254)) / 0x3) * (parseInt(_0x391d63(0x2bb)) / 0x4) +
                (-parseInt(_0x391d63(0x232)) / 0x5) * (parseInt(_0x391d63(0x1d1)) / 0x6) +
                -parseInt(_0x391d63(0x1db)) / 0x7 +
                parseInt(_0x391d63(0x283)) / 0x8 +
                (parseInt(_0x391d63(0x1f2)) / 0x9) * (parseInt(_0x391d63(0x25c)) / 0xa) +
                parseInt(_0x391d63(0x286)) / 0xb;
            if (_0x49cfbe === _0x28348c) break;
            else _0x4a0d6e["push"](_0x4a0d6e["shift"]());
        } catch (_0x1723e8) {
            _0x4a0d6e["push"](_0x4a0d6e["shift"]());
        }
    }
})(_0x2d88, 0xbe1b9);
import * as _0x275f13 from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
const scene = new _0x275f13["Scene"]();
scene[_0x207b43(0x251)] = new _0x275f13[_0x207b43(0x22e)](0x0, 0.0015);
const camera = new _0x275f13[_0x207b43(0x1f7)](0x4b, window[_0x207b43(0x2b7)] / window[_0x207b43(0x2b3)], 0.1, 0x186a0);
camera[_0x207b43(0x1c8)][_0x207b43(0x223)](0x0, 0x14, 0x1e);
const renderer = new _0x275f13[_0x207b43(0x28e)]({ antialias: !![] });
renderer[_0x207b43(0x23f)](window["innerWidth"], window[_0x207b43(0x2b3)]),
    renderer[_0x207b43(0x1fc)](Math["min"](window["devicePixelRatio"], 0x2)),
    (renderer["outputColorSpace"] = _0x275f13["SRGBColorSpace"]),
    document[_0x207b43(0x224)](_0x207b43(0x2b1))["appendChild"](renderer[_0x207b43(0x28a)]);
function _0x35a6(_0x2abffe, _0x5b3928) {
    const _0x2d88b4 = _0x2d88();
    return (
        (_0x35a6 = function (_0x35a6d7, _0x4bc128) {
            _0x35a6d7 = _0x35a6d7 - 0x1af;
            let _0x487d75 = _0x2d88b4[_0x35a6d7];
            return _0x487d75;
        }),
        _0x35a6(_0x2abffe, _0x5b3928)
    );
}
const controls = new OrbitControls(camera, renderer[_0x207b43(0x28a)]);
(controls["enableDamping"] = !![]),
    (controls[_0x207b43(0x291)] = !![]),
    (controls["autoRotateSpeed"] = 0.2),
    (controls[_0x207b43(0x225)] = ![]),
    controls[_0x207b43(0x265)][_0x207b43(0x223)](0x0, 0x0, 0x0),
    (controls[_0x207b43(0x264)] = ![]),
    (controls["minDistance"] = 0xf),
    (controls[_0x207b43(0x28d)] = 0x12c),
    (controls[_0x207b43(0x280)] = 0.3),
    (controls[_0x207b43(0x201)] = 0.3),
    controls[_0x207b43(0x25e)]();
function createGlowMaterial(_0x2f8802, _0x44755c = 0x80, _0x35d7c7 = 0.55) {
    const _0x2b2118 = _0x207b43,
        _0x4d576a = document[_0x2b2118(0x284)](_0x2b2118(0x25d));
    _0x4d576a[_0x2b2118(0x2bf)] = _0x4d576a["height"] = _0x44755c;
    const _0x1f56ab = _0x4d576a[_0x2b2118(0x1c3)]("2d"),
        _0x285973 = _0x1f56ab[_0x2b2118(0x266)](_0x44755c / 0x2, _0x44755c / 0x2, 0x0, _0x44755c / 0x2, _0x44755c / 0x2, _0x44755c / 0x2);
    _0x285973[_0x2b2118(0x24f)](0x0, _0x2f8802), _0x285973[_0x2b2118(0x24f)](0x1, "rgba(0,0,0,0)"), (_0x1f56ab[_0x2b2118(0x217)] = _0x285973), _0x1f56ab[_0x2b2118(0x2c1)](0x0, 0x0, _0x44755c, _0x44755c);
    const _0x386cb5 = new _0x275f13["CanvasTexture"](_0x4d576a),
        _0x17be30 = new _0x275f13[_0x2b2118(0x207)]({ map: _0x386cb5, transparent: !![], opacity: _0x35d7c7, depthWrite: ![], blending: _0x275f13[_0x2b2118(0x244)] });
    return new _0x275f13["Sprite"](_0x17be30);
}
const centralGlow = createGlowMaterial("rgba(255,255,255,0.8)", 0x9c, 0.25);
centralGlow["scale"]["set"](0x8, 0x8, 0x1), scene[_0x207b43(0x2a0)](centralGlow);
for (let i = 0x0; i < 0xf; i++) {
    const hue = Math[_0x207b43(0x2aa)]() * 0x168,
        color = _0x207b43(0x241) + hue + _0x207b43(0x282),
        nebula = createGlowMaterial(color, 0x100);
    nebula[_0x207b43(0x29b)][_0x207b43(0x223)](0x64, 0x64, 0x1),
        nebula[_0x207b43(0x1c8)][_0x207b43(0x223)]((Math[_0x207b43(0x2aa)]() - 0.5) * 0xaf, (Math[_0x207b43(0x2aa)]() - 0.5) * 0xaf, (Math[_0x207b43(0x2aa)]() - 0.5) * 0xaf),
        scene[_0x207b43(0x2a0)](nebula);
}
const galaxyParameters = { count: 0x186a0, arms: 0x6, radius: 0x64, spin: 0.5, randomness: 0.2, randomnessPower: 0x14, insideColor: new _0x275f13[_0x207b43(0x276)](0xd63ed6), outsideColor: new _0x275f13[_0x207b43(0x276)](0x48b8b8) };
function getHeartImagesFromURL() {
    const _0x321c35 = _0x207b43,
        _0x3a40c1 = new URLSearchParams(window["location"][_0x321c35(0x21f)]),
        _0x6fb5a7 = _0x3a40c1[_0x321c35(0x247)](_0x321c35(0x281));
    if (_0x6fb5a7) {
        const _0x4279fd = decodeURIComponent(_0x6fb5a7),
            _0x21433b = _0x4279fd[_0x321c35(0x22a)](",")
                [_0x321c35(0x1b8)]((_0x41cf75) => _0x41cf75[_0x321c35(0x28b)]())
                [_0x321c35(0x29d)](Boolean);
        return _0x21433b;
    }
    return null;
}
//update new
const heartImages = getHeartImagesFromURL() || [];
// Add more images manually
heartImages.push("https://res.cloudinary.com/diqseuweg/image/upload/v1755850045/IMG_20250820_183001_udgxle.jpg");
heartImages.push("https://res.cloudinary.com/diqseuweg/image/upload/v1755850044/Messenger_creation_6ED02110-2E3B-4225-91E2-291A3C1F65CB_bgfmnp.jpg");
document[_0x207b43(0x1bb)]("DOMContentLoaded", () => {
    const _0x41551e = _0x207b43;
    if (getHeartImagesFromURL()) {
        const _0x287a1 = document[_0x41551e(0x224)]("image-input-container");
        if (_0x287a1) _0x287a1[_0x41551e(0x1d8)][_0x41551e(0x1b7)] = _0x41551e(0x288);
    }
    const _0x231e4d = document[_0x41551e(0x224)](_0x41551e(0x28c));
    _0x231e4d?.[_0x41551e(0x1bb)]("click", () => {
        const _0x55011b = _0x41551e,
            _0x1d701c = document[_0x55011b(0x224)]("image-links")[_0x55011b(0x2a2)][_0x55011b(0x28b)]();
        if (!_0x1d701c) {
            alert("Bạn\x20chưa\x20nhập\x20link\x20ảnh.");
            return;
        }
        const _0x214235 = _0x1d701c[_0x55011b(0x22a)](",")
                ["map"]((_0x5a41b5) => _0x5a41b5[_0x55011b(0x28b)]())
                [_0x55011b(0x29d)](Boolean),
            _0x23798d = encodeURIComponent(_0x214235[_0x55011b(0x1da)](",")),
            _0x9cb9a0 = "" + window[_0x55011b(0x25f)][_0x55011b(0x285)] + window[_0x55011b(0x25f)][_0x55011b(0x24c)] + _0x55011b(0x255) + _0x23798d;
        navigator["clipboard"]
            [_0x55011b(0x2ba)](_0x9cb9a0)
            [_0x55011b(0x226)](() => {
                alert("Đã\x20tạo\x20và\x20sao\x20chép\x20link:\x0a" + _0x9cb9a0);
            })
            [_0x55011b(0x22c)]((_0x256015) => {
                const _0x25f022 = _0x55011b;
                console[_0x25f022(0x229)](_0x25f022(0x2be), _0x256015), alert(_0x25f022(0x1dd) + _0x9cb9a0);
            });
    });
});
const textureLoader = new _0x275f13[_0x207b43(0x238)](),
    numGroups = heartImages[_0x207b43(0x236)],
    maxDensity = 0x3a98,
    minDensity = 0xfa0,
    maxGroupsForScale = 0x6;
let pointsPerGroup;
if (numGroups <= 0x1) pointsPerGroup = maxDensity;
else {
    if (numGroups >= maxGroupsForScale) pointsPerGroup = minDensity;
    else {
        const t = (numGroups - 0x1) / (maxGroupsForScale - 0x1);
        pointsPerGroup = Math[_0x207b43(0x2a7)](maxDensity * (0x1 - t) + minDensity * t);
    }
}
pointsPerGroup * numGroups > galaxyParameters[_0x207b43(0x1f6)] && (pointsPerGroup = Math[_0x207b43(0x2a7)](galaxyParameters[_0x207b43(0x1f6)] / numGroups));
console[_0x207b43(0x219)]("Số\x20lượng\x20ảnh:\x20" + numGroups + _0x207b43(0x1e4) + pointsPerGroup);
const positions = new Float32Array(galaxyParameters["count"] * 0x3),
    colors = new Float32Array(galaxyParameters[_0x207b43(0x1f6)] * 0x3);
let pointIdx = 0x0;
for (let i = 0x0; i < galaxyParameters["count"]; i++) {
    const radius = Math[_0x207b43(0x2ab)](Math["random"](), galaxyParameters["randomnessPower"]) * galaxyParameters[_0x207b43(0x1b2)],
        branchAngle = ((i % galaxyParameters["arms"]) / galaxyParameters[_0x207b43(0x29c)]) * Math["PI"] * 0x2,
        spinAngle = radius * galaxyParameters["spin"],
        randomX = (Math[_0x207b43(0x2aa)]() - 0.5) * galaxyParameters["randomness"] * radius,
        randomY = (Math[_0x207b43(0x2aa)]() - 0.5) * galaxyParameters[_0x207b43(0x1d6)] * radius * 0.5,
        randomZ = (Math[_0x207b43(0x2aa)]() - 0.5) * galaxyParameters[_0x207b43(0x1d6)] * radius,
        totalAngle = branchAngle + spinAngle;
    if (radius < 0x1e && Math[_0x207b43(0x2aa)]() < 0.7) continue;
    const i3 = pointIdx * 0x3;
    (positions[i3] = Math[_0x207b43(0x261)](totalAngle) * radius + randomX), (positions[i3 + 0x1] = randomY), (positions[i3 + 0x2] = Math[_0x207b43(0x1e1)](totalAngle) * radius + randomZ);
    const mixedColor = new _0x275f13[_0x207b43(0x276)](0xff66ff);
    mixedColor[_0x207b43(0x277)](new _0x275f13[_0x207b43(0x276)](0x66ffff), radius / galaxyParameters[_0x207b43(0x1b2)]),
        mixedColor[_0x207b43(0x1f4)](0.7 + 0.3 * Math[_0x207b43(0x2aa)]()),
        (colors[i3] = mixedColor["r"]),
        (colors[i3 + 0x1] = mixedColor["g"]),
        (colors[i3 + 0x2] = mixedColor["b"]),
        pointIdx++;
}
const galaxyGeometry = new _0x275f13["BufferGeometry"]();
galaxyGeometry[_0x207b43(0x1bd)](_0x207b43(0x1c8), new _0x275f13["BufferAttribute"](positions[_0x207b43(0x1b4)](0x0, pointIdx * 0x3), 0x3)),
    galaxyGeometry[_0x207b43(0x1bd)](_0x207b43(0x1c5), new _0x275f13[_0x207b43(0x23b)](colors[_0x207b43(0x1b4)](0x0, pointIdx * 0x3), 0x3));
const galaxyMaterial = new _0x275f13[_0x207b43(0x1cc)]({
        uniforms: { uTime: { value: 0x0 }, uSize: { value: 0x32 * renderer[_0x207b43(0x20c)]() }, uRippleTime: { value: -0x1 }, uRippleSpeed: { value: 0x28 }, uRippleWidth: { value: 0x14 } },
        vertexShader: _0x207b43(0x1c7),
        fragmentShader: _0x207b43(0x2ac),
        blending: _0x275f13[_0x207b43(0x244)],
        depthWrite: ![],
        transparent: !![],
        vertexColors: !![],
    }),
    galaxy = new _0x275f13[_0x207b43(0x1c9)](galaxyGeometry, galaxyMaterial);
scene[_0x207b43(0x2a0)](galaxy);
function createNeonTexture(_0x3b740a, _0x1718cd) {
    const _0x19619a = _0x207b43,
        _0x2bbbbf = window["devicePixelRatio"] || 0x1,
        _0x408cbe = document["createElement"]("canvas");
    (_0x408cbe[_0x19619a(0x2bf)] = _0x408cbe[_0x19619a(0x27e)] = _0x1718cd * _0x2bbbbf), (_0x408cbe[_0x19619a(0x1d8)][_0x19619a(0x2bf)] = _0x408cbe[_0x19619a(0x1d8)]["height"] = _0x1718cd + "px");
    const _0x4560d7 = _0x408cbe[_0x19619a(0x1c3)]("2d");
    _0x4560d7[_0x19619a(0x29b)](_0x2bbbbf, _0x2bbbbf);
    const _0x1342c3 = _0x3b740a[_0x19619a(0x2bf)] / _0x3b740a[_0x19619a(0x27e)];
    let _0xf6e159, _0x1681fc, _0x1fa424, _0x781b82;
    _0x1342c3 > 0x1
        ? ((_0xf6e159 = _0x1718cd), (_0x1681fc = _0x1718cd / _0x1342c3), (_0x1fa424 = 0x0), (_0x781b82 = (_0x1718cd - _0x1681fc) / 0x2))
        : ((_0x1681fc = _0x1718cd), (_0xf6e159 = _0x1718cd * _0x1342c3), (_0x1fa424 = (_0x1718cd - _0xf6e159) / 0x2), (_0x781b82 = 0x0));
    _0x4560d7["clearRect"](0x0, 0x0, _0x1718cd, _0x1718cd);
    const _0x10195c = _0x1718cd * 0.1;
    _0x4560d7[_0x19619a(0x1c6)](),
        _0x4560d7[_0x19619a(0x21c)](),
        _0x4560d7[_0x19619a(0x1d5)](_0x1fa424 + _0x10195c, _0x781b82),
        _0x4560d7[_0x19619a(0x1bf)](_0x1fa424 + _0xf6e159 - _0x10195c, _0x781b82),
        _0x4560d7["arcTo"](_0x1fa424 + _0xf6e159, _0x781b82, _0x1fa424 + _0xf6e159, _0x781b82 + _0x10195c, _0x10195c),
        _0x4560d7[_0x19619a(0x1bf)](_0x1fa424 + _0xf6e159, _0x781b82 + _0x1681fc - _0x10195c),
        _0x4560d7[_0x19619a(0x297)](_0x1fa424 + _0xf6e159, _0x781b82 + _0x1681fc, _0x1fa424 + _0xf6e159 - _0x10195c, _0x781b82 + _0x1681fc, _0x10195c),
        _0x4560d7[_0x19619a(0x1bf)](_0x1fa424 + _0x10195c, _0x781b82 + _0x1681fc),
        _0x4560d7[_0x19619a(0x297)](_0x1fa424, _0x781b82 + _0x1681fc, _0x1fa424, _0x781b82 + _0x1681fc - _0x10195c, _0x10195c),
        _0x4560d7[_0x19619a(0x1bf)](_0x1fa424, _0x781b82 + _0x10195c),
        _0x4560d7["arcTo"](_0x1fa424, _0x781b82, _0x1fa424 + _0x10195c, _0x781b82, _0x10195c),
        _0x4560d7[_0x19619a(0x26c)](),
        _0x4560d7[_0x19619a(0x267)](),
        _0x4560d7["drawImage"](_0x3b740a, _0x1fa424, _0x781b82, _0xf6e159, _0x1681fc),
        _0x4560d7[_0x19619a(0x2af)]();
    const _0x1d24af = new _0x275f13[_0x19619a(0x1b0)](_0x408cbe);
    return (
        (_0x1d24af["minFilter"] = _0x275f13[_0x19619a(0x1c4)]),
        (_0x1d24af["magFilter"] = _0x275f13[_0x19619a(0x1c4)]),
        (_0x1d24af[_0x19619a(0x1d3)] = renderer[_0x19619a(0x22b)][_0x19619a(0x228)]()),
        (_0x1d24af[_0x19619a(0x1e3)] = _0x275f13[_0x19619a(0x1c0)]),
        _0x1d24af
    );
}
for (let group = 0x0; group < numGroups; group++) {
    const groupPositions = new Float32Array(pointsPerGroup * 0x3),
        groupColorsNear = new Float32Array(pointsPerGroup * 0x3),
        groupColorsFar = new Float32Array(pointsPerGroup * 0x3);
    let validPointCount = 0x0;
    for (let i = 0x0; i < pointsPerGroup; i++) {
        const idx = validPointCount * 0x3,
            globalIdx = group * pointsPerGroup + i,
            radius = Math[_0x207b43(0x2ab)](Math[_0x207b43(0x2aa)](), galaxyParameters["randomnessPower"]) * galaxyParameters["radius"];
        if (radius < 0x1e) continue;
        const branchAngle = ((globalIdx % galaxyParameters[_0x207b43(0x29c)]) / galaxyParameters[_0x207b43(0x29c)]) * Math["PI"] * 0x2,
            spinAngle = radius * galaxyParameters[_0x207b43(0x1ed)],
            randomX = (Math[_0x207b43(0x2aa)]() - 0.5) * galaxyParameters[_0x207b43(0x1d6)] * radius,
            randomY = (Math[_0x207b43(0x2aa)]() - 0.5) * galaxyParameters[_0x207b43(0x1d6)] * radius * 0.5,
            randomZ = (Math["random"]() - 0.5) * galaxyParameters[_0x207b43(0x1d6)] * radius,
            totalAngle = branchAngle + spinAngle;
        (groupPositions[idx] = Math[_0x207b43(0x261)](totalAngle) * radius + randomX), (groupPositions[idx + 0x1] = randomY), (groupPositions[idx + 0x2] = Math[_0x207b43(0x1e1)](totalAngle) * radius + randomZ);
        const colorNear = new _0x275f13[_0x207b43(0x276)](0xffffff);
        (groupColorsNear[idx] = colorNear["r"]), (groupColorsNear[idx + 0x1] = colorNear["g"]), (groupColorsNear[idx + 0x2] = colorNear["b"]);
        const colorFar = galaxyParameters["insideColor"]["clone"]();
        colorFar[_0x207b43(0x277)](galaxyParameters[_0x207b43(0x287)], radius / galaxyParameters[_0x207b43(0x1b2)]),
            colorFar[_0x207b43(0x1f4)](0.7 + 0.3 * Math[_0x207b43(0x2aa)]()),
            (groupColorsFar[idx] = colorFar["r"]),
            (groupColorsFar[idx + 0x1] = colorFar["g"]),
            (groupColorsFar[idx + 0x2] = colorFar["b"]),
            validPointCount++;
    }
    if (validPointCount === 0x0) continue;
    const groupGeometryNear = new _0x275f13[_0x207b43(0x216)]();
    groupGeometryNear["setAttribute"](_0x207b43(0x1c8), new _0x275f13[_0x207b43(0x23b)](groupPositions[_0x207b43(0x1b4)](0x0, validPointCount * 0x3), 0x3)),
        groupGeometryNear["setAttribute"](_0x207b43(0x1c5), new _0x275f13["BufferAttribute"](groupColorsNear[_0x207b43(0x1b4)](0x0, validPointCount * 0x3), 0x3));
    const groupGeometryFar = new _0x275f13["BufferGeometry"]();
    groupGeometryFar[_0x207b43(0x1bd)](_0x207b43(0x1c8), new _0x275f13[_0x207b43(0x23b)](groupPositions["slice"](0x0, validPointCount * 0x3), 0x3)),
        groupGeometryFar[_0x207b43(0x1bd)]("color", new _0x275f13[_0x207b43(0x23b)](groupColorsFar[_0x207b43(0x1b4)](0x0, validPointCount * 0x3), 0x3));
    const posAttr = groupGeometryFar[_0x207b43(0x250)](_0x207b43(0x1c8));
    let cx = 0x0,
        cy = 0x0,
        cz = 0x0;
    for (let i = 0x0; i < posAttr[_0x207b43(0x1f6)]; i++) {
        (cx += posAttr["getX"](i)), (cy += posAttr[_0x207b43(0x27b)](i)), (cz += posAttr[_0x207b43(0x1e0)](i));
    }
    (cx /= posAttr[_0x207b43(0x1f6)]), (cy /= posAttr[_0x207b43(0x1f6)]), (cz /= posAttr[_0x207b43(0x1f6)]), groupGeometryNear[_0x207b43(0x2ae)](-cx, -cy, -cz), groupGeometryFar[_0x207b43(0x2ae)](-cx, -cy, -cz);
    const img = new window[_0x207b43(0x1e5)]();
    (img[_0x207b43(0x1c2)] = "Anonymous"),
        (img[_0x207b43(0x2bd)] = heartImages[group]),
        (img[_0x207b43(0x1be)] = () => {
            const _0x4cae57 = _0x207b43,
                _0x40c84a = createNeonTexture(img, 0x100),
                _0x5cff9c = new _0x275f13[_0x4cae57(0x1f1)]({ size: 1.8, map: _0x40c84a, transparent: ![], alphaTest: 0.2, depthWrite: !![], depthTest: !![], blending: _0x275f13["NormalBlending"], vertexColors: !![] }),
                _0x5e01cf = new _0x275f13["PointsMaterial"]({ size: 1.8, map: _0x40c84a, transparent: !![], alphaTest: 0.2, depthWrite: ![], blending: _0x275f13[_0x4cae57(0x244)], vertexColors: !![] }),
                _0x21c257 = new _0x275f13["Points"](groupGeometryFar, _0x5e01cf);
            _0x21c257[_0x4cae57(0x1c8)]["set"](cx, cy, cz),
                (_0x21c257[_0x4cae57(0x271)][_0x4cae57(0x253)] = _0x5cff9c),
                (_0x21c257[_0x4cae57(0x271)][_0x4cae57(0x26e)] = groupGeometryNear),
                (_0x21c257["userData"][_0x4cae57(0x27f)] = _0x5e01cf),
                (_0x21c257["userData"][_0x4cae57(0x1f8)] = groupGeometryFar),
                scene[_0x4cae57(0x2a0)](_0x21c257);
        });
}
const ambientLight = new _0x275f13["AmbientLight"](0xffffff, 0.2);
scene["add"](ambientLight);
const starCount = 0x4e20,
    starGeometry = new _0x275f13[_0x207b43(0x216)](),
    starPositions = new Float32Array(starCount * 0x3);
for (let i = 0x0; i < starCount; i++) {
    (starPositions[i * 0x3] = (Math["random"]() - 0.5) * 0x384), (starPositions[i * 0x3 + 0x1] = (Math[_0x207b43(0x2aa)]() - 0.5) * 0x384), (starPositions[i * 0x3 + 0x2] = (Math[_0x207b43(0x2aa)]() - 0.5) * 0x384);
}
starGeometry[_0x207b43(0x1bd)](_0x207b43(0x1c8), new _0x275f13[_0x207b43(0x23b)](starPositions, 0x3));
const starMaterial = new _0x275f13[_0x207b43(0x1f1)]({ color: 0xffffff, size: 0.7, transparent: !![], opacity: 0.7, depthWrite: ![] }),
    starField = new _0x275f13[_0x207b43(0x1c9)](starGeometry, starMaterial);
(starField[_0x207b43(0x272)] = _0x207b43(0x290)), (starField["renderOrder"] = 0x3e7), scene[_0x207b43(0x2a0)](starField);
function _0x2d88() {
    const _0x4b32c4 = [
        "clip",
        "clone",
        "intersectObject",
        "pitchAmplitude",
        "SphereGeometry",
        "closePath",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec2\x20vUv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vUv\x20=\x20uv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_Position\x20=\x20projectionMatrix\x20*\x20modelViewMatrix\x20*\x20vec4(position,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20",
        "geometryNear",
        "render",
        "rgba(255,\x20200,\x20220,\x200.8)",
        "userData",
        "name",
        "geometry",
        "points",
        "tiltAmplitude",
        "Color",
        "lerp",
        "shadowBlur",
        "data",
        "lookAt",
        "getY",
        "ontouchstart",
        "RingGeometry",
        "height",
        "materialFar",
        "zoomSpeed",
        "images",
        ",\x2080%,\x2050%,\x200.6)",
        "3430256tgmaCl",
        "createElement",
        "origin",
        "18077697NTxxvu",
        "outsideColor",
        "none",
        "remove",
        "domElement",
        "trim",
        "generate-link",
        "maxDistance",
        "WebGLRenderer",
        "DoubleSide",
        "starfield",
        "autoRotate",
        "updateProjectionMatrix",
        "setFromPoints",
        "ringTexts",
        "Vector2",
        "now",
        "arcTo",
        "getWorldDirection",
        "--vh",
        "push",
        "scale",
        "arms",
        "filter",
        "clientX",
        "charCodeAt",
        "add",
        "514453HpwJRq",
        "value",
        "main-planet",
        "font",
        "measureText",
        "ringRadius",
        "floor",
        "dataLove2Loveloom",
        "textRings",
        "random",
        "pow",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec3\x20vColor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Làm\x20cho\x20các\x20hạt\x20có\x20hình\x20tròn\x20thay\x20vì\x20hình\x20vuông\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20dist\x20=\x20length(gl_PointCoord\x20-\x20vec2(0.5));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20(dist\x20>\x200.5)\x20discard;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20vec4(vColor,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20",
        "rotation",
        "translate",
        "restore",
        "MeshBasicMaterial",
        "container",
        "portrait-mode",
        "innerHeight",
        "time",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec3\x20vNormal;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20float\x20time;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20intensity\x20=\x20pow(0.7\x20-\x20dot(vNormal,\x20vec3(0.0,\x200.0,\x201.0)),\x202.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20vec4(1.0,\x201.0,\x201.0,\x20intensity\x20*\x20(0.8\x20+\x20sin(time\x20*\x205.0)\x20*\x200.2));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
        "px\x20Arial,\x20sans-serif",
        "innerWidth",
        "#f06292",
        "setProperty",
        "writeText",
        "44820SOMCUs",
        "Shape",
        "src",
        "Không\x20thể\x20sao\x20chép:",
        "width",
        "ringMesh",
        "fillRect",
        "splice",
        "CanvasTexture",
        "click",
        "radius",
        "initialPosition",
        "slice",
        "CubicBezierCurve3",
        "children",
        "display",
        "map",
        "transparent",
        "#fff",
        "addEventListener",
        "BackSide",
        "setAttribute",
        "onload",
        "lineTo",
        "SRGBColorSpace",
        "main-glow",
        "crossOrigin",
        "getContext",
        "LinearFilter",
        "color",
        "save",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20float\x20uSize;\x0a\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20float\x20uTime;\x0a\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20float\x20uRippleTime;\x0a\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20float\x20uRippleSpeed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20float\x20uRippleWidth;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec3\x20vColor;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Lấy\x20màu\x20gốc\x20từ\x20geometry\x20(giống\x20hệt\x20vertexColors:\x20true)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vColor\x20=\x20color;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20modelPosition\x20=\x20modelMatrix\x20*\x20vec4(position,\x201.0);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20----\x20LOGIC\x20HIỆU\x20ỨNG\x20GỢN\x20SÓNG\x20----\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20(uRippleTime\x20>\x200.0)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20rippleRadius\x20=\x20(uTime\x20-\x20uRippleTime)\x20*\x20uRippleSpeed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20particleDist\x20=\x20length(modelPosition.xyz);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20strength\x20=\x201.0\x20-\x20smoothstep(rippleRadius\x20-\x20uRippleWidth,\x20rippleRadius\x20+\x20uRippleWidth,\x20particleDist);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20strength\x20*=\x20smoothstep(rippleRadius\x20+\x20uRippleWidth,\x20rippleRadius\x20-\x20uRippleWidth,\x20particleDist);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20(strength\x20>\x200.0)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vColor\x20+=\x20vec3(strength\x20*\x202.0);\x20//\x20Làm\x20màu\x20sáng\x20hơn\x20khi\x20sóng\x20đi\x20qua\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20viewPosition\x20=\x20viewMatrix\x20*\x20modelPosition;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_Position\x20=\x20projectionMatrix\x20*\x20viewPosition;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Dòng\x20này\x20làm\x20cho\x20các\x20hạt\x20nhỏ\x20hơn\x20khi\x20ở\x20xa,\x20mô\x20phỏng\x20hành\x20vi\x20của\x20PointsMaterial\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_PointSize\x20=\x20uSize\x20/\x20-viewPosition.z;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20",
        "position",
        "Points",
        "requestFullscreen",
        "#ffffff",
        "ShaderMaterial",
        "fillText",
        "cjk",
        "#f8bbd0",
        "rollPhase",
        "162RSqNBZ",
        "pitchPhase",
        "anisotropy",
        "visible",
        "moveTo",
        "randomness",
        "forEach",
        "style",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec3\x20vNormal;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vNormal\x20=\x20normalize(normalMatrix\x20*\x20normal);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_Position\x20=\x20projectionMatrix\x20*\x20modelViewMatrix\x20*\x20vec4(position,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
        "join",
        "2628927zFXnIL",
        "initialAngle",
        "Đã\x20tạo\x20link\x20nhưng\x20không\x20thể\x20sao\x20chép.\x20Bạn\x20có\x20thể\x20copy\x20thủ\x20công:\x0a",
        "type",
        "trail",
        "getZ",
        "sin",
        "\x20\x20\x20",
        "colorSpace",
        ",\x20Điểm\x20mỗi\x20ảnh:\x20",
        "Image",
        "rollAmplitude",
        "curve",
        "classList",
        "alphabetic",
        "intersectObjects",
        "DOMContentLoaded",
        "traverse",
        "spin",
        "Raycaster",
        "#3fd8c7",
        "head",
        "PointsMaterial",
        "9KqYNxh",
        "opacity",
        "multiplyScalar",
        "isPoints",
        "count",
        "PerspectiveCamera",
        "geometryFar",
        "isGroup",
        "copy",
        "parent",
        "setPixelRatio",
        "getX",
        "getBoundingClientRect",
        "object",
        "Scene",
        "rotateSpeed",
        "trailPoints",
        "max",
        "fontScale",
        "ceil",
        "speed",
        "SpriteMaterial",
        "spacingScale",
        "life",
        "vertexShader",
        "CylinderGeometry",
        "getPixelRatio",
        "documentElement",
        "shadowColor",
        "left",
        "uniforms",
        "normalize",
        "Vector3",
        "2oenmsM",
        "Chạm\x20Vào\x20Tinh\x20Cầu",
        "setFromCamera",
        "BufferGeometry",
        "fillStyle",
        "repeat",
        "log",
        "#f48fb1",
        "bold\x20",
        "beginPath",
        "textBaseline",
        "webkitRequestFullscreen",
        "search",
        "Group",
        "setDrawRange",
        "latin",
        "set",
        "getElementById",
        "enabled",
        "then",
        "maxLife",
        "getMaxAnisotropy",
        "error",
        "split",
        "capabilities",
        "catch",
        "#ffb3de",
        "FogExp2",
        "trailLength",
        "other",
        "Line",
        "241340FkMZFp",
        "rollSpeed",
        "strokeText",
        "touchmove",
        "length",
        "#b2ff59",
        "TextureLoader",
        "RepeatWrapping",
        "lineWidth",
        "BufferAttribute",
        "strokeStyle",
        "ShapeGeometry",
        "body",
        "setSize",
        "orientationchange",
        "hsla(",
        "progress",
        "Mesh",
        "AdditiveBlending",
        "aspect",
        "isTextRing",
        "get",
        "clientY",
        "pitchSpeed",
        "material",
        "middle",
        "pathname",
        "bezierCurveTo",
        "rgba(220,\x20180,\x20255,\x200.5)",
        "addColorStop",
        "getAttribute",
        "fog",
        "tiltSpeed",
        "materialNear",
        "111fRZlMO",
        "?images=",
        "#e0b3ff",
        "resize",
        "tiltPhase",
        "#a259f7",
        "angleOffset",
        "blur(2px)",
        "4851370kIXBAO",
        "canvas",
        "update",
        "location",
        "white",
        "cos",
        "fragmentShader",
        "stroke",
        "enablePan",
        "target",
        "createRadialGradient",
    ];
    _0x2d88 = function () {
        return _0x4b32c4;
    };
    return _0x2d88();
}
let shootingStars = [];
function createShootingStar() {
    const _0x5f12df = _0x207b43,
        _0x2a509b = 0x64,
        _0x242d95 = new _0x275f13[_0x5f12df(0x26b)](0x2, 0x20, 0x20),
        _0x638fc = new _0x275f13[_0x5f12df(0x2b0)]({ color: 0xffffff, transparent: !![], opacity: 0x0, blending: _0x275f13[_0x5f12df(0x244)] }),
        _0x3455d8 = new _0x275f13[_0x5f12df(0x243)](_0x242d95, _0x638fc),
        _0x21295b = new _0x275f13["SphereGeometry"](0x3, 0x20, 0x20),
        _0x388f59 = new _0x275f13["ShaderMaterial"]({
            uniforms: { time: { value: 0x0 } },
            vertexShader: _0x5f12df(0x1d9),
            fragmentShader: _0x5f12df(0x2b5),
            transparent: !![],
            blending: _0x275f13[_0x5f12df(0x244)],
            side: _0x275f13[_0x5f12df(0x1bc)],
        }),
        _0x2014cc = new _0x275f13[_0x5f12df(0x243)](_0x21295b, _0x388f59);
    _0x3455d8[_0x5f12df(0x2a0)](_0x2014cc);
    const _0x2223a6 = new _0x275f13[_0x5f12df(0x26b)](planetRadius * 1.05, 0x30, 0x30),
        _0x1bebd7 = new _0x275f13[_0x5f12df(0x1cc)]({
            uniforms: { glowColor: { value: new _0x275f13["Color"](0xe0b3ff) } },
            vertexShader:
                "\x0a\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec3\x20vNormal;\x0a\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vNormal\x20=\x20normalize(normalMatrix\x20*\x20normal);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_Position\x20=\x20projectionMatrix\x20*\x20modelViewMatrix\x20*\x20vec4(position,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20",
            fragmentShader:
                "\x0a\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec3\x20vNormal;\x0a\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20vec3\x20glowColor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20intensity\x20=\x20pow(0.7\x20-\x20dot(vNormal,\x20vec3(0.0,\x200.0,\x201.0)),\x202.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20vec4(glowColor,\x201.0)\x20*\x20intensity;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20",
            side: _0x275f13[_0x5f12df(0x1bc)],
            blending: _0x275f13[_0x5f12df(0x244)],
            transparent: !![],
        }),
        _0x217dce = new _0x275f13["Mesh"](_0x2223a6, _0x1bebd7);
    planet[_0x5f12df(0x2a0)](_0x217dce);
    const _0x3875f5 = createRandomCurve(),
        _0x33cdfa = [];
    for (let _0x2e3ab2 = 0x0; _0x2e3ab2 < _0x2a509b; _0x2e3ab2++) {
        const _0x3f6bc3 = _0x2e3ab2 / (_0x2a509b - 0x1);
        _0x33cdfa["push"](_0x3875f5["getPoint"](_0x3f6bc3));
    }
    const _0x2d31c0 = new _0x275f13[_0x5f12df(0x216)]()[_0x5f12df(0x293)](_0x33cdfa),
        _0x48001c = new _0x275f13["LineBasicMaterial"]({ color: 0x99eaff, transparent: !![], opacity: 0.7, linewidth: 0x2 }),
        _0x3f9d2c = new _0x275f13[_0x5f12df(0x231)](_0x2d31c0, _0x48001c),
        _0x5b9de2 = new _0x275f13[_0x5f12df(0x220)]();
    _0x5b9de2["add"](_0x3455d8),
        _0x5b9de2[_0x5f12df(0x2a0)](_0x3f9d2c),
        (_0x5b9de2[_0x5f12df(0x271)] = { curve: _0x3875f5, progress: 0x0, speed: 0.001 + Math[_0x5f12df(0x2aa)]() * 0.001, life: 0x0, maxLife: 0x12c, head: _0x3455d8, trail: _0x3f9d2c, trailLength: _0x2a509b, trailPoints: _0x33cdfa }),
        scene[_0x5f12df(0x2a0)](_0x5b9de2),
        shootingStars[_0x5f12df(0x29a)](_0x5b9de2);
}
function createRandomCurve() {
    const _0x550279 = _0x207b43,
        _0x49dd1a = [],
        _0x66bac8 = new _0x275f13[_0x550279(0x212)](-0xc8 + Math[_0x550279(0x2aa)]() * 0x64, -0x64 + Math[_0x550279(0x2aa)]() * 0xc8, -0x64 + Math[_0x550279(0x2aa)]() * 0xc8),
        _0x3977c3 = new _0x275f13[_0x550279(0x212)](0x258 + Math[_0x550279(0x2aa)]() * 0xc8, _0x66bac8["y"] + (-0x64 + Math[_0x550279(0x2aa)]() * 0xc8), _0x66bac8["z"] + (-0x64 + Math["random"]() * 0xc8)),
        _0x5b831b = new _0x275f13[_0x550279(0x212)](_0x66bac8["x"] + 0xc8 + Math[_0x550279(0x2aa)]() * 0x64, _0x66bac8["y"] + (-0x32 + Math[_0x550279(0x2aa)]() * 0x64), _0x66bac8["z"] + (-0x32 + Math[_0x550279(0x2aa)]() * 0x64)),
        _0x247db0 = new _0x275f13[_0x550279(0x212)](_0x3977c3["x"] - 0xc8 + Math[_0x550279(0x2aa)]() * 0x64, _0x3977c3["y"] + (-0x32 + Math[_0x550279(0x2aa)]() * 0x64), _0x3977c3["z"] + (-0x32 + Math[_0x550279(0x2aa)]() * 0x64));
    return _0x49dd1a[_0x550279(0x29a)](_0x66bac8, _0x5b831b, _0x247db0, _0x3977c3), new _0x275f13[_0x550279(0x1b5)](_0x66bac8, _0x5b831b, _0x247db0, _0x3977c3);
}
function createPlanetTexture(_0x5e2c16 = 0x200) {
    const _0x2c6189 = _0x207b43,
        _0x587670 = document[_0x2c6189(0x284)](_0x2c6189(0x25d));
    _0x587670[_0x2c6189(0x2bf)] = _0x587670["height"] = _0x5e2c16;
    const _0xd01be7 = _0x587670[_0x2c6189(0x1c3)]("2d"),
        _0x25c9a2 = _0xd01be7[_0x2c6189(0x266)](_0x5e2c16 / 0x2, _0x5e2c16 / 0x2, _0x5e2c16 / 0x8, _0x5e2c16 / 0x2, _0x5e2c16 / 0x2, _0x5e2c16 / 0x2);
    _0x25c9a2[_0x2c6189(0x24f)](0x0, _0x2c6189(0x1cf)),
        _0x25c9a2[_0x2c6189(0x24f)](0.12, _0x2c6189(0x21a)),
        _0x25c9a2["addColorStop"](0.22, _0x2c6189(0x2b8)),
        _0x25c9a2[_0x2c6189(0x24f)](0.35, _0x2c6189(0x1cb)),
        _0x25c9a2[_0x2c6189(0x24f)](0.5, "#e1aaff"),
        _0x25c9a2["addColorStop"](0.62, _0x2c6189(0x259)),
        _0x25c9a2[_0x2c6189(0x24f)](0.75, _0x2c6189(0x237)),
        _0x25c9a2["addColorStop"](0x1, _0x2c6189(0x1ef)),
        (_0xd01be7[_0x2c6189(0x217)] = _0x25c9a2),
        _0xd01be7["fillRect"](0x0, 0x0, _0x5e2c16, _0x5e2c16);
    const _0x52bb06 = [_0x2c6189(0x1cf), _0x2c6189(0x1cf), _0x2c6189(0x21a), _0x2c6189(0x21a), _0x2c6189(0x2b8), _0x2c6189(0x2b8), _0x2c6189(0x1cb), "#e1aaff", _0x2c6189(0x259), _0x2c6189(0x237)];
    for (let _0x3ea16b = 0x0; _0x3ea16b < 0x28; _0x3ea16b++) {
        const _0x510f64 = Math[_0x2c6189(0x2aa)]() * _0x5e2c16,
            _0x1d4a61 = Math["random"]() * _0x5e2c16,
            _0x53a8d8 = 0x1e + Math[_0x2c6189(0x2aa)]() * 0x78,
            _0x128e7a = _0x52bb06[Math[_0x2c6189(0x2a7)](Math[_0x2c6189(0x2aa)]() * _0x52bb06[_0x2c6189(0x236)])],
            _0x421de0 = _0xd01be7[_0x2c6189(0x266)](_0x510f64, _0x1d4a61, 0x0, _0x510f64, _0x1d4a61, _0x53a8d8);
        _0x421de0[_0x2c6189(0x24f)](0x0, _0x128e7a + "cc"), _0x421de0[_0x2c6189(0x24f)](0x1, _0x128e7a + "00"), (_0xd01be7[_0x2c6189(0x217)] = _0x421de0), _0xd01be7["fillRect"](0x0, 0x0, _0x5e2c16, _0x5e2c16);
    }
    for (let _0x47e4d0 = 0x0; _0x47e4d0 < 0x8; _0x47e4d0++) {
        _0xd01be7[_0x2c6189(0x21c)](),
            _0xd01be7["moveTo"](Math[_0x2c6189(0x2aa)]() * _0x5e2c16, Math[_0x2c6189(0x2aa)]() * _0x5e2c16),
            _0xd01be7[_0x2c6189(0x24d)](
                Math["random"]() * _0x5e2c16,
                Math["random"]() * _0x5e2c16,
                Math[_0x2c6189(0x2aa)]() * _0x5e2c16,
                Math[_0x2c6189(0x2aa)]() * _0x5e2c16,
                Math[_0x2c6189(0x2aa)]() * _0x5e2c16,
                Math[_0x2c6189(0x2aa)]() * _0x5e2c16
            ),
            (_0xd01be7["strokeStyle"] = "rgba(180,\x20120,\x20200,\x20" + (0.12 + Math[_0x2c6189(0x2aa)]() * 0.18) + ")"),
            (_0xd01be7["lineWidth"] = 0x8 + Math[_0x2c6189(0x2aa)]() * 0x12),
            _0xd01be7[_0x2c6189(0x263)]();
    }
    return (
        _0xd01be7[_0x2c6189(0x29d)] !== undefined && ((_0xd01be7[_0x2c6189(0x29d)] = _0x2c6189(0x25b)), _0xd01be7["drawImage"](_0x587670, 0x0, 0x0), (_0xd01be7[_0x2c6189(0x29d)] = _0x2c6189(0x288))),
        new _0x275f13[_0x2c6189(0x1b0)](_0x587670)
    );
}
const stormShader = {
        uniforms: { time: { value: 0x0 }, baseTexture: { value: null } },
        vertexShader: _0x207b43(0x26d),
        fragmentShader:
            "\x0a\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20float\x20time;\x0a\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20sampler2D\x20baseTexture;\x0a\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec2\x20vUv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20uv\x20=\x20vUv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20angle\x20=\x20length(uv\x20-\x20vec2(0.5))\x20*\x203.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20twist\x20=\x20sin(angle\x20*\x203.0\x20+\x20time)\x20*\x200.1;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uv.x\x20+=\x20twist\x20*\x20sin(time\x20*\x200.5);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uv.y\x20+=\x20twist\x20*\x20cos(time\x20*\x200.5);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20texColor\x20=\x20texture2D(baseTexture,\x20uv);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20noise\x20=\x20sin(uv.x\x20*\x2010.0\x20+\x20time)\x20*\x20sin(uv.y\x20*\x2010.0\x20+\x20time)\x20*\x200.1;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20texColor.rgb\x20+=\x20noise\x20*\x20vec3(0.8,\x200.4,\x200.2);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20texColor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20",
    },
    planetRadius = 0xa,
    planetGeometry = new _0x275f13[_0x207b43(0x26b)](planetRadius, 0x30, 0x30),
    planetTexture = createPlanetTexture(),
    planetMaterial = new _0x275f13[_0x207b43(0x1cc)]({ uniforms: { time: { value: 0x0 }, baseTexture: { value: planetTexture } }, vertexShader: stormShader[_0x207b43(0x20a)], fragmentShader: stormShader[_0x207b43(0x262)] }),
    planet = new _0x275f13[_0x207b43(0x243)](planetGeometry, planetMaterial);
planet[_0x207b43(0x1c8)][_0x207b43(0x223)](0x0, 0x0, 0x0), scene[_0x207b43(0x2a0)](planet);
const ringTexts = ["Love", ...(window[_0x207b43(0x2a8)] && window["dataLove2Loveloom"][_0x207b43(0x279)][_0x207b43(0x294)] ? window[_0x207b43(0x2a8)][_0x207b43(0x279)][_0x207b43(0x294)] : [])];
function createTextRings() {
    const _0x4a7aba = _0x207b43,
        _0x38a806 = ringTexts[_0x4a7aba(0x236)],
        _0x549348 = planetRadius * 1.1,
        _0x2576e8 = 0x5;
    window[_0x4a7aba(0x2a9)] = [];
    for (let _0x51465e = 0x0; _0x51465e < _0x38a806; _0x51465e++) {
        const _0x4c3f93 = ringTexts[_0x51465e % ringTexts[_0x4a7aba(0x236)]] + _0x4a7aba(0x1e2),
            _0x260e22 = _0x549348 + _0x51465e * _0x2576e8;
        function _0x2580ef(_0x2fd8ca) {
            const _0x254e6c = _0x4a7aba,
                _0x4b5de8 = _0x2fd8ca[_0x254e6c(0x29f)](0x0);
            if ((_0x4b5de8 >= 0x4e00 && _0x4b5de8 <= 0x9fff) || (_0x4b5de8 >= 0x3040 && _0x4b5de8 <= 0x309f) || (_0x4b5de8 >= 0x30a0 && _0x4b5de8 <= 0x30ff) || (_0x4b5de8 >= 0xac00 && _0x4b5de8 <= 0xd7af)) return _0x254e6c(0x1ce);
            else {
                if (_0x4b5de8 >= 0x0 && _0x4b5de8 <= 0x7f) return _0x254e6c(0x222);
            }
            return _0x254e6c(0x230);
        }
        let _0x4159be = { cjk: 0x0, latin: 0x0, other: 0x0 };
        for (let _0xf0eefa of _0x4c3f93) {
            _0x4159be[_0x2580ef(_0xf0eefa)]++;
        }
        const _0x220424 = _0x4c3f93[_0x4a7aba(0x236)],
            _0x22e78b = _0x4159be[_0x4a7aba(0x1ce)] / _0x220424;
        let _0x589274 = { fontScale: 0.75, spacingScale: 1.1 };
        if (_0x51465e === 0x0) (_0x589274[_0x4a7aba(0x204)] = 0.55), (_0x589274[_0x4a7aba(0x208)] = 0.9);
        else _0x51465e === 0x1 && ((_0x589274["fontScale"] = 0.65), (_0x589274["spacingScale"] = 0x1));
        _0x22e78b > 0x0 && ((_0x589274[_0x4a7aba(0x204)] *= 0.9), (_0x589274[_0x4a7aba(0x208)] *= 1.1));
        const _0x5aba38 = 0xc8,
            _0x57725c = Math[_0x4a7aba(0x203)](0x78, 0.9 * _0x5aba38),
            _0x421196 = document[_0x4a7aba(0x284)](_0x4a7aba(0x25d)),
            _0xd17691 = _0x421196[_0x4a7aba(0x1c3)]("2d");
        _0xd17691["font"] = _0x4a7aba(0x21b) + _0x57725c + _0x4a7aba(0x2b6);
        let _0xe04d7e = ringTexts[_0x51465e % ringTexts[_0x4a7aba(0x236)]];
        const _0x434334 = "\x20\x20\x20";
        let _0x34b47f = _0xe04d7e + _0x434334,
            _0x314c89 = _0xd17691[_0x4a7aba(0x2a5)](_0x34b47f)["width"],
            _0x23fecd = 0x2 * Math["PI"] * _0x260e22 * 0xb4,
            _0xdf42c3 = Math["ceil"](_0x23fecd / _0x314c89),
            _0x1f5a70 = "";
        for (let _0x1b8731 = 0x0; _0x1b8731 < _0xdf42c3; _0x1b8731++) {
            _0x1f5a70 += _0x34b47f;
        }
        let _0x16f1e7 = _0x314c89 * _0xdf42c3;
        (_0x16f1e7 < 0x1 || !_0x1f5a70) && ((_0x1f5a70 = _0x34b47f), (_0x16f1e7 = _0x314c89));
        const _0x4c0841 = document[_0x4a7aba(0x284)](_0x4a7aba(0x25d));
        (_0x4c0841["width"] = Math[_0x4a7aba(0x205)](Math[_0x4a7aba(0x203)](0x1, _0x16f1e7))), (_0x4c0841["height"] = _0x5aba38);
        const _0x511494 = _0x4c0841["getContext"]("2d");
        _0x511494["clearRect"](0x0, 0x0, _0x4c0841[_0x4a7aba(0x2bf)], _0x5aba38),
            (_0x511494[_0x4a7aba(0x2a4)] = "bold\x20" + _0x57725c + _0x4a7aba(0x2b6)),
            (_0x511494[_0x4a7aba(0x217)] = _0x4a7aba(0x260)),
            (_0x511494["textAlign"] = _0x4a7aba(0x20f)),
            (_0x511494[_0x4a7aba(0x21d)] = _0x4a7aba(0x1e9)),
            (_0x511494[_0x4a7aba(0x20e)] = _0x4a7aba(0x256)),
            (_0x511494[_0x4a7aba(0x278)] = 0x18),
            (_0x511494[_0x4a7aba(0x23a)] = 0x6),
            (_0x511494[_0x4a7aba(0x23c)] = _0x4a7aba(0x1ba)),
            _0x511494[_0x4a7aba(0x234)](_0x1f5a70, 0x0, _0x5aba38 * 0.8),
            (_0x511494["shadowColor"] = _0x4a7aba(0x22d)),
            (_0x511494[_0x4a7aba(0x278)] = 0x10),
            _0x511494[_0x4a7aba(0x1cd)](_0x1f5a70, 0x0, _0x5aba38 * 0.8);
        const _0x44b314 = new _0x275f13[_0x4a7aba(0x1b0)](_0x4c0841);
        (_0x44b314["wrapS"] = _0x275f13[_0x4a7aba(0x239)]), (_0x44b314[_0x4a7aba(0x218)]["x"] = _0x16f1e7 / _0x23fecd), (_0x44b314["needsUpdate"] = !![]);
        const _0x462adf = new _0x275f13[_0x4a7aba(0x20b)](_0x260e22, _0x260e22, 0x1, 0x80, 0x1, !![]),
            _0x4efa79 = new _0x275f13[_0x4a7aba(0x2b0)]({ map: _0x44b314, transparent: !![], side: _0x275f13["DoubleSide"], alphaTest: 0.01 }),
            _0x56b67e = new _0x275f13[_0x4a7aba(0x243)](_0x462adf, _0x4efa79);
        _0x56b67e[_0x4a7aba(0x1c8)][_0x4a7aba(0x223)](0x0, 0x0, 0x0), (_0x56b67e[_0x4a7aba(0x2ad)]["y"] = Math["PI"] / 0x2);
        const _0xd57ff4 = new _0x275f13["Group"]();
        _0xd57ff4[_0x4a7aba(0x2a0)](_0x56b67e),
            (_0xd57ff4["userData"] = {
                ringRadius: _0x260e22,
                angleOffset: 0.15 * Math["PI"] * 0.5,
                speed: 0.008,
                tiltSpeed: 0x0,
                rollSpeed: 0x0,
                pitchSpeed: 0x0,
                tiltAmplitude: Math["PI"] / 0x3,
                rollAmplitude: Math["PI"] / 0x6,
                pitchAmplitude: Math["PI"] / 0x8,
                tiltPhase: Math["PI"] * 0x2,
                rollPhase: Math["PI"] * 0x2,
                pitchPhase: Math["PI"] * 0x2,
                isTextRing: !![],
            });
        const _0x901525 = (_0x51465e / _0x38a806) * (Math["PI"] / 0x1);
        (_0xd57ff4[_0x4a7aba(0x2ad)]["x"] = _0x901525), scene[_0x4a7aba(0x2a0)](_0xd57ff4), window["textRings"][_0x4a7aba(0x29a)](_0xd57ff4);
    }
}
createTextRings();
function updateTextRingsRotation() {
    const _0x423ed5 = _0x207b43;
    if (!window["textRings"] || !camera) return;
    window[_0x423ed5(0x2a9)]["forEach"]((_0x548077, _0x41f326) => {
        const _0x2f4b2e = _0x423ed5;
        _0x548077["children"][_0x2f4b2e(0x1d7)]((_0x4f7dde) => {
            const _0x1002a4 = _0x2f4b2e;
            if (_0x4f7dde[_0x1002a4(0x271)][_0x1002a4(0x1dc)] !== undefined) {
                const _0x5813b4 = _0x4f7dde[_0x1002a4(0x271)][_0x1002a4(0x1dc)] + _0x548077["userData"]["angleOffset"],
                    _0x2ff092 = Math[_0x1002a4(0x261)](_0x5813b4) * _0x4f7dde["userData"][_0x1002a4(0x2a6)],
                    _0x95979 = Math[_0x1002a4(0x1e1)](_0x5813b4) * _0x4f7dde[_0x1002a4(0x271)][_0x1002a4(0x2a6)];
                _0x4f7dde[_0x1002a4(0x1c8)]["set"](_0x2ff092, 0x0, _0x95979);
                const _0x225801 = new _0x275f13[_0x1002a4(0x212)]();
                _0x4f7dde["getWorldPosition"](_0x225801);
                const _0x16b0f9 = new _0x275f13["Vector3"]()["subVectors"](camera[_0x1002a4(0x1c8)], _0x225801)[_0x1002a4(0x211)](),
                    _0x382737 = Math["atan2"](_0x16b0f9["x"], _0x16b0f9["z"]);
                _0x4f7dde[_0x1002a4(0x2ad)]["y"] = _0x382737;
            }
        });
    });
}
function animatePlanetSystem() {
    const _0x502496 = _0x207b43;
    if (window[_0x502496(0x2a9)]) {
        const _0x3f8519 = Date["now"]() * 0.001;
        window[_0x502496(0x2a9)][_0x502496(0x1d7)]((_0x467a7a, _0x116daa) => {
            const _0x424c3f = _0x502496,
                _0x6cbdca = _0x467a7a[_0x424c3f(0x271)];
            _0x6cbdca[_0x424c3f(0x25a)] += _0x6cbdca[_0x424c3f(0x206)];
            const _0x261d2a = Math["sin"](_0x3f8519 * _0x6cbdca[_0x424c3f(0x252)] + _0x6cbdca["tiltPhase"]) * _0x6cbdca[_0x424c3f(0x275)],
                _0x4a1286 = Math[_0x424c3f(0x261)](_0x3f8519 * _0x6cbdca[_0x424c3f(0x233)] + _0x6cbdca[_0x424c3f(0x1d0)]) * _0x6cbdca[_0x424c3f(0x1e6)],
                _0x5042d7 = Math[_0x424c3f(0x1e1)](_0x3f8519 * _0x6cbdca[_0x424c3f(0x249)] + _0x6cbdca[_0x424c3f(0x1d2)]) * _0x6cbdca[_0x424c3f(0x26a)];
            (_0x467a7a["rotation"]["x"] = (_0x116daa / window[_0x424c3f(0x2a9)][_0x424c3f(0x236)]) * (Math["PI"] / 0x1) + _0x261d2a),
                (_0x467a7a[_0x424c3f(0x2ad)]["z"] = _0x4a1286),
                (_0x467a7a[_0x424c3f(0x2ad)]["y"] = _0x6cbdca["angleOffset"] + _0x5042d7);
            const _0xc7124b = Math[_0x424c3f(0x1e1)](_0x3f8519 * (_0x6cbdca[_0x424c3f(0x252)] * 0.7) + _0x6cbdca[_0x424c3f(0x258)]) * 0.3;
            _0x467a7a[_0x424c3f(0x1c8)]["y"] = _0xc7124b;
            const _0x48c735 = (Math[_0x424c3f(0x1e1)](_0x3f8519 * 1.5 + _0x116daa) + 0x1) / 0x2,
                _0x541a3f = _0x467a7a[_0x424c3f(0x1b6)][0x0];
            _0x541a3f && _0x541a3f[_0x424c3f(0x24a)] && (_0x541a3f["material"][_0x424c3f(0x1f3)] = 0.7 + _0x48c735 * 0.3);
        }),
            updateTextRingsRotation();
    }
}
let fadeOpacity = 0.1,
    fadeInProgress = ![],
    hintIcon,
    hintText;
function createHintIcon() {
    const _0x3002e4 = _0x207b43;
    (hintIcon = new _0x275f13[_0x3002e4(0x220)]()), (hintIcon[_0x3002e4(0x272)] = "hint-icon-group"), scene[_0x3002e4(0x2a0)](hintIcon);
    const _0x303567 = new _0x275f13[_0x3002e4(0x220)](),
        _0x308965 = new _0x275f13[_0x3002e4(0x2bc)](),
        _0xdd08a9 = 1.5,
        _0x2ba80c = _0xdd08a9 * 0.5;
    _0x308965["moveTo"](0x0, 0x0),
        _0x308965[_0x3002e4(0x1bf)](-_0x2ba80c * 0.4, -_0xdd08a9 * 0.7),
        _0x308965[_0x3002e4(0x1bf)](-_0x2ba80c * 0.25, -_0xdd08a9 * 0.7),
        _0x308965[_0x3002e4(0x1bf)](-_0x2ba80c * 0.5, -_0xdd08a9),
        _0x308965["lineTo"](_0x2ba80c * 0.5, -_0xdd08a9),
        _0x308965[_0x3002e4(0x1bf)](_0x2ba80c * 0.25, -_0xdd08a9 * 0.7),
        _0x308965[_0x3002e4(0x1bf)](_0x2ba80c * 0.4, -_0xdd08a9 * 0.7),
        _0x308965[_0x3002e4(0x26c)]();
    const _0x7ff399 = new _0x275f13[_0x3002e4(0x23d)](_0x308965),
        _0x33eb1a = new _0x275f13[_0x3002e4(0x2b0)]({ color: 0xffffff, side: _0x275f13[_0x3002e4(0x28f)] }),
        _0x571858 = new _0x275f13[_0x3002e4(0x243)](_0x7ff399, _0x33eb1a),
        _0x2583e7 = new _0x275f13[_0x3002e4(0x23d)](_0x308965),
        _0x5a3ef9 = new _0x275f13["MeshBasicMaterial"]({ color: 0xffffff, side: _0x275f13["DoubleSide"] }),
        _0x44ae6a = new _0x275f13[_0x3002e4(0x243)](_0x2583e7, _0x5a3ef9);
    _0x44ae6a[_0x3002e4(0x29b)][_0x3002e4(0x223)](0.8, 0.8, 0x1),
        (_0x44ae6a[_0x3002e4(0x1c8)]["z"] = 0.01),
        _0x303567[_0x3002e4(0x2a0)](_0x571858, _0x44ae6a),
        (_0x303567["position"]["y"] = _0xdd08a9 / 0x2),
        (_0x303567[_0x3002e4(0x2ad)]["x"] = Math["PI"] / 0x2);
    const _0x3b72f5 = new _0x275f13[_0x3002e4(0x27d)](1.8, 0x2, 0x20),
        _0x3e90f7 = new _0x275f13["MeshBasicMaterial"]({ color: 0xffffff, side: _0x275f13[_0x3002e4(0x28f)], transparent: !![], opacity: 0.6 }),
        _0x613afe = new _0x275f13[_0x3002e4(0x243)](_0x3b72f5, _0x3e90f7);
    (_0x613afe[_0x3002e4(0x2ad)]["x"] = Math["PI"] / 0x2),
        (hintIcon[_0x3002e4(0x271)]["ringMesh"] = _0x613afe),
        hintIcon[_0x3002e4(0x2a0)](_0x303567),
        hintIcon[_0x3002e4(0x2a0)](_0x613afe),
        hintIcon["position"][_0x3002e4(0x223)](1.5, 1.5, 0xf),
        hintIcon["scale"]["set"](0.8, 0.8, 0.8),
        hintIcon[_0x3002e4(0x27a)](planet[_0x3002e4(0x1c8)]),
        (hintIcon[_0x3002e4(0x271)][_0x3002e4(0x1b3)] = hintIcon["position"][_0x3002e4(0x268)]());
}
function animateHintIcon(_0x3d26c5) {
    const _0x1f9c08 = _0x207b43;
    if (!hintIcon) return;
    if (!introStarted) {
        hintIcon[_0x1f9c08(0x1d4)] = !![];
        const _0x204ef5 = 2.5,
            _0x34c12a = 1.5,
            _0x20b1bb = Math[_0x1f9c08(0x1e1)](_0x3d26c5 * _0x204ef5) * _0x34c12a,
            _0x4a7662 = new _0x275f13[_0x1f9c08(0x212)]();
        hintIcon[_0x1f9c08(0x298)](_0x4a7662), hintIcon[_0x1f9c08(0x1c8)][_0x1f9c08(0x1fa)](hintIcon[_0x1f9c08(0x271)][_0x1f9c08(0x1b3)])["addScaledVector"](_0x4a7662, -_0x20b1bb);
        const _0x14872b = hintIcon["userData"][_0x1f9c08(0x2c0)],
            _0x14d722 = 0x1 + Math[_0x1f9c08(0x1e1)](_0x3d26c5 * _0x204ef5) * 0.1;
        _0x14872b[_0x1f9c08(0x29b)][_0x1f9c08(0x223)](_0x14d722, _0x14d722, 0x1),
            (_0x14872b[_0x1f9c08(0x24a)]["opacity"] = 0.5 + Math[_0x1f9c08(0x1e1)](_0x3d26c5 * _0x204ef5) * 0.2),
            hintText &&
                ((hintText[_0x1f9c08(0x1d4)] = !![]),
                (hintText[_0x1f9c08(0x24a)][_0x1f9c08(0x1f3)] = 0.7 + Math[_0x1f9c08(0x1e1)](_0x3d26c5 * 0x3) * 0.3),
                (hintText["position"]["y"] = 0xf + Math["sin"](_0x3d26c5 * 0x2) * 0.5),
                hintText[_0x1f9c08(0x27a)](camera[_0x1f9c08(0x1c8)]));
    } else {
        if (hintIcon) hintIcon[_0x1f9c08(0x1d4)] = ![];
        if (hintText) hintText["visible"] = ![];
    }
}
function animate() {
    const _0x4f4f0e = _0x207b43;
    requestAnimationFrame(animate);
    const _0x34a2bc = performance[_0x4f4f0e(0x296)]() * 0.001;
    animateHintIcon(_0x34a2bc), controls[_0x4f4f0e(0x25e)](), (planet["material"]["uniforms"][_0x4f4f0e(0x2b4)][_0x4f4f0e(0x2a2)] = _0x34a2bc * 0.5);
    if (fadeInProgress && fadeOpacity < 0x1) {
        fadeOpacity += 0.025;
        if (fadeOpacity > 0x1) fadeOpacity = 0x1;
    }
    !introStarted
        ? ((fadeOpacity = 0.1),
          scene[_0x4f4f0e(0x1ec)]((_0xce253c) => {
              const _0x2e847f = _0x4f4f0e;
              if (_0xce253c[_0x2e847f(0x272)] === _0x2e847f(0x290)) {
                  _0xce253c[_0x2e847f(0x274)] && _0xce253c["material"]["opacity"] !== undefined && ((_0xce253c[_0x2e847f(0x24a)][_0x2e847f(0x1b9)] = ![]), (_0xce253c["material"][_0x2e847f(0x1f3)] = 0x1));
                  return;
              }
              if (_0xce253c[_0x2e847f(0x271)][_0x2e847f(0x246)] || (_0xce253c[_0x2e847f(0x1fb)] && _0xce253c[_0x2e847f(0x1fb)][_0x2e847f(0x271)] && _0xce253c[_0x2e847f(0x1fb)][_0x2e847f(0x271)]["isTextRing"]))
                  _0xce253c[_0x2e847f(0x24a)] && _0xce253c[_0x2e847f(0x24a)][_0x2e847f(0x1f3)] !== undefined && ((_0xce253c[_0x2e847f(0x24a)][_0x2e847f(0x1b9)] = ![]), (_0xce253c[_0x2e847f(0x24a)][_0x2e847f(0x1f3)] = 0x1)),
                      _0xce253c[_0x2e847f(0x24a)] && _0xce253c[_0x2e847f(0x24a)][_0x2e847f(0x1c5)] && _0xce253c[_0x2e847f(0x24a)][_0x2e847f(0x1c5)][_0x2e847f(0x223)](0xffffff);
              else
                  _0xce253c !== planet &&
                      _0xce253c !== centralGlow &&
                      _0xce253c !== hintIcon &&
                      _0xce253c[_0x2e847f(0x1de)] !== _0x2e847f(0x200) &&
                      !_0xce253c[_0x2e847f(0x1fb)][_0x2e847f(0x1f9)] &&
                      _0xce253c[_0x2e847f(0x24a)] &&
                      _0xce253c["material"][_0x2e847f(0x1f3)] !== undefined &&
                      ((_0xce253c["material"]["transparent"] = !![]), (_0xce253c[_0x2e847f(0x24a)]["opacity"] = 0.1));
          }),
          (planet[_0x4f4f0e(0x1d4)] = !![]),
          (centralGlow[_0x4f4f0e(0x1d4)] = !![]))
        : scene[_0x4f4f0e(0x1ec)]((_0x23cd39) => {
              const _0x538b9c = _0x4f4f0e;
              !(
                  _0x23cd39["userData"]["isTextRing"] ||
                  (_0x23cd39["parent"] && _0x23cd39["parent"][_0x538b9c(0x271)] && _0x23cd39[_0x538b9c(0x1fb)][_0x538b9c(0x271)]["isTextRing"]) ||
                  _0x23cd39 === planet ||
                  _0x23cd39 === centralGlow ||
                  _0x23cd39[_0x538b9c(0x1de)] === "Scene"
              )
                  ? _0x23cd39["material"] && _0x23cd39[_0x538b9c(0x24a)][_0x538b9c(0x1f3)] !== undefined && ((_0x23cd39["material"][_0x538b9c(0x1b9)] = !![]), (_0x23cd39[_0x538b9c(0x24a)]["opacity"] = fadeOpacity))
                  : _0x23cd39["material"] && _0x23cd39[_0x538b9c(0x24a)][_0x538b9c(0x1f3)] !== undefined && ((_0x23cd39[_0x538b9c(0x24a)][_0x538b9c(0x1f3)] = 0x1), (_0x23cd39[_0x538b9c(0x24a)][_0x538b9c(0x1b9)] = ![])),
                  _0x23cd39[_0x538b9c(0x24a)] && _0x23cd39[_0x538b9c(0x24a)][_0x538b9c(0x1c5)] && _0x23cd39["material"][_0x538b9c(0x1c5)]["set"](0xffffff);
          });
    for (let _0x1cca89 = shootingStars[_0x4f4f0e(0x236)] - 0x1; _0x1cca89 >= 0x0; _0x1cca89--) {
        const _0x136677 = shootingStars[_0x1cca89];
        _0x136677["userData"][_0x4f4f0e(0x209)]++;
        let _0x412b7c = 0x1;
        if (_0x136677["userData"][_0x4f4f0e(0x209)] < 0x1e) _0x412b7c = _0x136677[_0x4f4f0e(0x271)][_0x4f4f0e(0x209)] / 0x1e;
        else _0x136677[_0x4f4f0e(0x271)][_0x4f4f0e(0x209)] > _0x136677[_0x4f4f0e(0x271)][_0x4f4f0e(0x227)] - 0x1e && (_0x412b7c = (_0x136677[_0x4f4f0e(0x271)][_0x4f4f0e(0x227)] - _0x136677[_0x4f4f0e(0x271)][_0x4f4f0e(0x209)]) / 0x1e);
        _0x136677[_0x4f4f0e(0x271)][_0x4f4f0e(0x242)] += _0x136677[_0x4f4f0e(0x271)][_0x4f4f0e(0x206)];
        if (_0x136677[_0x4f4f0e(0x271)][_0x4f4f0e(0x242)] > 0x1) {
            scene[_0x4f4f0e(0x289)](_0x136677), shootingStars[_0x4f4f0e(0x1af)](_0x1cca89, 0x1);
            continue;
        }
        const _0x4306ee = _0x136677[_0x4f4f0e(0x271)][_0x4f4f0e(0x1e7)]["getPoint"](_0x136677[_0x4f4f0e(0x271)][_0x4f4f0e(0x242)]);
        _0x136677[_0x4f4f0e(0x1c8)][_0x4f4f0e(0x1fa)](_0x4306ee),
            (_0x136677[_0x4f4f0e(0x271)][_0x4f4f0e(0x1f0)][_0x4f4f0e(0x24a)]["opacity"] = _0x412b7c),
            (_0x136677["userData"][_0x4f4f0e(0x1f0)][_0x4f4f0e(0x1b6)][0x0][_0x4f4f0e(0x24a)][_0x4f4f0e(0x210)][_0x4f4f0e(0x2b4)]["value"] = _0x34a2bc);
        const _0x3a61c7 = _0x136677["userData"][_0x4f4f0e(0x1df)],
            _0x257f32 = _0x136677[_0x4f4f0e(0x271)][_0x4f4f0e(0x202)];
        _0x257f32[0x0]["copy"](_0x4306ee);
        for (let _0xe13cdc = 0x1; _0xe13cdc < _0x136677[_0x4f4f0e(0x271)][_0x4f4f0e(0x22f)]; _0xe13cdc++) {
            const _0x386ece = Math[_0x4f4f0e(0x203)](0x0, _0x136677[_0x4f4f0e(0x271)][_0x4f4f0e(0x242)] - _0xe13cdc * 0.01);
            _0x257f32[_0xe13cdc][_0x4f4f0e(0x1fa)](_0x136677[_0x4f4f0e(0x271)][_0x4f4f0e(0x1e7)]["getPoint"](_0x386ece));
        }
        _0x3a61c7[_0x4f4f0e(0x273)][_0x4f4f0e(0x293)](_0x257f32), (_0x3a61c7[_0x4f4f0e(0x24a)][_0x4f4f0e(0x1f3)] = _0x412b7c * 0.7);
    }
    shootingStars[_0x4f4f0e(0x236)] < 0x3 && Math[_0x4f4f0e(0x2aa)]() < 0.02 && createShootingStar(),
        scene[_0x4f4f0e(0x1ec)]((_0x279c1e) => {
            const _0x38436d = _0x4f4f0e;
            if (_0x279c1e[_0x38436d(0x1f5)] && _0x279c1e[_0x38436d(0x271)]["materialNear"] && _0x279c1e["userData"][_0x38436d(0x27f)]) {
                const _0x49b28e = _0x279c1e[_0x38436d(0x273)]["getAttribute"](_0x38436d(0x1c8));
                let _0x466d44 = ![];
                for (let _0x48fc55 = 0x0; _0x48fc55 < _0x49b28e["count"]; _0x48fc55++) {
                    const _0x45e6f1 = _0x49b28e[_0x38436d(0x1fd)](_0x48fc55) + _0x279c1e[_0x38436d(0x1c8)]["x"],
                        _0x53568f = _0x49b28e[_0x38436d(0x27b)](_0x48fc55) + _0x279c1e[_0x38436d(0x1c8)]["y"],
                        _0x30a895 = _0x49b28e["getZ"](_0x48fc55) + _0x279c1e["position"]["z"],
                        _0x4dd6a8 = camera[_0x38436d(0x1c8)]["distanceTo"](new _0x275f13[_0x38436d(0x212)](_0x45e6f1, _0x53568f, _0x30a895));
                    if (_0x4dd6a8 < 0xa) {
                        _0x466d44 = !![];
                        break;
                    }
                }
                _0x466d44
                    ? _0x279c1e[_0x38436d(0x24a)] !== _0x279c1e[_0x38436d(0x271)][_0x38436d(0x253)] &&
                      ((_0x279c1e[_0x38436d(0x24a)] = _0x279c1e[_0x38436d(0x271)][_0x38436d(0x253)]), (_0x279c1e[_0x38436d(0x273)] = _0x279c1e[_0x38436d(0x271)][_0x38436d(0x26e)]))
                    : _0x279c1e[_0x38436d(0x24a)] !== _0x279c1e[_0x38436d(0x271)]["materialFar"] &&
                      ((_0x279c1e["material"] = _0x279c1e[_0x38436d(0x271)][_0x38436d(0x27f)]), (_0x279c1e[_0x38436d(0x273)] = _0x279c1e[_0x38436d(0x271)]["geometryFar"]));
            }
        }),
        planet[_0x4f4f0e(0x27a)](camera["position"]),
        animatePlanetSystem(),
        starField && starField[_0x4f4f0e(0x24a)] && starField[_0x4f4f0e(0x24a)][_0x4f4f0e(0x1f3)] !== undefined && ((starField[_0x4f4f0e(0x24a)][_0x4f4f0e(0x1f3)] = 0x1), (starField[_0x4f4f0e(0x24a)][_0x4f4f0e(0x1b9)] = ![])),
        renderer[_0x4f4f0e(0x26f)](scene, camera);
}
function createHintText() {
    const _0x13a126 = _0x207b43,
        _0x54156f = 0x200,
        _0x5afb93 = document[_0x13a126(0x284)]("canvas");
    _0x5afb93[_0x13a126(0x2bf)] = _0x5afb93["height"] = _0x54156f;
    const _0x4c87c1 = _0x5afb93[_0x13a126(0x1c3)]("2d"),
        _0x4a1ea3 = 0x32,
        _0x5cf22d = _0x13a126(0x214);
    (_0x4c87c1[_0x13a126(0x2a4)] = _0x13a126(0x21b) + _0x4a1ea3 + _0x13a126(0x2b6)),
        (_0x4c87c1["textAlign"] = "center"),
        (_0x4c87c1["textBaseline"] = _0x13a126(0x24b)),
        (_0x4c87c1[_0x13a126(0x20e)] = _0x13a126(0x22d)),
        (_0x4c87c1[_0x13a126(0x278)] = 0x5),
        (_0x4c87c1[_0x13a126(0x23a)] = 0x2),
        (_0x4c87c1[_0x13a126(0x23c)] = _0x13a126(0x270)),
        _0x4c87c1["strokeText"](_0x5cf22d, _0x54156f / 0x2, _0x54156f / 0x2),
        (_0x4c87c1[_0x13a126(0x20e)] = "#e0b3ff"),
        (_0x4c87c1["shadowBlur"] = 0x5),
        (_0x4c87c1[_0x13a126(0x23a)] = 0x2),
        (_0x4c87c1[_0x13a126(0x23c)] = _0x13a126(0x24e)),
        _0x4c87c1[_0x13a126(0x234)](_0x5cf22d, _0x54156f / 0x2, _0x54156f / 0x2),
        (_0x4c87c1[_0x13a126(0x20e)] = _0x13a126(0x1b9)),
        (_0x4c87c1[_0x13a126(0x278)] = 0x0),
        (_0x4c87c1[_0x13a126(0x217)] = _0x13a126(0x260)),
        _0x4c87c1["fillText"](_0x5cf22d, _0x54156f / 0x2, _0x54156f / 0x2);
    const _0x37587a = new _0x275f13[_0x13a126(0x1b0)](_0x5afb93);
    _0x37587a["needsUpdate"] = !![];
    const _0x3371ab = new _0x275f13[_0x13a126(0x2b0)]({ map: _0x37587a, transparent: !![], side: _0x275f13["DoubleSide"] }),
        _0x14c212 = new _0x275f13["PlaneGeometry"](0x10, 0x8);
    (hintText = new _0x275f13[_0x13a126(0x243)](_0x14c212, _0x3371ab)), hintText[_0x13a126(0x1c8)][_0x13a126(0x223)](0x0, 0xf, 0x0), scene[_0x13a126(0x2a0)](hintText);
}
createShootingStar(),
    createHintIcon(),
    createHintText(),
    window[_0x207b43(0x1bb)](_0x207b43(0x257), () => {
        const _0x4c15d0 = _0x207b43;
        (camera[_0x4c15d0(0x245)] = window["innerWidth"] / window[_0x4c15d0(0x2b3)]),
            camera[_0x4c15d0(0x292)](),
            renderer[_0x4c15d0(0x23f)](window[_0x4c15d0(0x2b7)], window[_0x4c15d0(0x2b3)]),
            controls[_0x4c15d0(0x265)]["set"](0x0, 0x0, 0x0),
            controls["update"]();
    });
function startCameraAnimation() {
    const _0x6b2ece = _0x207b43,
        _0xed71fc = { x: camera[_0x6b2ece(0x1c8)]["x"], y: camera["position"]["y"], z: camera["position"]["z"] },
        _0x12f7c3 = { x: _0xed71fc["x"], y: 0x0, z: _0xed71fc["z"] },
        _0x11f0f3 = { x: _0xed71fc["x"], y: 0x0, z: 0xa0 },
        _0xcee8e = { x: -0x28, y: 0x64, z: 0x64 },
        _0x40e78 = 0.2,
        _0x3cda7c = 0.55,
        _0x33d32c = 0.4;
    let _0x360509 = 0x0;
    function _0x349f93() {
        const _0x389f4b = _0x6b2ece;
        _0x360509 += 0.00101;
        let _0x3015fe;
        if (_0x360509 < _0x40e78) {
            let _0x1142e7 = _0x360509 / _0x40e78;
            _0x3015fe = { x: _0xed71fc["x"] + (_0x12f7c3["x"] - _0xed71fc["x"]) * _0x1142e7, y: _0xed71fc["y"] + (_0x12f7c3["y"] - _0xed71fc["y"]) * _0x1142e7, z: _0xed71fc["z"] + (_0x12f7c3["z"] - _0xed71fc["z"]) * _0x1142e7 };
        } else {
            if (_0x360509 < _0x40e78 + _0x3cda7c) {
                let _0x5d83a8 = (_0x360509 - _0x40e78) / _0x3cda7c;
                _0x3015fe = { x: _0x12f7c3["x"] + (_0x11f0f3["x"] - _0x12f7c3["x"]) * _0x5d83a8, y: _0x12f7c3["y"] + (_0x11f0f3["y"] - _0x12f7c3["y"]) * _0x5d83a8, z: _0x12f7c3["z"] + (_0x11f0f3["z"] - _0x12f7c3["z"]) * _0x5d83a8 };
            } else {
                if (_0x360509 < _0x40e78 + _0x3cda7c + _0x33d32c) {
                    let _0x28df9f = (_0x360509 - _0x40e78 - _0x3cda7c) / _0x33d32c,
                        _0x251b94 = 0.5 - 0.5 * Math[_0x389f4b(0x261)](Math["PI"] * _0x28df9f);
                    _0x3015fe = { x: _0x11f0f3["x"] + (_0xcee8e["x"] - _0x11f0f3["x"]) * _0x251b94, y: _0x11f0f3["y"] + (_0xcee8e["y"] - _0x11f0f3["y"]) * _0x251b94, z: _0x11f0f3["z"] + (_0xcee8e["z"] - _0x11f0f3["z"]) * _0x251b94 };
                } else {
                    camera[_0x389f4b(0x1c8)]["set"](_0xcee8e["x"], _0xcee8e["y"], _0xcee8e["z"]),
                        camera[_0x389f4b(0x27a)](0x0, 0x0, 0x0),
                        controls[_0x389f4b(0x265)][_0x389f4b(0x223)](0x0, 0x0, 0x0),
                        controls[_0x389f4b(0x25e)](),
                        (controls[_0x389f4b(0x225)] = !![]);
                    return;
                }
            }
        }
        camera["position"][_0x389f4b(0x223)](_0x3015fe["x"], _0x3015fe["y"], _0x3015fe["z"]), camera[_0x389f4b(0x27a)](0x0, 0x0, 0x0), requestAnimationFrame(_0x349f93);
    }
    (controls["enabled"] = ![]), _0x349f93();
}
const raycaster = new _0x275f13[_0x207b43(0x1ee)](),
    mouse = new _0x275f13[_0x207b43(0x295)]();
let introStarted = ![];
const originalStarCount = starGeometry[_0x207b43(0x250)](_0x207b43(0x1c8))[_0x207b43(0x1f6)];
starField && starField["geometry"] && starField[_0x207b43(0x273)]["setDrawRange"](0x0, Math[_0x207b43(0x2a7)](originalStarCount * 0.1));
function requestFullScreen() {
    const _0x468f46 = _0x207b43,
        _0x5a4ad7 = document["documentElement"];
    if (_0x5a4ad7[_0x468f46(0x1ca)]) _0x5a4ad7[_0x468f46(0x1ca)]();
    else {
        if (_0x5a4ad7["mozRequestFullScreen"]) _0x5a4ad7["mozRequestFullScreen"]();
        else {
            if (_0x5a4ad7[_0x468f46(0x21e)]) _0x5a4ad7[_0x468f46(0x21e)]();
            else _0x5a4ad7["msRequestFullscreen"] && _0x5a4ad7["msRequestFullscreen"]();
        }
    }
}
function onCanvasClick(_0x575832) {
    const _0x3bb136 = _0x207b43;
    if (introStarted) return;
    const _0x4af5b8 = renderer[_0x3bb136(0x28a)][_0x3bb136(0x1fe)]();
    (mouse["x"] = ((_0x575832[_0x3bb136(0x29e)] - _0x4af5b8[_0x3bb136(0x20f)]) / _0x4af5b8["width"]) * 0x2 - 0x1),
        (mouse["y"] = -((_0x575832[_0x3bb136(0x248)] - _0x4af5b8["top"]) / _0x4af5b8["height"]) * 0x2 + 0x1),
        raycaster[_0x3bb136(0x215)](mouse, camera);
    const _0x351d25 = raycaster[_0x3bb136(0x269)](planet);
    if (_0x351d25[_0x3bb136(0x236)] > 0x0)
        requestFullScreen(),
            (introStarted = !![]),
            (fadeInProgress = !![]),
            document[_0x3bb136(0x23e)][_0x3bb136(0x1e8)][_0x3bb136(0x2a0)]("intro-started"),
            startCameraAnimation(),
            starField && starField[_0x3bb136(0x273)] && starField["geometry"][_0x3bb136(0x221)](0x0, originalStarCount);
    else {
        if (introStarted) {
            const _0x10fbb8 = raycaster[_0x3bb136(0x1ea)](heartPointClouds);
            if (_0x10fbb8[_0x3bb136(0x236)] > 0x0) {
                const _0x194f4e = _0x10fbb8[0x0][_0x3bb136(0x1ff)];
                controls["target"][_0x3bb136(0x1fa)](_0x194f4e[_0x3bb136(0x1c8)]);
            }
        }
    }
}
renderer[_0x207b43(0x28a)]["addEventListener"](_0x207b43(0x1b1), onCanvasClick), animate(), (planet["name"] = _0x207b43(0x2a3)), (centralGlow["name"] = _0x207b43(0x1c1));
function setFullScreen() {
    const _0x303360 = _0x207b43,
        _0x480ccb = window["innerHeight"] * 0.01;
    document[_0x303360(0x20d)]["style"][_0x303360(0x2b9)](_0x303360(0x299), _0x480ccb + "px");
    const _0x4fd040 = document[_0x303360(0x224)]("container");
    _0x4fd040 && (_0x4fd040[_0x303360(0x1d8)][_0x303360(0x27e)] = window[_0x303360(0x2b3)] + "px");
}
window["addEventListener"]("resize", setFullScreen),
    window[_0x207b43(0x1bb)](_0x207b43(0x240), () => {
        setTimeout(setFullScreen, 0x12c);
    }),
    setFullScreen();
const preventDefault = (_0x37fa9a) => _0x37fa9a["preventDefault"]();
document[_0x207b43(0x1bb)](_0x207b43(0x235), preventDefault, { passive: ![] }), document[_0x207b43(0x1bb)]("gesturestart", preventDefault, { passive: ![] });
const container = document[_0x207b43(0x224)](_0x207b43(0x2b1));
container && container[_0x207b43(0x1bb)]("touchmove", preventDefault, { passive: ![] });
function checkOrientation() {
    const _0x395d51 = _0x207b43,
        _0x244abc = window[_0x395d51(0x2b3)] > window[_0x395d51(0x2b7)] && _0x395d51(0x27c) in window;
    _0x244abc ? document[_0x395d51(0x23e)][_0x395d51(0x1e8)]["add"](_0x395d51(0x2b2)) : document[_0x395d51(0x23e)][_0x395d51(0x1e8)][_0x395d51(0x289)](_0x395d51(0x2b2));
}
window[_0x207b43(0x1bb)](_0x207b43(0x1eb), checkOrientation),
    window[_0x207b43(0x1bb)]("resize", checkOrientation),
    window[_0x207b43(0x1bb)](_0x207b43(0x240), () => {
        setTimeout(checkOrientation, 0xc8);
    });
