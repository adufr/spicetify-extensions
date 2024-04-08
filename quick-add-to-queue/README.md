# quick-add-to-queue

## Install

You can install this extension automatically from the [Spicetify Marketplace](https://github.com/spicetify/spicetify-marketplace) (recommended), or manually with the following steps:

Copy `quick-add-to-queue.js` into your Spicetify extensions directory:
| **Platform** | **Path**                                                                            |
|------------|-----------------------------------------------------------------------------------|
| **Linux**      | `~/.config/spicetify/Extensions` or `$XDG_CONFIG_HOME/.config/spicetify/Extensions/` |
| **MacOS**      | `~/spicetify_data/Extensions` or `$SPICETIFY_CONFIG/Extensions`                      |
| **Windows**    | `%appdata%\spicetify\Extensions\`                                              |

After putting the extension file into the correct folder, run the following command to install the extension:
```
spicetify config extensions quick-add-to-queue.js
spicetify apply
```
Note: using the `config` command to add the extension will always append the file name to the existing extensions list. It does not replace the whole key's value.

Or you can manually edit your `config-xpui.ini` file. Add your desired extension filenames in the extensions key, separated them by the | character.
Example:

```ini
[AdditionalOptions]
...
extensions = quick-add-to-queue.js
```

Then run:

```
spicetify apply
```
