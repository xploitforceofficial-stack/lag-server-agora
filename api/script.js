export default function handler(req, res) {
    // Kita cek apakah ada header 'x-auth' dengan nilai 'agora-secret'
    const auth = req.headers['x-auth'];

    if (auth === 'agora-secret') {
        // Jika password benar (dari eksekutor), kasih script
        return res.redirect('https://raw.githubusercontent.com/xploitforceofficial-stack/lagserveragora2/refs/heads/main/obfuscated_script-1770458410194.lua');
    }

    // Jika tidak ada password (berarti dibuka lewat browser), kasih spam
    res.setHeader('Content-Type', 'text/html');
    return res.status(200).send(`
        <html>
            <body style="background:#000;color:red;text-align:center;">
                <h1>SKID STUPID!</h1>
            </body>
        </html>
    `);
}
