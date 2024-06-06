let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: '✦━━ –⊰ ✤ 〔⚡〕✤ ⊱– ━━✦\n\n ⚡️قـائـمـة بوت ميزوهارا⚡️'
            },
            body: {
              text: '> افتح القائمة بالضغط على الزر🔮\n> جميع الاوامر قم بختيار اي امر🏷\n✦━━ –⊰ ✤ 〔⚡〕✤ ⊱– ━━✦'
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                   title: 'دوس عليا 💔',
                   title: '.المطور',
                    sections: [
                      {
                        title: 'List',
                        highlight_label: 'بوت',
                        rows: [
                            {
                            header: '*❯⏐اوامـر الـجـروبـات↞📜*',
                            title: 'ميزو1',
                            description: '',
                            id: '.ميزو1'
                          },
                            {
                            header: '*❯⏐اوامـر الأعـضـاء↞🪽*',
                            title: '.ميزو2',
                            description: '',
                            id: '.ميزو2'
                          },
                            {
                            header: '*❯⏐اوامـر  الـترفـيـه↞🎀*',
                            title: '.ميزو3',
                            description: '',
                            id: '.ميزو3'
                          },
                            {
                            header: '*❯⏐اوامـر  التـحمـيل↞🖨️*',
                            title: '.ميزو4',
                            description: '',
                            id: '.ميزو4'
                          },
                            {
                            header: '*❯⏐اوامـر الـصـور↞☘️*',
                            title: '.ميزو5',
                            description: '',
                            id: '.ميزو5'
                          },
                            {
                            header: '*❯⏐اوامـر الـلـفـل↞🏅*',
                            title: '.ميزو6',
                            description: '',
                            id: '.ميزو6'
                          },
                            {
                            header: '*❯⏐اوامـر الملصقات↞❄️*',
                            title: '.ميزو7',
                            description: '',
                            id: '.ميزو7'
                          },
                            {
                            header: '*❯⏐اوامـر ديـنـيـه↞🕌*',
                            title: '.ميزو8',
                            description: '',
                            id: '.ميزو8'
                          },
                          {
                            header: '*❯⏐اوامـر الـمطـور↞👑*',
                            title: 'بوت',
                            description: '',
                            id: 'بوت'
                          },
                          {
                            header: '*❯⏐جـمـيـع الاوامـر ↞💎*',
                            title: '.ميزو10',
                            description: '',
                            id: '.ميزو10'
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
handler.command = ['القائمة']

export default handler
