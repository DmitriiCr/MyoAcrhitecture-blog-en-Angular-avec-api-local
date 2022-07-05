import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'

import {MyoArchitectureComponent} from './components/MyoArchitecture.component'

const routes = [
  {
    path: 'MyoArchitecture',
    component: MyoArchitectureComponent,
  },
]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [MyoArchitectureComponent],
  exports: [MyoArchitectureComponent],
})
export class MyoArchitectureModule {}
