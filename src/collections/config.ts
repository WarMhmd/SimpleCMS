// Configure how Collections are sorted & displayed in Categories section
    export function createCategories(collections: any) {return [
  {
    "name": "Collections",
    "icon": "bi:collection",
    "collections": [
      collections.Posts,
      collections.Posts2,
      collections.Relation,
      collections.Media
    ]
  },
  {
    "name": "Menu",
    "icon": "bi:menu-button-wide",
    "collections": [
      collections.Names,
      collections.ImageArray,
      collections.WidgetTest
    ]
  }
];}
	