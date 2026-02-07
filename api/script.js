export default function handler(req, res) {
    const userAgent = req.headers['user-agent'] || '';

    // Cek apakah yang akses adalah Browser
    if (userAgent.includes('Mozilla') || userAgent.includes('Chrome') || userAgent.includes('Safari')) {
        res.setHeader('Content-Type', 'text/html');
        return res.status(200).send(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>YOU ARE A SKID</title>
                <style>
                    body { background: #000; color: #ff0000; font-family: 'Comic Sans MS'; text-align: center; }
                    .spam { font-size: 20px; font-weight: bold; display: inline-block; animation: flash 0.1s infinite; }
                    @keyframes flash { 0% { opacity: 1; } 50% { opacity: 0.5; } 100% { opacity: 1; } }
                </style>
            </head>
            <body>
                <h1 style="font-size:100px;">SKID STUPID!</h1>
                <div id="container"></div>
                <script>
                    const container = document.getElementById('container');
                    for (let i = 0; i < 1000; i++) {
                        const span = document.createElement('span');
                        span.className = 'spam';
                        span.innerText = 'SKID STUPID ';
                        container.appendChild(span);
                    }
                </script>
            </body>
            </html>
        `);
    } 

    // Jika lewat Eksekutor (HttpGet), arahkan ke Script Asli
    // Pastikan link GitHub ini benar dan aktif
    res.redirect('https://raw.githubusercontent.com/xploitforceofficial-stack/lagserveragora2/refs/heads/main/obfuscated_script-1770458410194.lua');
}
