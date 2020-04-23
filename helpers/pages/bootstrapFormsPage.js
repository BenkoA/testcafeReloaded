import { Selector } from 'testcafe';
export default class BootstrapFormsPage {

    constructor () {

        this.title = Selector('h1#content');
        this.readOnlyInput = Selector('input[readonly].form-control');
        this.defaultCheckbox = Selector('input#defaultCheck1').withAttribute('type', 'checkbox');
        this.disabledCheckbox = Selector('input#defaultCheck2').withAttribute('type', 'checkbox');

        this.angularLogoNavbar = Selector('.nav-link.home img');
        this.angularLogoHeroSection = Selector('.hero-logo img');
        this.textInHeroSection = Selector('div.hero-headline');
        this.getStartedButton = Selector('a.button.hero-cta');
        this.searchInput = Selector('input[type="search"]');

        this.apiSection = Selector('div.search-area.ng-star-inserted h3')
            .withText("API")
            .sibling("ul")
            .find('span')
            .withText("Directive");
    }
}