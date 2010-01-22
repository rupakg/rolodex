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
    dob: SC.Record.attr(String),

    // helper method to return fullname
    fullname: function() {
        return "%@ %@".fmt(this.get('fname'), this.get('lname'));
    }.property('fname', 'lname').cacheable()
    ,
    
    // helper method to return a formatted contact item
    formattedItem: function() {
        return "%@ %@ - %@".fmt(this.get('fname'), this.get('lname'), this.get('dob'));
    }.property('fname', 'lname', 'dob').cacheable()

});


        
