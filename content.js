const gifUrl = chrome.runtime.getURL("siffrinnod.gif");
const gifElement = document.createElement("img");
gifElement.src = gifUrl;
gifElement.style.position = "fixed";
gifElement.style.bottom = "10px";
gifElement.style.right = "10px";
gifElement.style.width = "125px"; // 25% bigger than 100px
gifElement.style.display = "none";
gifElement.style.zIndex = "10000"; // Ensure it's above everything
document.body.appendChild(gifElement);

const dimOverlay = document.createElement("div");
dimOverlay.style.position = "fixed";
dimOverlay.style.top = "0";
dimOverlay.style.left = "0";
dimOverlay.style.width = "100vw";
dimOverlay.style.height = "100vh";
dimOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
dimOverlay.style.pointerEvents = "none";
dimOverlay.style.display = "none";
dimOverlay.style.zIndex = "9999";
document.body.appendChild(dimOverlay);

const staticEffect = document.createElement("div");
staticEffect.style.position = "fixed";
staticEffect.style.top = "0";
staticEffect.style.left = "0";
staticEffect.style.width = "100vw";
staticEffect.style.height = "100vh";
staticEffect.style.backgroundImage = `url(${gifUrl})`;
staticEffect.style.backgroundRepeat = "no-repeat";
staticEffect.style.backgroundPosition = "center";
staticEffect.style.backgroundSize = "contain";
staticEffect.style.opacity = "0.2";
staticEffect.style.pointerEvents = "none";
staticEffect.style.display = "none";
staticEffect.style.zIndex = "9998";
document.body.appendChild(staticEffect);

document.addEventListener("keydown", (event) => {
    if (event.key === "z") {
        document.querySelectorAll("video").forEach(video => {
            if (!video.paused && video.readyState >= 2) {
                video.playbackRate = 5.0; // Speed up
            }
        });
        gifElement.style.display = "block";
        dimOverlay.style.display = "block";
    }
});

document.addEventListener("keyup", (event) => {
    if (event.key === "z") {
        document.querySelectorAll("video").forEach(video => {
            if (!video.paused) {
                video.playbackRate = 1.0; // Reset to normal speed
            }
        });
        gifElement.style.display = "none";
        dimOverlay.style.display = "none";
    }
});
