import Nullstack, { NullstackClientContext } from 'nullstack'

import videojs from 'video.js'
import 'videojs-youtube'

interface PlayerProps {
  /**
   *
   */
  techOrder: string[]
  /**
   * Is autoplay enabled for this video?
   */
  autoplay: boolean
  /**
   * Should this video have controls?
   */
  controls: boolean
  /**
   * A list of video sources.
   */
  sources: {
    /**
     * The source url.
     */
    src: string
    /**
     * The type of source
     */
    type: string
  }[]
}

/**
 * A simple video player component for displaying videos from external websites.
 * @returns A Video.js video player element.
 */
class Player extends Nullstack<PlayerProps> {

  videoEl: HTMLVideoElement
  player: ReturnType<typeof videojs>

  onVideo({ element, ...props }: NullstackClientContext<PlayerProps>) {
    this.videoEl = element as HTMLVideoElement
    // our video.js player
    this.player = videojs(this.videoEl, {
      techOrder: props.techOrder,
      autoplay: props.autoplay,
      controls: props.controls,
      sources: props.sources,
    })
  }

  terminate() {
    this.player.dispose()
  }

  render() {
    return (
      <>
        <h1>The implementation below is using Nullstack functions</h1>
        <div data-vjs-player>
          <video ref={this.onVideo} class="video-js" playsinline />
        </div>
      </>
    )
  }

}

export default Player
