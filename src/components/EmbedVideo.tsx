import React from 'react';

type EmbedVideoProps = {
  videoChannel: string;
  aspectRatioPadding: number; // percentage (e.g. 16:9 = 56.34)
  videoId: string;
};

const EmbedVideo: React.FC<EmbedVideoProps> = ({
  videoChannel,
  aspectRatioPadding,
  videoId,
}) => {
  let classNameStr = 'emb-video ';
  let linkStr = '';
  classNameStr += videoChannel;
  linkStr +=
    videoChannel === 'vimeo'
      ? `https://player.vimeo.com/video/${videoId}?title=0&byline=0&portrait=0`
      : '';
  linkStr +=
    videoChannel === 'youtube'
      ? `https://www.youtube.com/embed/${videoId}`
      : '';
  return (
    <div
      className={classNameStr}
      style={{
        paddingBottom: `${aspectRatioPadding}%`,
        paddingTop: videoChannel === 'vimeo' ? '0' : '25px',
      }}
    >
      <iframe
        title="Embedded Video"
        src={linkStr}
        width="320"
        height="180"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
};

export default EmbedVideo;
