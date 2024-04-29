import { Routes } from '@angular/router';
import { StartpassnummerComponent } from './athlete-search/startpassnummer/startpassnummer.component';
import { NameFormComponent } from './athlete-search/name-form/name-form.component';
import { AgeGroupFormComponent } from './athlete-search/age-group-form/age-group-form.component';
import { AthleteProfileComponent } from './athlete-profile/athlete-profile.component';
import { AthleteProfileResultComponent } from './athlete-profile/athlete-profile-result/athlete-profile-result.component';
import { AthleteProfileOverviewContainerComponent } from './athlete-profile/athlete-profile-overview-container/athlete-profile-overview-container.component';


export const routes: Routes = [
    {
        path:'startpassnummer',
        component: StartpassnummerComponent

    },

    {
        path:'name',
        component: NameFormComponent
    },

    {
        path:'altersklassen',
        component: AgeGroupFormComponent
    },

    {
        path:'athletenprofil/:startpassnummer',
        component: AthleteProfileComponent,
        children: [
            {
                path: '',
                component: AthleteProfileOverviewContainerComponent
            },
            {
                path:'athletenuebersicht/:startpassnummer',
                component: AthleteProfileOverviewContainerComponent
            },
            {
                path:'ergebnisse/:startpassnummer',
                component: AthleteProfileResultComponent
            }

        ]
    }
];

