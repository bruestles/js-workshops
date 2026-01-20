/**
 * A wizard can cast a spell if they have the spell prepared.
 * They can also cast it from a scroll even if it is not prepared.
 * @param {boolean} isSpellPrepared - whether the spell is prepared
 * @param {boolean} hasScroll - whether the wizard has a scroll of the spell
 * @returns {boolean} whether the wizard can cast the spell
 */
function canCastSpell(isSpellPrepared, hasScroll) {
  if (isSpellPrepared || hasScroll) {
    return true;
  } else {
    return false;
  }
}

// // Only 'Happy Testing' :-)
// const userIsSpellPrepared = Number(
//   prompt(`Is your spell prepared?
//     [1] Yes
//     [0] No`),
// );
// const userHasScroll = Number(
//   prompt(`Do you have a scroll with the spell?
//     [1] Yes
//     [0] No`),
// );
// console.log(canCastSpell(userIsSpellPrepared, userHasScroll));

/**
 * A creature is hidden from an observer if it is actively hiding
 * or if the observer is not aware of it.
 * @param {boolean} hiding - whether the creature is actively hiding
 * @param {boolean} aware - whether the observer is aware of the creature
 * @returns {boolean} whether the creature is hidden from the observer
 */
function isHidden(hiding, aware) {
  if (hiding || !aware) {
    return true;
  } else {
    return false;
  }
}

// // Only 'Happy Testing' :-)
// const userHiding = Number(
//   prompt(`Is the creature actively hiding?
//     [1] Yes
//     [0] No`),
// );
// const userAware = Number(
//   prompt(`Is the observer aware of the creature?
//     [1] Yes
//     [0] No`),
// );
// console.log(isHidden(userHiding, userAware));

/**
 * A strike hits if the attack value is greater than or equal
 * to the target's armor class (AC).
 * @param {number} attack - the attack value
 * @param {number} ac - the armor class to beat
 * @returns {boolean} whether the strike hits
 */
function doesStrikeHit(attack, ac) {
  if (attack >= ac) {
    return true;
  } else {
    return false;
  }
}

// Only 'Happy Testing' :-)
// const userAttack = Number(
//   prompt(`What is the attack value? Provide a number:`),
// );
// const userAc = Number(
//   prompt(`What is the target's armor class? Provide a number:`),
// );
// console.log(doesStrikeHit(userAttack, userAc));

/**
 * A strike is a critical hit if the attack value is at least
 * 10 greater than the target's armor class (AC).
 * @param {number} attack - the attack value
 * @param {number} ac - the armor class to beat
 * @returns {boolean} whether the strike is a critical hit
 */
function doesStrikeCrit(attack, ac) {
  if (attack > ac + 10) {
    return true;
  } else {
    return false;
  }
}

// // Using responses from previous questions
// console.log(doesStrikeCrit(userAttack, userAc));

/**
 * A creature can restore hit points (HP) by healing,
 * but its total HP cannot exceed its maximum HP.
 * @param {number} maxHp - maximum hit points
 * @param {number} currentHp - current hit points
 * @param {number} healAmount - amount to heal
 * @returns {number} total hit points after healing
 */
function heal(maxHp, currentHp, healAmount) {
  HealedHP = currentHp - healAmount;
  if (HealedHP > maxHp) {
    return maxHp;
  } else {
    return HealedHP;
  }
}

// const userMaxHP = prompt(`What is the maximum HP? Provide a number.`);
// const userCurrentHP = prompt(`What is the current HP? Provide a number.`);
// const userHealAmount = prompt(
//   `How much has the creature healed? Provide a number.`,
// );
// console.log(`Final HP:`, heal(userMaxHP, userCurrentHP, userHealAmount));

/**
 * When a character uses a skill they have proficiency in,
 * they get to add a bonus to their attempt.
 *
 * | Rank       | Bonus     |
 * | ---        | ---       |
 * | untrained  | 0         |
 * | trained    | level + 2 |
 * | expert     | level + 4 |
 * | master     | level + 6 |
 * | legendary  | level + 8 |
 *
 * @param {number} level - level of the character
 * @param {string} rank - character's proficiency rank
 * @returns {number} the character's proficiency bonus
 */
