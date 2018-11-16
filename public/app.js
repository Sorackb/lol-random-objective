angular
  .module('randomApp', []);

angular
  .module('randomApp')
  .controller('ObjectiveController', ObjectiveController);

ObjectiveController.$inject = [];

function ObjectiveController() {
  const vm = this;

  const gerar = () => {
    vm.selected = vm.objectives[Math.floor(Math.random() * vm.objectives.length)];
    console.log(vm.selected);
  }

  const init = () => {
    vm.objectives = [
      'Mais Abates',
      'Mais Assistências',
      'Mais Farm',
      'Menos Mortes',
      'Mais Dano',
    ];

    gerar();
  }

  vm.gerar = gerar;
  init();
}