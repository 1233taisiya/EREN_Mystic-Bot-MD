let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `*${taguser}*\n *「يـاورع خـلاص تـعبـت وانـا ارد 🙄」*`;

    conn.sendFile(m.chat, 'https://telegra.ph/file/c55c0eb6afb55c3dc5077.jpg', 'image.jpg', message, m);
};

handler.customPrefix = /^(ارثر)$/i;
handler.command = new RegExp;

export default handler;
