import type { BaseTranslation } from '../i18n-types';

const fr: Translation = {
	// SideBar left
	SBL_Search: 'Rechercher ...',
	SBL_Admin: 'Admin',
	SBL_Admin_User: 'Utilisateur Admin',
	SBL_SystemLanguage: 'Langue du système',
	SBL_User: 'Profil utilisateur',
	SBL_isDark: 'Passer à',
	SBL_Light: 'Clair',
	SBL_Dark: 'Sombre',
	SBL_Mode: 'Mode',
	SBL_Version: 'Ver.',
	SBL_Ver: 'Ver.',
	SBL_Save: 'Enregistrer',
	SBL_Save_message: 'Données enregistrées avec succès',
	SBL_SignOut: 'Déconnexion',
	SBL_Configuration: 'System Configuration',
	SBL_GithubDiscussion: 'Github Discussion',

	// Collections
	CollectionCategory_Collection: 'Collection',
	CollectionCategory_Menu: 'Menu',
	CollectionCategory_Media: 'Média',

	// System Builder
	BUILDER_PageTitle: 'Constructeur de système',
	BUILDER_First: 'Créer une première collection pour commencer',
	BUILDER_Save: 'Save',
	BUILDER_AddCategory: 'Ajouter une catégorie',
	BUILDER_AddCollection: 'Ajouter une collection',
	BUILDER_Unassigned: 'Non attribué',

	// SideBar Right

	// ERROR
	ERROR_Pagenotfound: 'Page non trouvée',
	ERROR_Wrong: "Nous sommes désolés, quelque chose s'est mal passé.",
	ERROR_GoHome: "Aller à la page d'accueil",

	//LOADING
	LOADING_Wait: 'Veuillez patienter',
	LOADING_Loading: 'Chargement...',

	// USER
	USER_Setting: 'Paramètres utilisateur',
	USER_ID: 'ID utilisateur',
	USER_Username: "Nom d'utilisateur",
	USER_FirstName: 'Prénom',
	USER_LastName: 'Nom de famille',
	USER_Email: 'Email',
	USER_Password: 'Mot de passe',
	USER_NewPassword: 'Nouveau mot de passe:',
	USER_Edit: 'Modifier les paramètres utilisateur',
	USER_Fail: 'Email déjà utilisé',
	USER_Delete: 'Supprimer',
	USER_Cancel: 'Annuler',
	USER_Save: 'Enregistrer',
	USER_PageTitle: 'Profil utilisateur',
	USER_Edit_Avatar: "Modifier l'avatar",
	USER_Role: 'Rôle',
	USER_Generate: "Générer un jeton d'inscription utilisateur par email",
	USER_ListShow: 'Afficher la liste des utilisateurs',
	USER_ListCollapse: 'Réduire la liste des utilisateurs',
	USER_EmailToken: "Envoyer un jeton d'inscription utilisateur par email",
	USER_ListToken: 'Liste de jetons :',
	USER_ListUser: 'Liste des utilisateurs:',

	//User AdminArea
	USER_AdminArea_title: "Zone d'administration :",
	USER_AdminArea_Blocked: 'Bloqué',
	USER_AdminArea_Avatar: 'Avatar',
	USER_AdminArea_Username: "Nom d'utilisateur",
	USER_AdminArea_Access: 'Dernier accès',
	USER_AdminArea_Sessions: 'Sessions actives',
	USER_AdminArea_ExpiresIn: ' Expiration en ',
	USER_AdminArea_MemberFor: 'Membre pour',
	USER_AdminArea_UserID: 'ID utilisateur',
	USER_AdminArea_Email: 'Email',
	USER_AdminArea_Token: 'Jeton',
	USER_AdminArea_Role: ' Rôle',
	USER_AdminArea_CreatedAt: 'Créé à',
	USER_AdminArea_UpdatedAt: 'Mis à jour le',

	// Media Gallery
	MEDIAGALLERY_Pagetitle: 'Galerie des médias',
	MEDIAGALLERY_Display: 'Affichage',
	MEDIAGALLERY_Grid: 'Grille',
	MEDIAGALLERY_Table: 'Table',
	MEDIAGALLERY_Size: 'Taille',
	MEDIAGALLERY_Small: 'Petit',
	MEDIAGALLERY_Medium: 'Moyen',
	MEDIAGALLERY_Large: 'Grand',

	// Config
	CONFIG_Pagetitle: 'Configuration du système',
	CONFIG_Body: 'Sélectionnez votre configuration',
	CONFIG_SystemBuilder: 'Constructeur de système',

	// Tanstack
	TANSTACK_UserList: 'Liste des utilisateurs:',
	TANSTACK_Column: 'Colonnes',
	TANSTACK_Toggle: 'Tout',
	TANSTACK_Filter: 'Filtres de facettes',
	TANSTACK_Export: 'Export XML',
	TANSTACK_Page: 'Page',
	TANSTACK_of: 'de',
	TANSTACK_Total: 'Total',
	TANSTACK_Row: 'Ligne',
	TANSTACK_Rows: 'Lignes',
	TANSTACK_Yes: 'Oui',
	TANSTACK_No: 'Non',

	//Modal User Token
	MODAL_UserToken_Title: "Générer un nouveau jeton d'enregistrement d'utilisateur",
	MODAL_UserToken_Body: "Fournir le rôle et la validité de l'email de l'utilisateur, puis appuyer sur Envoyer",
	MODAL_UserToken_Role: "Rôle de l'utilisateur:",
	MODAL_UserToken_Validity: 'Validité du jeton:',
	MODAL_UserToken_Cancel: 'Annuler',
	MODAL_UserToken_Send: 'Send',

	//Modal User OAuth
	MODAL_UserOAuth_Title: "Entrez le jeton d'utilisateur pour vous inscrire :",
	MODAL_UserOAuth_Placeholder: 'Entrez le jeton que vous avez reçu',
	MODAL_UserOAuth_Cancel: 'Annuler',
	MODAL_UserOAuth_Submit: 'Inscription à Google',

	//Modal MultiButtonToken
	MODAL_MultiButtonToken_Title: 'Modifier les données du jeton',
	MODAL_MultiButtonToken_Body: 'Modifiez les données de ce jeton et appuyez sur Enregistrer',
	MODAL_MultiButtonToken_DeleteTitle: "Veuillez confirmer la suppression de l'utilisateur",
	MODAL_MultiButtonToken_DeleteBody: 'Êtes-vous sûr de vouloir supprimer cet utilisateur ?',
	MODAL_MultiButtonToken_DeleteButtonText: "Supprimer l'utilisateur",
	MODAL_MultiButtonToken_BlockTitle: "Veuillez confirmer le blocage de l'utilisateur",
	MODAL_MultiButtonToken_BlockBody: 'Êtes-vous sûr de vouloir bloquer cet utilisateur ?',
	MODAL_MultiButtonToken_BlockButtonText: "Bloquer l'utilisateur",
	MODAL_MultiButtonToken_UnBlockTitle: "Veuillez confirmer le déblocage de l'utilisateur",
	MODAL_MultiButtonToken_UnBlockBody: 'Êtes-vous sûr de vouloir débloquer cet utilisateur ?',
	MODAL_MultiButtonToken_UnBlockButtonText: "Débloquer l'utilisateur",

	//Modal User Avatar
	MODAL_UserAvatar_Title: 'Modifiez votre avatar :',
	MODAL_UserAvatar_Body: "Téléchargez une nouvelle image d'avatar et appuyez sur Enregistrer",
	MODAL_UserAvatar_FileSize: 'La taille du fichier doit être inférieure à 5MB',
	MODAL_UserAvatar_Unsupported: 'Formats pris en charge : jpeg, jpg, png, webp, avi , svg, gif',
	MODAL_UserAvatar_FilesAllowed: 'PNG, JPEG, GIF, SVG, WEBP, AVIF autorisés',
	MODAL_UserAvatar_Delete: 'Supprimer',
	MODAL_UserAvatar_Cancel: 'Annuler',
	MODAL_UserAvatar_Save: 'Save',

	//Modal User Edit
	MODAL_UserEdit_Title: "Modifier les données de l'utilisateur:",
	MODAL_UserEdit_Body: 'Modifiez vos données et appuyez sur Enregistrer',
	MODAL_UserEdit_Role: "Rôle d'utilisateur:",
	MODAL_UserEdit_Cancel: 'Annuler',
	MODAL_UserEdit_Save: 'Save',

	//Modal User Delete
	MODAL_UserConfirm_Title: "Veuillez confirmer la suppression de l'utilisateur :",
	MODAL_UserConfirm_Body: 'Ceci ne peut pas être annulé. Êtes-vous sûr de vouloir continuer ?',
	MODAL_UserConfirm_Cancel: 'Annuler',
	MODAL_UserConfirm_Delete: "Supprimer l'utilisateur",

	//Modal Category
	MODAL_Category_Title: 'Modifier la catégorie',
	MODAL_Category_Body: 'Modifiez votre catégorie',
	MODAL_Category_Name: 'Nom de la catégorie:',
	MODAL_Category_Placeholder: 'Nom de la catégorie...',
	MODAL_Category_Delete: 'Supprimer',
	MODAL_Category_Cancel: 'Annuler',
	MODAL_Category_Save: 'Save',

	//Modal Iconpicker
	MODAL_IconPicker_Label: 'Icon:',
	MODAL_IconPicker_Name: 'Nom:',
	MODAL_IconPicker_Placeholder: 'Rechercher une icône...',
	MODAL_IconPicker_Select: 'Select from Google Material Icons',
	MODAL_IconPicker_Previous: 'Précédent',
	MODAL_IconPicker_Next: 'Next',

	// Login
	LOGIN_SignIn: 'Se connecter',
	LOGIN_SignUp: "S'inscrire",
	LOGIN_Required: '* Obligatoire',
	LOGIN_Username: "Nom d'utilisateur",
	LOGIN_EmailAddress: 'Adresse e-mail',
	LOGIN_Password: 'Mot de passe',
	LOGIN_Token: "Jeton d'inscription",
	LOGIN_ConfirmPassword: 'Confirmer le mot de passe',
	LOGIN_ForgottenPassword: 'Mot de passe oublié',
	LOGIN_ForgottenPassword_text: 'Ne vous inquiétez pas. Nous vous aiderons à récupérer votre mot de passe.',
	LOGIN_ForgottenPassword_Toast: 'Le jeton de réinitialisation du mot de passe a également été envoyé par e-mail',
	LOGIN_SendResetMail: 'Envoyer un e-mail de réinitialisation du mot de passe',
	LOGIN_ResetPassword: 'Réinitialiser le mot de passe',
	LOGIN_ResetPasswordSave: 'Enregistrer le nouveau mot de passe',
	LOGIN_ResetPassword_Toast: 'Le jeton de réinitialisation du mot de passe a également été envoyé par e-mail',
	LOGIN_SignInSuccess: 'Connecté avec succès',

	LOGIN_ZOD_Username_string: "Le nom d'utilisateur est requis",
	LOGIN_ZOD_Username_regex: 'Le nom ne peut contenir que des lettres, des chiffres et @$!%*#',
	LOGIN_ZOD_Username_min: 'Le nom doit comporter au moins 2 caractères',
	LOGIN_ZOD_Username_max: 'Le nom ne peut comporter que 24 caractères au maximum',
	LOGIN_ZOD_Email_string: "L'adresse e-mail est requise",
	LOGIN_ZOD_Email_email: "L'adresse e-mail doit être une adresse e-mail valide",
	LOGIN_ZOD_Password_string: 'Le mot de passe est requis',
	LOGIN_ZOD_Password_regex:
		'Le mot de passe doit comporter au moins 8 caractères et contenir au moins une lettre, un chiffre et un caractère spécial.',
	LOGIN_ZOD_Confirm_password_string: 'La confirmation du mot de passe est requise',
	LOGIN_ZOD_Confirm_password_regex:
		'Le mot de passe doit comporter au moins 8 caractères et contenir au moins une lettre, un chiffre et un caractère spécial.',
	LOGIN_ZOD_Token_string: "Un jeton d'authentification est requis",
	LOGIN_ZOD_Password_match: 'Le mot de passe et la confirmation du mot de passe doivent correspondre',

	LOGIN_ZOD_General_Unknown: "Une erreur inconnue s'est produite",
	LOGIN_ZOD_General_Error: 'Entrée invalide',
	LOGIN_ZOD_Email_Error_inUse: "L'adresse e-mail est déjà utilisée",
	LOGIN_ZOD_Email_Error_send: "Erreur lors de l'envoi du courrier électronique.",
	LOGIN_ZOD_Email_Error_Signup: 'LOGIN_ZOD_Signup_unkown',
	LOGIN_ZOD_Email_Error_SignupKey: 'Incorrect email or password.',
	LOGIN_ZOD_Token_Error: 'Token is wrong!',
	LOGIN_ZOD_Token_Expired: 'Token has expired!',
	LOGIN_ZOD_Forgotten_Error: 'No account under this email',
	LOGIN_ZOD_Forgotten_email:
		'Hi there,<br><br>We received a request to reset your password. Your password reset token is:<br><br>{token:string}<br> <br>Please follow the link below to reset your password:<br>{link:string}<br><br>If you did not request this reset, please disregard this message.<br><br>Best regards,<br>The Support Team',

	// Entry List
	ENTRYLIST_Untranslated: 'Aucune donnée',
	ENTRYLIST_Create: 'Créer',
	ENTRYLIST_Publish: 'Publier',
	ENTRYLIST_Unpublish: 'Unpublish',
	ENTRYLIST_Schedule: 'Schedule',
	ENTRYLIST_Clone: 'Clone',
	ENTRYLIST_Delete: 'Supprimer',
	ENTRYLIST_Delete_title: 'Veuillez confirmer la suppression !!',
	ENTRYLIST_Delete_body: 'Êtes-vous sûr de vouloir continuer ?',
	ENTRYLIST_Delete_cancel: 'Annuler',
	ENTRYLIST_Delete_confirm: 'Confirmer',
	ENTRYLIST_Search: 'Rechercher',
	ENTRYLIST_Loading: 'Loading...',
	ENTRYLIST_Modal_title_Create: 'Veuillez confirmer la création du contenu',
	ENTRYLIST_Modal_body_Create: 'Êtes-vous sûr de vouloir créer ce contenu ?',
	ENTRYLIST_Modal_title_Publish: 'Veuillez confirmer la publication du contenu',
	ENTRYLIST_Modal_body_Publish: 'Êtes-vous sûr de vouloir publier ce contenu ?',
	ENTRYLIST_Modal_title_Unpublish: 'Veuillez confirmer la dépublication du contenu',
	ENTRYLIST_Modal_body_Unpublish: 'Êtes-vous sûr de vouloir dépublier ce contenu ?',
	ENTRYLIST_Modal_title_Schedule: "Veuillez confirmer l'horaire du contenu",
	ENTRYLIST_Modal_body_Schedule: 'Êtes-vous sûr de vouloir programmer ce contenu ?',
	ENTRYLIST_Modal_title_Clone: 'Veuillez confirmer le clonage du contenu',
	ENTRYLIST_Modal_body_Clone: 'Êtes-vous sûr de vouloir cloner ce contenu ?',
	ENTRYLIST_Modal_title_Delete: 'Veuillez confirmer la suppression du contenu',
	ENTRYLIST_Modal_body_Delete: 'Êtes-vous sûr de vouloir supprimer ce contenu ?',
	ENTRYLIST_Modal_Cancel: 'Annuler',

	// Fields

	// Form
	FORM_Create: 'Create',
	FORM_CloseMenu: 'Close Menu',
	FORM_TT_Closes: 'Close without saving',
	FORM_Required: 'Required',

	// Alert

	// Email
	EMAIL_Welcome_Title: 'Bienvenue à {PUBLIC_SITENAME}',
	EMAIL_Welcome_Meta: 'Bienvenue à {PUBLIC_SITENAME}',
	EMAIL_Welcome_Preview: 'Bienvenue à {PUBLIC_SITENAME}',
	EMAIL_Welcome_Username: 'Cher {username},',
	EMAIL_Welcome_Sitename: 'Bienvenue à {PUBLIC_SITENAME} - aun CMS Headless flexible propulsé par Sveltekit.',
	EMAIL_Welcome_SimpleCMS:
		'SimpleCMS est un headless CMS rapide et flexible qui vous permet de gérer facilement votre contenu. Avec Sveltekit qui alimente notre plateforme, vous pouvez vous attendre à une expérience transparente et efficace.',
	EMAIL_Welcome_Discussion1: "Si vous avez des questions ou si vous avez besoin d'aide pour démarrer, veuillez consulter notre Q&A sur Github",
	EMAIL_Welcome_Discussion2: 'Discussion sur SimpleCMS.',
	EMAIL_Welcome_Thanks: "Merci d'avoir choisi SimpleCMS. Nous sommes ravis de vous compter parmi nous !",
	EMAIL_Welcome_Button: 'Aller sur {PUBLIC_SITENAME}',
	EMAIL_Welcome_Footer: 'Votre équipe {PUBLIC_SITENAME} Team',

	EMAIL_Forgotten_Title: 'Réinitialiser votre mot de passe pour {PUBLIC_SITENAME}',
	EMAIL_Forgotten_Meta: 'Réinitialiser votre mot de passe pour {PUBLIC_SITENAME}',
	EMAIL_Forgotten_Preview: 'Réinitialiser votre mot de passe pour {PUBLIC_SITENAME}',
	EMAIL_Forgotten_Hello: 'Bonjour {email}',
	EMAIL_Forgotten_Request: 'Vous avez demandé à réinitialiser votre mot de passe pour accéder à {PUBLIC_SITENAME}',
	EMAIL_Forgotten_Token: 'Votre Token de réinitialisation:',
	EMAIL_Forgotten_Valid: "N'est valable que pour:",
	EMAIL_Forgotten_Ignore: "Si vous n'avez pas demandé cette réinitialisation, veuillez ignorer cet e-mail",
	EMAIL_Forgotten_Press: "Veuillez appuyer sur le bouton pour réinitialiser votre mot de passe si vous ne l'avez pas encore fait",
	EMAIL_Forgotten_Button: 'Réinitialiser le mot de passe',
	EMAIL_Forgotten_Team: 'Votre équipe {PUBLIC_SITENAME} Team',

	EMAIL_UpdatePW_Title: 'Votre mot de passe pour {PUBLIC_SITENAME} a été modifié',
	EMAIL_UpdatePW_Meta: 'Votre mot de passe pour {PUBLIC_SITENAME} a été modifié',
	EMAIL_UpdatePW_Preview: 'Votre mot de passe pour {PUBLIC_SITENAME} a été modifié',
	EMAIL_UpdatePW_Hello: 'Bonjour {username},',
	EMAIL_UpdatePW_Success: 'Vous avez modifié avec succès votre mot de passe pour {PUBLIC_SITENAME}',
	EMAIL_UpdatePW_Contact: "Si vous n'avez pas demandé ce changement, veuillez contacter l'administrateur de votre site",
	EMAIL_UpdatePW_Team: 'Votre équipe {PUBLIC_SITENAME} Team',

	EMAIL_UserToken_Title: "Jeton d'enregistrement de l'utilisateur pour {PUBLIC_SITENAME}",
	EMAIL_UserToken_Meta: "Jeton d'enregistrement de l'utilisateur pour {PUBLIC_SITENAME}",
	EMAIL_UserToken_Preview: "Jeton d'enregistrement de l'utilisateur pour {PUBLIC_SITENAME}",
	EMAIL_UserToken_Access: "Vous avez reçu un jeton d'accès pour créer un nouvel utilisateur pour {PUBLIC_SITENAME}",
	EMAIL_UserToken_Email: 'Email:',
	EMAIL_UserToken_Token: "Jeton d'accès:",
	EMAIL_UserToken_Role: 'Rôle attribué :',
	EMAIL_UserToken_Valid: 'Valable uniquement pour :',
	EMAIL_UserToken_Press: 'Veuillez appuyer sur le bouton pour configurer votre utilisateur avec cet e-mail',
	EMAIL_UserToken_Button: 'Créer un utilisateur',
	EMAIL_UserToken_Team: 'Votre équipe {PUBLIC_SITENAME} Team',

	// Collections
	COLLECTION_TEST_User: 'User',
	COLLECTION_TEST_Prefix: 'Prefix',
	COLLECTION_TEST_Prefix_data: ['Mr.', 'Ms.', 'Mrs.', 'Dr.'],
	COLLECTION_TEST_Prefix_placeholder: 'Enter Prefix',
	COLLECTION_TEST_First: 'First',
	COLLECTION_TEST_First_placeholder: 'Enter First Name',
	COLLECTION_TEST_Middle: 'Middle',
	COLLECTION_TEST_Middle_placeholder: 'Middle  (ReadOnly)',
	COLLECTION_TEST_Last: 'Last',
	COLLECTION_TEST_Last_placeholder: 'Enter Last Name',

	COLLECTION_TEST_Full_Text_Option: 'Full Text Option',
	COLLECTION_TEST_Full_Text_Option_Placeholder: 'Enter full text',

	// Widgets
	WIDGET_MegaMenu_title: "Veuillez saisir un nom pour votre menu avant d'ajouter des catégories de menu.",
	WIDGET_MegaMenu_Next: 'Suivant',

	WIDGET_Address_SearchMap: 'Search in Map ...',
	WIDGET_Address_GetAddress: 'Get from Address',
	WIDGET_Address_GetMap: 'Get from Address',
	WIDGET_Address_Geocoordinates: 'Geocoordinates',
	WIDGET_Address_Latitude: 'Latitude',
	WIDGET_Address_Longitude: 'Longitude',
	WIDGET_Address_Name: 'Name',
	WIDGET_Address_Street: 'Street address',
	WIDGET_Address_Zip: 'ZIP or Postal Code',
	WIDGET_Address_City: 'City',
	WIDGET_Address_SearchCountry: 'Search Country ...',

	WIDGET_Relation_ChoseExisting: 'Chose existing...',
	WIDGET_Relation_Edit: 'Edit',
	WIDGET_Relation_AddNew: 'Add New',

	WIDGET_Seo_Suggestion_TitlePerfect: 'Your title is more than 50 characters. Perfect!',
	WIDGET_Seo_Suggestion_TitleGood: 'Your title is more than 30 characters. Try 50+. Good!',
	WIDGET_Seo_Suggestion_TitleBad: 'Your title is too short. Make sure your title is at least 50 characters. Bad!',
	WIDGET_Seo_Suggestion_DescriptionPerfect: 'Your description is between 120 and 165 characters. Perfect!',
	WIDGET_Seo_Suggestion_DescriptionGood: 'Your description is more than 90 characters. Good!',
	WIDGET_Seo_Suggestion_DescriptionBad: 'Your description is less than 90 characters. Bad!',
	WIDGET_Seo_Suggestion_SentencePerfect: 'Your description is 2 to 4 sentences long. Perfect!',
	WIDGET_Seo_Suggestion_SentenceGood:
		"Votre description comporte 2 à 4 phrases mais toutes les phrases ne sont pas comprises entre 10 et 30 caractères. C'est bien",
	WIDGET_Seo_Suggestion_SentenceBad: 'Your descripton is only 1 sentence long. Make sure your description is 2 to 4 sentences long.',

	WIDGET_Seo_Suggestion_NumberPerfect: 'Your title uses numbers. Perfect!',
	WIDGET_Seo_Suggestion_NumberBad: 'Your title does not use numbers. The use of numbers in your title can increase your CTR.',
	WIDGET_Seo_Suggestion_PowerWordTitle: `Votre titre contient le mot-clé. Parfait!`,
	WIDGET_Seo_Suggestion_PowerWordTitleBad: `Votre titre ne contient pas de mot-clé. Mauvais!`,
	WIDGET_Seo_Suggestion_PowerWordDescription: `Votre description utilise le mot-clé. Parfait!`,
	WIDGET_Seo_Suggestion_PowerWordDescriptionBad: `Votre description n'utilise pas de Power Word. Mauvais`,
	WIDGET_Seo_Suggestion_ctaKeywordsTitle: `Votre titre contient le mot-clé CTA. Parfait!`,
	WIDGET_Seo_Suggestion_ctaKeywordsTitleBad: `Votre titre ne contient pas de mot-clé CTA. Mauvais!`,
	WIDGET_Seo_Suggestion_ctaKeywordsDescription: `Votre description utilise le mot-clé CTA. Parfait!`,
	WIDGET_Seo_Suggestion_ctaKeywordsDescriptionBad: `Votre description n'utilise pas de mot-clé CTA. Mauvais!`,
	WIDGET_Seo_Suggestion_Title: 'Title:',
	WIDGET_Seo_Suggestion_Character: 'Character:',
	WIDGET_Seo_Suggestion_WidthDesktop: '- Desktop:',
	WIDGET_Seo_Suggestion_WidthMobile: 'Mobile: ',
	WIDGET_Seo_Suggestion_SeoTitle: 'SEO Title: ',
	WIDGET_Seo_Suggestion_Description: 'Description:',
	WIDGET_Seo_Suggestion_SeoDescription: 'SEO Description',
	WIDGET_Seo_Suggestion_SeoPreview: 'SEO Preview',
	WIDGET_Seo_Suggestion_ListOfSuggestion: 'SEO Suggestions:',
	WIDGET_Seo_Suggestion_Text:
		'Optimize title & description for Google search results, to improve the visual appeal to brings more clicks to your website.',
	WIDGET_SEO_PowerWords: [
		'Améliorer',
		'Augmenter',
		'Avis d’expert',
		'Bonus',
		'Cadeau',
		'Chaud',
		'Confortable',
		'Confiance',
		'Diminuer',
		'Efficace',
		'Efficient',
		'Économiser',
		'Élever',
		'Éprouvé',
		'Exclusif',
		'Facile',
		'Flexible',
		'Gain de temps',
		'Garantie',
		'Garantie de remboursement',
		'Garanti',
		'Gagner',
		'Gratuit',
		'Immédiat',
		'Limité',
		'Maximiser',
		'Meilleure vente',
		'Minimiser',
		'Nouveau',
		'Offre spéciale',
		'Optimiser',
		'Populaire',
		'Praticité',
		'Preuve',
		'Premium',
		'Précieux',
		'Protéger',
		'Rapide',
		'Recommandation',
		'Réduire',
		'Résultats',
		'Satisfaction',
		'Sécurité',
		'Secret',
		'Simple',
		'Simplicité',
		'Sans engagement',
		'Sans obligation',
		'Sans risque',
		'Sans stress',
		'Sûr',
		'Surprise',
		'Succès',
		'Utile',
		'Vaut la peine'
	],
	WIDGET_SEO_ctaKeywords: [
		'Acheter',
		'Agir',
		'Appeler',
		'Apprendre',
		'Cliquer',
		'Contacter',
		'Découvrir',
		'Inscrire',
		'Joindre',
		'Obtenir',
		'Regarder',
		"S'abonner",
		"S'inscrire",
		'Télécharger',
		'Trouver',
		'Vendre',
		'Voir'
	]
};

export default fr;
