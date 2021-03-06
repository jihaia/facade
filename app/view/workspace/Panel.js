/*
 * File: app/view/workspace/Panel.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 5.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 5.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Qtm.view.workspace.Panel', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.workspacepanel',

    requires: [
        'Qtm.view.workspace.PanelViewModel',
        'Qtm.view.workspace.Header',
        'Qtm.view.navigation.Panel',
        'Ext.panel.Panel'
    ],

    viewModel: {
        type: 'workspacepanel'
    },
    itemId: 'mainView',
    layout: 'border',

    items: [
        {
            xtype: 'workspaceheader',
            region: 'north'
        },
        {
            xtype: 'navigationpanel',
            collapsible: true,
            region: 'west',
            split: false,
            splitterResize: false
        }
    ]

});