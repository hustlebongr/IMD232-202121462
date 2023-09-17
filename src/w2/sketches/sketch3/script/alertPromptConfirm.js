alert('알고계세요 샌즈?');
let userName;
userName = prompt('엄청 어렵고 재밌는 게임의 이름은?', '샌즈');
let confirmVal = confirm(
  '정말 재밌는 게임의 이름은 ' + userName + '가 맞습니까?'
);
if (confirmVal == true) {
  alert('오 좀아는녀석인가? ' + userName + ' 엄청 어렵습니다.');
}
