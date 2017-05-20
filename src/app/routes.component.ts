import { Routes } from '@angular/router';
import { AppComponent } from "./app.component";
import { ListComponent } from "./list/list.component";
import { HomeComponent } from "./home/home.component";
import { TopnavComponent } from "./topnav/topnav.component";
import { FooterComponent } from "./footer/footer.component";
import { DetailComponent } from "./detail/detail.component";
import { ConnactComponent } from "./connact/connact.component";
import { FormComponent } from "./form/form.component";
export const rootRouterConfig: Routes = [
{
	path:"index",
	component:HomeComponent
},
{
	path:"home",
	component:HomeComponent
},
{
	path:"list",component:ListComponent
},
{
	path:"top",
	component:TopnavComponent
},
{
	path:"footer",
	component:FooterComponent
},
{
	path:"detail/:id",
	component:DetailComponent
},
{
	path:"connact",
	component:ConnactComponent,
},
{
	path:"form",
	component:FormComponent,
},
{
	path: "",
    redirectTo: "index",
    pathMatch: "full"
}
]
