const API_URL = 'https://all-sport-live-stream.p.rapidapi.com/api/v6/play-stream';
const API_HOST = 'all-sport-live-stream.p.rapidapi.com';

const apiKeyInput = document.getElementById('apiKey');
const loadBtn = document.getElementById('loadBtn');
const statusEl = document.getElementById('status');
const channelListEl = document.getElementById('channelList');
const playerEl = document.getElementById('player');
const selectedChannelEl = document.getElementById('selectedChannel');

const savedKey = localStorage.getItem('rapidapi-key');
if (savedKey) {
  apiKeyInput.value = savedKey;
}

loadBtn.addEventListener('click', loadChannels);

async function loadChannels() {
  const apiKey = apiKeyInput.value.trim();

  if (!apiKey) {
    setStatus('Please enter your x-rapidapi-key first.', true);
    return;
  }

  localStorage.setItem('rapidapi-key', apiKey);
  setStatus('Loading channels...');
  channelListEl.innerHTML = '';
  playerEl.removeAttribute('src');
  selectedChannelEl.textContent = 'No channel selected.';

  try {
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': apiKey,
        'x-rapidapi-host': API_HOST
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const rawText = await response.text();
    const payload = safeParseJSON(rawText);
    const channels = normalizeChannels(payload);

    if (!channels.length) {
      setStatus('No playable channels were found in the API response.', true);
      return;
    }

    renderChannelButtons(channels);
    selectChannel(channels[0], 0);
    setStatus(`Loaded ${channels.length} channels.`);
  } catch (error) {
    setStatus(`Unable to load channels: ${error.message}`, true);
  }
}

function safeParseJSON(value) {
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
}

function normalizeChannels(payload) {
  const items = Array.isArray(payload)
    ? payload
    : Array.isArray(payload?.data)
      ? payload.data
      : Array.isArray(payload?.result)
        ? payload.result
        : [payload];

  return items
    .map((item, index) => {
      const streamUrl = findStreamUrl(item);
      if (!streamUrl) {
        return null;
      }

      const name =
        item?.name ||
        item?.title ||
        item?.channel ||
        item?.event ||
        `Channel ${index + 1}`;

      return { name, streamUrl };
    })
    .filter(Boolean);
}

function findStreamUrl(input) {
  if (!input) {
    return null;
  }

  if (typeof input === 'string') {
    return isLikelyStreamUrl(input) ? input : null;
  }

  if (Array.isArray(input)) {
    for (const item of input) {
      const nested = findStreamUrl(item);
      if (nested) {
        return nested;
      }
    }
    return null;
  }

  const preferredFields = ['stream_url', 'url', 'playUrl', 'link', 'm3u8', 'hls'];
  for (const field of preferredFields) {
    const value = input[field];
    if (typeof value === 'string' && isLikelyStreamUrl(value)) {
      return value;
    }
  }

  for (const value of Object.values(input)) {
    const nested = findStreamUrl(value);
    if (nested) {
      return nested;
    }
  }

  return null;
}

function isLikelyStreamUrl(value) {
  return /^https?:\/\//i.test(value);
}

function renderChannelButtons(channels) {
  channelListEl.innerHTML = '';
  channels.forEach((channel, index) => {
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.className = 'channel-btn';
    button.textContent = channel.name;
    button.addEventListener('click', () => selectChannel(channel, index));
    li.append(button);
    channelListEl.append(li);
  });
}

function selectChannel(channel, index) {
  playerEl.src = channel.streamUrl;
  playerEl.play().catch(() => {
    // Autoplay can be blocked by browser policies.
  });

  selectedChannelEl.textContent = `${channel.name}: ${channel.streamUrl}`;

  [...document.querySelectorAll('.channel-btn')].forEach((btn, btnIndex) => {
    btn.classList.toggle('active', btnIndex === index);
  });
}

function setStatus(message, isError = false) {
  statusEl.textContent = message;
  statusEl.style.color = isError ? '#ff7b72' : '#8b949e';
}
