const catalyst = [
  {
    name: "Base Catalyst: Arm Blade",
    cost: 0,
    description: "The base catalyst that can project an arm blade of pure mana. Can cast Tier 1 magic from all magic families. Max two catalysts per suit."
  },
  {
    name: "Spell Synthesis",
    cost: 3,
    description: "Gain the ability to combine two spell bases into one spell. Spell bases may play out in sequence or at the same time."
  },
  {
    name: "Advanced Spell Synthesis",
    cost: 3,
    description: "You may now combine up to three spell bases into one spell."
  },
  {
    name: "Paralogical Tier 2 Casting",
    cost: 2,
    description: "Gain access to tier 2 Paralogical affinity effects. Your blade may now take on tier 1 Paralogical affinities."
  },
  {
    name: "Elemental Tier 2 Casting",
    cost: 2,
    description: "Gain access to tier 2 Elemental affinity effects. Your blade may now take on tier 1 Elemental affinities."
  },
  {
    name: "Anticausal Tier 2 Casting",
    cost: 2,
    description: "Gain access to tier 2 Anticausal affinity effects. Your blade may now take on tier 1 Anticausal affinities."
  },
  {
    name: "Paralogical Tier 3 Casting",
    cost: 3,
    description: "Gain access to tier 3 Paralogical affinity effects. Your blade may now take on tier 2 Paralogical affinities."
  },
  {
    name: "Elemental Tier 3 Casting",
    cost: 3,
    description: "Gain access to tier Elemental affinity effects. Your blade may now take on tier 2 Elemental affinities."
  },
  {
    name: "Anticausal Tier 3 Casting",
    cost: 3,
    description: "Gain access to tier 3 Anticausal affinity effects. Your blade may now take on tier 2 Anticausal affinities."
  },
  {
    name: "Catalyst Upgrade: Vanguard",
    cost: 8,
    description: "Can't be taken with Slayer or Sentinel. You now have a catalyst blade in the form of a greatsword with increased blade potency."
  },
  {
    name: "Catalyst Upgrade: Slayer",
    cost: 8,
    description: "Can't be taken with Vanguard or Sentinel. Your catalyst is in a staff form and can project a bladestaff. Spell bases now have greater potency."
  },
  {
    name: "Catalyst Upgrade: Sentinel",
    cost: 8,
    description: "Can't be taken with Vanguard or Slayer. Instead of a blade, your catalyst is now a shield that covers your upper torso. Spells cost less mana."
  },
  {
    name: "Ghost Blade",
    cost: 2,
    description: "Each swing of the blade will cast an echo of itself shortly afterwards, effectively hitting twice."
  },
  {
    name: "Smite",
    cost: 2,
    description: "Activating this special upgrade will lengthen the blade of your catalyst up to three times and lasts for several minutes. Has a moderate cooldown."
  },
  {
    name: "Judgement",
    cost: 3,
    description: "Your catalyst blade has the ability to shoot a projection of itself after charging up with mana for a short-medium distance."
  },
  {
    name: "Moonlight",
    cost: 2,
    description: "Charging up a swing from your catalyst's blade by channeling energy into it will double the blade's potency for that swing."
  },
  {
    name: "Flare",
    cost: 2,
    description: "Charging up a swing from your catalyst's blade by channeling energy into it will cause the next impact to explode."
  },
  {
    name: "Guardian",
    cost: 5,
    description: "Create a near-indestructible immobile forcefield around yourself over a small area, enough to cover your entire fireteam."
  },
  {
    name: "Blink",
    cost: 10,
    description: "Gain the ability to teleport a short distance. While low cooldown, repeated successive Blinks cost an increasing amount of mana to cast."
  },
  {
    name: "Howl",
    cost: 8,
    description: "Activating this upgrade injects a large amount of mana into the servos subsystem of the suit, boosting all mobility capabilities two-fold temporarily."
  },
  {
    name: "Fortitude",
    cost: 1,
    description: "Gain a strong resistance against psychic and mind-based attacks."
  },
];

