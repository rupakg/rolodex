// ==========================================================================
// Project:   Rolodex.contactsController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Rolodex */

/** @class

  (Document Your Controller Here)

  @extends SC.ArrayController
*/
Rolodex.contactsController = SC.ArrayController.create(
    SC.CollectionViewDelegate,
/** @scope Rolodex.contactsController.prototype */ {

    summary: function() {
        var len = this.get('length'), ret ;
        if (len && len > 0) {
            ret = len === 1 ? "1 contact" : "%@ contacts".fmt(len);
        } else
            ret = "No contacts";

        return ret;
    }.property('length').cacheable()

    ,
    // delegate to destroy records
    collectionViewDeleteContent: function(view, content, indexes) {
        // destroy the records
        var records = indexes.map(function(idx) {
          return this.objectAt(idx);
        }, this);
        records.invoke('destroy');

        var selIndex = indexes.get('min')-1;
        if (selIndex<0) selIndex = 0;
        this.selectObject(this.objectAt(selIndex));
    }

    ,
    addContact: function() {
        var contact;

        // create a new task in the store
        contact = Rolodex.store.createRecord(Rolodex.Contact, {
          "fname": "FirstName1",
          "lname": "LastName1",
          "dob": "01/01/1900"
        });

        // select new task in UI
        this.selectObject(contact);

        // activate inline editor once UI can repaint
        this.invokeLater(function() {
          var contentIndex = this.indexOf(contact);
          var list = Rolodex.mainPage.getPath('mainPane.mainView.contentView');
          var listItem = list.itemViewForContentIndex(contentIndex);
          listItem.beginEditing();
        });
        
        return YES;
    }
    
}) ;
