// ==========================================================================
// Project:   Rolodex
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Rolodex */

/** @namespace

  My cool new app.  Describe your application.
  
  @extends SC.Object
*/
Rolodex = SC.Application.create(
  /** @scope Rolodex.prototype */ {

  NAMESPACE: 'Rolodex',
  VERSION: '0.1.0',

  // This is your application store.  You will use this store to access all
  // of your model data.  You can also set a data source on this store to
  // connect to a backend server.  The default setup below connects the store
  // to any fixtures you define.

  // default fixtures datasource
  //store: SC.Store.create().from(SC.Record.fixtures)

  // Custom datasource defined as a Rails app.
  store: SC.Store.create({
         commitRecordsAutomatically: YES     // This will cause the store to notice any changes to our data and automatically notify the data source.
  }).from('Rolodex.ContactDataSource')

  // TODO: Add global constants or singleton objects needed by your app here.

}) ;
