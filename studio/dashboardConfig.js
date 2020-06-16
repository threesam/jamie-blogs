export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
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
                  buildHookId: '5ee9087d5c2e1480188e1dd2',
                  title: 'Sanity Studio',
                  name: 'jamie-blogs-studio',
                  apiId: '2e115e12-4ae4-40c6-910c-7ee0cbfe3b2d'
                },
                {
                  buildHookId: '5ee9087d67700b74566a91ac',
                  title: 'Blog Website',
                  name: 'jamie-blogs',
                  apiId: '7df95eef-a20b-4b39-ac6a-b488128e7a87'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/salvatoredangelo/jamie-blogs',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://jamie-blogs.netlify.app', category: 'apps'}
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
