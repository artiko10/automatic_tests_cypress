module.exports = {

	LOGIN_PANEL: {
		EMAIL_FIELD: '#email',
		PASSWORD_FIELD: '#password',
		LOGIN_BUTTON: '#login',
	},

	RELEASE_MODULE:{
		RELEASE_TAB: '.menu > :nth-child(3) > a',
		ADD_NEW: '.button_link',
		ACTION: ':nth-child(1) > :nth-child(6) > nav > .action_list > .popbox > #action_icon',
		REMOVE: ':nth-child(1) > :nth-child(6) > nav > .action_list > .popbox > .collapse > .box > :nth-child(4) > .j_delete_release',
		REMOVE_CONIRM_YES: ':nth-child(1) > .ui-button-text',

		NEW_RELEASE_SCREEN:{
			NAME: '#name',
			STARTING_DATE: '#startDate',
			START_DAY: ':nth-child(3) > :nth-child(3) > .ui-state-default',
			FINISH_DATE: '#endDate',
			END_DAY: ':nth-child(4) > :nth-child(5) > .ui-state-default',
			DESCRIPTION: '#description',
			ACTIVE: '#active',
			SAVE: ':nth-child(1) > #save',
			
		}
	}
	
	
};