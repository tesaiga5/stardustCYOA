switch(item.specialty){
      case 'Pilot':
          // The section for engineers comes after the pilot section.
          targetSection = document.getElementById('title-engineerCrew');
          console.log(targetSection);
          break;
      case 'Ship Gunner':
          // The section for combat crew comes after the gunner section.
          targetSection = document.getElementById('title-combatCrew');
          break;
      case 'Engineer':
      case 'Mechanic':
      case 'Nuclear':
      case 'Gadgeteer':
          // The section for doctors comes after the engineer section.
          targetSection = document.getElementById('title-doctorCrew');
          break;
      case 'Scientist':
          // The section for production comes after the scientist section.
          targetSection = document.getElementById('title-productionCrew');
          break;
      case 'Witch Doctor':
      case 'Medic':
          // The section for gunners comes after the doctor section.
          targetSection = document.getElementById('title-gunnerCrew');
          break;
      case 'production':
          // The section for chefs comes after the production section.
          targetSection = document.getElementById('title-chefs');
          break;
      case 'Guerilla warfare':
      case 'Sniping':
      case 'Ship Security':
      case 'Covert Ops':
      case 'Point Position':
      case 'Long-range':
      case 'Front-line Assault':
      case 'Long-range (Laser Weapons)':
      case 'Sentry':
      case 'Hand-to-hand':
      case 'Storming':
      case 'Sniping (Assassin)':
      case 'Storming (Shock Trooper)':
          // The section for cybersec comes after the combat section.
          targetSection = document.getElementById('title-cybersecCrew');
          break;
      case 'cybersec':
          // The section for mages comes after the cybersec section.
          targetSection = document.getElementById('title-mageCrew');
          break;
      case 'mage':
          // The section for scientists comes after the mage section.
          targetSection = document.getElementById('title-scientistCrew');
          break;
      case 'chefs':
      case null:
          break;
      }


    
        break;
    case 'Survival':
        // Your code here for Survival
        break;