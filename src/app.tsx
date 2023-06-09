const LOCALSTORAGE_PLAYLIST_KEY = 'add_to_playlist.playlist'

const ICON_PLUS = `<svg width="20" height="20" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.41665 3.75H4.58331V5H3.33331V5.83333H4.58331V7.08333H5.41665V5.83333H6.66665V5H5.41665V3.75Z" fill="white"/><path d="M8.33331 2.08333H4.75581L4.04456 1.37208C4.00594 1.33332 3.96002 1.30257 3.90947 1.28162C3.85891 1.26067 3.80471 1.24992 3.74998 1.25H1.66665C1.20706 1.25 0.833313 1.62375 0.833313 2.08333V7.91667C0.833313 8.37625 1.20706 8.75 1.66665 8.75H8.33331C8.7929 8.75 9.16665 8.37625 9.16665 7.91667V2.91667C9.16665 2.45708 8.7929 2.08333 8.33331 2.08333ZM1.66665 7.91667V2.91667H8.33331L8.33415 7.91667H1.66665Z" fill="white"/></svg>`
const ICON_MINUS = `<svg width="20" height="20" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.33331 2.08333H4.75581L4.04456 1.37208C4.00594 1.33332 3.96002 1.30257 3.90946 1.28162C3.85891 1.26067 3.80471 1.24992 3.74998 1.25H1.66665C1.20706 1.25 0.833313 1.62375 0.833313 2.08333V7.91667C0.833313 8.37625 1.20706 8.75 1.66665 8.75H8.33331C8.7929 8.75 9.16665 8.37625 9.16665 7.91667V2.91667C9.16665 2.45708 8.7929 2.08333 8.33331 2.08333ZM1.66665 7.91667V2.91667H8.33331L8.33415 7.91667H1.66665Z" fill="white"/><path d="M3.28082 5H6.61416V5.83333H3.28082V5Z" fill="white"/></svg>`
const ICON_LOADING = `<svg width="20" height="20" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_4_13)"><path d="M5.23438 2.33928C5.88038 2.33928 6.40407 1.81561 6.40407 1.16964C6.40407 0.523665 5.88038 0 5.23438 0C4.58838 0 4.0647 0.523665 4.0647 1.16964C4.0647 1.81561 4.58838 2.33928 5.23438 2.33928Z" fill="white"/><path d="M5.23439 9.99997C5.62195 9.99997 5.93612 9.68581 5.93612 9.29827C5.93612 8.91072 5.62195 8.59656 5.23439 8.59656C4.84683 8.59656 4.53265 8.91072 4.53265 9.29827C4.53265 9.68581 4.84683 9.99997 5.23439 9.99997Z" fill="white"/><path d="M2.36029 3.41251C2.94173 3.41251 3.41308 2.94118 3.41308 2.35976C3.41308 1.77834 2.94173 1.30701 2.36029 1.30701C1.77885 1.30701 1.3075 1.77834 1.3075 2.35976C1.3075 2.94118 1.77885 3.41251 2.36029 3.41251Z" fill="white"/><path d="M8.10852 8.69222C8.43152 8.69222 8.69337 8.43039 8.69337 8.1074C8.69337 7.78442 8.43152 7.52258 8.10852 7.52258C7.78552 7.52258 7.52368 7.78442 7.52368 8.1074C7.52368 8.43039 7.78552 8.69222 8.10852 8.69222Z" fill="white"/><path d="M1.16971 6.16967C1.68638 6.16967 2.10523 5.75084 2.10523 5.23419C2.10523 4.71754 1.68638 4.29871 1.16971 4.29871C0.653038 4.29871 0.234192 4.71754 0.234192 5.23419C0.234192 5.75084 0.653038 6.16967 1.16971 6.16967Z" fill="white"/><path d="M9.29869 5.70134C9.55692 5.70134 9.76626 5.49201 9.76626 5.23379C9.76626 4.97557 9.55692 4.76624 9.29869 4.76624C9.04045 4.76624 8.83112 4.97557 8.83112 5.23379C8.83112 5.49201 9.04045 5.70134 9.29869 5.70134Z" fill="white"/><path d="M1.78152 7.52945C1.46158 7.84938 1.46158 8.36702 1.78152 8.68695C2.10107 9.00687 2.6195 9.00687 2.93906 8.68695C3.25899 8.36702 3.25899 7.84938 2.93906 7.52945C2.6195 7.20915 2.10145 7.20611 1.78152 7.52945Z" fill="white"/><path d="M8.10812 2.71048C8.3018 2.71048 8.4588 2.55349 8.4588 2.35982C8.4588 2.16615 8.3018 2.00916 8.10812 2.00916C7.91445 2.00916 7.75745 2.16615 7.75745 2.35982C7.75745 2.55349 7.91445 2.71048 8.10812 2.71048Z" fill="white"/></g><defs><clipPath id="clip0_4_13"><rect width="10" height="10" fill="white"/></clipPath></defs></svg>`

