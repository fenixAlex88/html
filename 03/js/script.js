const answers = document.querySelectorAll('.answer__item');

answers.forEach((answer,_,answers) => {
  answer.addEventListener('click', (e) => {
    if (e.currentTarget.classList.contains('answer__item_active')) {
      e.currentTarget.classList.remove('answer__item_active');
    } else {
        answers.forEach((answer) => answer.classList.remove('answer__item_active'));
        e.currentTarget.classList.add('answer__item_active');
    }
  });
});
