
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      colors:{
        primary: '#191346',
        white_20:'#FCFCFF',
        white_30:'#EDF0FA',
        White:'#FFFFFF',
        Blue:'#594CC8', 
        purple:'#7068AA',
        grey:'#15181E99',
      

        // gradiant
        Blue_start:'#D7DFFD',
        Blue_end:'#F6F7FA',
          },

        fontFamily:{
          primary :'MadaniArabic-Bold',
          secondary:'MadaniArabic-Regular',
          Belinda:'Belinda'
       

        },
      
        boxShadow :{
          header:'0 .5rem 1rem 1px rgba(0, 0, 0, 0.1)',
          tabs:'10px 10px 10px 1px rgba(0, 0, 0, 0.16)' ,
          cards:'5px 3px 10px 1px rgba(78, 68, 68, 0.16)' ,
          card_primary:'10px 10px 30px 1px rgba(80, 60, 60, 0.2)',


        
       
         

         
        },
        backgroundImage : {
          
          web_hero : 'url(../../public/assets/web/web_hero.png)',
         
      },
     
    },
  },
  plugins: [],
}


