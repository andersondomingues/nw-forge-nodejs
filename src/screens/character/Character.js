import './Character.module.css';

import Header from '../../components/header/Header.js';
import Footer from '../../components/footer/Footer.js';
import Navigator from '../../components/navigator/Navigator.js';
import React from 'react';

import locdb from '../../libs/localization.js';

import swordIcon from '../../assets/icons/sword.png';
import helmetIcon from '../../assets/icons/helmet.png';
import shieldIcon from '../../assets/icons/shield.png';
import armourIcon from '../../assets/icons/armour.png';
import gloveIcon from '../../assets/icons/glove.png';
import bootIcon from '../../assets/icons/boot.png';

import enchantmentIcon from '../../assets/icons/gem.png';
import artifactIcon from '../../assets/icons/vase.png';
import artifactMainIcon from '../../assets/icons/crown.png';
import enchantmentIcon2 from '../../assets/icons/jewel-2.png';
import enchantmentIcon3 from '../../assets/icons/footman.png';

import necklaceIcon from '../../assets/icons/necklace.png';
import ringIcon from '../../assets/icons/ring.png';
import beltIcon from '../../assets/icons/belt.png';
import shirtIcon from '../../assets/icons/shirt.png';
import shortsIcon from '../../assets/icons/shorts.png';



const Character = () => {
  return (
    <div className="App">
      <Header/>
      <Navigator />
      <form>
        <fieldset>
          <legend>{locdb.characterEquipment}</legend>
          <table>
            <thead>
              <tr className="tableHeader">
                <th>{locdb.characterItem}</th>
                <th>{locdb.characterModification}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src={helmetIcon} alt=""/>
                  <select>
                    <option>Redcap's Cap</option>
                  </select>
                </td>
                <td>
                  <select>
                    <option>Major Power Armor Kit +1</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={armourIcon} alt=""/>
                  <select>
                    <option>Major Power Armor Kit +1</option>
                  </select>
                </td>
                <td>
                  <select>
                    <option>Major Power Armor Kit +1</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={gloveIcon} alt=""/>
                  <select>
                    <option>Wristguard Precipitation</option>
                  </select>
                </td>
                <td>
                  <select>
                    <option>Major Power Armor Kit +1</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={swordIcon} alt=""/>
                  <select>
                    <option>Golden Watcher's Sword</option>
                  </select>
                </td>
                <td>
                  <select>
                    <option>Major Power Armor Kit +1</option>
                  </select>                  
                </td>
              </tr>
              <tr>
                <td>
                  <img src={shieldIcon} alt=""/>
                  <select>
                    <option>Golden Watcher's Buckler</option>
                  </select>
                  <br />&nbsp;
                </td>
                <td>
                  <select style={{marginBottom: '3px'}}>
                    <option>Critical Severity</option>
                  </select><br />
                  <select>
                    <option>Enhanced Power</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={bootIcon} alt=""/>
                  <select>
                    <option>Ebonized Boots</option>
                  </select>
                </td>
                <td>
                  <select>
                    <option>Major Power Armor Kit +1</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>

          <table>
            <thead>
              <tr className="tableHeader">
                <th>{locdb.characterItem}</th>
                <th>{locdb.characterModification}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src={necklaceIcon} alt=""/>
                  <select>
                    <option>Mythallar Shard</option>
                  </select>
                </td>
                <td>
                  <select>
                    <option>Major Combat Advantage Armor Kit +1</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={ringIcon} alt=""/>
                  <select>
                    <option>Diamond Ring of Smite +3</option>
                  </select>
                </td>
                <td>
                  <select>
                    <option>Major Combat Advantage Armor Kit +1</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={ringIcon} alt=""/>
                  <select>
                    <option>Band of Air</option>
                  </select>
                </td>
                <td>
                  <select>
                    <option>Major Combat Advantage Armor Kit +1</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={beltIcon} alt=""/>
                  <select>
                    <option>Mythallar Piece</option>
                  </select>
                </td>
                <td>
                  <select>
                    <option>Major Combat Advantage Armor Kit +1</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={shirtIcon} alt=""/>
                  <select>
                    <option>Might Dwarven Limb Pattern</option>
                  </select>
                </td>
                <td>
                  <select>
                    <option>- -</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={shortsIcon} alt=""/>
                  <select>
                    <option>Might Dwarven Limb Pattern</option>
                  </select>
                </td>
                <td>
                  <select>
                    <option>- -</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </fieldset>

        <fieldset>
          <legend>{locdb.characterEnhancements}</legend>
          <table>
            <thead>
              <tr className="tableHeader">
                <th>{locdb.characterEnchantmentsOffensive}</th>
                <th>{locdb.characterEnchantmentsDefensive}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src={enchantmentIcon} alt=""/>
                  <select>
                    <option>Citrine (Mythic)</option>
                  </select>
                </td>
                <td>
                  <img src={enchantmentIcon} alt=""/>
                  <select>
                    <option>Citrine (Mythic)</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={enchantmentIcon} alt=""/>
                  <select>
                    <option>Citrine (Mythic)</option>
                  </select>
                </td>
                <td>
                  <img src={enchantmentIcon} alt=""/>
                  <select>
                    <option>Citrine (Mythic)</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={enchantmentIcon} alt=""/>
                  <select>
                    <option>Citrine (Mythic)</option>
                  </select>
                </td>
                <td>
                  <img src={enchantmentIcon} alt=""/>
                  <select>
                    <option>Citrine (Mythic)</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={enchantmentIcon} alt=""/>
                  <select>
                    <option>Citrine (Mythic)</option>
                  </select>
                </td>
                <td>
                  <img src={enchantmentIcon} alt=""/>
                  <select>
                    <option>Citrine (Mythic)</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>

          <table>
            <thead>
              <tr className="tableHeader">
                <th>{locdb.characterOtherEnchantments}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src={enchantmentIcon} alt="" title="Utility Enchantment"/>
                  <select>
                    <option>Citrine (Mythic)</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={enchantmentIcon3} alt="" title="Combat Enchantment" />
                  <select>
                    <option>Poisoned Thorn</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={enchantmentIcon2} alt="" title="Support Enchantment"/>
                  <select>
                    <option>Movement Bonus</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>

          <table>
            <thead>
              <tr className="tableHeader">
                <th>{locdb.characterArtifacts}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src={artifactMainIcon} alt=""/>
                  <select>
                    <option>Sigil of the Bard</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={artifactIcon} alt=""/>
                  <select>
                    <option>Sigil of the Bard</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={artifactIcon} alt=""/>
                  <select>
                    <option>Sigil of the Bard</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={artifactIcon} alt=""/>
                  <select>
                    <option>Sigil of the Bard</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>

          <table>
            <thead>
              <tr className="tableHeader">
                <th>{locdb.characterOverloads}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src={enchantmentIcon} alt=""/>
                  <select>
                    <option>Fey Slayer</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={enchantmentIcon} alt=""/>
                  <select>
                    <option>Fey Slayer</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </fieldset>
      </form>
      <Footer />
    </div>
  );
}

export default Character;
