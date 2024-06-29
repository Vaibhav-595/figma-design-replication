document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('a[href="#developmental-wonders-section"]').addEventListener('click', function (e) {
      e.preventDefault();
      document.getElementById('developmental-wonders-section').scrollIntoView({
          behavior: 'smooth'
      });
  });

  document.querySelector('a[href="#brilliant-minds-section"]').addEventListener('click', function (e) {
      e.preventDefault();
      document.getElementById('brilliant-minds-section').scrollIntoView({
          behavior: 'smooth'
      });
  });
});
