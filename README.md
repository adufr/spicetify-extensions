# QuickAddToPlaylist

[Spicetify](https://spicetify.app/) extension to add a shortcut for adding current track to a pre-selected playlist.

## Install

Available from the [Spicetify Marketplace](https://github.com/woosy/spicetify-quick-add-to-playlist) or via direct install:

Copy `quick-add-to-playlist.js` into your [Spicetify](https://github.com/khanhas/spicetify-cli) extensions directory:
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

## Usage Details

The extension adds a new option when right-clicking one of your playlist, to select a playlist

![](https://i.imgur.com/cus8IKU.png)

Once you have selected a playlist, you can use the new topbar button to quickly add/remove the current track to the selected playlist

![](https://i.imgur.com/JrgLaUk.png)

This extension is fully compatible all spicetify theme, thanks to its settions section.

You can find it by clicking on your avatar -> Settings -> Quick add to playlist (at the very bottom)
There, you can customize the "selected playlist" background color to match your current theme!

![](https://i.imgur.com/kjkgPrO.png)

## Usage Notes

- If you find any issues, please report them on the [issues page](https://github.com/woosy/spicetify-quick-add-to-playlist/issues/new/choose).


## Upcoming Features

- Feel free to suggest any features in the [issues page](https://github.com/woosy/spicetify-quick-add-to-playlist/issues/new/choose).


## Credits

Made with Spicetify Creator

- https://github.com/FlafyDev/spicetify-creator
