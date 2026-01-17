# Kaohsiung Trip Itinerary

3박 4일 가오슝 여행 일정표 웹 앱

## Features

- Interactive map with Leaflet.js
- Day-by-day schedule with timeline
- Places page (restaurants + attractions)
- GPS distance calculation
- Transport information
- Packing checklist with localStorage
- Mobile-first responsive design
- Bottom navigation for mobile

## Project Structure

```
trip-itinerary-agent/
├── index.html          # Main HTML (921 lines)
├── css/
│   ├── base.css        # Reset, body, container
│   ├── components.css  # Cards, buttons, markers
│   ├── layout.css      # Header, grids, navigation
│   └── pages.css       # Mobile styles, page-specific
├── js/
│   ├── data.js         # Location data
│   ├── map.js          # Leaflet map initialization
│   ├── navigation.js   # Page/tab navigation
│   ├── places.js       # GPS, distance, filters
│   └── app.js          # Checklist, transport click
└── README.md
```

## Tech Stack

- HTML5 / CSS3 / Vanilla JavaScript
- Leaflet.js (interactive maps)
- Font Awesome (icons)
- OpenStreetMap (tiles)
- LocalStorage (checklist persistence)

## Usage

1. Clone the repository
2. Open `index.html` in a browser, or
3. Serve with any static file server:

```bash
python -m http.server 8000
```

## Pages

| Page | Description |
|------|-------------|
| Home | Trip info, flight details |
| Schedule | Day tabs, timeline, map |
| Places | Restaurants, attractions with GPS |
| Transport | MRT, ferry, taxi info |
| Checklist | Packing list, budget |

## License

MIT
