require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');

const auth = require('./controllers/authController');
const authCheck = require('./middleware/authMiddleware');
const boot = require('./controllers/bootController');


const app = express();

const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env;

app.use(express.json());
// app.use(express.static(`${__dirname}/../build`));

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24
    }
  })
);

//Auth endpoints
app.post('/api/auth/register', auth.register);
app.post('/api/auth/login', auth.login);
app.get('/api/auth/user', auth.getUser);
app.delete('/api/auth/logout', auth.logout);

//Boot endpoints
// app.get('/api/boot/boot');
// app.get('/api/boot/boot/:id');
app.post('/api/boot/add', boot.addBoot);
// app.post('/api/boot/wear');
// app.post('/api/boot/cc');
// app.put('/api/boot/:id');
app.delete('/api/boot/:id', boot.deleteBoot);

//User endpoints
app.put('/api/user/:editType');
app.delete('/api/user/delete');

//Friend endpoints
// app.get('/api/friend/people');
// app.get('api/friend/people/:id');
// app.post('/api/friend/people');
// app.delete('/api/friend/people');
// app.get('/api/friend/list');
// app.get('api/friend/list/:id');

// Password Reset
// app.put('/api/pwdReset/reqest', passwordReset.resetPwdEmail);
// app.put('/api/pwdReset/submit/:token', passwordReset.processReset);


massive({
  connectionString: CONNECTION_STRING,
  // @ts-ignore
  ssl: { rejectUnauthorized: false }
})
  .then((dbInstance) => {
    app.set('db', dbInstance);
    app.listen(SERVER_PORT, () => console.log(`DB and Server Connected to Port ${SERVER_PORT}`));
  })
  .catch((err) => console.log(err));