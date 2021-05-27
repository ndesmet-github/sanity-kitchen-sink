export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60af909d9a0b3800cbc1e9f8',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-c919crwz',
                  apiId: 'bf4b2406-ed22-4d3f-9678-a1fe4c54d716'
                },
                {
                  buildHookId: '60af909e511674009d38e514',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-f1oj4hez',
                  apiId: '6aad10c5-4871-48d3-8479-107e7f59243d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ndesmet-github/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-f1oj4hez.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
