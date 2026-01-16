// Create context menu item when extension is installed
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "searchAnnasArchive",
    title: "Search on Anna's Archive",
    contexts: ["selection"]
  });
});

// Handle context menu click
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "searchAnnasArchive" && info.selectionText) {
    const searchQuery = encodeURIComponent(info.selectionText.trim());
    const searchUrl = `https://annas-archive.li/search?q=${searchQuery}`;
    chrome.tabs.create({ url: searchUrl });
  }
});
