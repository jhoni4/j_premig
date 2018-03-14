import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import { JhipocSharedModule } from '../../../shared';
import {ScrollPanelModule} from 'primeng/primeng';
import {CodeHighlighterModule} from 'primeng/primeng';
import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';
import { RouterModule } from '@angular/router';

import {
    ScrollPanelDemoComponent,
    scrollPanelDemoRoute
} from './';

const primeng_STATES = [
    scrollPanelDemoRoute
];

@NgModule({
	imports: [
        JhipocSharedModule,
		CommonModule,
		ScrollPanelModule,
        CodeHighlighterModule,
        WizardModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
	],
	declarations: [
        ScrollPanelDemoComponent
	]
})
export class JhipocScrollPanelDemoModule {}
