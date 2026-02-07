export default function handler(req, res) {
    // Kita ambil 'key' dari parameter URL
    const { key } = req.query;

    if (key === 'agora77') {
        // Jika kunci di URL benar, langsung kasih script Lua asli
        return res.redirect('https://raw.githubusercontent.com/xploitforceofficial-stack/lagserveragora2/refs/heads/main/obfuscated_script-1770458410194.lua');
    }

    // Jika kunci salah atau tidak ada (Browser biasa), kasih spam SKID
    res.setHeader('Content-Type', 'text/html');
    return res.status(200).send(`
        <html>
            <head><title>YOU ARE A SKID</title></head>
            <body style="background:#000;color:red;text-align:center;padding-top:100px;font-family:sans-serif;">
                <h1 style="font-size:100px;">SKID STUPID!</h1>
                <p>ACCESS DENIED: WRONG KEY</p>
            </body>
        </html>
    `);
}
