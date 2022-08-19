var quickDaddDtoDplaylist=(()=>{var l="add_to_playlist.playlist",s='<svg width="500" height="600" viewBox="0 0 500 600" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M260.958 265.125H238.042V299.5H203.667V322.417H238.042V356.792H260.958V322.417H295.333V299.5H260.958V265.125Z" fill="white"/><path d="M341.167 219.292H242.785L223.226 199.732C222.164 198.666 220.901 197.821 219.511 197.245C218.121 196.668 216.63 196.373 215.125 196.375H157.833C145.195 196.375 134.917 206.653 134.917 219.292V379.708C134.917 392.347 145.195 402.625 157.833 402.625H341.167C353.805 402.625 364.083 392.347 364.083 379.708V242.208C364.083 229.57 353.805 219.292 341.167 219.292ZM157.833 379.708V242.208H341.167L341.19 379.708H157.833Z" fill="white"/></svg>',o='<svg width="500" height="600" viewBox="0 0 500 600" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M341.167 219.292H242.785L223.226 199.732C222.164 198.666 220.901 197.821 219.511 197.245C218.12 196.668 216.63 196.373 215.125 196.375H157.833C145.195 196.375 134.917 206.653 134.917 219.292V379.708C134.917 392.347 145.195 402.625 157.833 402.625H341.167C353.805 402.625 364.083 392.347 364.083 379.708V242.208C364.083 229.57 353.805 219.292 341.167 219.292ZM157.833 379.708V242.208H341.167L341.19 379.708H157.833Z" fill="white"/><path d="M202.223 299.5H293.89V322.417H202.223V299.5Z" fill="white"/></svg>',c='<svg width="500" height="600" viewBox="0 0 500 600" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M254.773 239.634C269.308 239.634 281.091 227.851 281.091 213.317C281.091 198.782 269.308 187 254.773 187C240.238 187 228.455 198.782 228.455 213.317C228.455 227.851 240.238 239.634 254.773 239.634Z" fill="white"/><path d="M254.773 412C263.493 412 270.562 404.931 270.562 396.212C270.562 387.492 263.493 380.423 254.773 380.423C246.053 380.423 238.984 387.492 238.984 396.212C238.984 404.931 246.053 412 254.773 412Z" fill="white"/><path d="M190.105 263.782C203.188 263.782 213.793 253.177 213.793 240.095C213.793 227.013 203.188 216.408 190.105 216.408C177.023 216.408 166.418 227.013 166.418 240.095C166.418 253.177 177.023 263.782 190.105 263.782Z" fill="white"/><path d="M319.44 382.575C326.708 382.575 332.599 376.684 332.599 369.417C332.599 362.149 326.708 356.258 319.44 356.258C312.173 356.258 306.281 362.149 306.281 369.417C306.281 376.684 312.173 382.575 319.44 382.575Z" fill="white"/><path d="M163.318 325.817C174.943 325.817 184.367 316.393 184.367 304.768C184.367 293.144 174.943 283.72 163.318 283.72C151.693 283.72 142.269 293.144 142.269 304.768C142.269 316.393 151.693 325.817 163.318 325.817Z" fill="white"/><path d="M346.219 315.28C352.03 315.28 356.74 310.57 356.74 304.76C356.74 298.95 352.03 294.24 346.219 294.24C340.409 294.24 335.699 298.95 335.699 304.76C335.699 310.57 340.409 315.28 346.219 315.28Z" fill="white"/><path d="M177.083 356.412C169.885 363.61 169.885 375.257 177.083 382.455C184.273 389.654 195.938 389.654 203.128 382.455C210.326 375.257 210.326 363.61 203.128 356.412C195.938 349.205 184.282 349.137 177.083 356.412Z" fill="white"/><path d="M319.432 247.985C323.79 247.985 327.322 244.452 327.322 240.095C327.322 235.737 323.79 232.205 319.432 232.205C315.074 232.205 311.542 235.737 311.542 240.095C311.542 244.452 315.074 247.985 319.432 247.985Z" fill="white"/></svg>';async function n(t){r(t,"?"),d()&&(await async function(){const i=Spicetify.Player.data.track;var t=d();if(!t)return!1;const e=await Spicetify.CosmosAsync.get("https://api.spotify.com/v1/playlists/"+t.id);return e.tracks.items.some(t=>t.track.uri===i.uri)}()?r(t,"-"):r(t,"+"))}function r(t,i){var e=d();switch(i){case"+":t.icon=s,t.label="Add to "+e.name;break;case"-":t.icon=o,t.label="Remove from "+e.name;break;case"?":t.icon=c,t.label="Loading..."}}function p(t,i){var t=document.querySelector(`a[href="/playlist/${t}"`),t=(null!=(t=null==t?void 0:t.parentElement)&&t.classList.remove("quick-add-to-playlist--selected-playlist"),document.querySelector(`a[href="/playlist/${i}"`));null!=(i=null==t?void 0:t.parentElement)&&i.classList.add("quick-add-to-playlist--selected-playlist")}function d(){return JSON.parse(Spicetify.LocalStorage.get(l))}var t=async function(){for(;null==Spicetify||!Spicetify.showNotification;)await new Promise(t=>setTimeout(t,500));{const i=document.body,e=document.createElement("style");i.classList.contains("quick-add-to-playlist--selected-playlist")||(e.innerHTML=`
      .quick-add-to-playlist--selected-playlist {
        background-color: #212121 !important;
      }
    `,i.appendChild(e));var t=d();t&&p(null,t.id),setTimeout(()=>{var t=document.querySelector(".main-rootlist-wrapper");if(t){const i=new MutationObserver(t=>{for(const e of t){var i;"attributes"!==e.type||"style"!==e.attributeName||(i=d())&&p(null,i.id)}});i.observe(t,{attributes:!0,childList:!0,subtree:!0})}},2e3)}const a=new Spicetify.Topbar.Button("Loading...",c,async t=>{var i=Spicetify.Player.data.track;const e=d();e&&(t.icon===s?Spicetify.CosmosAsync.post(`https://api.spotify.com/v1/playlists/${e.id}/tracks`,{uris:[null==i?void 0:i.uri]}).then(()=>{Spicetify.showNotification("Added to "+e.name),r(a,"-")}).catch(()=>{Spicetify.showNotification("An error has occured!")}):t.icon===o&&Spicetify.CosmosAsync.del(`https://api.spotify.com/v1/playlists/${e.id}/tracks`,{tracks:[{uri:null==i?void 0:i.uri}]}).then(()=>{Spicetify.showNotification("Removed from "+e.name),r(a,"+")}).catch(()=>{Spicetify.showNotification("An error has occured!")}))});await n(a),Spicetify.Player.addEventListener("appchange",async()=>{await n(a)}),Spicetify.Player.addEventListener("songchange",async()=>{await n(a)}),new Spicetify.ContextMenu.Item("Select playlist",async([t],[]=[],i)=>{var e=d(),t=await Spicetify.CosmosAsync.get("https://api.spotify.com/v1/playlists/"+t.split(":")[2]);Spicetify.LocalStorage.set(l,JSON.stringify({name:t.name,id:t.id})),p(e?e.id:null,t.id),Spicetify.showNotification(`Selected playlist "${t.name}"`),await n(a)},([t])=>{switch(t.split(":")[1]){case Spicetify.URI.Type.PLAYLIST:case Spicetify.URI.Type.PLAYLIST_V2:return!0;default:return!1}},"playlist-folder").register()};(async()=>{await t()})()})();