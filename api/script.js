export default function handler(req, res) {
    // Cek apakah ada password 'agora-secret' di header
    const auth = req.headers['x-auth'];

    if (auth === 'agora-secret') {
        // Jika password BENAR, kirim script Lua asli
        return res.redirect('https://raw.githubusercontent.com/xploitforceofficial-stack/lagserveragora2/refs/heads/main/obfuscated_script-1770458410194.lua');
    }

    // Jika password SALAH atau dibuka lewat Browser, kirim halaman TROLL
    res.setHeader('Content-Type', 'text/html');
    return res.status(200).send(`
        <!DOCTYPE html>
        <html>
        <head><title>YOU ARE A SKID</title></head>
        <body style="background:#000;color:red;text-align:center;font-family:sans-serif;padding-top:100px;">
            <h1 style="font-size:80px;">SKID STUPID!</h1>
            <p>ACCESS DENIED: YOUR IP HAS BEEN LOGGED</p>
        </body>
        </html>
    `);
}
