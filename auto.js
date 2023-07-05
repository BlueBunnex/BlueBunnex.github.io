// potentially put this script in head, then call various functions on body onload depending on page needs, but w/e

// home button
document.body.innerHTML += `
<a onclick="location.href = 'index.html';" style="transition-duration: 0.2s; cursor: pointer; padding: 10px; border-radius: 10px; position: absolute; top: 10px; left: 10px; background: var(--ten-dark); color: var(--thirty);">
  <i class="fa-solid fa-arrow-left"></i>
  <i class="fa-solid fa-house"></i>
</a>`;

// copyright at bottom
document.body.innerHTML += `<!-- copyright -->
<br><br>
<span style="text-align: center; color: var(--ten-dark); font-size: 12px; width: 100%; position: absolute; bottom: 10px; transform: translateX(-50%);">
    © 2023 Kitsumitsu46. All Rights Reserved. <i class="fa-solid fa-heart" style="color: pink;"></i>
</span>`;
