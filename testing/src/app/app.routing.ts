import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageIndexComponent } from './pages/index/page-index.component';
import { PageResponsiveComponent } from './pages/responsive/page-responsive.component';
import { PageReportComponent } from './pages/report/page-report.component';

const routes: Routes = [
    { path: 'report', component: PageReportComponent },
    { path: 'responsive', component: PageResponsiveComponent },
    { path: '**', component: PageIndexComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
