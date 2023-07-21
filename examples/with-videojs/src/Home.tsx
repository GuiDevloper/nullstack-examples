import Player from './components/Player'
import PlayerCSS from './components/PlayerCss'

export default function Home() {
  const videoJsOptions = {
    techOrder: ['youtube'],
    autoplay: false,
    controls: true,
    sources: [
      {
        src: 'https://youtu.be/77qeq6cSHG8',
        type: 'video/youtube',
      },
    ],
  }

  return (
    <>
      <Player {...videoJsOptions} />
      <PlayerCSS />
    </>
  )
}
