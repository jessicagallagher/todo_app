$(() => {
  const $toDoList = $('.things-to-do');

  $('form').on('submit', (e) => {
    e.preventDefault();
    const $userInput = $('#input-box').val();
    const $toDoDiv = $('<div>').addClass('to-do-item').html('<h3>' + $userInput + '</h3>');
    const $completedButton = $('<button>').text('COMPLETED');
    $toDoDiv.append($completedButton);
    $('#to-do-list').append($toDoDiv);
    $(e.currentTarget).trigger('reset');

    $completedButton.on('click', (e) => {
      $('#completed').append($(e.currentTarget).parent());
      $(e.currentTarget).parent().addClass('done-item');
      $(e.currentTarget).text('REMOVE').on('click', () => {
        $(e.currentTarget).parent().remove();
      });
    });
  });
});



/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// const list = [];
//
// // const renderList = () => {
// //   $('ul').empty().attr('id', 'to-do-list');
// //   list.forEach((item) => {
// //     $('ul').append('<li>' + item + '</li>')
// //   });
// // }
//
//
// const renderList = () => {
//   $('ul').empty().attr('id', 'to-do-list').attr('style', 'border-radius:1em;background-color:#E7717D;list-style-type:none;color:white;display:flex;justify-content:space-between;flex-direction:column;flex-basis:40%;margin:1em;padding:10px')
//   list.forEach((item) => {
//     $('ul').append('<li>' + item + '</li>');
//     $('li').addClass('to-do-item').attr('style', 'margin:5em;border-radius:1em;box-shadow:2px 2px 4px gray')
//   })
// }
//
//
//
//
//
// $(() => {
//   $('#submit').on('click', (e) => {
//     const $inputValue = $('#input-box').val();
//     list.push($inputValue);
//     e.preventDefault();
//
//
//     renderList();
//   })
// });
//
//
// //i spent 4 hours on this and decided that i should start from scratch.
//
// /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
// // const $toDoItem = $('<li>').addClass('to-do-item')
//
// //write a function to reset input box
// // const $toDoUl = $('<ul>')
//
// // const renderList = () => {
// //   $('ul').empty().attr('id', 'to-do-list')
// //   list.forEach((item) => {
// //     const $toDoUl = $('<ul>')
// //     $toDoUl.append('<li>' + item + '</li>')
// //     $('#to-do-list').append($toDoUl)
// //   })
// //
// // } doesn't work--does absolutely nothing
//
// // const renderList = () => {
// //   $('ul').empty();
// //   $('window').on('load', list.forEach((item) => {
// //     const $toDoUl = $('<ul>')
// //     $('#to-do-list').append($toDoUl)
// //     $toDoUl.append('<li>' + item + '</li>')
// //   })); //
// //
// // } doesn't work--creates two uls