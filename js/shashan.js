/*
Template Name: Sashan;
Template URI:http://sashan.com.np/
Author: Prem Prasad Khanal
Author URI: http://premkhanal.com.np/
Description: Pccims Portal. 
Version: 1.0.0
Primary use: Digital platform
*/

$winHeight = $(window).innerHeight();
$dhHeight = $('.dashboard-header').height();

$(document).ready(function () {
  /*==================================
   Dashboard menu icon
 ==================================*/
  $('.mobile-menu-icon').on('click', function (e) {
    e.preventDefault();
    $('.dashboard-sidebar').addClass('is-active');
  });

  $(function () {
    var $ul = $('.dashboard-sidebar .menu > ul');

    $ul.find('li a').click(function (e) {
      var $li = $(this).parent();

      if ($li.find('ul').length > 0) {
        e.preventDefault();

        if ($li.hasClass('is-active')) {
          $li.removeClass('is-active').find('li').removeClass('is-active');
          $li.find('ul').slideUp(400);
        } else {
          if ($li.parents('li.is-active').length == 0) {
            $ul.find('li').removeClass('is-active');
            $ul.find('ul').slideUp(400);
          } else {
            $li.parent().find('li').removeClass('is-active');
            $li.parent().find('> li ul').slideUp(400);
          }

          $li.addClass('is-active');
          $li.find('>ul').slideDown(400);
        }
      }
    });

    $('.dashboard-sidebar .menu > ul ul').each(function (i) {
      if ($(this).find('>li>ul').length > 0) {
        var paddingLeft = $(this)
          .parent()
          .parent()
          .find('>li>a')
          .css('padding-left');
        var pIntPLeft = parseInt(paddingLeft);
        var result = pIntPLeft + 20;

        $(this).find('>li>a').css('padding-left', result);
      } else {
        var paddingLeft = $(this)
          .parent()
          .parent()
          .find('>li>a')
          .css('padding-left');
        var pIntPLeft = parseInt(paddingLeft);
        var result = pIntPLeft + 20;

        $(this)
          .find('>li>a')
          .css('padding-left', result)
          .parent()
          .addClass('is-active--last');
      }
    });

    var t = ' li > ul ';

    for (var i = 1; i <= 10; i++) {
      $('.dashboard-sidebar .menu > ul > ' + t.repeat(i)).addClass(
        'ml-menu' + i
      );
    }

    var activeLi = $('li.is-active');

    if (activeLi.length) {
      opener(activeLi);
    }

    function opener(li) {
      var ul = li.closest('ul');

      if (ul.length) {
        li.addClass('is-active');
        ul.addClass('open');

        if (ul.closest('li').length) {
          opener(ul.closest('li'));
        } else {
          return false;
        }
      }
    }
  });

  // pm-select

  function pmSelect() {
    $('.pm-select').on('click', function (e) {
      e.preventDefault();
      $(this).toggleClass('show-select');
    });

    $('.pm-select li').on('click', function (e) {
      e.preventDefault();
      $(this).removeClass('is-active');
      var value = $(this).attr('data-value');
      $(this)
        .closest('.pm-select')
        .find('.selected-item')
        .addClass('is-active');
      $(this).closest('.pm-select').find('.selected-item').html(value);
    });
  }

  function pmDropdown() {
    $('.pm-dropdown').on('click', function (e) {
      e.preventDefault();
      $(this).closest('.pm-dropdown').addClass('show-dropdown');
    });
  }

  function openModal() {
    $('.is-button').on('click', function (e) {
      e.preventDefault();
      var targetId = $(this).attr('popup-link');
      $('#' + targetId).addClass('is-open');
    });
  }

  function closeModal() {
    $('.popup-footer .common-button, .close-icon').on('click', function (e) {
      e.preventDefault();
      $(this).closest('.popup').removeClass('is-open');
    });
  }

  /*====================================
          // menu-fix
          ======================================*/

  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 30) {
      $('.dashboard-header ').addClass('is-fixed', 500);
    } else {
      $('.dashboard-header ').removeClass('is-fixed', 500);
    }
  });

  $(function () {
    'use strict';
    pmSelect();
    openModal();
    closeModal();
    pmDropdown();
    showMenu();
  });
});
