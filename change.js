const fs = require('fs');
const orgFile = fs.readFileSync('theme.json', 'utf-8');
const data = JSON.parse(orgFile);
const update = {
  "dark.stickerArea":{
    "background.color": "#ffffff",
    "title.text.color": "#000000",
    "expand.icon.tintcolor": "#000000",
    "name.text.color": "#000000",
    "commonButton.text.color": "#000000",
    "categoryButton.text.color": "#000000",
    "bottomSheet.title.text.color": "#000000",
    "bottomSheet.section.text.color": "#000000",
    "bottomSheet.closeicon.tintcolor": "#000000",
    "description.text.color": "#000000",
    "loading.icon.tintcolor": "#020202",
    "refresh.icon.tintcolor": "#555555",
    "toggle.background.tintcolor": "#555555",
    "toggle.tintcolor": {
      "selected": "#000000",
    },
    "icon.background.tintcolor": {
      "selected": "#888888"
    }
  }
};
change(update, data, '');
fs.writeFileSync('theme.json', JSON.stringify(data, null, 2));
function change(update, org, fullPath){
  for(const key in update){
    if(!org[key]) throw new Error(`Path ${fullPath}${fullPath.length?'/':''}${key} does not exist`);
    if(typeof update[key] === 'object') change(update[key], org[key], `${fullPath}${fullPath.length?'/':''}${key}`);
    else org[key] = update[key];
  }
}