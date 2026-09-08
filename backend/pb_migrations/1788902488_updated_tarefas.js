/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2716528959")

  // remove field
  collection.fields.removeById("autodate2790239036")

  // add field
  collection.fields.addAt(3, new Field({
    "help": "",
    "hidden": false,
    "id": "date3891146655",
    "max": "",
    "min": "",
    "name": "encerrada",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2716528959")

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "autodate2790239036",
    "name": "encerrada",
    "onCreate": false,
    "onUpdate": true,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  // remove field
  collection.fields.removeById("date3891146655")

  return app.save(collection)
})
