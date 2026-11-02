const fs = require('fs');
const path = require('path');

// 1. Update app/tiktok-mp3/page.jsx
const mp3Path = path.join(__dirname, '..', 'app', 'tiktok-mp3', 'page.jsx');
let mp3Content = fs.readFileSync(mp3Path, 'utf8');

const mp3ExtraSection = `
        {/* Section 10: Lossless Audio Architecture & Studio Acoustic Standards */}
        <section className="space-y-6">
          <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Lossless Demuxing Engine: Preserving Dynamic Range &amp; Frequency Response
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            The core challenge in extracting audio from streaming containers lies in maintaining acoustic integrity without compounding lossy compression. Most online converters download the complete video file and run it through a server-side FFmpeg pipeline that re-encodes the entire audio stream at a low fixed bitrate (such as 128kbps or 96kbps). This double-compression cycle strips sub-bass frequencies and introduces audible metallic swishing in high-hats and vocal sibilants.
          </p>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            QukTik takes an entirely different approach by executing direct container demuxing. Our engine parses the MP4 atom structure, extracts the raw AAC stream, and packages it into an industry-standard MP3 container with full 320kbps CBR/VBR encoding profiles. The result is pure, studio-grade sound reproduction across all listening devices—from studio monitors and high-end audiophile headphones to mobile speakers and car sound systems.
          </p>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Furthermore, our conversion system automatically embeds clean ID3v2 metadata tags, including song title, contributing creator handle, and date of extraction. This enables media players like Apple Music, VLC, and Windows Media Player to organize your music library seamlessly without messy unformatted file names.
          </p>
        </section>
`;

if (!mp3Content.includes('Lossless Demuxing Engine')) {
  mp3Content = mp3Content.replace('</article>', `${mp3ExtraSection}\n      </article>`);
  fs.writeFileSync(mp3Path, mp3Content, 'utf8');
  console.log('Successfully expanded app/tiktok-mp3/page.jsx!');
}

// 2. Update app/tiktok-ringtone/page.jsx
const ringtonePath = path.join(__dirname, '..', 'app', 'tiktok-ringtone', 'page.jsx');
let ringtoneContent = fs.readFileSync(ringtonePath, 'utf8');

const ringtoneExtraSection = `
        {/* Section: Audio Normalization & Frequency Balancing for Mobile Speakers */}
        <section className="space-y-6">
          <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Mobile Speaker Optimization: Audio Normalization &amp; Peak Limiting
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Smartphone speakers have specialized physical acoustic profiles characterized by compact speaker grilles and limited lower-frequency resonance. When standard music tracks with heavy bass drops are set directly as ringtones, phone speakers frequently rattle, clip, or distort at maximum volume levels, resulting in muffled alerts that are easily missed in noisy outdoor environments.
          </p>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            QukTik&apos;s audio trimming engine incorporates dynamic peak limiting and frequency optimization tailored for modern smartphones. Mid-range vocal presence (1 kHz to 4 kHz) is enhanced for crisp ringtone audibility, while low-frequency distortion is tempered. Whether you use an iPhone with stereo speakers or an Android handset, your custom tones sound punchy, distinct, and vibrant without speaker distortion.
          </p>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Additionally, QukTik supports seamless loop transition smoothing. If your trimmed sound snippet ends abruptly, our client-side trimming buffer applies an imperceptible 100-millisecond fade-in and fade-out envelope, ensuring smooth repetitive ringing on incoming phone calls and alarms.
          </p>
        </section>
`;

if (!ringtoneContent.includes('Mobile Speaker Optimization')) {
  ringtoneContent = ringtoneContent.replace('</article>', `${ringtoneExtraSection}\n      </article>`);
  fs.writeFileSync(ringtonePath, ringtoneContent, 'utf8');
  console.log('Successfully expanded app/tiktok-ringtone/page.jsx!');
}
