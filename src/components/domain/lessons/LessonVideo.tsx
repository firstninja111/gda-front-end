import { useEffect, useRef } from 'react'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

import { getStorage, ref, getDownloadURL } from 'firebase/storage'

const VideoJS = ({ src }: any) => {
  const videoRef = useRef(null)

  const getVideoJsOptions = async () => {
    try {
      const storage = getStorage()
      const storageRef = ref(storage, `videos/${src}`)
      const publicVideoUrl = await getDownloadURL(storageRef)

      const videoJsOptions = {
        autoplay: true,
        controls: true,
        responsive: true,
        fluid: true,
        sources: [
          {
            src: publicVideoUrl,
            type: 'video/mp4',
          },
        ],
      }

      return videoJsOptions
    } catch (e) {
      console.debug('Download url error: ', e)
      return null
    }
  }

  useEffect(() => {
    const setVideo = async () => {
      const videoJsOptions = await getVideoJsOptions()

      if (videoJsOptions) {
        const videoElement = videoRef.current
        if (!videoElement) {
          return
        }

        const player = videojs(videoElement, videoJsOptions, () => {})
        player?.autoplay(videoJsOptions.autoplay)
        player?.src(videoJsOptions.sources)
      }
    }

    setVideo()
  }, [src])

  return (
    <div data-vjs-player>
      <video ref={videoRef} className="video-js vjs-big-play-centered w-100" />
    </div>
  )
}

export type LessonVideoProps = {
  src: string
}

const LessonVideo = ({ src }: LessonVideoProps) => {
  return <VideoJS src={src} />
}

export default LessonVideo
