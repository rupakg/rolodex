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
    childViews: 'headerView contactDetailsView separatorView contactListView contactToolbarView footerView'.w(),

    headerView: SC.ToolbarView.design({
      layout: { top: 0, left: 0, right: 0, height: 36 },
      childViews: 'titleView'.w(),
      anchorLocation: SC.ANCHOR_TOP,
      // defines the caption with a label view
      titleView: SC.LabelView.design({
        layout: { centerY: 0, height: 24, left: 20, width: 400 },
        controlSize: SC.LARGE_CONTROL_SIZE,
        fontWeight: SC.BOLD_WEIGHT,
        value: 'Rolodex - your contacts are on a roll...'
      })

    }), // end of headerView

    contactDetailsView: SC.ScrollView.design(SC.Border, {
      hasHorizontalScroller: NO,
      layout: { top: 50, height: 350, left: 300, right: 300},
      anchorLocation: SC.ANCHOR_BOTTOM,
      childViews: 'lblfname txtfname'.w(),
      backgroundColor: 'white',

      lblfname: SC.LabelView.design({
        layout: { centerY: 0, left: 20, width: 200 },
        value:   'First Name: '
      }),
      txtfname: SC.TextFieldView.design({
        layout: { centerY: 0, left: 20, width: 200 },
        hint:   'Enter the First Name',
        value: "fname"
      })

    }),  // end of contactDetailsView

    separatorView: SC.SeparatorView.design({
        layout: { top: 410, left: 300, right: 300, height: 5},
        anchorLocation: SC.ANCHOR_TOP,
        backgroundColor: 'gray'

    }),  // end of separatorView

    contactListView: SC.ScrollView.design({
      hasHorizontalScroller: NO,
      anchorLocation: SC.ANCHOR_BOTTOM,
      layout: { top: 418, height: 485, bottom: 95, left: 300, right: 300},
      backgroundColor: 'white',

      contentView: SC.ListView.design({
        contentBinding: 'Rolodex.contactsController.arrangedObjects',
        selectionBinding: 'Rolodex.contactsController.selection',
        //  contentValueKey: "formattedItem",  // figure out how to make it work with addContact
        contentValueKey: "fname",
        rowHeight: 21,
        showAlternatingRows: YES,
        canEditContent: YES,
        canDeleteContent: YES
      })

    }),  // end of contactListView

    contactToolbarView: SC.View.design(SC.Border, {
        layout: { left: 300, right: 300, bottom: 37, height: 50 },
        classNames: ['contact-toolbar'],
        anchorLocation: SC.ANCHOR_BOTTOM,
        backgroundColor: 'black',
        childViews: [

          SC.ButtonView.design({
            layout: { centerY: 0, left: 15, height: 30, width: 130 },
            //icon: 'add-icon',
            title: "Add Contact",
            classNames: ['contact-toolbar-button'],
            toolTip: "Add a new contact to your rolodex",
            target: 'Rolodex.contactsController',
            action: 'addContact'
          }),

          SC.ButtonView.design({
            layout: { centerY: 0, left: 155, height: 30, width: 130 },
            //icon: 'delete-icon',
            title: "Delete Contact",
            classNames: ['contact-toolbar-button'],
            toolTip: "Delete the selected contact from your rolodex",
            target: 'Rolodex.contactsController',
            action: 'deleteContact'
          })
        ] 
    }),
    
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
        valueBinding: "Rolodex.contactsController.summary"
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
