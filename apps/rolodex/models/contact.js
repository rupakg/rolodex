// ==========================================================================
// Project:   Rolodex.Contact
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Rolodex */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Rolodex.Contact = SC.Record.extend(
/** @scope Rolodex.Contact.prototype */ {

    fname: SC.Record.attr(String),
    lname: SC.Record.attr(String),
    dob: SC.Record.attr(String)

}) ;
