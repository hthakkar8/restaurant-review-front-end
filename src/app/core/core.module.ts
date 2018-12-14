import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "../app-routing.module";
import { AuthService } from "../auth/auth.service";
import { AuthGuard } from "../auth/auth-guard.service";
import { CommonModule } from "@angular/common";


@NgModule({
    declarations: [HeaderComponent, HomeComponent],
    imports: [AppRoutingModule, CommonModule],
    exports: [AppRoutingModule, HeaderComponent],
    providers: [AuthService, AuthGuard]
})
export class CoreModule { }
