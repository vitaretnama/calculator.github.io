function insert(num) {
  document.form.textView.value = document.form.textView.value + num;
}

function c() {
  document.form.textView.value = "";
}
function del() {
  let x = document.form.textView.value;
  document.form.textView.value = x.substring(0, x.length - 1);
}

function equal() {
  let x = document.form.textView.value;
  if (x == "") {
    alert("Masukkan Angka Terlebih Dahulu");
  }
  if (x) {
    document.form.textView.value = eval(x);
  }
}
