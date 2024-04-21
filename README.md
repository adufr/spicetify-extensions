# spicetify-extensions

This repository contains all of my [Spicetify](https://spicetify.app/) extensions:
- quick-add-to-playlist
- quick-add-to-queue

## Install

You can install my extensions automatically from the [Spicetify Marketplace](https://github.com/spicetify/spicetify-marketplace) (recommended), or manually with the following steps:

For example, for the "quick-add-to-playlist" extension:
Copy `quick-add-to-playlist.js` into your Spicetify extensions directory:
| **Platform** | **Path**                                                                            |
|------------|-----------------------------------------------------------------------------------|
| **Linux**      | `~/.config/spicetify/Extensions` or `$XDG_CONFIG_HOME/.config/spicetify/Extensions/` |
| **MacOS**      | `~/spicetify_data/Extensions` or `$SPICETIFY_CONFIG/Extensions`                      |
| **Windows**    | `%appdata%\spicetify\Extensions\`                                              |

After putting the extension file into the correct folder, run the following command to install the extension:
```
spicetify config extensions quick-add-to-playlist.js
spicetify apply
```
Note: using the `config` command to add the extension will always append the file name to the existing extensions list. It does not replace the whole key's value.

Or you can manually edit your `config-xpui.ini` file. Add your desired extension filenames in the extensions key, separated them by the | character.
Example:

```ini
[AdditionalOptions]
...
extensions = quick-add-to-playlist.js
```

Then run:

```
spicetify apply
```

## 1. quick-add-to-playlist

The extension adds a new option when right-clicking one of your playlist, to select a playlist

![](https://i.imgur.com/cus8IKU.png)

Once you have selected a playlist, you can use the new topbar button to quickly add/remove the current track to the selected playlist

![](https://i.imgur.com/JrgLaUk.png)

This extension is fully compatible all spicetify theme, thanks to its settions section.

You can find it by clicking on your avatar -> Settings -> Quick add to playlist (at the very bottom)
There, you can customize the "selected playlist" background color to match your current theme!

![](https://i.imgur.com/kjkgPrO.png)

## 2. quick-add-to-queue

The extension adds a new button next to the like button to quickly add a song to the queue.

*Heavily inspired by [ohitstom's quickQueue](https://github.com/ohitstom/spicetify-extensions/tree/main/quickQueue)*

![](https://imgur.com/7V6MYeq.png)
