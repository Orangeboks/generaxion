  $(document).ready(function () {
    $('#Modal').on('show.bs.modal', function (e) {
      var image = $(e.relatedTarget).attr('src');
      $(".img-responsive").attr("src", image);
      var button = $(e.relatedTarget)
      var dynamiskBody = button.data('body')
      var dynamiskTitle = button.data('overskrift')
      var modal = $(this)
      modal.find('.modal-body h1').text(dynamiskTitle)
      modal.find('.modal-body p').text(dynamiskBody)
    });
  });