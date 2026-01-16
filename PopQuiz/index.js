let score = 0;
let response1 =
  prompt(`In the song "This Old Man", what did the old man play knick knack on when he played one?
  [1] My thumb
  [2] My shoe
  [3] My knee
  Please enter a 1, 2, or 3 corresponding to your response.`);

response1 = Number(response1);
if (response1 === 1) {
  score = score + 1;
  alert(`Way to go, you got one right - This old man played one. He played knick knack on my thumb.
      You have ${score} correct out of 1 question so far.`);
} else if (response1 === 2 || response1 === 3) {
  alert(
    "Better luck on the next question. The correct answer is 1 - `My Thumb`"
  );
} else {
  alert(
    `The response should have been a 1, 2, or 3. You responded: ${response1}.
    Enter a 1, 2, or 3 on the next one.`
  );
}
// Question 2
let response2 =
  prompt(`In the song "This Old Man", what did the old man play knick knack on when he played four?
  [1] My hive
  [2] My door
  [3] My sticks
  Please enter a 1, 2, or 3 corresponding to your response.`);

response2 = Number(response2);
if (response2 === 2) {
  score = score + 1;
  alert(`Way to go, you got one right - This old man played four. He played knick knack on my door.
      You have ${score} correct out of 2 questions so far.`);
} else if (response2 === 1 || response2 === 3) {
  alert(
    "Better luck on the next question. The correct answer is 2 - `My Door`"
  );
} else {
  alert(
    `The response should have been a 1, 2, or 3. You responded: ${response2}.
    Enter a 1, 2, or 3 on the next one.`
  );
}
// Question 3
let response3 =
  prompt(`In the song "This Old Man", what did the old man play knick knack on when he played nine?
  [1] My heaven
  [2] My gate
  [3] My spine
  Please enter a 1, 2, or 3 corresponding to your response.`);

response3 = Number(response3);
if (response3 === 3) {
  score = score + 1;
  alert(`Way to go, you got one right - This old man played nine. He played knick knack on my spine.
      You have ${score} correct out of 3 questions.`);
} else if (response3 === 1 || response3 === 2) {
  alert("Sorry, you didn't get this one correct.");
} else {
  alert(
    `The response should have been a 1, 2, or 3. You responded: ${response2}.
    That was the last one.`
  );
}
if (score === 0) {
  alert(`You failed this quiz. Don't worry you can take it again!`);
} else if (score === 3) {
  alert(`You got them all right!
    This old man, he played nine,
    He played knick-knack on my spine;
    With a knick-knack paddywhack,
    Give the dog a bone,
    This old man came rolling home.`);
} else {
  alert(`You didn't get them all right, but you did get ${score} right.`);
}
