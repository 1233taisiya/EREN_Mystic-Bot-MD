//*رد بوت ساسكي تبع ايتاتشي
// معلش ي ايتاتشي كسلت اعمل واحده 😀
// اعمل واحده بس احط رد تل

let handler = m => m; 
 handler.all = async function (m) { 

   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^ميزوهارا$/i.test(m.text)) { 
     responses = [ 
  'عيون ميزوهارا'
     ]; 
} else if (/^السلام عليكم|سلام عليكم ورحمه الله وبركاته|سلام عليكم|السلام عليكم ورحمه الله وبركاته$/i.test(m.text)) { 
     responses = [ 
       '*وعليكم السلام*',  
     ]; 
   }else if (/^اسيل|اسكانور$/i.test(m.text)) { 
     responses = [ 
'*افضل بنت❄️*'
     ]; 
 }else if (/^ههههههههههههههههههههههههههه|😂😂|😂😂😂$/i.test(m.text)) { 
     responses = [ 
'في شي يضحك 💀'
     ]; 
   }else if (/^كلب|زق|كل زق|كل خرا|كلبه$/i.test(m.text)) { 
     responses = [ 
'*اصص عشان مضربكش عيب الكلام ده*'
   ]; 
   }else if (/^اسكت|اخرس|انطم$/i.test(m.text)) { 
     responses = [ 
'*اخرس انت🐦*',
'*ورع🤭*',
]; 
   }else if (/^تكرهني|اكرهك|اكره$/i.test(m.text)) { 
     responses = [ 
'*ماعاش من يكرهكك حبي 🙁*',
'*لا بس لا تتعب نفسك لحبك🫥*',
'*ااي اكرهك🙄*',   ]; 
     
     }else if (/^هاي|هالو$/i.test(m.text)) { 
     responses = [ 
       '*وش هاي قول/ي السلام عليكم🤨*',  

     ]; 
}else if (/^بحبك/i.test(m.text)) { 
     responses = [ 
       '*هممممممم*'
      'اكرهك',  

     ]; 
   }else if (/^سارق|حرامي|سرقني|$/i.test(m.text)) { 
     responses = [ 
'كلام عن السرقة اقوال عن السرقة عبارات عن السرقة والخيانة السرقة ليست من شيم الشجعان، بل هي من صفات الأشخاص الضعفاء الذين لا يستطيعون الحصول على شيء',
      'عندك دليل عندك شهود؟'
      
     ]; 
   } else if (/^احبك$/i.test(m.text)) { 
     responses = [ 
'ها توكل','😔حبك برص'
     ]; 
     }else if (/^كيفك|$/i.test(m.text)) { 
     responses = [ 
       'بخير',  

     ];
     }else if (/^يحبك|تحبني$/i.test(m.text)) { 
     responses = [ 
       'اقول بررررع',  

     ];
     }else if (/^مادخلك|انقلعي|انقلع$/i.test(m.text)) { 
     responses = [ 
       'ها وش فيك معي؟',  

     ];
     }else if (/^ورع|ورعه$/i.test(m.text)) { 
     responses = [ 
       '*مافي غيرك ورع🦦*',  

     ];
     }else if (/^تفاعلو|تفاعلوا|وينكم|$/i.test(m.text)) { 
     responses = [ 
       '*تفاعل بجيب لك ايفون🤧*',  

     ]; 
     }else if (/^عمك|عمتك$/i.test(m.text)) { 
     responses = [ 
       'اعرف😔✨',  

     ];
     }else if (/^من عمك$/ .test(m.text)) { 
     responses = [ 
       '*انا*',  
     ];
       }else if (/^لوفي$/i.test(m.text)) { 
     responses = [ 
       '*القرصان البائس😔*',  
     ];
            }else if (/^حزن|زعلت|زعلان$/i.test(m.text)) { 
     responses = [ 
       '*ياعيوني خذلك ايفون ولا تزعل🥺*',  
     ];
            }else if (/^جيت|هلا$/i.test(m.text)) { 
     responses = [ 
       'نورت',  
     ];
   }
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 

 export default handler;
