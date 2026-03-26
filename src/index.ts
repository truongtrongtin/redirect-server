export default {
  async fetch(request: Request) {
    const url = new URL(request.url);
    const redirectTarget = `giant-tasks://${url.search}`;

    // Return a beautiful HTML landing page as a fallback
    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Authenticating Giant Tasks...</title>
        <style>
            body { 
                background: #09090b; 
                color: #fafafa; 
                font-family: system-ui, -apple-system, sans-serif;
                display: flex; 
                align-items: center; 
                justify-content: center; 
                height: 100vh; 
                margin: 0; 
                text-align: center;
            }
            .card {
                background: #18181b;
                padding: 2.5rem;
                border-radius: 1.5rem;
                border: 1px solid #27272a;
                box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
                max-width: 400px;
            }
            h1 { font-size: 1.5rem; margin-bottom: 1rem; }
            p { color: #a1a1aa; margin-bottom: 2rem; font-size: 0.9rem; }
            .btn {
                background: #4f46e5;
                color: white;
                padding: 0.75rem 1.5rem;
                border-radius: 0.75rem;
                text-decoration: none;
                font-weight: 600;
                display: inline-block;
                transition: transform 0.2s, background 0.2s;
            }
            .btn:hover { background: #6366f1; transform: translateY(-1px); }
            .btn:active { transform: translateY(0); }
        </style>
    </head>
    <body>
        <div class="card">
            <h1>Almost there!</h1>
            <p>We're trying to redirect you back to the Giant Tasks app. If your browser asks for permission, please click <b>Allow</b>.</p>
            <a href="${redirectTarget}" class="btn">Launch Giant Tasks</a>
            <p style="margin-top: 2rem; font-size: 0.75rem;">If the button doesn't work, ensure Giant Tasks is installed on your computer.</p>
        </div>
        <script>
            window.location.href = "${redirectTarget}";
        </script>
    </body>
    </html>
    `;

    return new Response(html, {
      headers: { "Content-Type": "text/html;charset=UTF-8" },
    });
  },
};
