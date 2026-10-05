// テスト版: 送信せずに完了画面を表示する。本番ではフォーム送信サービス等に接続する。
(function () {
  var form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var error = document.getElementById('form-error');
    if (!form.checkValidity()) {
      error.hidden = false;
      var first = form.querySelector(':invalid');
      if (first) first.focus();
      return;
    }
    error.hidden = true;
    form.hidden = true;
    document.getElementById('thanks').hidden = false;
    window.scrollTo({ top: 0 });
  });
})();
