/* eslint-disable camelcase */
import React from 'react'
import YouTube, { YouTubeProps } from 'react-youtube'

export const Video = () => {
  // const onPlayerReady: YouTubeProps['onReady'] = (event) => {
  //   event.target.pauseVideo()
  // }

  const opts: YouTubeProps['opts'] = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      modestbranding: 1,
      rel: 0,
    },
  }

  return (
    <div>
      <div>aqui está o vídeo</div>
      <YouTube videoId='2g811Eo7K8U' opts={opts} />
    </div>
  )
}
