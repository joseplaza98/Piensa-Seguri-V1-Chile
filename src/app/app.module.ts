import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

/**Pagina donde inicializa la aplicación */
import { PaginaInicioPage } from '../pages/pagina-inicio/pagina-inicio';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

/**Sesion de usuario*/
import { LoginPage } from '../pages/Sesión/login/login';
import { RegistrarPage } from '../pages/Sesión/registrar/registrar';

/**Contenidos */
import { TemasPage } from '../pages/Contenidos/temas/temas';
import { ActividadesPage } from '../pages/Contenidos/actividades/actividades';
import { ForoPage } from '../pages/Contenidos/foro/foro';
import { EstadisticasPage } from '../pages/Contenidos/estadisticas/estadisticas';
import { AyudasPage } from '../pages/Contenidos/ayudas/ayudas';
import { AcercaDePage } from '../pages/Contenidos/acerca-de/acerca-de';

/**Selecciones */
import { SeleccionCapituloPage } from '../pages/Contenidos/Capitulos/Selecciones/seleccion-capitulo/seleccion-capitulo';
import { SelecPage } from '../pages/Contenidos/Capitulos/Selecciones/selec/selec';

/**Contenidos Temáticas */

/**Capítulo 1 */

import { SelectT1Page } from '../pages/Contenidos/Capitulos/Capitulo 1/select-t1/select-t1';

/**Tema 1 inciso 1 */
import { Tema1_1Page } from '../pages/Contenidos/Capitulos/Capitulo 1/tema1-1/tema1-1';

/**Subtemas Tema 1-1 */
import { Tema1_1aPage } from '../pages/Contenidos/Capitulos/Capitulo 1/Contenidos Tema 1-1/tema1-1a/tema1-1a';
import { Tema1_1bPage } from '../pages/Contenidos/Capitulos/Capitulo 1/Contenidos Tema 1-1/tema1-1b/tema1-1b';
import { Tema1_1cPage } from '../pages/Contenidos/Capitulos/Capitulo 1/Contenidos Tema 1-1/tema1-1c/tema1-1c';
import { Tema1_1dPage } from '../pages/Contenidos/Capitulos/Capitulo 1/Contenidos Tema 1-1/tema1-1d/tema1-1d';
import { Tema1_1ePage } from '../pages/Contenidos/Capitulos/Capitulo 1/Contenidos Tema 1-1/tema1-1e/tema1-1e';
import { Tema1_1fPage } from '../pages/Contenidos/Capitulos/Capitulo 1/Contenidos Tema 1-1/tema1-1f/tema1-1f';

/**Tema 1 inciso 2 */
import { Tema1_2Page } from '../pages/Contenidos/Capitulos/Capitulo 1/tema1-2/tema1-2';

/**Tema 1 inciso 3 */
import { Tema1_3Page } from '../pages/Contenidos/Capitulos/Capitulo 1/tema1-3/tema1-3';


/**Capítulo 2 */

/**Tema 2 inciso 1 */
import { Tema2_1Page } from '../pages/Contenidos/Capitulos/Capitulo 2/tema2-1/tema2-1';

/**Subtemas Tema 2-1 */
import { Tema2_1aPage } from '../pages/Contenidos/Capitulos/Capitulo 2/Contenidos Tema 2-1/tema2-1a/tema2-1a';
import { Tema2_2bPage } from '../pages/Contenidos/Capitulos/Capitulo 2/Contenidos Tema 2-2/tema2-2b/tema2-2b';

/**Subtemas Tema 2-2 */
import { Tema2_2aPage } from '../pages/Contenidos/Capitulos/Capitulo 2/Contenidos Tema 2-2/tema2-2a/tema2-2a';


/**Subtemas Tema 2-3 */
import { Tema2_3aPage } from '../pages/Contenidos/Capitulos/Capitulo 2/Contenidos Tema 2-3/tema2-3a/tema2-3a';


/**Tema 3 inciso 1 */
import { Tema3_1Page } from '../pages/Contenidos/Capitulos/Capitulo 3/tema3-1/tema3-1';

/**Subtemas Tema 3-1 */
import { Tema3_1aPage } from '../pages/Contenidos/Capitulos/Capitulo 3/Contenidos Tema 3-1/tema3-1a/tema3-1a';
import { Tema3_2aPage } from '../pages/Contenidos/Capitulos/Capitulo 3/Contenidos Tema 3-2/tema3-2a/tema3-2a';
import { Tema3_2bPage } from '../pages/Contenidos/Capitulos/Capitulo 3/Contenidos Tema 3-2/tema3-2b/tema3-2b';

/**Actividad y comandos Tema 3-2 */
/**Nmap */
import { ComandosNmapPage } from '../pages/Contenidos/Capitulos/Capitulo 3/Actividades Capitulo 3/Nmap/comandos-nmap/comandos-nmap';
import { PracticaNmapPage } from '../pages/Contenidos/Capitulos/Capitulo 3/Actividades Capitulo 3/Nmap/practica-nmap/practica-nmap';

/**NetCat */
import { ComandosNetCatPage } from '../pages/Contenidos/Capitulos/Capitulo 3/Actividades Capitulo 3/NetCat/comandos-net-cat/comandos-net-cat';
import { PracticaNetCatPage } from '../pages/Contenidos/Capitulos/Capitulo 3/Actividades Capitulo 3/NetCat/practica-net-cat/practica-net-cat';

/**Tema 4 inciso 1 */
import { Tema4_1Page } from '../pages/Contenidos/Capitulos/Capitulo 4/tema4-1/tema4-1';

/**Sutema 4 inciso 1*/
import { Tema4_1aPage } from '../pages/Contenidos/Capitulos/Capitulo 4/Contenidos Tema 4-1/tema4-1a/tema4-1a';

