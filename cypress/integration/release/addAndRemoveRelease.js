import {addAndRemoveRelease} from "../../modules/releaseModule/releaseModule"

const AddAndRemoveRelease = new addAndRemoveRelease()



describe('release', () =>{
context('initial', () =>{


    before(function() {
        AddAndRemoveRelease.visit('http://demo.testarena.pl/zaloguj')
        AddAndRemoveRelease.loginProcess('arturgomulka20@gmail.com', 'Qwerty123')
    })

    it('AddRelease', function() {
        AddAndRemoveRelease.addNewRelease('testowe wydanie', 'opis wydanie')
        cy.get('#j_info_box > p').should('include.text', 'Wydanie zostało dodane.')
    });

    it('RemoveRelease', function() {
        AddAndRemoveRelease.removeRelease()
        cy.get('#j_info_box > p').should('include.text', 'Wydanie zostało usunięte.')
    });
})
})