let handler = async (m, { conn, args, usedPrefix, command }) => {
    let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `*${taguser}*\n*مـزة كيميتسو❄️*`;

    conn.sendFile(m.chat, 'https://telegra.ph/file/03bef07dfae8c091fec04.jpg', 'image.jpg', message, m);
};
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: '*✧━━ • ━ 「 l✤l 」 ━ • ━━✧*\n\n╮─────✦❯┇💎┇❮✦─────╭*\n*〄┃ بـووت ↞ 🎀『 مـيزوهـارا 』*\n*〄┃وقت التشغيل ↞ ⌛『 دائم』*\n*〄┃لوضـع الـبوت ↞ 🪧『 عـام 』*\n*〄┃الـمـنـصـه ↞ 🌐『 هـيـروكـو』*\n*╯─────✦❯┇💎┇❮✦─────╰* \n❯⏐ 𝐵𝛩𝑇 𝑀𝐼𝑍𝑈𝐻𝐴𝑅𝐴\n*✧━━ • ━ 「 l✤l 」 ━ • ━━✧*\n> جميع الاوامر قم بختيار اي امر🏷\n> افتح القائمة بالضغط على الزل☘️'
            },
            body: {
              text: '*✧━━ • ━ 「 ✤ 」 ━ • ━━✧*\n *〄┃قائمـة الـاوامـر ┃↞ ❮ 🔮 ❯* \n*✧━━ • ━ 「 ✤ 」 ━ • ━━✧*\n> لا تنسى قبل كل امر حط نقطة❗\n> راسل المطور اذا حدث اي عطل🧿'
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: 'دوس للقائمة',
                    sections: [
                      {
                        title: 'List',
                        highlight_label: 'بوت',
                        rows: [
                            {
                            header: '❯⏐اوامـر الـجـروبـات↞📜',
                            title: '.ميزو1',
                            description: '',
                            id: '.ميزو1'
                          },
                            {
                            header: '❯⏐اوامـر الأعـضـاء↞🪽',
                            title: 'ميزو2',
                            description: '',
                            id: '.ميزو2'
                          },
                            {
                            header: '❯⏐اوامـر  الـترفـيـه↞🎀',
                            title: 'ميزو3',
                            description: '',
                            id: '.ميزو3'
                          },
                            {
                            header: '❯⏐اوامـر  التـحمـيل↞🖨️',
                            title: '.ميزو4',
                            description: '',
                            id: '.ميزو4'
                          },
                            {
                            header: '❯⏐اوامـر الـصـور↞☘️',
                            title: '.ميزو5',
                            description: '',
                            id: '.ميزو5'
                          },
                            {
                            header: '❯⏐اوامـر الـلـفـل↞🏅',
                            title: '.ميزو6',
                            description: '',
                            id: '.ميزو6'
                          },
                            {
                            header: '❯⏐اوامـر الملصقات↞❄️',
                            title: '.ميزو7',
                            description: '',
                            id: '.ميزو7'
                          },
                            {
                            header: '❯⏐اوامـر الأصـوات↞🎵',
                            title: '.ميزو8',
                            description: '',
                            id: '.ميزو8'
                          },
                            {
                            header: '❯⏐اوامـر ديـنـيـه↞🕌',
                            title: '.ميزو9',
                            description: '',
                            id: '.ميزو9'
                          },
                            {
                            header: '❯⏐مـعلـومـات الـبـوت↞🪙',
                            title: '.ميزو10',
                            description: '',
                            id: '.ميزو10'
                          },
                          {
                            header: '❯⏐اوامـر الـمطـور↞👑',
                            title: '.ميزو11',
                            description: '',
                            id: '.ميزو11'
                          },
                          {
                            header: '❯⏐جـمـيـع الاوامـر ↞💎',
                            title: '.ميزو12',
                            description: '',
                            id: '.ميزو12'
                          }
                        ]
                      }
                    ]
                  }),
                  messageParamsJson: ''
                }
              ]
            }
          }
        }
      }
    }, {})

}

handler.help = ['info']
handler.tags = ['main']
handler.command = ['القائمة','اوامر']

export default handler
