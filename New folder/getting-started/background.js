let color = '#3aa757';
async function getCurrTab() {
  let queryOptions = { active: false, currentWindow: false };
  let [tab] = await chrome.tabs.query(queryOptions);
  console.log(chrome.tabs)
  

  return tab;
}

async function getAllTab() {
  
}
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});
