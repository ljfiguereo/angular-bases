import { Component } from '@angular/core';

@Component({
  selector: 'app-horoes-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {
  public name:  string = 'ironman';
  public age:   number = 40;

  public heroList:string[] = [
    '3D Man','Abe Brown','Abigail Brand','Abyss','Access','Adam Warlock','Adam X','Agamotto','Aleta Ogord',
    'Alexander Pierce','Alhelí','Alud','Amadeus Cho','Amo de las Marionetas','Anachronism','Ángel','Angel Salvadore',
    'Anole','AntMan Scott Lang','Antorcha Humana','Antorcha Humana androide','Anya Corazon','Aquiles','Araña de Acero',
    'Ares','Ariel','Arkon','Armadura','Arsenal','AssKicker','Atlas','Aurora','Avance','Ave de Trueno','Avispa',
    'Bala de Cañón','Balder','Banshee','Battle Guy','Beak','Belasco','Bestia','Bill Foster','Bishop','Blade','Blink',
    'Blonde Phantom','BoomBoom','Bruja Escarlata','Bucky','Caballero Luna','Caballero Negro','Cable','Cachorro',
    'Caliban','Callisto','Cameron Hodge','Cammi','Capitán América','Capitán Britania','Capitán Confederación',
    'Capitán Marvel GenisVell','Capitán Marvel','Carol Danvers','Caucho','Cerilla','Chamber','Chaqueta Amarilla Rita DeMara','Charles Xavier','Charlie27','Chase Stein','Chica Ardilla','Cíclope','Cindy Moon/Silk','Cloak and Dagger','Coloso','Comandos Aulladores','Comepecados','Conan','Copycat','Corredor','Corredor Cohete','Corsario','Cosmo el perro espacial','Crystal','Cypher','Danielle Moonstar','Danza del Viento','Daredevil','Dark Claw','Darkhawk','Dazzler','Deadpool','Deathlok','Defensor','Depredador X','Diablo','DJ','Doctor Strange','Domino personaje','Dos Pistolas Kid','Strangefate','Dragón Lunar','Drax el Destructor','Dríada','Dum Dum Dugan','Dust','Dínamo Carmesí','Echo','Edwin Jarvis','El Olvidado','El Ruso','Elektra Natchios','Eli Bard','Elixir comics','Emma Frost','Émpata','Equinox','Escorpión','Escuadrón Alfa','Espadachín','Espectro cómic XMen','Espectro','Estatura','Estrella de Fuego','Estrella de Guerra','Excelsior','Ezekiel Sims','Falcon','Fantomex','Feral','Fin Fang Foom','Firelord','Flash Thompson','Forja','Franklin Richards','Frigga','Fuego Brujo','Fuego Solar','Fuerza Fénix','Fénix (Jean Grey)','Gambito','Gamora','Gata Negra','Gateway','Geldoff','Gertrude Yorkes','Ghost Rider','Gladiador','Gorgon Inhumano','Gorgon Tomi Shishido','Gran Maestro','Graymalkin','Groot','Guardián','Guardián Rojo','Hada XMen','Havok','Heimdall','Hellion','Henry Peter Gyrich','Henry Pym','Hepzibah','Hércules','Hermod','Hiperión','Hombre Cosa','Hombre Hormiga','Hombre Lobo','Hombre Maravilla','Hombre Molécula','Hombre Ígneo','Hrimhari Príncipe Lobo','Hulk','Hulkling','Husar','Husk','Iceman','Ícaro','Iguana','Indra','Ink','Iron Man','Iron Man 2020','Jasón','Jamie Madrox','Jessica Jones','Jetstream','Jinete Fantasma','John Jameson','Jolt','Júbilo','Juggernaut','Julia Carpenter','KaZar','Karma','Karolina Dean','Kevin Sydney','KickAss personaje','Kidogo','Kitty Pryde','Layla Miller','Leech','Lila Cheney','Loa','Lockheed','Loners','Longshot','Los Hijos de la Cámara','Los Modelos','Luke Cage','Machine Man','Madame Máscara','Madame Web','Magik Illyana Rasputin','Magma Amara Aquilla','Magneto','Malicia','Mandíbulas','Mantis','MarVell','Mariko Yashida','Marrina','Marrow','Martha Johansson','Martin Soap','Martinex','Medusa','Meggan','Mentac','Mercurio','Merodeador','Miles Morales','Moira MacTaggert','Molly Hayes','Monica Rambeau','Morfo XMen','Mujer Invisible','Mystique','N’astirh','N’Garai','Namor','Namorita','Nate Grey','Neutrón','Nick Fury','Nico Minoru','Nightcrawler','Nikki','Northstar','Nova Richard Rider','Ojo de Gata','Ojo de Halcón','Pantera Negra','Paragon','Patriota','Pepper Potts','Phil Coulson','Pip el Troll','Polaris','Princesa Poder','Prodigio','Prodigio Ritchie Gilmore','Psylocke','Puma','Punisher','Punisher 2099','Puño de Hierro','Pájaro Burlón','Púa','Quicksilver','Rachel Summers','Ravage 2099','Rayo Estelar','Rayo Negro','Red cómic Marvel','Red Sonja','Reed Richards','Reina Leprosa','Reptil','Revanche','Rey Mono','Rick Jones','Rictor','Robbie Baldwin','Rocket Raccoon','Rogue','Rom','Ruina','Ruleta','S’ym','S. Agent','Sage','Samurái de Plata','Sasquatch','Satana','Sentry','Sersi','Shanna la Diablesa','Shatterstar','SheHulk','Sif','Silver Surfer','Silverclaw','Silvermane','Siryn','Songbird','Spider Girl','Spider Man','Spider Man 2099','Spider Man and Captain America in Doctor Doom’s Revenge','Spider Woman Jessica Drew','Spider Woman Mattie Franklin','Stacy X','StarLord','Starhawk','Starjammers','Stepford Cuckoos','Stick','Strong Guy','Sueño Americano','Sunspot','Surge','Tag','Tarot','The Wink','Thing','Thor','Thunderstrike','Thundra','Tigra','Titán','Tormenta','Torunn','Toxin','Trance','Tritón','Tyr','Ulises','Union Jack','Valeria Richards','Valerie Cooper','Valquiria','Vance Astro','Veloz','Venda','Vengeance','Venom','Ventisca Donnie Gill','Versiones alternativas de Míster Fantástico','Victor Mancha','Vindicator','Visión','Viuda Negra','Víctor Álvarez','Warlock Nuevos Mutantes','Warpath','White Tiger Ava Ayala','Wolfsbane','Wolverine (Lobezno)','Wyatt Wingfoot','X23','Xavin','Xorn','Yondu','Yukio','Zorra Plateada','Zumbador Robert Frank'
  ];

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${this.name} - ${this.age}`;
  }

  changeHero():void{
    this.name = "Spiderman";
  }
  changeAge():void{
    this.age = 45;
  }
  changeAll():void {
    let index = Math.floor(Math.random()*this.heroList.length);
    this.name = this.heroList[index];

    let age = Math.floor(Math.random()*60);
    this.age = age;
  }
}
