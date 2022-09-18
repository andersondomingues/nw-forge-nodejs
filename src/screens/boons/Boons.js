import './Boons.module.css';

import Header from '../../components/header/Header.js';
import Footer from '../../components/footer/Footer.js';
import Navigator from '../../components/navigator/Navigator.js';
import React from 'react';

import locdb from '../../libs/localization.js';

// import swordIcon from '../../assets/icons/sword.png';

const Boons = () => {
  return (
    <div className="App">
      <Header/>
      <Navigator />
      <form>
        <fieldset>
          <legend>{locdb.boonsCampaigns}</legend>
          <table>
            <tbody>
              <tr>
                <th>{locdb.boonsMasterBoons}<br />({locdb.boonsChooseOne})</th>
                <td>Deathly Rage<br /><input type="number" min={0} max={5} /></ td>
                <td>Death's Bulwark<br /><input type="number" min={0} max={5} /></ td>
                <td>Blood Lust<br /><input type="number" min={0} max={5} /></ td>
                <td>Focused Retaliation<br /><input type="number" min={0} max={5} /></ td>
                <td>Life Lessons<br /><input type="number" min={0} max={5} /></ td>
                <td>Enhanced Application<br /><input type="number" min={0} max={5} /></ td>
                <td>Blessed Advantage<br /><input type="number" min={0} max={5} /></ td>
                <td>Blessed Resilience<br /><input type="number" min={0} max={5} /></ td>
              </tr>
              <tr>
                <th>{locdb.boonsTier}&nbsp;5<br />({locdb.boonsChooseTwo})</th>
                <td>Welcome Blessing<br /><input type="number" min={0} max={5} /></ td>
                <td>Masterclass<br /><input type="number" min={0} max={5} /></ td>
                <td>Second Wind<br /><input type="number" min={0} max={5} /></ td>
                <td>Blessed Touch<br /><input type="number" min={0} max={5} /></ td>
                <td>Call of Power<br /><input type="number" min={0} max={5} /></ td>
                <td>Quick Turnaround<br /><input type="number" min={0} max={5} /></ td>
                <td>Constant Control<br /><input type="number" min={0} max={5} /></ td>
              </tr>
              <tr>
                <th>{locdb.boonsTier}&nbsp;4</th>
                <td>Captain's Training<br /><input type="number" min={0} max={5} /></ td>
                <td>Accuracy<br /><input type="number" min={0} max={5} /></ td>
                <td>Deflect<br /><input type="number" min={0} max={5} /></ td>
                <td>Necrotic Bulwark<br /><input type="number" min={0} max={5} /></ td>
                <td>Necrotic Mastery<br /><input type="number" min={0} max={5} /></ td>
                <td>Disenchanting Aura<br /><input type="number" min={0} max={5} /></ td>
                <td>Lingering Power<br /><input type="number" min={0} max={5} /></ td>
              </tr>
              <tr>
                <th>{locdb.boonsTier}&nbsp;3</th>
                <td>Knight's Training<br /><input type="number" min={0} max={5} /></ td>
                <td>Combat Advantage<br /><input type="number" min={0} max={5} /></ td>
                <td>Awareness<br /><input type="number" min={0} max={5} /></ td>
                <td>Dino Bulwark<br /><input type="number" min={0} max={5} /></ td>
                <td>Dino Power<br /><input type="number" min={0} max={5} /></ td>
                <td>Deflect Severity<br /><input type="number" min={0} max={5} /></ td>
                <td>Lingering Fortification<br /><input type="number" min={0} max={5} /></ td>
              </tr>
              <tr>
                <th>{locdb.boonsTier}&nbsp;2</th>
                <td>Squire's Training<br /><input type="number" min={0} max={5} /></ td>
                <td>Critical Severity<br /><input type="number" min={0} max={5} /></ td>
                <td>Defense <br /><input type="number" min={0} max={5} /></ td>
                <td>Demonic Bulwark<br /><input type="number" min={0} max={5} /></ td>
                <td>Demonic Mastery<br /><input type="number" min={0} max={5} /></ td>
                <td>Marathon Runner<br /><input type="number" min={0} max={5} /></ td>
                <td>Lingering Medicine<br /><input type="number" min={0} max={5} /></ td>
              </tr>
              <tr>
                <th>{locdb.boonsTier}&nbsp;1</th>
                <td>Recruit's Training<br /><input type="number" min={0} max={5} /></ td>
                <td>Critical Strike<br /><input type="number" min={0} max={5} /></ td>
                <td>Critical Avoidance<br /><input type="number" min={0} max={5} /></ td>
                <td>Cultist Bulwark<br /><input type="number" min={0} max={5} /></ td>
                <td>Cultist Power<br /><input type="number" min={0} max={5} /></ td>
                <td>Gold Gain<br /><input type="number" min={0} max={5} /></ td>
              </tr>
            </tbody>
          </table>
        </fieldset>

        <fieldset>
          <legend>{locdb.boonsGuild}</legend>
          <table>
            <tbody>
              <tr>
                <th>{locdb.boonsGuildLevel}</th>
                <td>
                  <input type="number" />
                </td>
              </tr>
              <tr>
                <th>{locdb.boonsOffense}</th>
                <td>
                  <select>
                    <option>Power Bonus</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th>{locdb.boonsDefense}</th>
                <td>
                  <select>
                    <option>Defense Bonus</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th>{locdb.boonsUtility}</th>
                <td>
                  <select>
                    <option>Mount Speed Bonus</option>
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

export default Boons;