async function main() {
  // ==============================================================================================================
  // ==============================================================================================================
  // ==============================================================================================================

  // ------------------------------------------------------------
  // Wait for Spotify + Spicetify to load

  while (!Spicetify?.showNotification) {
    await new Promise(resolve => setTimeout(resolve, 2000))
  }
  
  // Inject CSS
  initInjectCss()

  // ------------------------------------------------------------
  // Create extension Button

  const topBarButton: Spicetify.Topbar.Button = new Spicetify.Topbar.Button(
    'Loading...',
    ICON_LOADING,
    async (self) => {
      const track: any = Spicetify.Player.data.track
      const playlist = getPlaylistFromLocalstorage()
      if (!playlist) return

      // Add to playlist
      if (self.icon === ICON_PLUS) {
        Spicetify.CosmosAsync.post(`https://api.spotify.com/v1/playlists/${playlist.id}/tracks`, { uris: [track?.uri] })
          .then(() => {
            Spicetify.showNotification(`Added to ${playlist.name}`)
            updateTopBarButton(topBarButton, '-')
          })
          .catch(() => { Spicetify.showNotification(`An error has occured!`) })

      // Remove from playlist
      } else if (self.icon === ICON_MINUS) {
        Spicetify.CosmosAsync.del(`https://api.spotify.com/v1/playlists/${playlist.id}/tracks`, { tracks: [{ uri: track?.uri }] })
        .then(() => {
          Spicetify.showNotification(`Removed from ${playlist.name}`)
          updateTopBarButton(topBarButton, '+')
        })
        .catch(() => { Spicetify.showNotification(`An error has occured!`) })
      }
    }
  )
  
  await updateTopBar(topBarButton)
  
  // ------------------------------------------------------------
  // Event listeners: update icon (if already in playlist or not)
  // ------------------------------------------------------------

  // On app start
  Spicetify.Player.addEventListener('appchange', async () => {
    await updateTopBar(topBarButton)
  })

  // On song change
  Spicetify.Player.addEventListener("songchange", async () => {
    await updateTopBar(topBarButton)
  })
  

  // ==============================================================================================================
  // ==============================================================================================================
  // ==============================================================================================================

  // ------------------------------------------------------------
  // Create option in ContextMenu

  new Spicetify.ContextMenu.Item(
    'Select playlist',
    // Anonymous function called when selecting a playlist
    async ([uri], [uid] = [], context = undefined) => {
      const oldPlaylist = getPlaylistFromLocalstorage()
      const newPlaylist = await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/playlists/${uri.split(":")[2]}`)

      Spicetify.LocalStorage.set(
        LOCALSTORAGE_PLAYLIST_KEY,
        JSON.stringify({
          name: newPlaylist.name,
          id: newPlaylist.id
        })
      )

      updateStyle(oldPlaylist? oldPlaylist.id : null, newPlaylist.id)    
      Spicetify.showNotification(`Selected playlist "${newPlaylist.name}"`)
      await updateTopBar(topBarButton)
    },
    // Enable "Select playlist" only when right-clicking playlists
    ([uri]) => {
      const type = uri.split(":")[1]
      switch (type) {
        case Spicetify.URI.Type.PLAYLIST:
        case Spicetify.URI.Type.PLAYLIST_V2:
          return true
        default:
          return false
      }
    },
    'playlist-folder'
  ).register()
}

// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================

// Check if current track is in playlist
async function isCurrentTrackInSelectedPlaylist (): Promise<boolean> {
  const track: any = Spicetify.Player.data.track
  const playlist = getPlaylistFromLocalstorage()
  if (!playlist) return false
  const updatedPlaylist = await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/playlists/${playlist.id}`)

  return updatedPlaylist.tracks.items.some((item: any) => item.track.uri === track.uri)
}

// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================

// Update Topbar icon/label
async function updateTopBar (topBarButton: Spicetify.Topbar.Button): Promise<void> {
  updateTopBarButton(topBarButton, '?')

  // first load: no playlist selected
  const playlist = getPlaylistFromLocalstorage()
  if (!playlist) return

  await isCurrentTrackInSelectedPlaylist()
    ? updateTopBarButton(topBarButton, '-')
    : updateTopBarButton(topBarButton, '+')
}

// Update Topbar.Button icon & label
function updateTopBarButton (topBarButton: Spicetify.Topbar.Button, icon: '+' | '-' | '?'): void {
  const playlist = getPlaylistFromLocalstorage()

  switch (icon) {
    case '+':
      topBarButton.icon = ICON_PLUS
      topBarButton.label = `Add to ${playlist.name}`
      break
    case '-':
      topBarButton.icon = ICON_MINUS
      topBarButton.label = `Remove from ${playlist.name}`
      break
    case '?':
      topBarButton.icon = ICON_LOADING
      topBarButton.label = 'Loading...'
      break
  }
}

// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================

// Inject a new class used to highlight selected playlist
function initInjectCss (): void {
  const body = document.body
  const style = document.createElement('style')

  // ----------------------------------------------------------
  // Avoid double injection

  if (!body.classList.contains('quick-add-to-playlist--selected-playlist')) {
    style.innerHTML = `
      .quick-add-to-playlist--selected-playlist {
        background-color: #1c1818 !important;
      }

      .quick-add-to-playlist--selected-playlist span.ListRowTitle__LineClamp-sc-1xe2if1-0:after  {
        position: absolute;
        right: 10px;
        content: " (selected 📂)";
        text-align: right;
        color: gray;
        font-size: 11px;
      }
    `

    body.appendChild(style)
  }

  // ----------------------------------------------------------
  // init selected playlist style

  const playlist = getPlaylistFromLocalstorage()
  if (playlist) updateStyle(null, playlist.id)

  // ----------------------------------------------------------
  // create an observer to watch for playlist folders wrapping

  setTimeout(() => {
    // Select the node that will be observed for mutations
    const targetNode = document.querySelector('.main-rootlist-wrapper')
    if (!targetNode) return

    // Options for the observer (which mutations to observe)
    const config = { attributes: true, childList: true, subtree: true }

    // Callback function to execute when mutations are observed
    const callback = (mutationList: any) => {
      for (const mutation of mutationList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
          const playlist = getPlaylistFromLocalstorage()
          if (playlist) updateStyle(null, playlist.id)
        }
      }
    }

    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback)
    observer.observe(targetNode, config)
  }, 2000)
}

// Add/remove class to playlist's div container
function updateStyle (oldPlaylistId: string | null, newPlaylistId: string | null): void {
  if (oldPlaylistId) {
    const oldPlaylistLink = document.querySelector(`[aria-describedby="onClickHintspotify:playlist:${oldPlaylistId}"]`)
    oldPlaylistLink?.parentElement?.parentElement?.classList.remove('quick-add-to-playlist--selected-playlist')
  }
  
  if (newPlaylistId) {
    const newPlaylistLink = document.querySelector(`[aria-describedby="onClickHintspotify:playlist:${newPlaylistId}"]`)
    newPlaylistLink?.parentElement?.parentElement?.classList.add('quick-add-to-playlist--selected-playlist')
  }
}

// ==============================================================================================================
// ==============================================================================================================
// ==============================================================================================================

function getPlaylistFromLocalstorage () {
  return JSON.parse(Spicetify.LocalStorage.get(LOCALSTORAGE_PLAYLIST_KEY) as string)
}

export default main
