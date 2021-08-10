'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "2c95974034bc620309ed1d27d4b8612d",
".git/config": "e6ba597f6461179faca861b9ca4292c2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf88ed30725f726698e717a40640a8f6",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "cfffd5d6b95a5252d20e00636ddb2383",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "609b66524cb79eb8ce91a21a0957c168",
".git/logs/refs/heads/master": "4bec99aeb8d1d9c25b782c56cfdb226c",
".git/logs/refs/heads/tempat_wista_web_deploy": "0edd7965587cc0abb69d53996d5eba9c",
".git/objects/0c/57af2afd99c5f65000e1501595c82d25781348": "b2e11d8705f6cf5507a91c1ff88590e4",
".git/objects/11/26ab9106d52271477d2e189baf0312c0d89e0a": "7eb50510c4aef3c322dcd642ecf62134",
".git/objects/16/50be0eb2e5f86677aa220fbb03f1ab3c04d937": "dc2272daa4830f2d06a7e5f0b25b1ce6",
".git/objects/1a/cb64ca867eaeaecd0d0cbe5748a574c46af9d7": "f9f6ea6cdd926a71a8a68c2731489891",
".git/objects/1b/9b47bc634891b1a14f77b4fced6c02890a01ab": "1ab87a131440560aa22547227c0b0887",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/28/b0fbfe990be80d1b1c4735a40627317650f40e": "4fe5787de925d14ee3a942aa5514a973",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3f/6577d3d5e4d7431ea343b23be9661f79277020": "372c1281bb01136ddc490d9b8df2d871",
".git/objects/41/6f8e640b7c72c4a83ce0cb6a32d9f7e8ca34aa": "8fed2c604189bad007d32ae2247327f3",
".git/objects/46/b5da5cec8c2232bcb52415d3903da8b89f41c7": "1505171308e1b156e3dc2df94cc5aa72",
".git/objects/4c/4939b549d1e15ea6b19266f3878583898afafb": "9892c6b04e79b65c3a573e7db83f47a4",
".git/objects/59/2d3920d00e60fde13610f570ea3faac7085ce8": "94e15a1492c328c23a106dd175eaed6c",
".git/objects/5d/07b9c7a470a66eed9a4ffda9c4e4ef3a1e07b2": "1ead8ebb2d6ebc2b7640fec2ce6f85fa",
".git/objects/5d/8ae49cc2e092c10a65c56de81e2814cdd45d5b": "71b987c7734766caccbf93d5db3ced5d",
".git/objects/64/a7ddfdaf2269ce4309debcbde88bbc7afc868c": "a5b164b64a534fc3582aca03f663f275",
".git/objects/6d/1ee2846d109f2944da24735f13b88372559835": "a8a81988be58bfe124a2465b52667deb",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/84/bb5a446270c51927d9ba81a27fe7222d04581d": "291413588f9924ab6e1f53ee2ac7d481",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/6643a391092f47c14126778c9be41c6ec83620": "38e8e09f4160e38ca2602793c6d34124",
".git/objects/99/3b8902a08b74fef2839e3794e86b39af18badb": "b4e40c1960a7d24d05bce211278047f9",
".git/objects/9c/a3355cf8aebb9632b7d8d1ae5345987e508e26": "9e2b3df9921b8a315cfecd7dfddce4ad",
".git/objects/9d/de5afef35b411c1d4c68cf1359bf51319ee362": "6ad74765c10b9618c2f145ba58193b8e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/5e3108f88e518ddce37a87f0d5d67be5847fb8": "0c5b792c9cf91ee21526c94a9e893354",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/9c1ee2fb5c0282705dcf0c7d9a08e148985c45": "67b415accd8bb2b437024965222c453a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c0/495fd900474916e8ea210c2e9f361932c11077": "e6e3957fd2bfecfae8744ae8889aa18a",
".git/objects/d2/5b5b766676fed4f6f37f1734d18a735b73d1bf": "a1e1e3a10d82f0bcde4cee8eef56f9aa",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/fa/9ba5d36f89cebbe5402f1567d5bef1bfff527a": "bfea13fcfc25a6c2bfc2ad96e6b34a10",
".git/refs/heads/master": "1f4e6d0ff4691cc8e8e1ac9fade3c5bb",
".git/refs/heads/tempat_wista_web_deploy": "1f4e6d0ff4691cc8e8e1ac9fade3c5bb",
"assets/AssetManifest.json": "bae2512f4ad0705513c4573aaacdee8b",
"assets/FontManifest.json": "b1edce52c735f34131c6683a068186d7",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/Oxygen-Regular.ttf": "61d9daf063ba38f2d05f8adb7267e6fd",
"assets/fonts/Staatliches-Regular.ttf": "d5746e3b20453d6cee99ab27a0bdf949",
"assets/images/bosscha.jpg": "256600646651e638361646aa2b1b8388",
"assets/images/farm-house.jpg": "3190d0f8d8ad8a5bd96a2e206fb96d06",
"assets/images/floating-market.png": "3825da6a681989426fa55d7493abcf62",
"assets/images/jalan-asia-afrika.jpg": "bec6a2d8b740356d2dfbb1de0fdc3729",
"assets/images/kawah-putih.jpg": "a2371babfc2a47b7f07cd21c70c4d7c1",
"assets/images/museum-geologi.jpg": "feed43fb551fad21fd0b4f40e061c6d3",
"assets/images/ranca-upas.jpg": "18ec585026e0af3f21db6bb7aaccf2ce",
"assets/images/stone-garden.jpg": "baece3780756a2cb8b58e3531201f6e3",
"assets/images/taman-film.jpg": "3c440fc167e79c459af92e62c9b3b400",
"assets/NOTICES": "bde9ee889e7cdb2c908965b81d635c52",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "0d7ae11bfeb7b370b2f52c09c0c23ed5",
"/": "0d7ae11bfeb7b370b2f52c09c0c23ed5",
"main.dart.js": "57cf704b69da53e70ca469bea82bb21b",
"manifest.json": "bb167908b0a31889b1b829364a3c6ce2",
"version.json": "d5d6945cc79040573a449024db455964"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
