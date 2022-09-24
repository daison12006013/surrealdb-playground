const documents: { [key: string]: { [key: string]: any } } = {
  'how-to': {
    showRepl: false,
    title: 'How to?',
  },
  'define-namespace': {
    showRepl: true,
    title: 'Define Namespace',
    query: 'DEFINE NAMESPACE testns',
    namespace: '',
    database: '',
  },
  'define-database': {
    showRepl: true,
    title: 'Define Database',
    query: 'DEFINE DATABASE testdb',
    namespace: 'testns',
    database: '',
  },
  'using-info': {
    showRepl: true,
    title: 'Using INFO',
    textareaHeight: 'h-32',
    query: "INFO FOR KV;\nINFO FOR NS;\nINFO FOR DB;",
    namespace: 'testns',
    database: 'testdb',
  },
}

export default documents
