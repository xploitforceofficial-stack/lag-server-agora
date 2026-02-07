export default function handler(req, res) {
    const userAgent = (req.headers['user-agent'] || '').toLowerCase();

    // Daftar kata kunci yang biasanya ada di Browser asli
    const isBrowser = userAgent.includes('mozilla') || 
                      userAgent.includes('chrome') || 
                      userAgent.includes('safari') || 
                      userAgent.includes('edge');

    // Jika ini adalah Browser asli, kasih halaman TROLL
    if (isBrowser) {
        res.setHeader('Content-Type', 'text/html');
        return res.status(200).send(`
            <!DOCTYPE html>
            <html>
            <head><title>YOU ARE A SKID</title></head>
            <body style="background:#000;color:red;text-align:center;font-family:sans-serif;">
                <h1 style="font-size:100px;">SKID STUPID!</h1>
                <p>ACCESS DENIED</p>
            </body>
            </html>
        `);
    } 

    // Jika BUKAN browser (berarti Eksekutor/Roblox), kasih script aslinya
    // Gunakan redirect permanen agar eksekutor langsung mengambil kontennya
    res.redirect(301, 'https://raw.githubusercontent.com/xploitforceofficial-stack/lagserveragora2/refs/heads/main/obfuscated_script-1770458410194.lua');
}
