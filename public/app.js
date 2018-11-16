angular
  .module('randomApp', []);

angular
  .module('randomApp')
  .controller('ObjectiveController', ObjectiveController);

ObjectiveController.$inject = [];

function ObjectiveController() {
  const vm = this;

  const gerar = () => {
    vm.selected = Math.floor(Math.random() * vm.objectives.length);
    vm.selected2 = Math.floor(Math.random() * vm.roulettes.length);
  }

  const init = () => {
    vm.objectives = [
      { description: 'Mais Abates', icon: 'svg/si-glyph-bed.svg' },
      { description: 'Mais Assistências', icon: 'svg/si-glyph-bed.svg' },
      { description: 'Mais Farm', icon: 'svg/si-glyph-bed.svg' },
      { description: 'Menos Mortes', icon: 'svg/si-glyph-skull.svg' },
      { description: 'Mais Dano', icon: 'svg/si-glyph-bed.svg' },
    ];

    vm.roulettes = [
      { description: 'Pode trocar' },
      { description: 'Não pode trocar' },
    ];

    gerar();
  }

  vm.gerar = gerar;
  init();
}