
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhipocButtonDemoModule } from './buttons/button/buttondemo.module';
import { JhipocSplitbuttonDemoModule } from './buttons/splitbutton/splitbuttondemo.module';

import { JhipocDialogDemoModule } from './overlay/dialog/dialogdemo.module';
import { JhipocConfirmDialogDemoModule } from './overlay/confirmdialog/confirmdialogdemo.module';
import { JhipocLightboxDemoModule } from './overlay/lightbox/lightboxdemo.module';
import { JhipocTooltipDemoModule } from './overlay/tooltip/tooltipdemo.module';
import { JhipocOverlayPanelDemoModule } from './overlay/overlaypanel/overlaypaneldemo.module';
import { JhipocSideBarDemoModule } from './overlay/sidebar/sidebardemo.module';

import { JhipocKeyFilterDemoModule } from './inputs/keyfilter/keyfilterdemo.module';
import { JhipocInputTextDemoModule } from './inputs/inputtext/inputtextdemo.module';
import { JhipocInputTextAreaDemoModule } from './inputs/inputtextarea/inputtextareademo.module';
import { JhipocInputGroupDemoModule } from './inputs/inputgroup/inputgroupdemo.module';
import { JhipocCalendarDemoModule } from './inputs/calendar/calendardemo.module';
import { JhipocCheckboxDemoModule } from './inputs/checkbox/checkboxdemo.module';
import { JhipocChipsDemoModule } from './inputs/chips/chipsdemo.module';
import { JhipocColorPickerDemoModule } from './inputs/colorpicker/colorpickerdemo.module';
import { JhipocInputMaskDemoModule } from './inputs/inputmask/inputmaskdemo.module';
import { JhipocInputSwitchDemoModule } from './inputs/inputswitch/inputswitchdemo.module';
import { JhipocPasswordIndicatorDemoModule } from './inputs/passwordindicator/passwordindicatordemo.module';
import { JhipocAutoCompleteDemoModule } from './inputs/autocomplete/autocompletedemo.module';
import { JhipocSliderDemoModule } from './inputs/slider/sliderdemo.module';
import { JhipocSpinnerDemoModule } from './inputs/spinner/spinnerdemo.module';
import { JhipocRatingDemoModule } from './inputs/rating/ratingdemo.module';
import { JhipocSelectDemoModule } from './inputs/select/selectdemo.module';
import { JhipocSelectButtonDemoModule } from './inputs/selectbutton/selectbuttondemo.module';
import { JhipocListboxDemoModule } from './inputs/listbox/listboxdemo.module';
import { JhipocRadioButtonDemoModule } from './inputs/radiobutton/radiobuttondemo.module';
import { JhipocToggleButtonDemoModule } from './inputs/togglebutton/togglebuttondemo.module';
import { JhipocEditorDemoModule } from './inputs/editor/editordemo.module';

import { JhipocGrowlDemoModule } from './messages/growl/growldemo.module';
import { JhipocMessagesDemoModule } from './messages/messages/messagesdemo.module';
import { JhipocGalleriaDemoModule } from './multimedia/galleria/galleriademo.module';

import { JhipocFileUploadDemoModule } from './fileupload/fileupload/fileuploaddemo.module';

import { JhipocAccordionDemoModule } from './panel/accordion/accordiondemo.module';
import { JhipocPanelDemoModule } from './panel/panel/paneldemo.module';
import { JhipocTabViewDemoModule } from './panel/tabview/tabviewdemo.module';
import { JhipocFieldsetDemoModule } from './panel/fieldset/fieldsetdemo.module';
import { JhipocToolbarDemoModule } from './panel/toolbar/toolbardemo.module';
import { JhipocGridDemoModule } from './panel/grid/griddemo.module';
import { JhipocScrollPanelDemoModule } from './panel/scrollpanel/scrollpaneldemo.module';
import { JhipocCardDemoModule } from './panel/card/carddemo.module';

import { JhipocDataTableDemoModule } from './data/datatable/datatabledemo.module';
import { JhipocTableDemoModule } from './data/table/tabledemo.module';
import { JhipocDataGridDemoModule } from './data/datagrid/datagriddemo.module';
import { JhipocDataListDemoModule } from './data/datalist/datalistdemo.module';
import { JhipocDataScrollerDemoModule } from './data/datascroller/datascrollerdemo.module';
import { JhipocPickListDemoModule } from './data/picklist/picklistdemo.module';
import { JhipocOrderListDemoModule } from './data/orderlist/orderlistdemo.module';
import { JhipocScheduleDemoModule } from './data/schedule/scheduledemo.module';
import { JhipocTreeDemoModule } from './data/tree/treedemo.module';
import { JhipocTreeTableDemoModule } from './data/treetable/treetabledemo.module';
import { JhipocPaginatorDemoModule } from './data/paginator/paginatordemo.module';
import { JhipocGmapDemoModule } from './data/gmap/gmapdemo.module';
import { JhipocOrgChartDemoModule } from './data/orgchart/orgchartdemo.module';
import { JhipocCarouselDemoModule } from './data/carousel/carouseldemo.module';

import { JhipocBarchartDemoModule } from './charts/barchart/barchartdemo.module';
import { JhipocDoughnutchartDemoModule } from './charts/doughnutchart/doughnutchartdemo.module';
import { JhipocLinechartDemoModule } from './charts/linechart/linechartdemo.module';
import { JhipocPiechartDemoModule } from './charts/piechart/piechartdemo.module';
import { JhipocPolarareachartDemoModule } from './charts/polarareachart/polarareachartdemo.module';
import { JhipocRadarchartDemoModule } from './charts/radarchart/radarchartdemo.module';

