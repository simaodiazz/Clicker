const checkAuth = (req, res, next) => {
    // Verificar se o usuário está autenticado
    if (req.session.user) {
      // O usuário está autenticado, continuar para a próxima rota
      next();
    } else {
      // O usuário não está autenticado, redirecionar para a página de login
      res.redirect('./src/public/login');
    }
  };
  
module.exports = {
    checkAuth,
};
