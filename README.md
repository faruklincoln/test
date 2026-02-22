# Sports Streaming Channel (RapidAPI)

Simple frontend app that loads channel stream URLs from:

- `https://all-sport-live-stream.p.rapidapi.com/api/v6/play-stream`

## Run locally

```bash
python3 -m http.server 4173
```

Open `http://localhost:4173`, enter your RapidAPI key, and click **Load Channels**.

## Notes

- The app stores your API key in `localStorage` for convenience.
- Some streams may not play in native browser `<video>` depending on format and CORS.
