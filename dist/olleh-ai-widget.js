(function() {
  function loadWidget() {
    if (document.getElementById("olleh-ai-widget")) return;

    // Mic button
    const button = document.createElement("div");
    button.id = "olleh-ai-widget";
    button.innerHTML = `
      <div style="position:fixed;bottom:20px;right:20px;z-index:9999;">
        <button id="olleh-mic-btn" style="background:#4F46E5;color:white;padding:12px;border-radius:50%;border:none;cursor:pointer;">
          🎤
        </button>
        <div id="olleh-modal" style="display:none;position:fixed;bottom:80px;right:20px;width:400px;height:500px;background:white;border-radius:12px;box-shadow:0 4px 20px rgba(0,0,0,0.2);overflow:hidden;">
          <div style="display:flex;justify-content:space-between;align-items:center;padding:10px;background:#f3f4f6;">
            <span style="font-weight:bold;">Powered by Olleh AI</span>
            <button id="olleh-close" style="background:none;border:none;font-size:20px;cursor:pointer;">✖</button>
          </div>
          <iframe id="olleh-iframe" src="https://your-domain.com?token=YOUR_TOKEN" style="width:100%;height:calc(100% - 40px);border:none;"></iframe>
        </div>
      </div>
    `;

    document.body.appendChild(button);

    const modal = document.getElementById("olleh-modal");
    document.getElementById("olleh-mic-btn").onclick = () => {
      modal.style.display = "block";
    };
    document.getElementById("olleh-close").onclick = () => {
      modal.style.display = "none";
    };
  }

  if (document.readyState === "complete" || document.readyState === "interactive") {
    loadWidget();
  } else {
    document.addEventListener("DOMContentLoaded", loadWidget);
  }
})();
