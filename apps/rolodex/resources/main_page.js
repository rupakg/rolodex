// ==========================================================================
// Project:   Rolodex - mainPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Rolodex */

// This page describes the main user interface for your application.  
Rolodex.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'headerView mainView footerView'.w(),

    headerView: SC.ToolbarView.design({
      layout: { top: 0, left: 0, right: 0, height: 36 },
      childViews: 'titleView btnAddContact'.w(),
      anchorLocation: SC.ANCHOR_TOP,
      // defines the caption with a label view
      titleView: SC.LabelView.design({
        layout: { centerY: 0, height: 24, left: 20, width: 400 },
        controlSize: SC.LARGE_CONTROL_SIZE,
        fontWeight: SC.BOLD_WEIGHT,
        value:   'Rolodex - your contacts are on a roll...'
      }),
      btnAddContact: SC.ButtonView.design({
        layout: { centerY: 0, height: 24, right: 12, width: 150 },
        title: "Add Contact",
        target: "Rolodex.contactsController",
        action: "addContact"
      })

    }), // end of headerView

    mainView: SC.ScrollView.design({
      hasHorizontalScroller: NO,
      layout: { top: 36, bottom: 32, left: 0, right: 0},
      backgroundColor: 'white',

      contentView: SC.ListView.design({
        contentBinding: 'Rolodex.contactsController.arrangedObjects',
        selectionBinding: 'Rolodex.contactsController.selection',
        contentValueKey: "fname",
        rowHeight: 21,
        canEditContent: YES,
        canDeleteContent: YES
      })

    }),  // end of mainView

    footerView: SC.ToolbarView.design({
      layout: { bottom: 0, left: 0, right: 0, height: 32 },
      childViews: 'statusView copyrightView'.w(),
      anchorLocation: SC.ANCHOR_BOTTOM,
      // defines the status with a label view
      statusView: SC.LabelView.design({
        layout: { centerY: 0, height: 18, left: 20, width: 200},
        controlSize: SC.SMALL_CONTROL_SIZE,
        textAlign: SC.ALIGN_LEFT,
        fontWeight: SC.BOLD_WEIGHT,
        valueBinding: "Contacts.contactsController.summary"
      }),
      // defines the copyright with a label view
      copyrightView: SC.LabelView.design({
        layout: { centerY: 0, height: 18, left: 20, right: 20},
        controlSize: SC.SMALL_CONTROL_SIZE,
        textAlign: SC.ALIGN_CENTER,
        fontWeight: SC.BOLD_WEIGHT,
        value:   'Copyright 2002-2010 Webintellix. All Right Reserved.'
      })
        
    }) // end of footerView
      
  })  // end of mainPane

});  // end of mainPage
