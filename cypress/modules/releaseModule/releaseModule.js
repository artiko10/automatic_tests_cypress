import releaseModuleSelectors from "./releaseModuleSelectors"

export class addAndRemoveRelease{
    
    visit(url){
        cy.visit(url)
    }
    
    loginProcess(email, Password){
        cy.get(releaseModuleSelectors.LOGIN_PANEL.EMAIL_FIELD).type(email)
        cy.get(releaseModuleSelectors.LOGIN_PANEL.PASSWORD_FIELD).type(Password)
        cy.get(releaseModuleSelectors.LOGIN_PANEL.LOGIN_BUTTON).click()
    }

    addNewRelease(nazwa, opis){
        cy.get(releaseModuleSelectors.RELEASE_MODULE.RELEASE_TAB).click()
        cy.get(releaseModuleSelectors.RELEASE_MODULE.ADD_NEW).click()
        cy.get(releaseModuleSelectors.RELEASE_MODULE.NEW_RELEASE_SCREEN.NAME).type(nazwa)
        cy.get(releaseModuleSelectors.RELEASE_MODULE.NEW_RELEASE_SCREEN.STARTING_DATE).click()
        cy.get(releaseModuleSelectors.RELEASE_MODULE.NEW_RELEASE_SCREEN.START_DAY).click()
        cy.get(releaseModuleSelectors.RELEASE_MODULE.NEW_RELEASE_SCREEN.FINISH_DATE).click()
        cy.get(releaseModuleSelectors.RELEASE_MODULE.NEW_RELEASE_SCREEN.END_DAY).click()
        cy.get(releaseModuleSelectors.RELEASE_MODULE.NEW_RELEASE_SCREEN.DESCRIPTION).type(opis)
        cy.get(releaseModuleSelectors.RELEASE_MODULE.NEW_RELEASE_SCREEN.ACTIVE).click()
        cy.get(releaseModuleSelectors.RELEASE_MODULE.NEW_RELEASE_SCREEN.SAVE).click()
      //  cy.get('#j_info_box > p').should('include.text', 'Wydanie zostało dodane.')
    }

    removeRelease(){
        cy.get(releaseModuleSelectors.RELEASE_MODULE.ACTION).click()
        cy.get(releaseModuleSelectors.RELEASE_MODULE.REMOVE).click()
        cy.get(releaseModuleSelectors.RELEASE_MODULE.REMOVE_CONIRM_YES).click()
     //   cy.get('#j_info_box > p').should('include.text', 'Wydanie zostało usunięte.')
    }
  
    
    

}