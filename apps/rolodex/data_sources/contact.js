// ==========================================================================
// Project:   Rolodex.ContactDataSource
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Rolodex */
sc_require('models/contact');

Rolodex.CONTACTS_QUERY = SC.Query.local(Rolodex.Contact, {
  orderBy: 'fname, lname'
});

/** @class

  (Document Your Data Source Here)

  @extends SC.DataSource
*/
Rolodex.ContactDataSource = SC.DataSource.extend(
/** @scope Rolodex.ContactDataSource.prototype */ {

  // ..........................................................
  // QUERY SUPPORT
  //

    fetch: function(store, query) {
    if (query === Rolodex.CONTACTS_QUERY) {
      SC.Request.getUrl('/contacts').json()
        .notify(this, 'didFetchContacts', store, query)
        .send();
      return YES;
    }
    return NO;
    },

    didFetchContacts: function(response, store, query) {
    if (SC.ok(response)) {
      store.loadRecords(Rolodex.Contact, response.get('body').content);
      store.dataSourceDidFetchQuery(query);
    }
    else store.dataSourceDidErrorQuery(query, response);
    },

  // ..........................................................
  // RECORD SUPPORT
  // 
  
    retrieveRecord: function(store, storeKey) {
      if (SC.kindOf(store.recordTypeFor(storeKey), Rolodex.Contact)) {
        var url = store.idFor(storeKey);
        SC.Request.getUrl(url).json()
          .notify(this, 'didRetrieveContact', store, storeKey)
          .send();
        return YES;
      } else return NO;
    },

    didRetrieveContact: function(response, store, storeKey) {
      if (SC.ok(response)) {
        var dataHash = response.get('body').content;
        store.dataSourceDidComplete(storeKey, dataHash);
      } else store.dataSourceDidError(storeKey, response);
    },


    createRecord: function(store, storeKey) {
      if (SC.kindOf(store.recordTypeFor(storeKey), Rolodex.Contact)) {
        SC.Request.postUrl('/contacts').json()
          .notify(this, this.didCreateContact, store, storeKey)
          //.send(store.readDataHash(storeKey));
          .send({ contact: store.readDataHash(storeKey) });

        return YES;
      } else return NO;
    },

    didCreateContact: function(response, store, storeKey) {
      if (SC.ok(response)) {
        var url = response.header('Location');
        store.dataSourceDidComplete(storeKey, null, url); // update url
      } else store.dataSourceDidError(storeKey, response);
    },


    updateRecord: function(store, storeKey) {
      if (SC.kindOf(store.recordTypeFor(storeKey), Rolodex.Contact)) {
        SC.Request.putUrl(store.idFor(storeKey)).json()
          .notify(this, this.didUpdateContact, store, storeKey)
          //.send(store.readDataHash(storeKey));
          .send({ contact: store.readDataHash(storeKey) });

        return YES;
      } else return NO ;
    },

    didUpdateContact: function(response, store, storeKey) {
      if (SC.ok(response)) {
        var data = response.get('body');
        if (data) data = data.content; // if hash is returned; use it.
        store.dataSourceDidComplete(storeKey, data) ;
      } else store.dataSourceDidError(storeKey);
    },


    destroyRecord: function(store, storeKey) {
      if (SC.kindOf(store.recordTypeFor(storeKey), Rolodex.Contact)) {
        SC.Request.deleteUrl(store.idFor(storeKey)).json()
          .notify(this, this.didDestroyContact, store, storeKey)
          .send();
        return YES;
      } else return NO;
    },

    didDestroyContact: function(response, store, storeKey) {
      if (SC.ok(response)) {
        store.dataSourceDidDestroy(storeKey);
      } else store.dataSourceDidError(response);
    }


}) ;
