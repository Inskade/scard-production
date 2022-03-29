'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "a5e3ded556afbcc370aeb951ee19acf9",
"favicon.ico": "8f91ce8cb14e5826522b138e92c7e8bc",
"index.html": "35656d7f92f582767c443fa50250f644",
"/": "35656d7f92f582767c443fa50250f644",
"main.dart.js": "83288c3431eddf16d66114bbfb7e3956",
"icons/favicon-16x16.png": "4dbcb203b7a1d51ec955fa833f3254b7",
"icons/apple-icon.png": "71fede9ce5042250b1ccf2eca309fea5",
"icons/apple-icon-144x144.png": "41f30aab3a6529e687d0fe0e8a071231",
"icons/android-icon-192x192.png": "966d6ae1e25b48e42692ae15c5158f50",
"icons/apple-icon-precomposed.png": "71fede9ce5042250b1ccf2eca309fea5",
"icons/apple-icon-114x114.png": "4825118b2d13b87ae16288b2856da33c",
"icons/ms-icon-310x310.png": "cc9168db9f75a896e796253d9ce6f22f",
"icons/ms-icon-144x144.png": "41f30aab3a6529e687d0fe0e8a071231",
"icons/apple-icon-57x57.png": "41ebd451e3ada52bc1b31f97d14f64ef",
"icons/apple-icon-152x152.png": "efb30713562bb46715f0260a563c594a",
"icons/ms-icon-150x150.png": "93623c32d4e9f53011dc3939897f01cd",
"icons/android-icon-72x72.png": "3e3ae8ced742f0e5e29253074e06e6ad",
"icons/android-icon-96x96.png": "513a37ed17af87b473e7168f2e78d6bb",
"icons/android-icon-36x36.png": "bd8840cceeaad2a2c045d7484100fe85",
"icons/apple-icon-180x180.png": "c62ac796b3b0846e08458aa9d5ab0d98",
"icons/favicon-96x96.png": "513a37ed17af87b473e7168f2e78d6bb",
"icons/android-icon-48x48.png": "e638acfef156dd809b7db95e4ceec539",
"icons/apple-icon-76x76.png": "d5ab089235fb70f8dd085ffa11f3dfdc",
"icons/apple-icon-60x60.png": "b227f9a1bd5ded264796cff469f16d8b",
"icons/android-icon-144x144.png": "41f30aab3a6529e687d0fe0e8a071231",
"icons/apple-icon-72x72.png": "3e3ae8ced742f0e5e29253074e06e6ad",
"icons/apple-icon-120x120.png": "c1384c6d29494c555c330fe64d0ca963",
"icons/favicon-32x32.png": "713fa779f344e440644a82f772ae4161",
"icons/ms-icon-70x70.png": "a88c9add3d5fff33aa7539c53c011453",
"manifest.json": "ef5096a117cb6b2fdf8d63519271c631",
"assets/AssetManifest.json": "1d93d4e5c25b561a8391db708a0e6c9e",
"assets/NOTICES": "ffb576a8cc564dc8c83e431ffc310bdd",
"assets/FontManifest.json": "78c27c77fbe570fd13188135052dafda",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/images/badge_secure_payment.png": "6a68cdc7274d3a9ba6f2c72d676e7243",
"assets/assets/images/badge_upi.png": "5e23cbddf9e5a234a240a2ca8e3068af",
"assets/assets/images/student_blue_front.png": "1656e1653f3e32a165dfb741cd00ab76",
"assets/assets/images/student_black_front.png": "9cd596dd34e96a6ceac30b2971677794",
"assets/assets/images/vaccination_certificate_front.png": "9c7158829602f0f8bfb6ec29e0434f42",
"assets/assets/images/student_blue_back.png": "5dfe4d58c4f5886f0952d3241a02af07",
"assets/assets/images/scard_premium_1_glow.png": "2a6e5010d69d0e97d0f85248b2457847",
"assets/assets/images/student_yellow_back.png": "4c5e7cc58eeea5969c3edd42c157942c",
"assets/assets/images/2.0x/vaccination_certificate_front.png": "303b4232f12b24ebfbbe119ae8b0834f",
"assets/assets/images/2.0x/vaccination_certificate_1.png": "8d0c2e51444652f0f7484475791299d8",
"assets/assets/images/2.0x/vaccination_certificate_back.png": "85681bf8e72ecf9ab57f4bdd264402af",
"assets/assets/images/2.0x/scard_demo_1.png": "4d293ce90052030d8398e85edb0eca2b",
"assets/assets/images/student_black_back.png": "3129358be8fa5c45579d667629ce6c61",
"assets/assets/images/vaccination_certificate_1.png": "a24db3d73a4e362ac849e3b4b56124a6",
"assets/assets/images/student/yellow.png": "039637cb28fda4b4f447643e0abb15a0",
"assets/assets/images/student/blue.png": "02f2d620be7a9e7bf095b7179d9e2993",
"assets/assets/images/student/black.png": "430981fc3364af147f0498f96560bb03",
"assets/assets/images/student/red.png": "16aac1f0b5eef05bce0318dd35140783",
"assets/assets/images/student/purple.png": "f5e9ad58de20d9be9674300b0654b894",
"assets/assets/images/offer_badge.png": "b1bbca2ea7e7d368ba79d44266a785cb",
"assets/assets/images/offer_banner.png": "82e6dbcd160403756d32380e56409e26",
"assets/assets/images/3.0x/vaccination_certificate_1.png": "a915f2944c99aed24f7f1cc5c251cc36",
"assets/assets/images/3.0x/vaccination_certificate_back.png": "5a62c07ba21c22fe1fccb34599750271",
"assets/assets/images/3.0x/scard_demo_1.png": "00c0b1eb47614db22496caeb449005fc",
"assets/assets/images/scard_front.png": "61f1ec6b8c9674b0fc2689e54be7e1b1",
"assets/assets/images/scard_back.png": "7affb793a83a407ed4b89c9d35b3c983",
"assets/assets/images/contour_white.png": "bbb5548aee0ef55a8dfd1f1184ec3c24",
"assets/assets/images/scard-logomark.png": "9ae502145ba1ce54263d804494a60015",
"assets/assets/images/4.0x/vaccination_certificate_front.png": "5c2dea8aff415b651dbb33828f9ca55c",
"assets/assets/images/4.0x/vaccination_certificate_1.png": "0a83c1e9edcac65e1d62d13ce69d9627",
"assets/assets/images/4.0x/vaccination_certificate_back.png": "5fe77f908048aeeea854cc7c8d3e71af",
"assets/assets/images/4.0x/scard_demo_1.png": "536b250c2baf407ec5a64fcf5742e120",
"assets/assets/images/badge_razorpay.png": "c845c55e39b614ac3e285b24f2b72018",
"assets/assets/images/student_purple_back.png": "9c66ded07329f4bf3d695ea94cf655b0",
"assets/assets/images/student_red_front.png": "ee1739e267903c07e6f7b4aaddb13fe7",
"assets/assets/images/badge_visa.png": "da5fcfd98c70bacbf7f3b17dca53bbfc",
"assets/assets/images/vaccination_certificate_back.png": "430e359a13f9cb9ee3df4a232405273e",
"assets/assets/images/logo_white.png": "84c233e32bf17bb42117d11e7c948722",
"assets/assets/images/scard_demo_1.png": "d8a6347fa659cded7ebc5918b72ef5f5",
"assets/assets/images/badge_premium_quality.png": "3c2f204e883818ab15149d247034820f",
"assets/assets/images/student_yellow_front.png": "2a0a7f10d87afff0748a4009821fcf9a",
"assets/assets/images/student_purple_front.png": "38c19b1ecf39a20eef418514e189489f",
"assets/assets/images/badge_mastercard.png": "d6ad6fe2e16252e8835cf130df831cee",
"assets/assets/images/logo_white_no_padding.png": "f68099fc56689c141e960888836b53bf",
"assets/assets/images/previews/student_purple_preview.png": "7f4cac8505170a59301147c93a2b1b81",
"assets/assets/images/previews/color_yellow_preview.png": "5a0f7b1e48b3284259e37427e46234f7",
"assets/assets/images/previews/christmas_preview.png": "eb7e920d8dc78309cb62fc5f22a9b595",
"assets/assets/images/previews/vax_preview.png": "50f2a9bfaea81e72421be21becc2f7d5",
"assets/assets/images/previews/color_red_preview.png": "bfa4b24beb85f0a21416d3f1705c7bbf",
"assets/assets/images/previews/color_black_preview.png": "1ad9c6c78be14f72ebd431b3dde43d66",
"assets/assets/images/previews/spotify_preview.png": "de176897dcca13a74cd795e8545c1db3",
"assets/assets/images/previews/student_blue_preview.png": "2ea399227dadf33bede424e59ce9c700",
"assets/assets/images/previews/student_black_preview.png": "a45c6fee867ef062506092e57e4d2b1a",
"assets/assets/images/previews/youtube_preview.png": "b64fdd9ac96f9b409fef478c79688195",
"assets/assets/images/previews/student_red_preview.png": "f4902d6a8c1ecc9a0244f592f655929e",
"assets/assets/images/previews/color_blue_preview.png": "61ff5c5bad3129f6273be9bf3f26bcc4",
"assets/assets/images/previews/student_yellow_preview.png": "4bb1cc8d56a03326d72a66ae02d99aa0",
"assets/assets/images/previews/color_purple_preview.png": "2f77951ba622420bdf176cf727368f2a",
"assets/assets/images/student_red_back.png": "7073752b51a9f0d6ae5cc0a399debedc",
"assets/assets/images/badge_rupay.png": "c433d6b7012476f3d1569868446f1685",
"assets/assets/images/logo_color.png": "ee25841c328e14277afa12d82c9e6d67",
"assets/assets/images/badge_free_shipping.png": "2e862acc85bd7e41c9e1e9706ba8cbd1",
"assets/assets/images/scard_premium_1.png": "3d3be9d82abfff425741b97f58470f40",
"assets/assets/payments.html": "46983a563b90111a5bac0d3dc689770a",
"assets/assets/fonts/GilmerHeavy.otf": "b8708a98b3d7065a0474edc80ebad814",
"assets/assets/fonts/GilmerBold.otf": "fc5155566791b6918a8c70d7c9212666",
"assets/assets/fonts/GilmerLight.otf": "c88dd3c0c65bae8676794059c39076ab",
"assets/assets/fonts/GilmerMedium.otf": "0335703b3f6aedb36541e57e9b3960e0",
"assets/assets/fonts/GalanoGrotesqueBold.otf": "1a59f3fb17cffb5c0e7a180a72a45995",
"assets/assets/fonts/GilmerRegular.otf": "f779e3a492195fd99e81514179c5a60a",
"assets/assets/fonts/Signatie.ttf": "2dd0a17a6e0754af92b113098de010e9",
"assets/assets/fonts/ScardIcons.ttf": "778351b8935bbb45eebe9eb6d192a0bb",
"assets/assets/fonts/GalanoGrotesqueMedium.otf": "08e00296d3524259294b1008b493bfb3",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
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
