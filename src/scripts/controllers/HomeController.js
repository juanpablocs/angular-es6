/*
  puedes exportar asi: export default class nameClass..
  o también
  puedes exportar asi: class nameClass... export default nameClass
*/

class HomeController {

    constructor(PersonService){
        this.person = {};
        this.personService = PersonService;

        this.getPerson();
    }

    getPerson(){
        this.personService.getPerson().then((person) => {
            this.person = person;
        });
    }

}

HomeController.$inject = ['PersonService'];

export default HomeController;