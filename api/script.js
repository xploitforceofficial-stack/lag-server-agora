export default function handler(req, res) {
    const userAgent = req.headers['user-agent'] || '';

    // Jika dibuka lewat Browser (Chrome, Firefox, Safari, dll)
    if (userAgent.includes('Mozilla') || userAgent.includes('Chrome') || userAgent.includes('Safari')) {
        res.setHeader('Content-Type', 'text/html');
        return res.status(403).send(`
            <html>
                <head><title>403 Forbidden</title></head>
                <body style="background-color:white; font-family:arial; text-align:center; padding-top:50px;">
                    <h1>403 Forbidden</h1>
                    <p>Access to this resource on the server is denied!</p>
                    <hr><address>Apache/2.4.41 (Ubuntu) Server Port 80</address>
                </body>
            </html>
        `);
    } 

    // Jika diakses lewat eksekutor (HttpGet), arahkan ke script asli
    // Link ini tidak akan muncul di F12 browser
    res.redirect('https://raw.githubusercontent.com/xploitforceofficial-stack/lagserveragora2/refs/heads/main/obfuscated_script-1770458410194.lua');
}
