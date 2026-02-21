import Card from './Card.jsx'
import Captainpic from './assets/capgif.gif'
import wolverpic from './assets/wolvaringif.gif'
import spiderpic from './assets/spidermangif.gif'
import ironmanpic from './assets/iron-gem.gif'
import venompic from './assets/venomgif.gif'
import hulkpic from './assets/hulkgif.gif'
import thorpic from './assets/thorgif.gif'
import cyclopspic from './assets/cyclopsgif.gif'
import stpic from './assets/stormgif.gif'
import magpic from './assets/magnetogif.gif'
import hawpic from './assets/hawkgif.gif'
import mrforpic from './assets/four.gif'
import Header from './header.jsx'
import Footer from './footer.jsx'
function App() {
  
   return(
    <div className='Big_container'>
      <div className='header_container'>
        <Header />
      </div>
    
     <div className = "card_container">
     
        
     
        
       <Card
           heroname= "Captain America"
           heroimage = {Captainpic}
           herotext = "Steve Rogers is a patriotic super-soldier wielding an indestructible vibranium shield to defend freedom and lead the Avengers."
           realname = "Steve Rogers"
           orgin = "Brooklyn, New York"
           role = "Leader of the Avengers"
           power = "Superhuman strength, agility, and endurance"
           strength = "Indestructible vibranium shield, expert hand-to-hand combatant"
           weakness = "No superhuman powers, relies on physical abilities and shield for defense"
           />

           <Card
           heroname= "Wolverine"
           heroimage = {wolverpic}
           herotext = "Mutant warrior with adamantium claws, rapid healing, fierce instincts, relentless fighter, brooding loner, unstoppable in close combat battles."
           realname = "Logan"
           orgin = "Unknown"
           role = "Member of the X-Men"
           power = "Adamantium claws, rapid healing factor"
           strength = "Enhanced senses, superhuman strength and agility"
           weakness = "Vulnerable to certain toxins and diseases, struggles with berserker rage"
           />

           <Card
           heroname= "Spider Man"
           heroimage = {spiderpic}
           herotext = "Agile teenage hero with spider powers, web-slinging acrobat, strong moral compass, protects city from danger daily."
           realname = "Peter Parker"
           orgin = "New York City"
           role = "Hero of New YorkFriendly neighborhood Spider-Man"
           power = "Spider powers, web-slinging, enhanced strength and agility"
           strength = "Superhuman strength, agility, reflexes, and spider-sense"
           weakness = "Vulnerable to certain toxins and diseases, struggles with balancing personal life and heroism"
           />

           <Card
           heroname= "Iron Man"
           heroimage = {ironmanpic}
           herotext = " Genius billionaire in advanced armored suit, powered by arc reactor, flies supersonic speeds, fires repulsors 🦾⚡."
           realname = "Tony Stark"
           orgin = "Long Island, New York"
           role = "Genius ,Billionaire,Playboy,Philanthropist, inventor and superhero"
           power = "Advanced technology, flight, repulsor beams"
           strength = "Superhuman intelligence, advanced armor systems"
           weakness = "Dependence on his suit and arc reactor, vulnerable to electromagnetic interference"
           />

           <Card
           heroname= "Venom"
           heroimage = {venompic}
           herotext = " Alien symbiote bonded to human host, monstrous strength, shape-shifting tendrils, razor fangs, dark humor, antihero instincts, hunts enemies relentlessly."
           realname = "Eddie Brock"
           orgin = "San Francisco, California"
           role = "Antihero, sometimes ally of Spider Man"
           power = "Symbiote powers, shape-shifting, enhanced strength and agility"
           strength = "Superhuman strength, agility, and durability, ability to create weapons from symbiote"
           weakness = "Vulnerable to sonic attacks and fire, struggles with controlling the symbiote's influence"
           />

           <Card
           heroname= "Hulk"
           heroimage = {hulkpic}
           herotext = " Gamma-powered giant fueled by anger, unstoppable strength, earth-shaking leaps, destructive force, misunderstood heart beneath green fury."
           realname = "Bruce Banner"
           orgin = "Dayton, Ohio"
           role = "Scientist and superhero"
           power = "Gamma-powered strength and durability"
           strength = "Strength increases with anger, near invincible"
           weakness = "Loss of control, emotional instability"
           />

            <Card
           heroname= "Thor"
           heroimage = {thorpic}
           herotext = " Asgardian thunder god wielding enchanted hammer, commands lightning storms, noble warrior spirit, immense strength, defender of realms."
           realname = "Thor Odinson"
           orgin = "Asgard"
           role = "God of Thunder, Prince of Asgard"
           power = "Superhuman strength, lightning control, flight, immortality"
           weapon = "Mjolnir / Stormbreaker"
           strength = "Divine durability, combat mastery, storm manipulation"
           weakness = "Arrogance, emotional attachments, worthiness enchantment"
           />

           <Card
           heroname= "Cyclops"
           heroimage = {cyclopspic}
           herotext = " Mutant with laser vision, tactical leader, disciplined fighter, and key member of the X-Men."
           realname = "Scott Summers"
           orgin = "Anchorage, Alaska"
           role = "X-Men Leader"
           power = "Optic energy blasts from eyes"
           strength = "Leadership, disciplined strategist"
           weakness = "Requires visor to control blasts"
           />

           <Card
           heroname= "Magneto"
           heroimage = {magpic}
           herotext = " Mutant with magnetic powers, tactical genius, and key member of the X-Men."
           realname = "Erik Lehnsherr"
           orgin = "Germany"
           role = "X-Men Member"
           power = "Magnetic manipulation"
           strength = "Tactical genius, leadership skills"
           weakness = "Emotional instability, overconfidence"
           />

           <Card
           heroname= "Storm"
           heroimage = {stpic}
           herotext = " Mutant with weather manipulation powers, tactical genius, and key member of the X-Men."
           realname = "Ororo Munroe"
           orgin = "New York City"
           role = "X-Men Member"
           power = "Weather manipulation"
           strength = "Tactical genius, leadership skills"
           weakness = "Emotional instability, overconfidence"
           />

           <Card
           heroname= "Hawkeye"
           heroimage = {hawpic}
           herotext = " Master archer with exceptional precision, tactical genius, and unwavering loyalty to the Avengers."
           realname = "Clint Barton"
           orgin = "Waverly, Iowa"
           role = "Avenger"
           power = "Master archer, skilled marksman"
           strength = "Precision, tactical awareness"
           weakness = "Dependence on equipment, lack of superpowers"
           />

           <Card
           heroname= "Mr. Fantastic"
           heroimage = {mrforpic}
           herotext = " Genius inventor with stretchy powers, tactical genius, and key member of the Fantastic Four."
           realname = "Reed Richards"
           orgin = "Central City, California"
           role = "Leader of the Fantastic Four"
           power = "Stretching and shape-shifting abilities"
           strength = "Genius-level intellect, scientific expertise"
           weakness = "Physical vulnerability, emotional detachment"
           />

          

         </div>   

         <div>
          <Footer />
         </div>
       
     </div>
   )
}

export default App
