# AJAX-App

This project demonstrates loading runtime content (hotspots / info boxes and materials) from remote APIs and wiring those data to the page UI and model renderer.

How the site loads data
- The site fetches two endpoints using the Fetch API:
	- `https://swiftpixel.com/earbud/api/infoboxes` — returns an array of info boxes. These populate hotspot panels (title and text) attached to elements with IDs like `hotspot-1` or to the `.Hotspot` elements in order.
	- `https://swiftpixel.com/earbud/api/materials` — returns an array of materials. These populate the material list UI and each list entry 