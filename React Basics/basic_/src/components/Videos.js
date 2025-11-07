import React, { useState } from "react";
import ReactPlayer from "react-player";

function Videos() {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);

  // Sample video URLs - using popular demo videos
  const videos = [
    {
      id: 1,
      title: "Sample Video 1",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      description: "YouTube video example",
    },
    {
      id: 2,
      title: "Sample Video 2",
      url: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
      description: "Another YouTube video example",
    },
  ];

  const [currentVideo, setCurrentVideo] = useState(videos[0].url);

  return (
    <main className="main">
      <section className="welcome-section">
        <h2>Video Player 🎬</h2>
        <p>Testing React Player component with video playback controls.</p>
      </section>

      <section className="video-section">
        <div className="video-player-wrapper">
          <ReactPlayer
            url={currentVideo}
            playing={playing}
            volume={volume}
            controls={true}
            width="100%"
            height="400px"
          />
        </div>

        <div className="video-controls">
          <button onClick={() => setPlaying(!playing)}>
            {playing ? "⏸️ Pause" : "▶️ Play"}
          </button>

          <div className="volume-control">
            <label>Volume: {Math.round(volume * 100)}%</label>
            <input
              type="range"
              min={0}
              max={1}
              step={0.1}
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
            />
          </div>
        </div>
      </section>

      <section className="video-list-section">
        <h3>Select a Video:</h3>
        <div className="video-list">
          {videos.map((video) => (
            <div
              key={video.id}
              className="video-card"
              onClick={() => {
                setCurrentVideo(video.url);
                setPlaying(false);
              }}
            >
              <h4>{video.title}</h4>
              <p>{video.description}</p>
              <button>Load Video</button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Videos;
