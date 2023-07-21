import 'videojs-youtube'

export default function PlayerCSS() {
  return (
    <>
      <h1>The implementation below is without Nullstack functions</h1>
      <div data-vjs-player>
        <video
          id="my-video"
          class="video-js vjs-theme-city"
          playsinline
          controls
          preload="auto"
          data-setup='{
            "techOrder": ["youtube"],
            "sources": [{
              "type": "video/youtube",
              "src": "https://youtu.be/H2i5_A1txGI"
            }]
          }'
        />
      </div>
    </>
  )
}
