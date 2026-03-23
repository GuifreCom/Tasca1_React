import { useState } from 'react'
import './App.css'
import IncrementDecrement from './components/tasca1/Exercici1'
import Cercle from './components/tasca1/Exercici2'
import Lorem from './components/tasca1/Exercici3'
import CanviImatge from './components/tasca1/Exercici4'
import Galeria from './components/tasca2/Exercici1'
import Carousel from './components/tasca2/Exercici2'
import Component from './components/tasca3/Exercici1'
import Menu from './menu'
import Shyvana from './imatges/Shyvana.jpg'
import Zaahen from './imatges/Zaahen.jpg'
import Swain from './imatges/Swain.jpg'
import Smolder from './imatges/Smolder.jpg'
import Jinx from './imatges/Jinx.jpg'

function App() {

  const [tascaSeleccionada, setTascaSeleccionada] = useState("tasca1.1")

  function getTascaComponent(){
    switch (tascaSeleccionada) {
      case "tasca1.1":
        return <IncrementDecrement/>
      case "tasca1.2":
        return <Cercle/>
      case  "tasca1.3":
        return <Lorem/>
      case "tasca1.4":
        return <CanviImatge/>
      case "tasca2.1":
        return <Galeria/>
      case "tasca2.2":
        return <Carousel/>
      case "tasca3.1":
        return( 
          <div style={{
            display:"flex",
            gap:"10px",
            width:"90vw"
          }}>
            <Component
            imatge={Shyvana} 
            titol="Shyvana The Half-Dragon" 
            textp="Shyvana is a creature with the magic of a rune shard burning within her heart. Though she often appears humanoid, she can take her true form as a fearsome dragon, incinerating her foes with fiery breath. Having saved the life of the crown prince Jarvan IV, Shyvana now serves uneasily in his royal guard, struggling to find acceptance among the suspicious people of Demacia."
            textb1="Wiki"
            enllaç1="https://wiki.leagueoflegends.com/en-us/Shyvana"
            textb2="Build"
            enllaç2="https://u.gg/lol/champions/shyvana/build"
            />
            <Component
            imatge={Zaahen}
            titol="Zaahen The Unsundered" 
            textp="A fallen god wielding both divine and profane power, Zaahen hunts his fellow Darkin while defying the corruption that threatens to consume him. Once willingly sealed within his glaive to stave off madness, he now walks free, noble in heart and vicious in purpose. Zaahen fights an eternal war within—but so long as he endures, he will rise above all who seek to bring Runeterra to ruin."
            textb1="Wiki"
            enllaç1="https://wiki.leagueoflegends.com/en-us/Zaahen"
            textb2="Build"
            enllaç2="https://u.gg/lol/champions/zaahen/build"
            />
            <Component
            imatge={Swain}
            titol="Swain The Noxian Grand General" 
            textp="Jericho Swain is the visionary ruler of Noxus, an expansionist nation that reveres only strength. Though he was cast down and crippled in the Ionian wars, his left arm severed, he seized control of the empire with ruthless determination.. and a new, demonic hand. Now, Swain commands from the front lines, marching against a coming darkness that only he can see—in glimpses gathered by shadowy ravens from the corpses all around him. In a swirl of sacrifice and secrets, the greatest secret of all is that the true enemy lies within."
            textb1="Wiki"
            enllaç1="https://wiki.leagueoflegends.com/en-us/Swain"
            textb2="Build"
            enllaç2="https://u.gg/lol/champions/swain/build"
            />
            <Component
            imatge={Smolder}
            titol="Smolder The Fiery Fledgling" 
            textp="Hidden amongst the craggy cliffs of the Noxian frontier, under the watchful eyes of his mother, a young dragon is learning what it means to be heir to the Camavoran imperial dragon lineage. Playful and eager to grow up, Smolder looks for any excuse to practice his burgeoning abilities. Though he's still a fledgling, his skills are nothing to sneeze at, easily setting fire to anything that burns."
            textb1="Wiki"
            enllaç1="https://wiki.leagueoflegends.com/en-us/Smolder"
            textb2="Build"
            enllaç2="https://u.gg/lol/champions/smolder/build"
            />
            <Component
            imatge={Jinx}
            titol="Jinx The Loose Cannon" 
            textp="An unhinged and impulsive criminal from the undercity, Jinx is haunted by the consequences of her past—but that doesn't stop her from bringing her own chaotic brand of pandemonium to Piltover and Zaun. She uses her arsenal of DIY weapons to devastating effect, unleashing torrents of colorful explosions and gunfire, inspiring the disenfranchised to rebellion and resistance with the mayhem she leaves in her wake."
            textb1="Wiki"
            enllaç1="https://wiki.leagueoflegends.com/en-us/Jinx"
            textb2="Build"
            enllaç2="https://u.gg/lol/champions/jinx/build"
            />
          </div>
       )
        
    
    }
  }

  return (
    <>
    <Menu canviarTasca={setTascaSeleccionada}/>
    {getTascaComponent()}
    </>
  )
}

export default App