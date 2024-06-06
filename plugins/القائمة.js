

let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: '*🎗️ قـائـمـة الـاوامــر🎗️*'
            },
            body: {
              text: '🧿 افتح القائمة بواسطة الزر\n🍒 لا تلعب كثير في القائمة'
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: 'دوس عليا 💔',
                    sections: [
                      {
                        title: 'List',
                        highlight_label: 'ON',
                        rows: [
                          {
                            header: '☘️ قـسـم الجروبات',
                            title: '.ميزو1',
                            description: '',
                            id: 'te'
                          },
                            {
                            header: '☘️ قـسـم ',
                            title: '.ميزو2',
                            description: '',
                            id: 'te'
                          },
                            {
                                {
                            header: '☘️ قـسـم الـنـظـام',
                            title: '.ميزو3',
                            description: '',
                            id: 'te'
                          },
                            {
                                {
                            header: '☘️ قـسـم الـنـظـام',
                            title: '.ميزو4',
                            description: '',
                            id: 'te'
                          },
                            {
                                {
                            header: '☘️ قـسـم الـنـظـام',
                            title: '.ميزو5',
                            description: '',
                            id: 'te'
                          },
                            {
                                {
                            header: '☘️ قـسـم الـنـظـام',
                            title: 'ميزو6',
                            description: '',
                            id: 'te'
                          },
                            {
                                {
                            header: '☘️ قـسـم الـنـظـام',
                            title: 'ميزو7',
                            description: '',
                            id: 'te'
                          },
                            {
                                {
                            header: '☘️ قـسـم الـنـظـام',
                            title: 'ميزو8',
                            description: '',
                            id: 'te'
                          },
                            {
                                {
                            header: '☘️ قـسـم الـنـظـام',
                            title: 'ميزو9',
                            description: '',
                            id: 'te'
                          },
                            {
                          {
                            header: '👑 قـسـم الـمـطـور',
                            title: '.ميزو10',
                            description: '',
                            id: 'te'
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
