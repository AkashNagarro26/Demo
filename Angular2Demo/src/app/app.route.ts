import { Routes, RouterModule } from '@angular/router';  
import {parentComponent} from './parent/parent.component';
import {childComponent} from './child/child.component';
import { ModuleWithProviders }  from '@angular/core';

export const routes: Routes = [  
    {  
      path: 'parent',  
     component:parentComponent
    },  
    {  
        path: 'child',  
       component:childComponent
      }
    
  ];  
  export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
  