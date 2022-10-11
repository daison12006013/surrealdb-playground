const documents: { [key: string]: { [key: string]: any } } = {
  'what-is-surrealdb': {
    showRepl: false,
    title: 'What is SurrealDB?',
  },
  'repl-playground': {
    showRepl: false,
    title: 'R.E.P.L.',
  },
  'how-to': {
    showRepl: false,
    title: 'How to install and Run?',
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
  'create-table': {
    showRepl: true,
    title: 'Using CREATE',
    textareaHeight: 'h-40',
    query_base64: true,
    query: 'REVGSU5FIE5BTUVTUEFDRSB0ZXN0bnM7IFVTRSBucyB0ZXN0bnM7CkRFRklORSBEQVRBQkFTRSB0ZXN0ZGI7IFVTRSBkYiB0ZXN0ZGI7CgotLSBjcmVhdGUgYSBjb21wYW55IHdpdGggYW4gaWQgb2YgInN1cnJlYWxkYiIKLS0gd2hpbGUgdGhlIGNvZm91bmRlcnMgYXJlIG5vdCB5ZXQgY3JlYXRlZApDUkVBVEUgY29tcGFuaWVzOnN1cnJlYWxkYiBTRVQgbmFtZSA9ICdTdXJyZWFsREInLCBjb2ZvdW5kZXJzID0gW3VzZXJzOnRvYmllLCB1c2VyczpqYWltZV07CgotLSBieSBxdWVyeWluZyB0aGUgY29mb3VuZGVycycgbmFtZSwgdGhleSBkb24ndCBleGlzdHMgeWV0LCBidXQgd2UgbWFkZSBzdXJlIHRoZWlyIGlkIHdlcmUgbGlua2VkClNFTEVDVCBjb2ZvdW5kZXJzLioubmFtZSBmcm9tIGNvbXBhbmllczpzdXJyZWFsZGI7CgotLSBub3csIGNyZWF0ZSB0aG9zZSB1c2VycwpDUkVBVEUgdXNlcnM6dG9iaWUgU0VUIG5hbWUgPSAnVG9iaWUnLCBjb21wYW5pZXMubmFtZSA9ICdTdXJyZWFsREInLCBza2lsbHMgPSBbJ1J1c3QnLCAnSmF2YXNjcmlwdCddOwpDUkVBVEUgdXNlcnM6amFpbWUgU0VUIG5hbWUgPSAnSmFtaWUnLCBjb21wYW5pZXMubmFtZSA9ICdTdXJyZWFsREInLCBza2lsbHMgPSBbJ0dvJywgJ1B5dGhvbiddOwoKLS0gYWZ0ZXIgY3JlYXRpbmcgdGhvc2UgYWNjb3VudHMsIHdoZW4gcXVlcnlpbmcgaXQgYWdhaW4sIGl0IHNob3VsZCBzaG93IHRoZWlyIG5hbWVzClNFTEVDVCBjb2ZvdW5kZXJzLioubmFtZSBGUk9NIGNvbXBhbmllczpzdXJyZWFsZGI7Cg==',
    namespace: null,
    database: null,
    showSelectBox: false,
  }
}

export default documents