const affinity = [
  {
    name: "Void Tier 1 Affinity",
    cost: null, // Cost is not explicitly stated for affinities
    description: "Causes severe mana overload burns on targets and neutralizes unspent mana. Has a nullifying effect on other mana-powered mechanisms."
  },
  {
    name: "Void Tier 2 Affinity",
    cost: null,
    description: "Surrounding mana energy is significantly drawn towards the spell base and upon contact, is drained and siphoned back to you."
  },
  {
    name: "Void Tier 3 Affinity",
    cost: null,
    description: "Greatly reduces the amount of mana consumed by the casting of the spell while also making the next spell executable almost instantly."
  },
  {
    name: "Erosion Tier 1 Affinity",
    cost: null,
    description: "Accelerates the erosion of inanimate matter the spell comes into contact with. Higher potencies can rust metal extremely quickly."
  },
  {
    name: "Erosion Tier 2 Affinity",
    cost: null,
    description: "Biomatter that makes contact with the spell is decayed at an alarming rate."
  },
  {
    name: "Erosion Tier 3 Affinity",
    cost: null,
    description: "Random molecules in the affected area are annihilated. Likelihood of success is dependent on spell potency."
  },
  {
    name: "Vorpal Tier 1 Affinity",
    cost: null,
    description: "Crystalization effect. Edges are thinner than any matter known to man and cuts through targets at a sub-molecular level."
  },
  {
    name: "Vorpal Tier 2 Affinity",
    cost: null,
    description: "Ability to drain light. Maximum potency spell bases will have perfect light drain."
  },
  {
    name: "Vorpal Tier 3 Affinity",
    cost: null,
    description: "Attacks intelligence systems in close proximity by introducing entropy into their systems, including artificial intelligences and human minds."
  },
  {
    name: "Thermal Tier 1 Affinity",
    cost: null,
    description: "Lengthens the wavelength of the spell base, adding a slight burning effect while also increasing the velocity significantly."
  },
  {
    name: "Thermal Tier 2 Affinity",
    cost: null,
    description: "Cryogenic affinity that rapidly reduces the temperature of affected targets."
  },
  {
    name: "Thermal Tier 3 Affinity",
    cost: null,
    description: "Adds a molten effect to the point where higher potency spell bases can melt through metal like butter."
  },
  {
    name: "Arc Tier 1 Affinity",
    cost: null,
    description: "An electric affinity that adds an electric charge to the spell base."
  },
  {
    name: "Arc Tier 2 Affinity",
    cost: null,
    description: "Increases the \"conductivity\" of the target against further spells of the same or similar type."
  },
  {
    name: "Arc Tier 3 Affinity",
    cost: null,
    description: "All affinity effects applied on the target will chain to nearby targets. Radius of distribution is dependent on spell affinity."
  },
  {
    name: "Kinetic Tier 1 Affinity",
    cost: null,
    description: "Spell bases gain a dense mass as if made of solid matter. Middle potencies are equivalent to that of denser metal."
  },
  {
    name: "Kinetic Tier 2 Affinity",
    cost: null,
    description: "Adds a detonation effect that releases a shockwave with an explosion velocity dependent on the potency of the spell base."
  },
  {
    name: "Kinetic Tier 3 Affinity",
    cost: null,
    description: "Spell base warps gravity potential of targets. Higher potencies can cause gravitational pulls or gravity riptides."
  },
  {
    name: "Resonance Tier 1 Affinity",
    cost: null,
    description: "Increases the operational integrity of the target's makeup, such as adjusted friction or increased bloodflow."
  },
  {
    name: "Resonance Tier 2 Affinity",
    cost: null,
    description: "Provides a hardening effect on any affected targets, strengthening solid matter or increasing mass for more inertia."
  },
  {
    name: "Resonance Tier 3 Affinity",
    cost: null,
    description: "Rapidly restructures the integrity of matter it comes into contact with. Biomatter is healed."
  },
  {
    name: "Corruption Tier 1 Affinity",
    cost: null,
    description: "Adds a sticky affect to the spell base while also allowing other effects in the same spell base to spread easier."
  },
  {
    name: "Corruption Tier 2 Affinity",
    cost: null,
    description: "Spells leave a lingering effect in the area that is affected. Duration is dependent on the potency of the spell."
  },
  {
    name: "Corruption Tier 3 Affinity",
    cost: null,
    description: "Spell bases hone in on the intended target upon the time the spell is cast. Accuracy is dependent on the potency of the spell."
  },
  {
    name: "Retribution Tier 1 Affinity",
    cost: null,
    description: "Adds the ability to set a timer on the spell base before executing. Higher potencies can delay a spell from casting for several hours."
  },
  {
    name: "Retribution Tier 2 Affinity",
    cost: null,
    description: "Affected targets are hastened. Maximum potency can hasten a target for up to twice normal speed for up to a minute."
  },
  {
    name: "Retribution Tier 3 Affinity",
    cost: null,
    description: "Affected areas are caught and slowed in a time stasis. Higher potencies can effectively stop targets when coming into contact."
  }
];

