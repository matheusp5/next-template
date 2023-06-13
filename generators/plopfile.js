module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'Gerar um novo componente TypeScript com rota',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Qual é o nome do componente? (ex: Dashboard)',
      },
      {
        type: 'input',
        name: 'route',
        message: 'Qual é o caminho da rota? (ex: /dashboard)',
      },
    ],
    actions: [
      {
        type: 'add',
        path: __dirname + '/../src/app/{{route}}/page.tsx',
        templateFile: 'templates/page.handlebars',
        force: true,
      },
    ],
  });
  plop.setGenerator('auth', {
    description: 'Gerar estrutura para autenticação',
    prompts: [],
    actions: [
      {
        type: 'add',
        path: __dirname + '/../src/app/api/auth/[...nextauth]/route.ts',
        templateFile: 'templates/auth.handlebars',
        force: true,
      },
    ],
  });
};
