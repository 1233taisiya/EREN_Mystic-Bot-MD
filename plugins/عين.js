
let timeout = 60000
let poin = 500
let handler = async (m, { conn, command, usedPrefix }) => {
    conn.tebakbendera = conn.tebakbendera ? conn.tebakbendera : {}
    let id = m.chat
    if (id in conn.tebakbendera) {
        conn.reply(m.chat, '❐┃لم يتم الاجابة علي السؤال بعد┃❌ ❯', conn.tebakbendera[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/1233taisiya/EREN_BOT/master/plugins/%D9%81%D8%B1%D9%8A%D8%A8%D9%8A%D9%83.js')).json()
  let json = src[Math.floor(Math.random() * src.length)]
    let caption = `*˼‏❖˹┇⇠『السؤال ${command.toUpperCase()}』*
  *「✧|────✦❯◇❮✦────|✧」*
  *〄↞┇الـوقـت⏱️↞ ${(timeout / 1000).toFixed(2)}┇*
  *〄↞┇الـجـائـزة🎖↞ ${poin} ┇*
  *「✧|────✦❯◇❮✦────|✧」*
   > استخدم انسحب للأنسحاب‼️
   *✧━ • ━ 「 ✤ 」 ━ • ━✧*
   > ❯⏐ 𝐵𝛩𝑇 𝑀𝐼𝑍𝑈𝐻𝐴𝑅𝐴
     `.trim()
    conn.tebakbendera[id] = [
        await conn.sendFile(m.chat, json.img, '', caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakbendera[id]) conn.reply(m.chat, `*❮ 💧┇انتهي الوقت┇💧❯*\n*⎔↞┇الاجـابـة⚡↞ ${json.name}┇*`, conn.tebakbendera[id][0])
            delete conn.tebakbendera[id]
        }, timeout)
    ]
}
handler.help = ['guessflag']
handler.tags = ['game']
handler.command = /^عين/i

export default handler