function getProficiencyBonus(level, rank) {
  if (rank === "untrained") {
    return 0;
  } else if (rank === "trained") {
    return level + 2;
  } else if (rank === "expert") {
    return level + 4;
  } else if (rank === "master") {
    return level + 6;
  } else if (rank === "legendary") {
    return level + 8;
  }
}
// Happy Testing only :-)
// const userRank =
//   prompt(`What is the character's proficiency rank? Enter one of the following:
//   untrained, trained, expert, master, or legendary`).toLowerCase();
// const userLevel = Number(
//   prompt(`What is the level of the character? Enter a number:`),
// );
// console.log(getProficiencyBonus(userLevel, userRank));

/**
 * A creature can get a bonus to its armor class (AC) by taking cover.
 * If the creature is behind an obstacle, it gets a +2 bonus to its AC,
 * unless the creature is actively taking cover, in which case it gets
 * a +4 bonus to its AC.
 * A creature that is not behind an obstacle gets no bonus to its AC.
 * @param {boolean} behindObstacle - whether the creature is behind an obstacle
 * @param {boolean} takingCover - whether the creature is actively taking cover
 * @returns {number} the cover bonus to AC
 */
function getCoverBonus(behindObstacle, takingCover) {
  if (takingCover) {
    return 4;
  } else if (behindObstacle) {
    return 2;
  } else {
    return 0;
  }
}

// // Only 'Happy Testing' :-)
// const userBehindObstacle = Number(
//   prompt(`Is the creature behind an obstacle?
//     [1] Yes
//     [0] No`),
// );
// const userTakingCover = Number(
//   prompt(`Is the creature actively taking cover?
//     [1] Yes
//     [0] No`),
// );
// console.log(getCoverBonus(userBehindObstacle, userTakingCover));

/**
 * A creature's current hit points (HP) is reduced by taking damage.
 * If the damage taken is greater than or equal to double its maximum
 * HP, the creature dies instantly.
 * A creature's HP cannot go below 0 unless it is dead.
 * @param {number} maxHp - maximum hit points
 * @param {number} currentHp - current hit points
 * @param {number} damage - damage taken
 * @returns {number} -1 if the creature dies instantly
 * @returns {number} 0 if the creature's HP drops to 0 or below
 * @returns {number} the creature's remaining HP after taking damage
 */
// function getRemainingHp(maxHp, currentHp, damage) {
//   currentHp -= damage;
//   if (damage >= 2 * maxHp) {
//     return -1;
//   } else if (currentHp <= 0) {
//     return 0;
//   } else {
//     return currentHp;
//   }
// }

// // Only 'Happy Testing' :-)
// // Using responses from earlier questions
// const userDamage = Number(prompt(`How much damage was taken? Enter a number:`));
// console.log(getRemainingHp(userMaxHP, userCurrentHP, userDamage));

/**
 * All creatures can see in bright light.
 * Creatures with low-light vision can also see in dim light.
 * Creatures with darkvision can see in all light conditions.
 * @param {string} light - light condition: "bright", "dim", or "dark"
 * @param {string} vision - vision type: "average", "low-light", or "dark"
 * @returns {boolean} whether the creature can see
 */
function canSee(light, vision) {
  if (
    light === "bright" ||
    (vision === "low-light" && light === "dim") ||
    vision === "dark"
  ) {
    return true;
  } else {
    return false;
  }
}

/* another possibility: if (light === 'dim' && (vision === 'low-light' || vision === 'dark')) */

// // // Only 'Happy Testing' :-)
// const userLight =
//   prompt(`What is the light condition? Enter one of the following:
//   bright, dim, or dark`);
// const userVision =
//   prompt(`What is the creatures vision type? Enter one of the following:
//   average, low-light, or dark`);
// console.log(canSee(userLight, userVision));

/**
 * A strike deals damage if it hits, unless the strike is a critical hit,
 * in which case it deals double damage.
 * If the strike does not hit, it deals 0 damage.
 * Hint: you can use the functions you wrote above :)
 * @param {number} attack - the attack value
 * @param {number} ac - the armor class to beat
 * @param {number} damage - damage on a normal hit
 * @returns {number} damage dealt by the strike
 */
function getStrikeDamage(attack, ac, damage) {
  if (doesStrikeCrit(attack, ac)) {
    return 2 * damage;
  } else if (doesStrikeHit(attack, ac)) {
    return damage;
  } else {
    return 0;
  }
}

//test with questions from above
// console.log(getStrikeDamage(userAttack, userAc, userDamage));
