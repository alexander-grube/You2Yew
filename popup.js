let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    let url = tabs[0].url;
    url = convertYouTubeToYewTubeUrl(url);
    if (url.includes("yewtu.be")) copyToClipboard(url);
  });
});

function copyToClipboard(text) {
    let input = document.createElement("textarea");
    document.body.appendChild(input);
    input.value = text;
    input.focus();
    input.select();
    document.execCommand("Copy");
    input.remove();
}

function convertYouTubeToYewTubeUrl(url) {
    let yewTubeUrl = url.replace("youtube.com", "yewtu.be");
    return yewTubeUrl;
}

