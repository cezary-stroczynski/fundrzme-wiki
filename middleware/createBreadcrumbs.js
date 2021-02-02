export default function (context) {
  const names = context.route.name.split('-')
  names.forEach((name, i) => {
    switch (name) {
      case 'ethereum':
        name[i] = 'about ethereum'
        break;
      case 'fundrzme':
        name[i] = 'about fundrz:me'
        break;
      case 'project':
        name[i] = 'project account'
        break;
      case 'coins':
        name[i] = 'personal coins'
        break;
      case 'about':
        name[i] = 'your coins'
        break;

      case 'start':
        names[i] = 'getting started'
        break;
    }
  });
  console.log(names);
  context.store.commit('layout/keke')
}
