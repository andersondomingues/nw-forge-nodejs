import './Statistics.module.css';

import Header from '../../components/header/Header.js';
import Footer from '../../components/footer/Footer.js';
import Navigator from '../../components/navigator/Navigator.js';

import locdb from '../../libs/localization.js';

import character from '../../libs/nwlib.js';

const Statistics = () => {



  return (
    <div className="App">
      <Header/>
      <Navigator />
      <form>
        <fieldset>
          <legend>{locdb.statisticsRatings}</legend>
          <table>
            <thead>
              <tr>
                <th>{locdb.statisticsAttribute}</th>
                <th>{locdb.statisticsRatings}</th>
                <th>{locdb.statisticsPercentage}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{locdb.statisticsPower}</td>
                <td>000{character.power}</td>
                <td>{character.powerCalculated}</td>
              </tr>
              <tr>
                <td>{locdb.statisticsCombatAdvantage  }</td>
                <td>{character.power}</td>
              </tr>
              <tr>
                <td>{locdb.statisticsAccuracy}</td>
                <td>{character.power}</td>
              </tr>
              <tr>
                <td>{locdb.statisticsCriticalStrike}</td>
                <td>{character.power}</td>
              </tr>
              <tr>
                <td>{locdb.statisticsCriticalSeverity}</td>
                <td>{character.power}</td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th>{locdb.statisticsAttribute}</th>
                <th>{locdb.statisticsRatings}</th>
                <th>{locdb.statisticsPercentage}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{locdb.statisticsDefense}</td>
                <td>{character.defense}</td>
                <td>{character.powerCalculated}</td>
              </tr>
              <tr>
                <td>{locdb.statisticsAwareness  }</td>
                <td>{character.power}</td>
              </tr>
              <tr>
                <td>{locdb.statisticsCriticalAvoidance}</td>
                <td>{character.power}</td>
              </tr>
              <tr>
                <td>{locdb.statisticsDeflect}</td>
                <td>{character.power}</td>
              </tr>
              <tr>
                <td>{locdb.statisticsDeflectSeverity}</td>
                <td>{character.power}</td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th>{locdb.statisticsAttribute}</th>
                <th>{locdb.statisticsRatings}</th>
                <th>{locdb.statisticsPercentage}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{locdb.statisticsForte}</td>
                <td>{character.defense}</td>
                <td>{character.powerCalculated}</td>
              </tr>
              <tr>
                <td>{locdb.statisticsControlBonus}</td>
                <td>{character.power}</td>
              </tr>
              <tr>
                <td>{locdb.statisticsControlResistance}</td>
                <td>{character.power}</td>
              </tr>
              <tr>
                <td>{locdb.statisticsIncomingHealing}</td>
                <td>{character.power}</td>
              </tr>
              <tr>
                <td>{locdb.statisticsOutgoingHealing}</td>
                <td>{character.power}</td>
              </tr>
            </tbody>
          </table>
        </fieldset>
        <fieldset>
          <legend>{locdb.statisticsBoosts}</legend>
          <table>
            <thead>
              <tr>
                <th>{locdb.statisticsAttribute}</th>
                <th>{locdb.statisticsRatings}</th>
                <th>{locdb.statisticsPercentage}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{locdb.statisticsActionPointGain}</td>
                <td>{character.defense}</td>
                <td>{character.powerCalculated}</td>
              </tr>
              <tr>
                <td>{locdb.statisticsRechargeSpeed}</td>
                <td>{character.power}</td>
              </tr>
              <tr>
                <td>{locdb.statisticsMovementSpeed}</td>
                <td>{character.power}</td>
              </tr>
              <tr>
                <td>{locdb.statisticsStaminaRegeneration}</td>
                <td>{character.power}</td>
              </tr>
              <tr>
                <td>{locdb.statisticsPhysicalDamageBoost}</td>
                <td>{character.power}</td>
              </tr>
              <tr>
                <td>{locdb.statisticsMagicalDamageBoos}</td>
                <td>{character.power}</td>
              </tr>
              <tr>
                <td>{locdb.statisticsGoldBonus}</td>
                <td>{character.power}</td>
              </tr>
              <tr>
                <td>{locdb.statisticsGloryBonus}</td>
                <td>{character.power}</td>
              </tr>
            </tbody>
          </table>
        </fieldset>
      </form>
      <Footer />
    </div>
  );
}

export default Statistics;
