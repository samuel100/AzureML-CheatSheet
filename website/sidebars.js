// module.exports = {
//   mainSidebar: {
//     'Getting Started': ['installation', 'cheatsheet'],
//     'Basic Assets': ['workspace', 'compute-targets', 'environment'],
//     'Common Scenarios': ['train-cloud'],
//     'Advanced Scenarios': ['docker-build', 'distributed-training'],
//   }
// };

module.exports = {
  mainSidebar: {
    'Azure ML Cheat Sheet': [
      {
        type: 'category',
        label: 'Getting Started',
        items: ['installation', 'cheatsheet'],
      },
      {
        type: 'category',
        label: 'Basic Assets',
        items: [
          'workspace', 'compute-targets', 'environment',
          {
            type: 'category',
            label: 'Data',
            items: ['datastore', 'dataset']
          }
        ],
      },
      {
        type: 'category',
        label: 'Common Scenarios',
        items: ['script-run-config', 'logging'],
      },
      {
        type: 'category',
        label: 'Advanced Scenarios',
        items: ['docker-build', 'distributed-training'],
      },
    ],
  },
  secondaySidebar: {
    Cookbook: [
      {
        type: 'doc',
        id: 'cbdocs/cookbook',
      },
      {
        type: 'category',
        label: 'Setup',
        items: ['cbdocs/setup-sdk', 'cbdocs/setup-notebook'],
      }
    ]
  }
};
