import csrf from 'csurf';

const csrfProtection = csrf({ cookie: true });

app.get('/', csrfProtection, function (req, res) {
    // renderiza o formulário
  });

  
  