import React from "react";
import VideoPlayer from "./VideoPlayer";
import "../components/PembelajaranInteraktif.css";

const PembelajaranInteraktif = () => {
  return (
    <div className="pembelajaran-container">
      <div className="videoplayer-cards">
        <VideoPlayer src="https://example.com/my-video.mp4" type="video/mp4" />
        <div className="pembelajaran-videos-outer">
          <div className="pembelajaran-videos-container">
            <div className="pembelajaran-video-card">
              <img
                src="https://i.pinimg.com/564x/0b/76/e9/0b76e9a77cb6daad1ae8a7f2dcef4134.jpg"
                alt="thumbnail"
              />
              <div className="pembelajaran-video-details">
                <h1>Tips Menangani Kecemasan dalam Kehidupan Sehari-hari</h1>
                <p>7:47</p>
              </div>
            </div>
            <div className="pembelajaran-video-card">
              <img src="https://i.pinimg.com/564x/59/c6/df/59c6df6642138a56ac9abd98735bbbdd.jpg" alt="thumbnail" />
              <div className="pembelajaran-video-details">
                <h1>Menghadapi Kecemasan dan Anxiety di Tempat Kerja</h1>
                <p>23:55</p>
              </div>
            </div>
            <div className="pembelajaran-video-card">
              <img src="https://i.pinimg.com/564x/cf/82/86/cf8286aace64eea16323f33d003bf00c.jpg" alt="thumbnail" />
              <div className="pembelajaran-video-details">
                <h1>
                  Meditasi untuk Menenangkan Pikiran dan Mengatasi Kecemasan
                </h1>
                <p>12:09</p>
              </div>
            </div>
            <div className="pembelajaran-video-card">
              <img src="https://i.pinimg.com/736x/22/1f/8c/221f8c199c4aaa64872bf70704338474.jpg" alt="thumbnail" />
              <div className="pembelajaran-video-details">
                <h1>Psikolog Berbagi Tips Mengatasi Kecemasan Sosial</h1>
                <p>10:28</p>
              </div>
            </div>
            <div className="pembelajaran-video-card">
              <img src="https://i.pinimg.com/236x/59/06/78/590678940bf23ad0c8851cf6d2868d79.jpg" alt="thumbnail" />
              <div className="pembelajaran-video-details">
                <h1>
                  Menemukan Kebahagiaan dalam Kehidupan Meski Terus Menderita
                  Anxiety
                </h1>
                <p>12:46</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PembelajaranInteraktif;