/**Sutema 4 inciso 2*/
import { Tema4_2aPage } from '../pages/Contenidos/Capitulos/Capitulo 4/Contenidos Tema 4-2/tema4-2a/tema4-2a';
import { Tema4_2bPage } from '../pages/Contenidos/Capitulos/Capitulo 4/Contenidos Tema 4-2/tema4-2b/tema4-2b';

/**Subtema 4 inciso 3 */
import { Tema4_3aPage } from '../pages/Contenidos/Capitulos/Capitulo 4/Contenidos Tema 4-3/tema4-3a/tema4-3a';
import { Tema4_3bPage } from '../pages/Contenidos/Capitulos/Capitulo 4/Contenidos Tema 4-3/tema4-3b/tema4-3b';

/**Subtema 4 inciso 4 */

import { Tema4_4aPage } from '../pages/Contenidos/Capitulos/Capitulo 4/Contenidos Tema 4-4/tema4-4a/tema4-4a';

/**Subtema 4 inciso 5 */
import { Tema4_5aPage } from '../pages/Contenidos/Capitulos/Capitulo 4/Contenidos Tema 4-5/tema4-5a/tema4-5a';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,

    /**Pagina donde inicializa la aplicación */
    PaginaInicioPage,

    HomePage,
    ListPage,

    /**Sesion y registro de usuario */
    LoginPage,
    RegistrarPage,

    /**Contenidos */
    TemasPage,
    ActividadesPage,
    ForoPage,
    EstadisticasPage,
    AyudasPage,
    AcercaDePage,

    /**Selecciones */
    SeleccionCapituloPage,
    SelecPage,

    /**Capitulo 1 */
    SelectT1Page,
    /**Tema 1 inciso 1 */
    Tema1_1Page,

    /**Subtemas Tema 1-1 */
    Tema1_1aPage,
    Tema1_1bPage,
    Tema1_1cPage,
    Tema1_1dPage,
    Tema1_1ePage,
    Tema1_1fPage,

    /**Tema 1 inciso 2 */
    Tema1_2Page,

    /**Tema 1 inciso 3 */
    Tema1_3Page,

    /**Tema 2 inciso 1 */
    Tema2_1Page,

    /**Subtemas Tema 2-1 */
    Tema2_1aPage,
    Tema2_2bPage,

    /**Subtemas Tema 2-2 */
    Tema2_2aPage,

    /**Subtemas Tema 2-3 */
    Tema2_3aPage,

    /**Tema 3 inciso 1 */
    Tema3_1Page,

    /**Subtemas Tema 3-1 */
    Tema3_1aPage,
    Tema3_2aPage,
    Tema3_2bPage,

    /**Actividad y comandos Tema 3-2 */
    /**Nmap */
    ComandosNmapPage,
    PracticaNmapPage,

    /**NetCat */
    ComandosNetCatPage,
    PracticaNetCatPage,

    /**Tema 4 inciso 1 */
    Tema4_1Page,

    /**Sutema 4 inciso 1*/
    Tema4_1aPage,

    /**Sutema 4 inciso 2*/
    Tema4_2aPage,
    Tema4_2bPage,

    /**Subtema 4 inciso 3 */
    Tema4_3aPage,
    Tema4_3bPage,

    /**Subtema 4 inciso 4 */
    Tema4_4aPage,

    /**Subtema 4 inciso 5 */
    Tema4_5aPage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

    /**Pagina donde inicializa la aplicación */
    PaginaInicioPage,

    HomePage,
    ListPage,

    /**Sesion y registro de usuario */
    LoginPage,
    RegistrarPage,

    /**Contenidos */
    TemasPage,
    ActividadesPage,
    ForoPage,
    EstadisticasPage,
    AyudasPage,
    AcercaDePage,

    /**Selecciones */
    SeleccionCapituloPage,
    SelecPage,

    /**Capitulo 1 */
    SelectT1Page,
    /**Tema 1 inciso 1 */
    Tema1_1Page,

    /**Subtemas Tema 1-1 */
    Tema1_1aPage,
    Tema1_1bPage,
    Tema1_1cPage,
    Tema1_1dPage,
    Tema1_1ePage,
    Tema1_1fPage,

    /**Tema 1 inciso 2 */
    Tema1_2Page,

    /**Tema 1 inciso 3 */
    Tema1_3Page,

    /**Tema 2 inciso 1 */
    Tema2_1Page,

    /**Subtemas Tema 2-1 */
    Tema2_1aPage,
    Tema2_2bPage,


    /**Subtemas Tema 2-2 */
    Tema2_2aPage,


    /**Subtemas Tema 2-3 */
    Tema2_3aPage,

    /**Tema 3 inciso 1 */
    Tema3_1Page,

    /**Subtemas Tema 3-1 */
    Tema3_1aPage,
    Tema3_2aPage,
    Tema3_2bPage,

    /**Actividad y comandos Tema 3-2 */
    /**Nmap */
    ComandosNmapPage,
    PracticaNmapPage,

    /**NetCat */
    ComandosNetCatPage,
    PracticaNetCatPage,

    /**Tema 4 inciso 1 */
    Tema4_1Page,

    /**Sutema 4 inciso 1*/
    Tema4_1aPage,

    /**Sutema 4 inciso 2*/
    Tema4_2aPage,
    Tema4_2bPage,

    /**Subtema 4 inciso 3 */
    Tema4_3aPage,
    Tema4_3bPage,

    /**Subtema 4 inciso 4 */
    Tema4_4aPage,

    /**Subtema 4 inciso 5 */
    Tema4_5aPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
