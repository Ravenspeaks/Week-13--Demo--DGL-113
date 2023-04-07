// ready(), code will run when the DOM tree is loaded.
$(function () {
  /* First dialog for a simple example*/
  // button() is a jquery widget that makes the selector look & behave like a button
  $("#dialog").dialog({
    autoOpen: false,
    modal: true,
    buttons: {
      Ok: function () {
        $(this).dialog("close");
      }
    }
  });
  $("#opener")
    .button() // treat the #opener element as a button
    .click(function () { // when the element is clicked on, open the dialog window
      $("#dialog").dialog("open");
    });

  //2nd dialog for a modal form
  // create a button and add functionality
  $("#login")
    .button() // treat the #login element as a button
    .click(function () { // when the ele is clicked, open #loginForm as a dialog window
      $("#loginForm").dialog("open");
    }); // end click

  // build dialog box and add functionality
  $("#loginForm").dialog({
    modal: true,
    autoOpen: false,
    buttons: [ // add two buttons with their respective evt handler
      {
        text: "Log in",
        click: function () {
          $(this).submit(); //first submit then close
          $(this).dialog("close");
        }
      },
      {
        text: "Cancel",
        click: function () {
          $(this).dialog("close");
        }
      }
    ],
    close: function () { // when the form is closed, clear fields
      $("#loginForm input").val("");
    }
  }); // end dialog
  $("#myaccordion").accordion();
  $("#mytabs").tabs();
}); // end ready
