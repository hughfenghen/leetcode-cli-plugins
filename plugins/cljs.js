var Plugin = require('../plugin');
var config = require('../config');

var plugin = new Plugin(100, 'cljs', '2019.03.16',
  'Plugin compile ClojureScript to js.')

plugin.init = function () {
  config.getAll().sys.langs.push('cljs')
  // console.log('init-----', config.getAll());
}

plugin.getProblem = function (kw, cb) {
  plugin.next.getProblem(kw, function (c, p) {
    p.templates.push({
      text: 'cljs',
      value: 'cljs',
      defaultCode: genCode(p),
    })
    console.log('getCB------', JSON.stringify(p));
    cb(c, p)
  })
}
plugin.showProblem = function (problem, argv) {
  console.log('show---------', JSON.stringify(problem), JSON.stringify(argv));
  plugin.next.showProblem(problem, argv)
}

plugin.testProblem = function (problem, cb) {
  console.log(1111111, 'test cljs');
  plugin.next.testProblem(problem, cb);
}

plugin.submitProblem = function (problem, cb) {
  console.log(1111111, 'submit cljs');
  plugin.next.submitProblem(problem, cb);
}

function genCode(problem) {}

module.exports = plugin