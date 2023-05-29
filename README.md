# Middleware
Middleware é uma função intermediária que tem acesso ao objeto request e ao objeto de resposta.

A função do middleware pode executar uma lógica específica e, em seguida, decidir se passa a solicitação para o próximo middleware na cadeia de execução, chamando a função `next()`.

Os middlewares permitem a modularização e reutilização de funcionalidades em um aplicativo web. Eles podem ser usados para realizar várias tarefas, como autenticação de utilizadores, manipulação de erros, processamento de dados, logging, entre outros.