let gameName = prompt('정말 재밌는 게임의 이름은 무엇입니까?', '샌즈');
let isUserNameCorrect = confirm(
  '재밌는 게임의 이름이 ' + gameName + '이 맞습니까?'
);
if (isUserNameCorrect == true) {
  document.getElementById('user-name-goes-here').textContent =
    '정말 재밌습니다! ' + gameName + ' 짱!';
}
