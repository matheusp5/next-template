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

  plop.setGenerator('prisma', {
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

  plop.setGenerator('prisma', {
    description: 'Configurar o Prisma no projeto',
    prompts: [],
    actions: [
      {
        type: 'add',
        path: 'prisma/.gitkeep',
        template: '',
      },
      {
        type: 'add',
        path: __dirname + '/../prisma/schema.prisma',
        templateFile: 'templates/prisma-schema.handlebars',
      },
      {
        type: 'modify',
        path: 'package.json',
        pattern: /("scripts": \{[^}]+\})/s,
        template: '$1,\n    "prisma:generate": "prisma generate",\n    "prisma:migrate": "prisma migrate dev"',
      },
      {
        type: 'modify',
        path: '.gitignore',
        pattern: /(node_modules\n)/,
        template: '$1prisma/\n',
      },
    ],
  });
};
