const Test = resolve => require(['@/views/test'], resolve);


export default [{
  path: '/test',
  name: "test",
  component: Test,

}];