const spellBases = [
  {
    name: "Dart",
    cost: 1,
    description: "A small bolt of concentrated mana that can be fired off for a medium distance while costing relatively little to cast, and can be casted rather quickly in succession."
  },
  {
    name: "Spray",
    cost: 1,
    description: "Sprays a somewhat condensed cloud of mana in a continuous stream. It's short ranged with a low velocity, but it is effective at what it hits."
  },
  {
    name: "Pulse",
    cost: 1,
    description: "Bursts a very concentrated short-ranged shockwave in a cone in front of you. Has a low cooldown and can be devastating to any targets in range."
  },
  {
    name: "Barricade",
    cost: 1,
    description: "Projects a rectangular barrier that can cover almost a whole side of your suit. While it has a high potency, it only deploys relatively close to you."
  },
  {
    name: "Pinch",
    cost: 1,
    description: "While it has low potency and almost non-existent raw effective power, this base is mostly used for carrying other spell bases to a range in almost an instant."
  },
  {
    name: "Self",
    cost: 1,
    description: "A somewhat mild small self-aura that encompasses only the volume of your suit. That said, it is also very simple to cast and lasts a long time."
  },
  {
    name: "Tether",
    cost: 2,
    description: "A short-ranged tether with high concentration. Its potency slightly increases the longer you remain directly attached to the target with this tether."
  },
  {
    name: "Mine",
    cost: 2,
    description: "Mines can only be casted a short distance, but will detonate into a large explosion after the duration expires or when in proximity to a designated target type."
  },
  {
    name: "Aura",
    cost: 2,
    description: "Radiate a mild aura from your suit that affects all targets indiscriminately. Has a wide affective radius, and it may or may not include yourself."
  },
  {
    name: "Flash",
    cost: 2,
    description: "Suddenly let out a bright flash of mana in a radius around you."
  },
  {
    name: "Crescent",
    cost: 2,
    description: "Shoot out a highly concentrated disc of mana that travels a moderate range. This is very helpful for precision work."
  },
  {
    name: "Arrow",
    cost: 2,
    description: "A moderately sized bolt of mana that travels a decent distance at a decent velocity. It is also popular to use as a medium for carrying other spell bases."
  },
  {
    name: "Beam",
    cost: 4,
    description: "A beam of concentrated mana that travels almost instantly and accurately to your target."
  },
  {
    name: "Bomb",
    cost: 4,
    description: "Fire off a large bomb that, while travels slowly, explodes in a very large and concentrated explosion."
  },
  {
    name: "Pillars",
    cost: 4,
    description: "Summon extremely thin pillars of very potent mana randomly around a moderate radius of yourself. Can be casted rather frequently, and the pillars somewhat prioritize valid"
  }, 
  {
    name: "Cloud",
    cost: 4,
    description: "A slow-moving cloud that covers a very large radius that can travel a moderate distance, lingering for a very long while."
  },
  {
    name: "Spear",
    cost: 6,
    description: "Throw an extremely dense spear of mana that can pierce through multiple targets."
  },
  {
    name: "Swarm",
    cost: 6,
    description: "Burst forward a group of accelerated mana darts. While somewhat inaccurate, it can be casted almost continuously and devastates anything in its path."
  },
  {
    name: "Haze",
    cost: 6,
    description: "A mana bomb that has a mild-but-effective explosion with a very large radius which leaves behind a lingering dense cloud."
  },
  {
    name: "Barrier",
    cost: 6,
    description: "Summon wide barrier of potent mana that's large enough to cover you and your fireteam from one direction."
  },
  {
    name: "Overload",
    cost: 10,
    description: "Charge up to fire a wide, devastating beam of mana that travels a far distance in an instant."
  },
  {
    name: "Nova",
    cost: 10,
    description: "Cast a sudden explosion around yourself that engulfs a large area, which then lingers for awhile as a violent storm of mana."
  },
  {
    name: "Starfall",
    cost: 10,
    description: "Shoot a burst of eight beams of concentrated mana that can hone in on separate targets or hit the same target multiple times."
  },
  {
    name: "Radiance",
    cost: 10,
    description: "Radiate an aura of mana over an extremely large area from your suit, which lingers for a long time."
  }
];