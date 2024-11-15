# Ecosia AI Button Blocker

A Chrome/Firefox extension that blocks/hides AI elements on Ecosia's homepage and search results.

## Installation

1. Download and extract the extension files
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" (toggle in the top right)
4. Click "Load unpacked"
5. Select the folder containing the extension files
6. The extension is now installed!

## Files Included

- `manifest.json` - Extension configuration
- `block.css` - Stylesheet that hides AI elements
- `icon16.png`, `icon48.png`, `icon128.png` - Extension icons
- `.gitignore` - Git ignore rules
- `README.md` - This file

## How It Works

The extension injects a CSS stylesheet at `document_start` on ecosia.org (including subdomains) that hides:

- The AI search button in the header (`data-test-id="ai-search-button"`)
- The AI search button in the omnibox (`data-test-id="omnibox-search-form-ai-search"`)
- The AI search navigation tab (`#search-form-ai-suggestion`)
- The AI overview section on search results (`data-test-id="ai-overview"`)
- AI suggestion links in autocomplete (`.suggestion-link--ai-suggestion`)
- Fallback class-based selectors for resilience (`[class*="ai-search"]`, `[class*="ai-overview"]`, etc.)

## Known Limitations

- The extension relies on CSS selectors targeting Ecosia's DOM structure. If Ecosia significantly changes their markup, the selectors may need updating.

## Uninstallation

Go to `chrome://extensions/` and click "Remove" on this extension.
