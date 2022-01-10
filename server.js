const Pusher = require('pusher');
    const express = require('express');
    const bodyParser = require('body-parser');
    const cors = require('cors');
    
    const app = express();
    
    app.use(cors());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());
    const pusher = new Pusher({
      appId: '1328462',
      key: '194132d8736033126510',
      secret: '1f12591fca55b38955da',
      cluster: 'ap2',
      encrypted: true
    });
    app.set('PORT', process.env.PORT || 5000);
    app.get("/",(req,res)=>{res.send("helloworld")})
    
    app.post('/message', (req, res) => {
      const payload = req.body;
      console.log("sending to pusher");
      pusher.trigger('chat', 'message', payload);
      res.send(payload);
    });
    
    app.listen(app.get('PORT'), () => 
      console.log('Listening at ' + app.get('PORT')));