import { JhipocDragDropDemoModule } from './dragdrop/dragdrop/dragdropdemo.module';

import { JhipocMenuDemoModule } from './menu/menu/menudemo.module';
import { JhipocContextMenuDemoModule } from './menu/contextmenu/contextmenudemo.module';
import { JhipocPanelMenuDemoModule } from './menu/panelmenu/panelmenudemo.module';
import { JhipocStepsDemoModule } from './menu/steps/stepsdemo.module';
import { JhipocTieredMenuDemoModule } from './menu/tieredmenu/tieredmenudemo.module';
import { JhipocBreadcrumbDemoModule } from './menu/breadcrumb/breadcrumbdemo.module';
import { JhipocMegaMenuDemoModule } from './menu/megamenu/megamenudemo.module';
import { JhipocMenuBarDemoModule } from './menu/menubar/menubardemo.module';
import { JhipocSlideMenuDemoModule } from './menu/slidemenu/slidemenudemo.module';
import { JhipocTabMenuDemoModule } from './menu/tabmenu/tabmenudemo.module';

import { JhipocBlockUIDemoModule } from './misc/blockui/blockuidemo.module';
import { JhipocCaptchaDemoModule } from './misc/captcha/captchademo.module';
import { JhipocDeferDemoModule } from './misc/defer/deferdemo.module';
import { JhipocInplaceDemoModule } from './misc/inplace/inplacedemo.module';
import { JhipocProgressBarDemoModule } from './misc/progressbar/progressbardemo.module';
import { JhipocRTLDemoModule } from './misc/rtl/rtldemo.module';
import { JhipocTerminalDemoModule } from './misc/terminal/terminaldemo.module';
import { JhipocValidationDemoModule } from './misc/validation/validationdemo.module';
import { JhipocProgressSpinnerDemoModule } from './misc/progressspinner/progressspinnerdemo.module';

@NgModule({
    imports: [

        JhipocMenuDemoModule,
        JhipocContextMenuDemoModule,
        JhipocPanelMenuDemoModule,
        JhipocStepsDemoModule,
        JhipocTieredMenuDemoModule,
        JhipocBreadcrumbDemoModule,
        JhipocMegaMenuDemoModule,
        JhipocMenuBarDemoModule,
        JhipocSlideMenuDemoModule,
        JhipocTabMenuDemoModule,

        JhipocBlockUIDemoModule,
        JhipocCaptchaDemoModule,
        JhipocDeferDemoModule,
        JhipocInplaceDemoModule,
        JhipocProgressBarDemoModule,
        JhipocInputMaskDemoModule,
        JhipocRTLDemoModule,
        JhipocTerminalDemoModule,
        JhipocValidationDemoModule,

        JhipocButtonDemoModule,
        JhipocSplitbuttonDemoModule,

        JhipocInputTextDemoModule,
        JhipocInputTextAreaDemoModule,
        JhipocInputGroupDemoModule,
        JhipocCalendarDemoModule,
        JhipocChipsDemoModule,
        JhipocInputMaskDemoModule,
        JhipocInputSwitchDemoModule,
        JhipocPasswordIndicatorDemoModule,
        JhipocAutoCompleteDemoModule,
        JhipocSliderDemoModule,
        JhipocSpinnerDemoModule,
        JhipocRatingDemoModule,
        JhipocSelectDemoModule,
        JhipocSelectButtonDemoModule,
        JhipocListboxDemoModule,
        JhipocRadioButtonDemoModule,
        JhipocToggleButtonDemoModule,
        JhipocEditorDemoModule,
        JhipocColorPickerDemoModule,
        JhipocCheckboxDemoModule,
        JhipocKeyFilterDemoModule,

        JhipocGrowlDemoModule,
        JhipocMessagesDemoModule,
        JhipocGalleriaDemoModule,

        JhipocFileUploadDemoModule,

        JhipocAccordionDemoModule,
        JhipocPanelDemoModule,
        JhipocTabViewDemoModule,
        JhipocFieldsetDemoModule,
        JhipocToolbarDemoModule,
        JhipocGridDemoModule,
        JhipocScrollPanelDemoModule,
        JhipocCardDemoModule,

        JhipocBarchartDemoModule,
        JhipocDoughnutchartDemoModule,
        JhipocLinechartDemoModule,
        JhipocPiechartDemoModule,
        JhipocPolarareachartDemoModule,
        JhipocRadarchartDemoModule,

        JhipocDragDropDemoModule,

        JhipocDialogDemoModule,
        JhipocConfirmDialogDemoModule,
        JhipocLightboxDemoModule,
        JhipocTooltipDemoModule,
        JhipocOverlayPanelDemoModule,
        JhipocSideBarDemoModule,

        JhipocDataTableDemoModule,
        JhipocTableDemoModule,
        JhipocDataGridDemoModule,
        JhipocDataListDemoModule,
        JhipocDataScrollerDemoModule,
        JhipocScheduleDemoModule,
        JhipocOrderListDemoModule,
        JhipocPickListDemoModule,
        JhipocTreeDemoModule,
        JhipocTreeTableDemoModule,
        JhipocPaginatorDemoModule,
        JhipocOrgChartDemoModule,
        JhipocGmapDemoModule,
        JhipocCarouselDemoModule,
        JhipocProgressSpinnerDemoModule

    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipocprimengModule {}
